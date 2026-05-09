---
title: Site Rules
tags: []
publish: true
modified: 2026-05-09
id: 01KQQV6TPBSF4Y4E9A2TMC94XT
description: vault rules, sorting system, naming rules, creating rules
created: 2026-03-17
aliases:
  - Site Rules and Vault System
---

# Site Rules

- [ ] split projects blog updates into a blog(so every time i update it the original file stays the same? also if split i people think im active more because new file but its just the same activity but more standerd for visitor to consume) really need to work this shit out

> [!NOTE] Alternative titles
> - Vault System
> - My general vault system
> - Linting rules
> - how to format

> this vault is written as a legacy of mine(?),
> therefore it should be future proof.

---

## 1. Creation System

(adapted [from the princes work ethics](https://youtu.be/ECGcTM_gk4s))
- become a finisher
- make art everyday
- it doesn't have to be perfect
- sleep quality is absolute
- vault mentality (record everything, store it)
- design workflows that remain useful and understandable decades from now

---

## 2. Format and Compatibility

- Always use open formats (pandoc?)
- Prefer `.odt` over `.docx`
- Maintain forward-compatible formats to avoid vendor lock-in
- Keep metadata in human-readable form

---

## 3. System Philosophy

- System should be self-reinforcing/defending
- Minimize uneeded maintence; vault should maintain itself wherever possible
- Structure for scalability multiple projects, multiple contributors, long-term reference

---

## 4. Reviews and Automation

- Schedule monthly and yearly reviews for both content and structure
- [ ] Automate repetitive tasks;
  - [ ] spellcheck
  - [ ] tag or category validation
  - [ ] unresolved link notifications
- enjoy the doing, dont make it a burden

---

## 5. Structure and Publishing Rules

**Publishing rules;**
  - `publish: true` -> accessible in site

**Folder Structure**
- `00-raw`
- `01-projects`
- `02-digital_garden`
- `static_files`

- Always use underscores `_` for spaces in filenames
- Include index.md in each folder for context and information.
- follow the [backup_rule](<./00-raw/my-references/backup_rule.md>)

---

## 6. Vault Philosophy

- A folder of files. A vault. A portfolio. A digital garden. A memex.
- Jhony Decibel naming scheme + evergreen/digital garden + memex-style vault
- Public site contains polished work; [00-raw](<./00-raw/index.md>) contains drafts and experimental notes
- Aligns with [file over app](https://stephango.com/file-over-app) and [Manifesto - Preserving Content on the Web](<./00-raw/clippings/This Page is Designed to Last A Manifesto for Preserving Content on the Web.md>).
- Store files in open and readable formats.
- Use consistent naming and metadata for search-ability and discoverbility.(proper YAML data, good tags, etc)

---

# 7. Folder Structure / Sorting System

### 7.1 Core Rules

- Use a single vault to centralize content
- Reduce folder complexity to simplify navigation and maintainability
- [ ] Migrate external content locally or at least link it
- [ ] when linking an external thing, use an archived version
- written in markdown and sometimes embedded html.(html mostly for foldable stuff)
- Heavy use of internal links for interconnectivity (i dont really do this)

---

### 7.2 Folder Organization

**Reference Folder**
- `00-raw/clippings` external content (essays, articles, wiki pages)

**Admin Folder
- `static_files` images, audio, template, PDFs, etc.

**Raw Folder (hidden)**
- `00-raw` 'unprofesional' stuff, work folder, experiments

---

### 7.3 Links and Metadata

- Use [Web Clipper](https://stephango.com/obsidian-web-clipper) for importing webpages.
- Include date created, date modified, title for all notes

---

### 7.4 Pruning

- `modified: {{date}}` to track edits

**Pruning**
- (bi?)monthish review, yearly meta-review
- Preserves a fractal web of thought for analysis and historical reference?

**Random Note Exploration**
- Graph view exploration to find related notes
- Reconnect older ideas to current projects
- Opportunity for maintenance;
	- style, metadata, internal links, and other shi

- [ ] Include script to check for broken links and missing metadata

---

## 8. Publishing to Web

- Markdown content edited in Obsidian, site code in Zed
- Quartz static site generator converts Markdown to HTML
- Deployment via GitHub Actions.
- Hosting; GitHub Pages, Neocities. [CI/CD available here](https://github.com/DeanLemans/deanlemans.github.io/tree/v5/.github/workflows)

---

## 9. fallback stuff

- [ ] Local + external USB backup via BORG BACKUP
- [ ] Local USB backup via BORG BACKUP
- [ ] Include versioning and 256-hash to confirm vault integrity to future-proof against edits, deletions, or cencoring.

