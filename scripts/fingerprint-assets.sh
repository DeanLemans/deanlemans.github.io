#!/usr/bin/env bash
#
# fingerprint-assets.sh (extended)
#
# Post-build fingerprinting script for Quartz static sites.
#
# What it does:
# - Finds common static assets (css, js, images, fonts) under a build directory (default: "public")
# - Computes a short hash for each asset and renames the file to include the hash:
#     e.g. /css/main.css -> /css/main.<hash>.css
# - If a source map exists alongside an asset (e.g. main.js.map), it moves/renames it
#   so it remains consistent with the renamed asset and updates `sourceMappingURL`.
# - Updates references in HTML, CSS and JS files to point to the new fingerprinted names.
#
# Notes:
# - Run this after your static site is built but before uploading/deploying the files.
# - The script is careful not to re-fingerprint filenames that already include an 8-hex hash.
# - Use the --dry-run mode (pass the first arg as --dry-run or second arg as --dry-run)
#   to preview what will be renamed without changing files.
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
if [ "${1:-}" = "--dry-run" ] || [ "${2:-}" = "--dry-run" ]; then
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

# Asset extensions to fingerprint
ASSET_EXTS=(css js png jpg jpeg gif webp svg ico bmp avif woff woff2 ttf otf eot)

# Build find expression for these extensions
FIND_EXPR=""
for ext in "${ASSET_EXTS[@]}"; do
  if [ -z "$FIND_EXPR" ]; then
    FIND_EXPR="-iname \"*.$ext\""
  else
    FIND_EXPR="$FIND_EXPR -o -iname \"*.$ext\""
  fi
done

log "Scanning for assets to fingerprint under '$BUILD_DIR'..."
# Find candidates; skip common directories that shouldn't be touched
while IFS= read -r -d '' asset; do
  fname=$(basename "$asset")
  # Skip if already fingerprinted with .<8hex> before extension (e.g. main.1a2b3c4d.css)
  if [[ "$fname" =~ \.[0-9a-fA-F]{8}\.[a-zA-Z0-9]+$ ]]; then
    log "Skipping already-fingerprinted: $asset"
    continue
  fi

  # compute hash of file contents (sha256) and take first HASH_LEN hex chars
  # Use sha256sum if available, otherwise fall back to shasum -a 256
  if command -v sha256sum >/dev/null 2>&1; then
    fullhash=$(sha256sum "$asset" | awk '{print $1}')
  else
    fullhash=$(shasum -a 256 "$asset" | awk '{print $1}')
  fi
  hash=${fullhash:0:HASH_LEN}

  dir=$(dirname "$asset")
  ext="${asset##*.}"
  base="${asset%.*}"
  new_asset="$dir/${base##*/}.$hash.$ext"

  # For source maps (only relevant to js files)
  map_src="$asset.map"
  map_new="$new_asset.map"

  # Paths relative to BUILD_DIR (used in mapping table)
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

  # Perform renaming
  log "Renaming: '$rel_orig' -> '$rel_new'"
  mv -v "$asset" "$new_asset"

  # Move source map if present and update sourceMappingURL inside JS
  if [ -f "$map_src" ]; then
    log "Renaming source map for $rel_orig"
    mv -v "$map_src" "$map_new"
    if [ "${ext,,}" = "js" ]; then
      new_map_basename=$(basename "$map_new")
      # update sourceMappingURL comment inside the js file
      # handle different comment styles
      perl -0777 -pe "s{(sourceMappingURL=)([^\\s'\";]+)}{\$1${new_map_basename}}g" -i "$new_asset" || true
    fi
  fi

  # Record mapping (rel paths)
  echo -e "${rel_orig}\t${rel_new}" >> "$MAP_FILE"
done < <(eval find "\"$BUILD_DIR\"" -type f \( $FIND_EXPR \) -not -path "*/node_modules/*" -not -path "*/.git/*" -print0)

# If dry-run, we're done after showing planned mapping
if [ "$DRY_RUN" = true ]; then
  log ""
  log "DRY RUN mapping (orig -> new):"
  column -t -s $'\t' "$MAP_FILE" || cat "$MAP_FILE"
  log ""
  log "No files were changed (--dry-run)."
  log "Run the script without --dry-run to perform actual renaming."
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
# - Also update CSS url(...) references and simple JSON or manifest files that may reference assets.
# - Avoid replacing occurrences in binary files, node_modules, or .git.
log "Updating references in HTML, CSS, JS and other text files..."

python3 - <<PY
import sys, os, re, pathlib

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
        orig = orig.replace(os.sep, "/").lstrip("/")
        new = new.replace(os.sep, "/").lstrip("/")
        mappings.append((orig, new))

# Sort by length to avoid partial replacements
mappings.sort(key=lambda x: -len(x[0]))

# File extensions to process as text for reference updates
TEXT_EXTS = (".html", ".htm", ".css", ".js", ".json", ".xml", ".svg", ".txt", ".map")

def should_process(path):
    p = pathlib.Path(path)
    parts = p.parts
    if ".git" in parts or "node_modules" in parts:
        return False
    # Only process expected text file extensions
    return p.suffix.lower() in TEXT_EXTS

count_files = 0
count_replacements = 0

for root, dirs, files in os.walk(build_dir):
    dirs[:] = [d for d in dirs if d not in (".git", "node_modules")]
    for fn in files:
        fp = os.path.join(root, fn)
        if not should_process(fp):
            continue
        try:
            with open(fp, "r", encoding="utf-8") as fh:
                text = fh.read()
        except Exception:
            continue
        orig_text = text
        for orig, new in mappings:
            # Replace occurrences in common contexts:
            # - HTML attributes: src="...", href='...'
            # - CSS url(...) references: url("..."), url('...'), url(...)
            # - Plain occurrences where token boundaries exist
            # Do absolute replacements first ("/orig" -> "/new")
            text = re.sub(r'(/)'+re.escape(orig)+r'(?=[\?\#\"\'\)\s>])', r'/'+new, text)
            # CSS url(...) absolute
            text = re.sub(r'url\(\s*([\'"]?)/'+re.escape(orig)+r'([\'"]?)\s*\)', r'url(\1/'+new+r'\2)', text)
            # Then relative / token-boundary replacements
            text = re.sub(r'(?:(?<=["\'\s\(])|(?<=^))'+re.escape(orig)+r'(?=[\?\#\"\'\)\s>])', new, text)
            # CSS url(...) relative
            text = re.sub(r'url\(\s*([\'"]?)'+re.escape(orig)+r'([\'"]?)\s*\)', r'url(\1'+new+r'\2)', text)
        if text != orig_text:
            with open(fp, "w", encoding="utf-8") as fh:
                fh.write(text)
            count_files += 1
            # approximate replacements count
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
log "Because filenames changed, caches should be bypassed for updated assets."
log "If you still see stale content after deployment, purge any intermediate CDN (Cloudflare, Fastly) or check for a service worker on the client."
log "Use --dry-run first if you want to preview changes."

# Clean up
rm -rf "$TMP_DIR"
exit 0
