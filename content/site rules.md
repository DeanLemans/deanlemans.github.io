---
publish: true
---

TO BE REWERITTEN, THIS IS FOR NOW JUST INSPIRATION

A vault is simply a folder of files. This is important because it complies with [file over app](https://stephango.com/file-over-app) philosophy. If you want to create digital pieces that last, they must be files you can control, in formats that are easy to retrieve and read. Obsidian gives me that freedom.

The following is not absolute, just how i use this vault.

## My Rules

Rules I follow:

- Only use 1 vault across everything
- Mitigate folders folder usage for organization.
- Try not to use external site for content, if possible migrate them to this site. (or at least link them)
- Avoid non-standard Markdown and if necessary only use semantic HTML.
- Always pluralize categories and tags.
- Use internal links profusely.

Having a [consistent style](https://stephango.com/style) collapses hundreds of future decisions into one, and gives me focus. For example, I always pluralize tags so I never have to wonder what to name new tags. Make your own style guide. You can always change your rules later.

## Folders and Organization

I try to minimize my usage of folders  
I avoid folders because many of my entries belong to more than one area of thought.  
I don't want the overhead of having to consider where something should go.

My notes are primarily organized using the `categories` property.

**Most of my notes are in the root of the vault**, not a folder. This where I write about my personal world: journal entries, essays, notes, and other personal notes. If a note is in the root, I know it's something I wrote, or relates directly to me.

Two reference folders I use:

- **Clippings** where I save things other people wrote, mostly essays, articles, and high quality wiki pages.

Three admin folders exist so that their contents don't show up in the file navigation:

- **assets** for images, audio, videos, PDFs, etc.
- **Templates** for templates.

## Links

i need to search through to my notes and add more internal links.  
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

Every few days I review these journal fragments and compile the salient thoughts. I then review those reviews monthly, and review the monthly reviews yearly. The result is a fractal web of my life that I can zoom in and out of at varying degrees of detail. I can trace back where individual thoughts came from, and how they bubbled up into bigger themes.

Every few months I set aside time for a "random revisit". I use the *random note* hotkey to quickly travel randomly through my vault. I often use the local graph at shallow depth to see related notes. This helps me revisit old ideas, create missing links, and find inspiration in past thoughts. It's also an opportunity to do maintenance, like fix formatting based on new rules in my personal style guide.

People have asked me if this could be automated with language models but I do not care to do so. I enjoy this process. Doing this maintenance helps me understand my own patterns. 

## Properties and Templates

Almost every note I create starts from a [template](https://github.com/kepano/kepano-obsidian/tree/main/Templates). 

- **Dates** — created, start, end, published

The [.obsidian/types.json](https://github.com/kepano/kepano-obsidian/blob/main/.obsidian/types.json) file lists which properties are assigned to which types (i.e. `date`, `number`, `text`, etc).

## Publishing to the Web

This site content is written in Obsidian. And the site code is edited with Zed. I use a *static site generator* called Quartz to automatically compile my notes into a website and convert them from Markdown to HTML.

For this site, I push notes from Obsidian to a GitHub repo using the github desktop. The notes are then automatically compiled using Quartz. I host my site freely on github pages and neocities with my CI workflow. (like to CI here) #todo 
