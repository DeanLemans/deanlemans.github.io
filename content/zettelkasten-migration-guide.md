---
id: 202501170001
title: "Zettelkasten Migration Guide"
created: 2025-01-17
modified: 2025-01-17
tags: [guide, zettelkasten, migration, workflow]
type: guide
publish: true
---

# 🔄 Zettelkasten Migration Guide

This guide will help you transition from your current folder-based system to a proper Zettelkasten knowledge management approach.

## 📋 Migration Phases

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
2. Add status tracking (planning/active/completed)
3. Extract learnings into permanent notes
4. Create connections between projects

#### Extract Permanent Notes
From your existing content, create atomic permanent notes:

**Examples:**
- From game project: `permanent/202501170300-gdscript-static-typing.md`
- From books: `permanent/202501170301-habit-stacking-technique.md`
- From gardening: `permanent/202501170302-plant-maintenance-cycles.md`

### Phase 3: Connection Building
1. **Link existing content** - Add connections between notes
2. **Create topic maps** - Build navigation structures
3. **Tag consistently** - Use standardized tagging system
4. **Cross-reference** - Link literature → permanent → project notes

## 🎯 Zettelkasten Principles to Follow

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

## 📁 Folder Usage Guide

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

## 🔧 Workflow Recommendations

### Daily Workflow
1. **Morning Review** (5 min)
   - Check Map of Maps
   - Review yesterday's fleeting notes
   - Plan note creation for today

2. **Capture** (Throughout day)
   - Quick ideas → fleeting notes
   - Reading insights → literature notes
   - Project updates → project notes

3. **Evening Process** (15 min)
   - Convert fleeting notes to permanent
   - Add connections to existing notes
   - Update project progress

### Weekly Workflow
1. **System Maintenance**
   - Archive completed fleeting notes
   - Update maps and indexes
   - Review recent connections

2. **Content Review**
   - Re-read recent permanent notes
   - Identify missing connections
   - Plan new topic maps

## 🏷️ Tagging Strategy

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

### Status Tags
- `#draft` - Work in progress
- `#review` - Needs revision
- `#complete` - Finished content

## 📈 Success Metrics

Track your Zettelkasten growth:
- **Note Count:** Aim for 1-2 permanent notes per day
- **Connection Density:** Each note should link to 3+ others
- **Review Frequency:** Weekly map updates
- **Knowledge Application:** Ideas used in projects

## 🚀 Quick Start Checklist

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

## 🔗 Related Resources

- [[000-map-of-maps]] - Your navigation hub
- [[templates/permanent-note]] - Note template
- [[templates/literature-note]] - Book template
- [[templates/project-note]] - Project template

---

> [!quote] "A Zettelkasten is not a tool for storage, but for thinking."
> — Niklas Luhmann

*Migration guide created: 2025-01-17*