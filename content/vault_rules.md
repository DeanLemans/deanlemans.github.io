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

## Integration Plan

(adapted [from the princes work ethics](https://youtu.be/ECGcTM_gk4s))
- become a finisher  
- make art everyday  
- it doesnt have to be perfect  
- sleep quality is absolute  
- vault mentality (record everything store it)

---

## Format and Compatibility

always use open formats (pandoc?)  
- odt instead of docx  

---

## System Philosophy

a system should be self reinforcing/defending  
it should not be 100% my responsibility for maintaining a vault structure, instead i should build a system that partially reinforces itself.

---

## Reviews and Automation

create a monthly and yearly review.

some things can be automated, such as automated spellcheck, throwing a warning when building the site when a note doesnt have a tag. but at the same time i must keep the process enjoyable.

---

## Structure and Publishing Rules

i currently use the jhony decibel for folder names, and evergreen/digital garden, and also a memex kind of structure.  
i have a public part of my site for finished work, and also a 00-raw folder for unfinished stuff.  
my site publishes notes via the 'publish: true', all notes are created with 'publish: false'.

folder structure:  
00-raw  
01-projects  
02-resources  
03-digital_garden  

always use _ for spaces.

---

## Vault Philosophy

A folder of files. A vault. A portofolio. A personal site. A digital garden. A memex.  
It is important because it complies with [file over app](https://stephango.com/file-over-app) and [A Manifesto for Preserving Content on the Web](02-resources/02_03-clippings/This%20Page%20is%20Designed%20to%20Last%20A%20Manifesto%20for%20Preserving%20Content%20on%20the%20Web.md) philosophy.  
If you want to create digital pieces that last, they must be files you can control, in opem formats that are easy to retrieve and read.  
Obsidian, Quartz, and Markdown give me that freedom.

The following is not absolute, just how i use this vault/site/notes.

---

# Folder Structure / Sorting System

## My Rules

Rules I follow:

- Only use 1 vault across everything  
- Mitigate folder usage for organization.  
- [ ] Try not to use external site for content, if possible migrate them to this site. (or at least link them)  
- Avoid non-standard Markdown and if necessary only use semantic HTML.  
- Always pluralize  tags.  
- Use internal links profusely.  

Having a [consistent style](https://stephango.com/style) collapses hundreds of possibilities into one, and gives me focus.  
For example, I always pluralize tags so I never have to wonder what to name new tags.  
Make your own style guide. You can always change your rules later.  

---

## Folders and Organization

I try to minimize my usage of folders.  
I don't want the overhead of having to consider where something should go.

+ [ ] My notes will be primarily organized using the 4 folders and tags.

This is where I write about my personal world: journal entries, essays, notes, and other personal things.  

everything except the [02.03-clippings](02-resources/02_03-clippings/index.md) folder, is written by me.

1 reference folder I use:
- **02-resources/02_03-clippings** where I save things other people wrote, mostly essays, articles, and high quality wiki pages.

1 admin folders exist so that their contents don't show up in the file navigation:
- **static_files** for images, audio, videos, PDFs, etc.

1 raw folder exists hidden in my site for more "unprofesional" you can still access it like any normal folder, its just hidden from the explorer.:
- **00-raw**

---

## Links

I try to always link the first mention of something.  

In these reference notes I capture properties, my rating, and thoughts about that thing.  
I use [Web Clipper](https://stephango.com/obsidian-web-clipper) to capture external content, as to not lose them in case of cencoring.

A heavy linking style becomes more useful as time goes on, because I can trace how ideas emerged, and the branching paths these ideas created.

---

## Pruning and Random Revisit

Pruning and randomization are how I tame the wilderness that a knowledge base can grow into.

sometimes i just decide to comb through my notes to update the content and metadata.
i have a 'modified: {{current date}}' so that i can see when i edited it last time

Throughout the day I use Obsidian's *unique note* hotkey to write individual thoughts as they come up.  
This shortcut automatically creates a note with the prefix `YYYY-MM-DD HHmm` to which I may add a title that describes the idea.

Every few weeks I review these fragments and compile them.  
I review those reviews monthly, and review the monthly reviews yearly.  
The result is a fractal web of my life that I can zoom in and out of at varying degrees of detail.  

Every few weeks I set aside time for a random note search
I use the graph at shallow depth to see related notes.  
This helps me revisit old ideas, create missing links, and find inspiration in past thoughts.  
It's also an opportunity to do maintenance, like fix formatting based on new rules in this personal style guide.

I enjoy this process.  
Doing this maintenance helps me understand my own patterns. 

---

## Publishing to the Web

This site content is written in markdown with Obsidian.  
And the site code is edited with Zed.  
I use a *static site generator* called Quartz to automatically compile my notes into a website.

For this site, I push notes from Obsidian to a GitHub repo using a git GUI.  
The notes are then automatically compiled using Github actions.  
I host my site freely on github pages and neocities with my CI workflow.  

(link to CI here)

- [ ] link to CI of site here

---

## Backup and Sync Strategy

i also mirror my site to neocities

my site repository is also mirrored on codeberg for backup

i have a local and external usb backup (with BORG BACKUP), for all of my vault and obsidian configuration

i sync my files between my phones and laptop via syncthing, i use the extra backup feature from that for well.. extra backup! (it create a backup every day, and keep that for 10 days)
