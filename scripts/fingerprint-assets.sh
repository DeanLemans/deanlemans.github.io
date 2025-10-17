00_01-my site/scripts/fingerprint-assets.sh#L1-300
#!/usr/bin/env bash
#
# fingerprint-assets.sh
#
# Post-build fingerprinting script for Quartz static sites.
#
# What it does:
# - Finds CSS and JS assets under a build directory (default: "public")
# - Computes a short hash for each asset and renames the file to include the hash:
#     e.g. /css/main.css -> /css/main.<hash>.css
# - If a source map exists alongside an asset (e.g. main.js.map), it moves/renames it
#   so it remains consistent with the renamed asset and updates `sourceMappingURL`.
# - Updates references in HTML, CSS and JS files to point to the new fingerprinted names.
#
# Notes:
# - Run this after your static site is built but before uploading/deploying the files.
# - This script aims to be safe with spaces in filenames.
# - It avoids re-fingerprinting files that already look fingerprinted (8 hex chars).
#
# Usage:
#   ./fingerprint-assets.sh [build_dir] [--dry-run]
#   build_dir: directory containing the generated site (default: public)
#   --dry-run: show what would happen without renaming files
#
set -euo pipefail

# Defaults
BUILD_DIR=${1:-public}
DRY_RUN=false
if [ "${2:-}" = "--dry-run" ] || [ "${1:-}" = "--dry-run" ]; then
  DRY_RUN=true
fi

# Helpers
log() { printf '%s\n' "$*"; }
err() { printf 'ERROR: %s\n' "$*" >&2; }

if [ ! -d "$BUILD_DIR" ]; then
  err "Build directory '$BUILD_DIR' not found. Run your build first (e.g. npx quartz build)."
  exit 2
fi

# Temp files
TMP_DIR=$(mktemp -d)
MAP_FILE="$TMP_DIR/mapping.tsv"
> "$MAP_FILE"  # ensure empty

# Hash length (hex chars)
HASH_LEN=8

# Find assets to fingerprint: .css and .js (skip files already fingerprinted)
log "Scanning for .css and .js assets under '$BUILD_DIR'..."
while IFS= read -r -d '' asset; do
  fname=$(basename "$asset")
  # skip if filename already contains .<8hex>.css or .<8hex>.js
  if [[ "$fname" =~ \.[0-9a-fA-F]{8}\.(css|js)$ ]]; then
    log "Skipping already-fingerprinted: $asset"
    continue
  fi

  # compute hash of file contents (sha256) and take first HASH_LEN hex chars
  hash=$(sha256sum "$asset" | awk '{print $1}' | cut -c1-"$HASH_LEN")
  dir=$(dirname "$asset")
  ext="${asset##*.}"
  base="${asset%.*}"
  new_asset="$dir/${base##*/}.$hash.$ext"

  # Determine corresponding source map (if any)
  map_src="$asset.map"
  map_new="$new_asset.map"
  # For writing mapping, produce paths relative to BUILD_DIR without leading './'
  rel_orig=${asset#"$BUILD_DIR"/}
  rel_new=${new_asset#"$BUILD_DIR"/}

  if [ "$DRY_RUN" = true ]; then
    log "[DRY RUN] Would rename: '$rel_orig' -> '$rel_new'"
    if [ -f "$map_src" ]; then
      log "[DRY RUN] Would rename source map: '${rel_orig}.map' -> '${rel_new}.map'"
    fi
    echo -e "${rel_orig}\t${rel_new}" >> "$MAP_FILE"
    continue
  fi

  # Move asset to fingerprinted name
  log "Renaming: '$rel_orig' -> '$rel_new'"
  mv -v "$asset" "$new_asset"

  # If map exists, move and then update sourceMappingURL inside the JS file (if needed)
  if [ -f "$map_src" ]; then
    log "Renaming source map for $rel_orig"
    mv -v "$map_src" "$map_new"
    # If the asset is a JS file, update sourceMappingURL reference inside the new js file.
    if [ "$ext" = "js" ]; then
      # Replace sourceMappingURL comment (works for both //# and //@)
      # We perform an in-place substitution to point to the new map filename (basename)
      new_map_basename=$(basename "$map_new")
      # Use perl to perform a safe replacement allowing different comment styles
      perl -0777 -pe "s{(sourceMappingURL=)([^\\s'\";]+)}{\$1${new_map_basename}}g" -i "$new_asset"
    fi
  fi

  # Record mapping (rel paths)
  echo -e "${rel_orig}\t${rel_new}" >> "$MAP_FILE"
done < <(find "$BUILD_DIR" -type f \( -iname "*.css" -o -iname "*.js" \) -print0)

# If dry-run, we're done after showing planned mapping
if [ "$DRY_RUN" = true ]; then
  log ""
  log "DRY RUN mapping (orig -> new):"
  column -t -s $'\t' "$MAP_FILE" || true
  log "No files were changed (--dry-run)."
  exit 0
fi

# If mapping is empty, nothing to do
if [ ! -s "$MAP_FILE" ]; then
  log "No assets found to fingerprint. Exiting."
  rm -rf "$TMP_DIR"
  exit 0
fi

# Use Python for robust multi-file replacements:
# - Replace occurrences of both "/{orig}" and "{orig}" in HTML, CSS and JS files.
# - This handles absolute and relative references.
# - We avoid replacing occurrences in files under node_modules, .git, etc.
log "Updating references in HTML, CSS, JS files..."

python3 - <<PY
import sys, os, io, re, pathlib

build_dir = os.path.abspath("${BUILD_DIR}")
map_file = "${MAP_FILE}"

# Load mappings
mappings = []
with open(map_file, "r", encoding="utf-8") as f:
    for line in f:
        line = line.rstrip("\n")
        if not line:
            continue
        orig, new = line.split("\t")
        # Normalize slashes to forward slashes for matching inside HTML/CSS
        orig = orig.replace(os.sep, "/").lstrip("/")
        new = new.replace(os.sep, "/").lstrip("/")
        mappings.append((orig, new))

# Sort mappings by descending orig length to avoid partial replacements (e.g. 'app.css' before 'app.css.map')
mappings.sort(key=lambda x: -len(x[0]))

# File types to update (text files served to clients)
exts = (".html", ".htm", ".css", ".js")

def should_process(path):
    # skip binary-looking or irrelevant directories
    parts = pathlib.Path(path).parts
    if ".git" in parts or "node_modules" in parts:
        return False
    return path.endswith(exts)

count_files = 0
count_replacements = 0

for root, dirs, files in os.walk(build_dir):
    # skip hidden directories often irrelevant
    dirs[:] = [d for d in dirs if d not in (".git", "node_modules")]
    for fn in files:
        fp = os.path.join(root, fn)
        relp = os.path.relpath(fp, build_dir)
        if not should_process(fp):
            continue
        try:
            with open(fp, "r", encoding="utf-8") as fh:
                text = fh.read()
        except Exception:
            # skip files that can't be read as text
            continue
        orig_text = text
        for orig, new in mappings:
            # Replace both "/orig" and "orig" occurrences; use regex to avoid partial matches inside words
            # Pattern for absolute path: (/|")?orig(\?|["'\s)>]) -> preserve punctuation
            # We'll do two passes: absolute and relative
            # absolute: replace /orig -> /new
            text = re.sub(r'(/)'+re.escape(orig)+r'(?=[\?\#\"\'\)\s>])', r'/'+new, text)
            # relative: replace orig when preceded by start, quote, or whitespace
            text = re.sub(r'(?:(?<=["\'\s\(])|(?<=^))'+re.escape(orig)+r'(?=[\?\#\"\'\)\s>])', new, text)
        if text != orig_text:
            # write back
            with open(fp, "w", encoding="utf-8") as fh:
                fh.write(text)
            count_files += 1
            # crude count of replacements
            count_replacements += sum(orig_text.count(o) - text.count(o) for o, _ in mappings if orig_text.count(o) > text.count(o))
print(f"Updated {count_files} files with fingerprinted references.")
print(f"Performed ~{abs(count_replacements)} replacements.")
PY

# Final summary: show mapping
log ""
log "Fingerprinting completed. Mapping (orig -> new):"
column -t -s $'\t' "$MAP_FILE" || cat "$MAP_FILE"

log ""
log "Tip: upload/deploy the contents of '$BUILD_DIR' (not the original names) to your hosting provider."
log "Also remove any query-string cache-busting steps if you use filename fingerprinting (they become redundant)."
log "If you use GitHub Pages, you can additionally trigger Pages rebuilds via the API to shorten CDN propagation."

# Clean up
rm -rf "$TMP_DIR"
exit 0
