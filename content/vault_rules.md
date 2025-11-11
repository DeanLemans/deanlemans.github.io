---
publish: true
tags:
  - exclude
title: Site Rules
description: vault rules, sorting system, naming rules, creating rules
---

currently being rewritten!


---

to be integrated:
(adapted [from the princes work ethics](https://youtu.be/ECGcTM_gk4s))

work fast
become a finisher
make art everyday 
it doesnt have to be perfect
sleep
vault mentality(record everything store it)

always use open formats (pandoc?)
- odt instead of docx


a system should be self reinforcing/defending
it should not be 100% my responsibility for maintaining a vault structure, instead i should build a system that partially reinforces itself.


create a monthly and yearly review.

some things can be automated, such as automated spellcheck, throwing a warning when building the site when a note doesnt have a tag. but at the same time i must keep the process enjoyable

i currently use the jhony decibel for folder names, and evergreen/digital garden, and also a memex kind of structure, i have a public part of my site for finished work, and also a 00-raw folder for unfinished stuff, my site publishes notes via the 'publish: true', all notes are created with 'publish: false'

---

A folder of files. A vault. A portofolio. A personal site. A digital garden. A memex. It is important because it complies with [file over app](https://stephango.com/file-over-app) philosophy. If you want to create digital pieces that last, they must be files you can control, in opem formats that are easy to retrieve and read. Obsidian, Quartz, and Markdown give me that freedom.

The following is not absolute, just how i use this vault/site/notes.

# folder stucture/sorting system(should i keep the raw folder hidden here?)

## My Rules

Rules I follow:

- Only use 1 vault across everything
- Mitigate folder usage for organization.
- [ ] Try not to use external site for content, if possible migrate them to this site. (or at least link them)
- Avoid non-standard Markdown and if necessary only use semantic HTML.
- Always pluralize categories and tags.
- Use internal links profusely.

Having a [consistent style](https://stephango.com/style) collapses hundreds of posibilities into one, and gives me focus. For example, I always pluralize tags so I never have to wonder what to name new tags. Make your own style guide. You can always change your rules later.
[A Manifesto for Preserving Content on the Web](02-resources/02_03-clippings/This%20Page%20is%20Designed%20to%20Last%20A%20Manifesto%20for%20Preserving%20Content%20on%20the%20Web.md)

## Folders and Organization

I try to minimize my usage of folders  
I avoid folders because many of my entries belong to more than one area of thought.  
I don't want the overhead of having to consider where something should go.

+ [ ] My notes will be primarily organized using the `categories`and tags.


This where I write about my personal world: journal entries, essays, notes, and other personal notes. If a note is in the root, I know it's something I wrote, or relates directly to me.

everything except the [index](02-resources/02_03-clippings/index.md) folder, is written by me.

Two reference folders I use:

- **02-resources/02_03-clippings** where I save things other people wrote, mostly essays, articles, and high quality wiki pages.

1 admin folders exist so that their contents don't show up in the file navigation:

- **static_files** for images, audio, videos, PDFs, etc.

## Links

+ [ ] i need to search through to my notes and add more internal links. 

I try to always link the first mention of something. Often the link is *unresolved*, meaning that the note for that link isn't created yet. Unresolved links are important because they are breadcrumbs for future connections between things.

A journal entry in the **root** of my vault might look something like this:

```
I went to see the movie [[Perfect Days]] with [[Aisha]] at [[Vidiots]] and had Filipino food at [[Little Ongpin]]. I loved this quote from Perfect Days: [[Next time is next time, now is now]]. It reminds me of the essay ...
```

The movie, movie theater, and restaurant each link to entries in my **References** folder. In these reference notes I capture properties, my rating, and thoughts about that thing. I use [Web Clipper](https://stephango.com/obsidian-web-clipper) to help populate properties from databases like IMDB. The essay I mention is in my **Clippings** folder, because I didn't write it myself.

A heavy linking style becomes more useful as time goes on, because I can trace how ideas emerged, and the branching paths these ideas created.

## Fractal Journaling and Random Revisit

Fractal journaling and randomization are how I tame the wilderness that a knowledge base can grow into.

Throughout the day I use Obsidian's *unique note* hotkey to write individual thoughts as they come up. This shortcut automatically creates a note with the prefix `YYYY-MM-DD HHmm` to which I may add a title that describes the idea.

Every few weeks I review these journal fragments and compile the salient? thoughts. I then review those reviews monthly, and review the monthly reviews yearly. The result is a fractal web of my life that I can zoom in and out of at varying degrees of detail. I can trace back where individual thoughts came from, and how they bubbled up into bigger themes.

Every few weeks I set aside time for a "random revisit". I use the *random note* hotkey to quickly travel through my vault. I often use the local graph at shallow depth to see related notes. This helps me revisit old ideas, create missing links, and find inspiration in past thoughts. It's also an opportunity to do maintenance, like fix formatting based on new rules in my personal style guide.

I enjoy this process. Doing this maintenance helps me understand my own patterns. 

## Publishing to the Web

This site content is written in Obsidian. And the site code is edited with Zed. I use a *static site generator* called Quartz to automatically compile my notes into a website and convert them from Markdown to HTML.

For this site, I push notes from Obsidian to a GitHub repo using a git GUI. The notes are then automatically compiled using Github actions. I host my site freely on github pages and neocities with my CI workflow. 

(link to CI here)

- [ ] link to CI of site here

---

i also mirror my site to neocities

my site repository is also mirrored on codeberg for backup

i have a local and external usb backup (with BORG BACKUP), for all of my vault and obsidian configuration

i sync my files between my phones and laptop via syncthing, i use the extra backup feature from that for well.. extra backup! (it create a backup every day, and keep that for 10 days)

