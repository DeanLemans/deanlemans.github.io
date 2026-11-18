#!/usr/bin/env python3
"""Remove ' and ’ from file/folder names in the vault and fix links to them.

Usage: python3 scripts/remove_apostrophes.py [--dry-run] [--content] [vault_dir]
  --content  also strip ' and ’ from note text (frontmatter + body).
             Fenced code blocks and `inline code` are left untouched.
Default vault_dir: content/ next to this script's parent. Skips .trash, .obsidian, Plugin data.
"""
import os, re, sys, urllib.parse

APOS = "'’"
SKIP_DIRS = {".trash", ".obsidian", "Plugin data"}  # Plugin data: plugin history, never edit
TEXT_EXT = {".md", ".canvas", ".base"}

def clean(name):
    return "".join(c for c in name if c not in APOS)

CODE_RE = re.compile(r"(```.*?```|~~~.*?~~~|`[^`\n]*`)", re.S)
SQ_YAML_RE = re.compile(r"^(\s*(?:[\w-]+:|-)\s*)'(.*)'\s*$")

def strip_plain(t):
    return "".join(c for c in t if c not in APOS)

def strip_frontmatter(fm):
    out = []
    for line in fm.split("\n"):
        m = SQ_YAML_RE.match(line)
        if m:  # 'single quoted' yaml value -> "double quoted" so it stays valid
            val = strip_plain(m.group(2).replace("''", "'"))
            line = m.group(1) + '"' + val.replace("\\", "\\\\").replace('"', '\\"') + '"'
        else:
            line = strip_plain(line)
        out.append(line)
    return "\n".join(out)

def strip_text(t):
    m = re.match(r"^---\n.*?\n---\n", t, re.S)
    fm, body = (m.group(0), t[m.end():]) if m else ("", t)
    parts = CODE_RE.split(body)
    body = "".join(p if i % 2 else strip_plain(p) for i, p in enumerate(parts))
    return strip_frontmatter(fm) + body

def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    content = "--content" in sys.argv
    dry = "--dry-run" in sys.argv
    vault = args[0] if args else os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "content")
    vault = os.path.abspath(vault)

    # 1. collect renames (bottom-up so children go before parent dirs)
    renames = []
    for d, ds, fs in os.walk(vault, topdown=False):
        rel = os.path.relpath(d, vault).split(os.sep)
        if SKIP_DIRS & set(rel):
            continue
        for n in fs + ds:
            if n in SKIP_DIRS:
                continue
            if any(c in n for c in APOS):
                new = clean(n)
                if os.path.exists(os.path.join(d, new)):
                    print(f"SKIP (target exists): {os.path.join(d, n)}")
                    continue
                renames.append((d, n, new))

    # 2. build text replacements: raw name, url-encoded name, and stem for [[wikilinks]]
    subs = []
    for _, old, new in renames:
        subs.append((old, new))
        enc_old, enc_new = urllib.parse.quote(old), urllib.parse.quote(new)
        if enc_old != old:
            subs.append((enc_old, enc_new))
        stem_old, stem_new = os.path.splitext(old)[0], os.path.splitext(new)[0]
        if stem_old != old:
            subs.append(("[[" + stem_old, "[[" + stem_new))

    # 3. rewrite links in text files
    changed = 0
    for d, ds, fs in os.walk(vault):
        ds[:] = [x for x in ds if x not in SKIP_DIRS]
        for f in fs:
            if os.path.splitext(f)[1] not in TEXT_EXT:
                continue
            p = os.path.join(d, f)
            with open(p, encoding="utf8") as fh:
                t = fh.read()
            nt = t
            for a, b in subs:
                nt = nt.replace(a, b)
            if content:
                nt = strip_text(nt)
            if nt != t:
                changed += 1
                print(f"links fixed: {os.path.relpath(p, vault)}")
                if not dry:
                    with open(p, "w", encoding="utf8") as fh:
                        fh.write(nt)

    # 4. rename
    for d, old, new in renames:
        print(f"rename: {os.path.relpath(os.path.join(d, old), vault)} -> {new}")
        if not dry:
            os.rename(os.path.join(d, old), os.path.join(d, new))

    print(f"\n{'[dry run] ' if dry else ''}{len(renames)} renamed, {changed} files with links updated")

if __name__ == "__main__":
    main()
