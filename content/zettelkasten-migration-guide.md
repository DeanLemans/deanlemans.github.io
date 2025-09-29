---
{"publish":true,"title":"Zettelkasten Migration Guide","created":"2025-09-28T03:29:30.491+01:00","modified":"2025-09-29T03:33:15.048+01:00","published":"2025-09-29T03:33:15.048+01:00","tags":["zettelkasten","migration","workflow"],"cssclasses":""}
---


# Zettelkasten Migration Guide

This guide will help you transition from your current folder-based system to a proper Zettelkasten knowledge management approach.

## Migration Phases

### Phase 1: Setup New Structure ✅

- [x] Created new folder structure
- [x] Created note templates
- [x] Set up Map of Maps
- [ ] Update Quartz config for new structure

### Phase 2: Content Migration

#### Books → Literature Notes

Move your book notes from `books/` to `literature/` with enhanced structure:

**Current:** `books/Atomic Habits.md`  
**New:** `literature/202501170100-atomic-habits-clear.md`

**Migration Steps:**
1. Add unique ID (timestamp format: YYYYMMDDHHMM)
2. Enhance frontmatter with literature template
3. Add summary, key takeaways, and connections
4. Link to related permanent notes

#### Projects → Project Notes

Transform project folders into structured project notes:

**Current:** 
- `Current_Projects/software verdieping game.md`
- `Finished_Projects/godot-platformer.md`

**New:**
- `project/202501170200-software-verdieping-game.md`
- `project/202501170201-godot-platformer-completed.md`

**Migration Steps:**
1. Use project template structure
2. Extract learnings into permanent notes
3. Create connections between projects

#### Extract Permanent Notes

From your existing content, create atomic permanent notes:

**Examples:**
- From game project: `permanent/202501170300-gdscript-static-typing.md`
- From books: `permanent/202501170301-habit-stacking-technique.md`
- From gardening: `permanent/202501170302-plant-maintenance-cycles.md`

### Phase 3: Connection Building

1. **Link existing content** - Add connections between notes
2. **Tag consistently** - Use standardized tagging system
3. **Cross-reference** - Link literature → permanent → project notes

## Zettelkasten Principles to Follow

### 1. Atomic Notes

Each note should contain ONE idea that can stand alone.

**Bad:** "Game Development and Programming Tips"  
**Good:** "State Machines Improve Code Maintainability"

### 2. Unique IDs

Use timestamp-based IDs: `YYYYMMDDHHMM`

**Example:** `202501170330` for a note created Jan 17, 2025 at 3:30 AM

### 3. Link Everything

Every note should connect to at least 2 other notes.

**Connection Types:**
- **Builds on:** This idea extends another concept
- **Contradicts:** This challenges existing thinking
- **Examples:** This illustrates the concept
- **Applications:** This shows practical use

### 4. Regular Review

- **Daily:** Process fleeting notes
- **Weekly:** Review recent permanent notes
- **Monthly:** Update maps and connections

## Folder Usage Guide

### `permanent/` - Your Core Knowledge

- Atomic ideas and insights
- Timeless concepts
- Cross-disciplinary connections
- Format: `YYYYMMDDHHMM-descriptive-title.md`

### `literature/` - Source Material

- Book summaries and reviews
- Article notes
- External content synthesis
- Format: `YYYYMMDDHHMM-title-author.md`

### `project/` - Work in Progress

- Current and completed projects
- Learning logs
- Technical documentation
- Format: `YYYYMMDDHHMM-project-name.md`

### `fleeting/` - Quick Capture

- Temporary notes for processing
- Random thoughts and ideas
- Meeting notes
- Move to permanent within 1 week

### `maps/` - Navigation

- Topic overviews
- Index notes
- Structural organization
- Entry points for exploration

### `archive/` - Historical

- Outdated information
- Completed one-time notes
- Superseded content

## Tagging Strategy

### Core Tags

- `#concept` - Abstract ideas
- `#tool` - Software, frameworks, utilities
- `#technique` - Methods and approaches
- `#principle` - Fundamental rules
- `#example` - Specific instances
- `#question` - Open inquiries

### Domain Tags

- `#gamedev` - Game development
- `#programming` - Software development
- `#design` - UI/UX, game design
- `#business` - Freelancing, career
- `#learning` - Education, skills
- `#personal` - Life, habits, growth

## Success Metrics

Track your Zettelkasten growth:
- **Connection Density:** Each note should link to 3+ others
- **Knowledge Application:** Ideas used in projects

## Quick Start Checklist

- [ ] Read this guide completely
- [ ] Choose 5 existing notes to migrate first
- [ ] Create your first permanent note using template
- [ ] Link 3 notes together
- [ ] Update Map of Maps with new content
- [ ] Set up daily/weekly review schedule
- [ ] Install Obsidian plugins (if needed):
  - [ ] Templater (for templates)
  - [ ] Graph Analysis (for connections)
  - [ ] Tag Wrangler (for tag management)

## Related Resources

- [map-of-maps](<./maps/map-of-maps.md>) - Your navigation hub
- [permanent-note](<./assets/templates/permanent-note.md>) - Note template
- [literature-note](<./assets/templates/literature-note.md>) - Book template
- [project-note](<./assets/templates/project-note.md>) - Project template

---

> [!quote] "A Zettelkasten is not a tool for storage, but for thinking."  
> — Niklas Luhmann
