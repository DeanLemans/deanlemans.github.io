const fs = require("fs")
const path = require("path")

// Convert emoji character to hex code point (same logic as emoji.ts)
const U200D = String.fromCharCode(8205)
const UFE0Fg = /\uFE0F/g

function getIconCode(char) {
  return toCodePoint(char.indexOf(U200D) < 0 ? char.replace(UFE0Fg, "") : char)
}

function toCodePoint(unicodeSurrogates) {
  const r = []
  let c = 0,
    p = 0,
    i = 0

  while (i < unicodeSurrogates.length) {
    c = unicodeSurrogates.charCodeAt(i++)
    if (p) {
      r.push((65536 + ((p - 55296) << 10) + (c - 56320)).toString(16))
      p = 0
    } else if (55296 <= c && c <= 56319) {
      p = c
    } else {
      r.push(c.toString(16))
    }
  }
  return r.join("-")
}

// Regex to match emoji characters
const emojiRegex =
  /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2300}-\u{23FF}\u{2B50}\u{2934}-\u{2935}\u{3030}\u{3297}\u{3299}\u{00A9}\u{00AE}\u{203C}\u{2049}\u{20E3}\u{2122}\u{2139}\u{2194}-\u{2199}\u{21A9}-\u{21AA}\u{231A}-\u{231B}\u{2328}\u{23CF}\u{23E9}-\u{23F3}\u{23F8}-\u{23FA}\u{24C2}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2600}-\u{2604}\u{260E}\u{2611}\u{2614}-\u{2615}\u{2618}\u{261D}\u{2620}\u{2622}-\u{2623}\u{2626}\u{262A}\u{262E}-\u{262F}\u{2638}-\u{263A}\u{2640}\u{2642}\u{2648}-\u{2653}\u{2660}\u{2663}\u{2665}-\u{2666}\u{2668}\u{267B}\u{267E}-\u{267F}\u{2692}-\u{2697}\u{2699}\u{269B}-\u{269C}\u{26A0}-\u{26A1}\u{26AA}-\u{26AB}\u{26B0}-\u{26B1}\u{26BD}-\u{26BE}\u{26C4}-\u{26C5}\u{26C8}\u{26CE}-\u{26CF}\u{26D1}\u{26D3}-\u{26D4}\u{26E9}-\u{26EA}\u{26F0}-\u{26F5}\u{26F7}-\u{26FA}\u{26FD}\u{2702}\u{2705}\u{2708}-\u{270D}\u{270F}\u{2712}\u{2714}\u{2716}\u{271D}\u{2721}\u{2728}\u{2733}-\u{2734}\u{2744}\u{2747}\u{274C}\u{274E}\u{2753}-\u{2755}\u{2757}\u{2763}-\u{2764}\u{2795}-\u{2797}\u{27A1}\u{27B0}\u{27BF}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{2B50}\u{2B55}\u{3030}\u{303D}\u{3297}\u{3299}]/gu

function optimizeEmojimap(options = {}) {
  const { quiet = false, projectRoot = __dirname } = options

  // Read the original emojimap
  const emojimapPath = path.join(projectRoot, "quartz", "util", "emojimap.json")
  const backupPath = path.join(projectRoot, "quartz", "util", "emojimap.json.backup")

  // Create backup if it doesn't exist
  if (!fs.existsSync(backupPath)) {
    if (fs.existsSync(emojimapPath)) {
      fs.copyFileSync(emojimapPath, backupPath)
    }
  }

  // Read from backup if it exists, otherwise from main file
  const sourceFile = fs.existsSync(backupPath) ? backupPath : emojimapPath
  const emojimap = JSON.parse(fs.readFileSync(sourceFile, "utf-8"))

  // Sets to store used code points and names
  const usedCodePoints = new Set()
  const usedNames = new Set()

  // Function to recursively scan directory for markdown files
  function scanDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        // Skip node_modules, .git, and hidden directories
        if (entry.name === "node_modules" || entry.name === ".git" || entry.name.startsWith(".")) {
          continue
        }
        scanDirectory(fullPath)
      } else if (entry.isFile() && (entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))) {
        scanFileForEmojis(fullPath)
      }
    }
  }

  // Function to find emoji characters in a file
  function scanFileForEmojis(filePath) {
    const content = fs.readFileSync(filePath, "utf-8")
    const matches = content.match(emojiRegex)

    if (matches) {
      for (const emoji of matches) {
        const codePoint = getIconCode(emoji).toUpperCase()

        // Check if this code point exists in the emojimap
        if (emojimap.codePointToName && emojimap.codePointToName[codePoint]) {
          usedCodePoints.add(codePoint)
          const name = emojimap.codePointToName[codePoint]
          usedNames.add(name)
        }
      }
    }
  }

  // Scan the content directory
  const contentDir = path.join(projectRoot, "content")
  scanDirectory(contentDir)

  // Create optimized emojimap with only used emojis
  const optimizedEmojimap = {
    codePointToName: {},
    nameToBase64: {},
  }

  // Add only the used code points and names
  for (const codePoint of usedCodePoints) {
    optimizedEmojimap.codePointToName[codePoint] = emojimap.codePointToName[codePoint]
  }

  for (const name of usedNames) {
    optimizedEmojimap.nameToBase64[name] = emojimap.nameToBase64[name]
  }

  // Write the optimized emojimap
  fs.writeFileSync(emojimapPath, JSON.stringify(optimizedEmojimap, null, 2), "utf-8")

  const newSize = fs.statSync(emojimapPath).size / 1024
  const originalSize = fs.statSync(sourceFile).size / 1024
  const savedSize = originalSize - newSize
  const percentReduction = ((savedSize / originalSize) * 100).toFixed(2)

  if (!quiet) {
    console.log(
      `✅ Optimized: ${usedCodePoints.size} emojis, saved ${savedSize.toFixed(2)} KB (${percentReduction}%)`,
    )
  }

  return {
    originalSize,
    newSize,
    savedSize,
    percentReduction,
    usedCodePoints: usedCodePoints.size,
  }
}

// If run directly (not imported)
if (require.main === module) {
  console.log("🔍 Optimizing emojimap...\n")

  const result = optimizeEmojimap({ quiet: false })

  console.log(`\n✨ Complete! ${result.usedCodePoints} emojis, ${result.newSize.toFixed(2)} KB`)
  console.log(`   Saved ${result.savedSize.toFixed(2)} KB (${result.percentReduction}% reduction)`)
}

module.exports = { optimizeEmojimap }
