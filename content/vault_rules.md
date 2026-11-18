---
unlisted: false
title: Site Rules
tags: []
publish: true
modified: 2026-11-18
id: kk3hvayboqh3zi7m5o0w2e7lg850wo
description: vault rules, sorting system, naming rules, creating rules
created: 2026-03-17
aliases:
  - Vault rules
  - style
  - Site Rules and Vault System
---

# Site Rules

- [ ] I need an automatic way to create aliases for those unique IDs

> [!NOTE] Alternative titles
> - Vault System
> - My general vault system
> - Linting rules
> - how to format
> - style

> this vault is written as a legacy of mine(?),
> therefore it should be future-proof.

# To integrate

---

## 1. Creation System

(adapted [from the Prince's work ethic](https://youtu.be/ECGcTM_gk4s))
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
- Minimize unneeded maintenance; vault should maintain itself wherever possible
- Structure for scalability: multiple projects, multiple contributors, long-term reference

---

## 4. Reviews and Automation

- Schedule monthly and yearly reviews for both content and structure
- [ ] Automate repetitive tasks;
  - [ ] spellcheck
  - [ ] tag or category validation
  - [ ] unresolved link notifications
- [ ] Include script to check for broken links and missing metadata
- enjoy the doing, don't make it a burden

**Pruning**
- (bi?)monthly review, yearly meta-review
- Preserves a fractal web of thought for analysis and historical reference?

**Random Note Exploration**
- Graph view exploration to find related notes
- Reconnect older ideas to current projects
- Opportunity for maintenance;
	- style, metadata, internal links, and other shit

---

## 5. Structure and Publishing Rules

**Publishing rules;**
  - `publish: true` -> accessible in site

**Folder Structure**
- [`00-raw`](<./00-raw/index.md>)
	- **Raw Folder (hidden)** 'unprofessional' stuff, work folder, experiments
	- [`00-raw/00_00-archive`](<./00-raw/00_00-archive/index.md>) **Reference Folder** external content (essays, articles, wiki pages)
- [`01-garden_of_learning`](<./01-garden_of_learning/index.md>)
- [`02-digital_garden`](<./02-digital_garden/index.md>)
- `03-blog`
- `static_files`
	- **Admin Folder** images, audio, template, PDFs, etc.
- Always use underscores `_` for spaces in filenames
- Include index.md in each folder for context and information.

---

## 6. Vault Philosophy

- A folder of files. A vault. A portfolio. A digital garden. A memex.
- Jhony Decibel naming scheme + evergreen/digital garden + memex-style vault
- Public site contains polished work; [00-raw](<./00-raw/index.md>) contains drafts and experimental notes
- Aligns with [file over app](https://stephango.com/file-over-app) and [Manifesto - Preserving Content on the Web](<./00-raw/00_00-archive/This_Page_is_Designed_to_Last_A_Manifesto_for_Preserving_Content_on_the_Web.md>).
- Use consistent naming and metadata for search-ability and discoverability. (proper YAML data, good tags, etc)

---

# 7. Folder Structure / Sorting System

### 7.1 Core Rules

- Use a single vault to centralize content
- Reduce folder complexity to simplify navigation and maintainability
- [ ] Migrate external content locally or at least link it
- [ ] when linking an external thing, use an archived version
- written in markdown and sometimes embedded html. (html mostly for foldable stuff)
- Heavy use of internal links for interconnectivity (I don't really do this) [Backlinks stuff](<./00-raw/notes/Backlinks_stuff_i_need_to_split_eventually.md>)

---

### 7.2 Links and Metadata

- Use [Web Clipper](https://stephango.com/obsidian-web-clipper) for importing webpages.
- Include date created, date modified, title for all notes
- `modified: {{date}}` to track edits

---

## 8. Publishing to Web

- [Colophon](<./colophon.md>)

---

## 9. Fallback stuff

- follow the [Backup rule](<./00-raw/notes/backup_rule.md>)
- [ ] Local + external USB backup via BORG BACKUP
- [ ] Local USB backup via BORG BACKUP
- [ ] Include versioning and 256-hash to confirm vault integrity to future-proof against edits, deletions, or censoring.

---

### See also

- [Note-taking MOC](<./00-raw/MOC/note_taking_moc.md>)
- [My lifesycle of notes](<./00-raw/notes/my_lifesycle_of_notes.md>)
- [PKM brainstorm](<./00-raw/notes/PKM_brainstorm.md>)
- [Atomic permanent zettel](<./00-raw/notes/atomic_permanent_zettel.md>)
- [Dont be wikipedia](<./00-raw/notes/dont_be_wikipedia.md>)
- [Dont be a hoarder](<./00-raw/notes/dont_be_a_hoarder-archivist_fallacy-collectors_fallacy.md>)
- [Guide for future blog](<./00-raw/notes/guide_for_future_blog_i_havnt_even_written_yet.md>)
- [Colophon](<./colophon.md>)
