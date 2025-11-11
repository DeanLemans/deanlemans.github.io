---
publish: true
tags:
  - exclude
title: Site Rules
description: vault rules, sorting system, naming rules, creating rules
aliases:
  - site_rules
  - vault_rules
---
# Site Rules and Vault System

currently being rewritten!

---

## 1. Integration Plan

(adapted [from the princes work ethics](https://youtu.be/ECGcTM_gk4s))
- become a finisher  
- make art everyday  
- it doesn't have to be perfect  
- sleep quality is absolute  
- vault mentality (record everything, store it)

---

## 2. Format and Compatibility

- Always use open formats (pandoc?)  
- Prefer `.odt` instead of `.docx`

---

## 3. System Philosophy

- A system should be self-reinforcing and self-defending.  
- It should not be 100% my responsibility for maintaining a vault structure; instead, I should build a system that partially reinforces itself.

---

## 4. Reviews and Automation

- Create a monthly and yearly review cycle.  
- Some tasks can be automated: automated spellcheck, warnings when notes lack tags, etc.  
- enjoyment in the process.

---

## 5. Structure and Publishing Rules

- I currently use the Jhony Decibel naming scheme, an evergreen/digital garden system, and a memex-style structure.  
- Public site contains finished work; `00-raw` folder contains unfinished work.  
- Notes are published using `publish: true`; drafts remain `publish: false`.

**Folder Structure**  
- `00-raw`  
- `01-projects`  
- `02-resources`  
- `03-digital_garden`  

- Always use underscores _ for spaces in file and folder names.

---

## 6. Vault Philosophy

- A folder of files. A vault. A portfolio. A personal site. A digital garden. A memex.  
- Aligns with [file over app](https://stephango.com/file-over-app) and [A Manifesto for Preserving Content on the Web](02-resources/02_03-clippings/This%20Page%20is%20Designed%20to%20Last%20A%20Manifesto%20for%20Preserving%20Content%20on%20the%20Web.md).  
- Files must be in open formats that are easy to retrieve and read.  
- Tools: Obsidian, Quartz, Markdown.

*Note: This workflow is not absolute, but reflects my personal approach.*

---

# 7. Folder Structure / Sorting System

### 7.1 My Rules

- Only use one vault across everything.  
- Minimize folder usage to reduce overhead.  
- [ ] Migrate external content where possible, or at least link it.  
- Avoid non-standard Markdown; use semantic HTML if necessary.  
- Always pluralize tags.  
- Use internal links extensively.  

- Consistent style collapses hundreds of possibilities into a single decision path.  
- Make a personal style guide; it can evolve over time.

---

### 7.2 Folders and Organization

- Minimize folder usage to reduce decision overhead.  
- Notes are primarily organized using the 4 main folders + tags.  

**Reference Folder**  
- `02-resources/02_03-clippings` — saves external essays, articles, and high-quality wiki pages.

**Admin Folder (hidden in navigation)**  
- `static_files` — images, audio, videos, PDFs, etc.

**Raw Folder (hidden but accessible)**  
- `00-raw` — unpolished or unfinished notes.

---

### 7.3 Links

- Always link the first mention of a concept.  
- Capture properties, ratings, and thoughts in reference notes.  
- Use [Web Clipper](https://stephango.com/obsidian-web-clipper) to preserve external content.  
- Heavy linking helps trace idea evolution and relationships over time.

---

### 7.4 Pruning and Random Revisit

- Pruning + randomization tame the growth of a knowledge base.  
- Occasionally comb through notes to update content and metadata.  
- Use `modified: {{current date}}` to track edits.

**Fractal Journaling**  
- Use Obsidian’s *unique note* hotkey to log individual thoughts.  
- Notes automatically receive `YYYY-MM-DD HHmm` prefixes; titles describe content.  
- Review fragments weekly, compile salient points, review monthly, and yearly.  
- Creates a fractal web of life for tracing thought evolution.

**Random Note Exploration**  
- Use the graph view to discover related notes.  
- Helps revisit ideas, create links, inspire new insights.  
- Opportunity for maintenance: formatting, metadata, and style guide updates.

---

## 8. Publishing to the Web

- Notes are written in Markdown with Obsidian; site code edited in Zed.  
- Quartz static site generator compiles Markdown into HTML.  
- Deployment: push notes to GitHub via GUI, compile with GitHub Actions.  
- Hosting: GitHub Pages and Neocities, using CI workflow.

- [ ] Link to CI workflow here

---

## 9. Backup and Sync Strategy

- Mirror site to Neocities.  
- Repository mirrored on Codeberg for backup.  
- Local + external USB backups via BORG BACKUP for all vault + Obsidian configs.  
- Sync files across devices via Syncthing; extra backup keeps 10 days of history.  
