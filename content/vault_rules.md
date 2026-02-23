---
publish: true
tags:
  - exclude
title: Site Rules
description: vault rules, sorting system, naming rules, creating rules
aliases:
  - Site Rules
  - site_rules
  - Vault Rules
  - vault_rules
modified: 2026-02-17
---

# Site Rules and Vault System

> [!note] note
> this vault is written as a legacy of mine,
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
- Minimize overhead; vault should maintain itself wherever possible
- Structure for scalability: multiple projects, multiple contributors, long-term reference
- Include versioning and 256-hash to confirm vault integrity to future-proof against edits, deletions, or cencoring.

---

## 4. Reviews and Automation

- Schedule monthly and yearly reviews for both content and structure
- [ ] Automate repetitive tasks:
  - [ ] spellcheck
  - [ ] tag or category validation
  - [ ] unresolved link notifications
- enjoy the doing, dont make it a burden

---

## 5. Structure and Publishing Rules

- Jhony Decibel naming scheme + evergreen/digital garden + memex-style vault?
- Public site contains polished work; [00-raw](00-raw/index.md) contains drafts and experimental notes
- Publishing rules:
  - `publish: true` → accessible in site

**Folder Structure**
- `00-raw`
- `01-projects`
- `02-library`
- `03-digital_garden`

- Always use underscores `_` for spaces
- Include index.md in each folder for context and information.

---

## 6. Vault Philosophy

- A folder of files. A vault. A portfolio. A digital garden. A memex.
- Aligns with [file over app](https://stephango.com/file-over-app) and [A Manifesto for Preserving Content on the Web](00-raw/clippings/This%20Page%20is%20Designed%20to%20Last%20A%20Manifesto%20for%20Preserving%20Content%20on%20the%20Web.md).
- Store files in open and readable formats.
- Use consistent naming and metadata for search-ability and discoverbility.

---

# 7. Folder Structure / Sorting System

### 7.1 Core Rules

- Use a single vault to centralize content
- Reduce folder complexity to simplify navigation and maintainability
- [ ] Migrate external content locally or at least link it
- [ ] when linking an external thing, use an archived version
- written in standard markdown and sometimes embedded html.
- Always pluririze tags
- Heavy use of internal links for interconnectivity

---

### 7.2 Folder Organization

**Reference Folder**
- `00-raw/clippings` — external content (essays, articles, high-quality wiki pages)

**Admin Folder (hidden in navigation)**
- `static_files` — images, audio, template, PDFs, etc.

**Raw Folder (hidden, accessible)**
- `00-raw` — 'unprofesional' stuff, work folder, experiments

---

### 7.3 Links and Metadata

- Capture properties, ratings, and notes in reference files
- Use [Web Clipper](https://stephango.com/obsidian-web-clipper) for external material
- Include timestamps or revision history for all notes
- [ ] Maintain consistent frontmatter (tags and modified date)

---

### 7.4 Pruning

- `modified: {{date}}` to track edits

**Pruning**
- Use Obsidian's *unique note* hotkey to log thoughts
- monthly review, yearly meta-review
- Preserves a fractal web of thought for analysis and historical reference

**Random Note Exploration**
- Graph view exploration to find related notes
- Reconnect older ideas to current projects
- Opportunity for maintenance: style, metadata, internal links

- [ ] Include script to check for broken links and missing metadata

---

## 8. Publishing to the Web

- Markdown content edited in Obsidian, site code in Zed
- Quartz static site generator converts Markdown to HTML
- Deployment via GitHub GUI + GitHub Actions
- Hosting: GitHub Pages, Neocities ([CI/CD available here](https://github.com/DeanLemans/deanlemans.github.io/tree/v4/.github/workflows))

- [ ] archive site via something like waybackmachine

---

## 9. fallback stuff

- [ ] Mirror site on Neocities
- [x] Mirror site on Nekoweb ✅ 2026-02-17
- [x] Repository mirrored on Codeberg ✅ 2026-02-17
- [ ] Local + external USB backup via BORG BACKUP
- [ ] Local USB backup via BORG BACKUP
- [x] Sync across devices with Syncthing ✅ 2026-02-17
- [x] Maintain rolling backups for at least 10 days ✅ 2026-02-17
- [ ] validate backups for via hash

