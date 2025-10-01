# Emoji Optimization

This project includes automatic emoji optimization to reduce bundle size significantly.

## What It Does

The `optimize-emojimap.cjs` script automatically scans your content folder for emoji characters and creates an optimized version of the emoji map that only includes the emojis you actually use.

### Results

- **Original emojimap size:** ~15 MB (3,790+ emojis)
- **Optimized size:** Varies based on usage (typically 9-15 KB)
- **Savings:** ~99.9% reduction in file size

## How It Works

1. **Scans your content:** The script recursively scans all `.md` and `.mdx` files in the `content` folder
2. **Detects emojis:** It finds actual emoji characters (like 👋, 🚀, ☝️) in your markdown
3. **Converts to code points:** Each emoji is converted to its Unicode code point (e.g., 👋 becomes `1F44B`)
4. **Creates optimized map:** A new emojimap.json is generated with only the emojis you use
5. **Backs up original:** The first time it runs, it creates `emojimap.json.backup`

## Automatic Integration

The optimization runs **automatically before every build**. When you run:

```bash
npx quartz build
```

The script will:
1. Scan your content for emojis
2. Update the emojimap with only used emojis
3. Continue with the normal build process

This means you never have to worry about manually optimizing - it stays in sync with your content automatically!

## Manual Usage

You can also run the optimization manually:

```bash
node optimize-emojimap.cjs
```

This will show detailed output about what was optimized.

## Where Emojis Are Used

The emojimap is used by Quartz to render emojis in **Open Graph images** (the preview images when you share links on social media). Emojis in your page titles and descriptions will appear in these generated images.

## Restoring the Full Emojimap

If you ever need all emojis available (for example, during development), restore the backup:

```bash
node -e "require('fs').copyFileSync('quartz/util/emojimap.json.backup','quartz/util/emojimap.json')"
```

Then the next build will re-optimize it based on your current content.

## Technical Details

- **Emoji detection:** Uses comprehensive Unicode regex to match emoji characters
- **Code point conversion:** Uses the same logic as Quartz's `emoji.ts` for consistency
- **Structure:** Maintains the original `{ codePointToName: {...}, nameToBase64: {...} }` format
- **Safe:** Always creates a backup before the first optimization

## Performance Impact

- **Build time:** Adds ~100-500ms to build time (scanning content)
- **Bundle size:** Reduces output bundle by ~15 MB
- **Runtime:** No impact - emojis load exactly the same way

## Notes

- The optimization is **safe** - if it fails for any reason, the build continues normally
- Only actual emoji **characters** are detected (not emoji shortcodes like `:rocket:`)
- The backup file (`emojimap.json.backup`) should be committed to git to preserve the full emoji set