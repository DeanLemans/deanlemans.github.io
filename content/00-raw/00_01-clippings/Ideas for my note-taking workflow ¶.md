---
title: Ideas for my note-taking workflow ¶
source: https://www.edwinwenink.xyz/zettelkasten/notetaking_ideas/
author:
  - Edwin Wenink
published:
created: 2026-05-09
description:
tags:
  - clippings
publish: "true"
unlisted: "true"
id: 01KR5028RBE56YXBY1A7THFPB4
---
> [!danger] NOT MINE  
> This is just a reference/bookmarked article from the internet i found interesting!

---

# Ideas for my note-taking workflow ¶

## Ideas for my note-taking workflow

@workflow @idea

Increasingly based on Zettelkasten.

TODOs are spread all over the file

TODO have a tag list but also show per tag how many files. Upon selecting a tag, open a file showing all files for that tag.

TODO notational-fzf: search for a Zettel and create it when it does not already exist.

## References

In my own Zettelkasten:

- [Visualizing note graph](https://www.edwinwenink.xyz/zettelkasten/notes_visualization/)
- [Scripts for maintaining backlinks](https://www.edwinwenink.xyz/zettelkasten/maintaining_backlinks/)

### Vim + Zettelkasten

- Came across this interview on [How to Make Yourself into a Learning Machine](https://superorganizers.substack.com/p/how-to-build-a-learning-machine###) .
- [Vimrc that has a Zettelkasten setup (copied verbatim below, as backup)](https://github.com/sirupsen/dotfiles/blob/8d232bab79c0032af1b827ad523d77f0f8959037/home/.vimrc#L484-L522)
	- I also refer to him in [Scripts for maintaining backlinks](https://www.edwinwenink.xyz/zettelkasten/maintaining_backlinks/)
		- TODO I think his.vimrc uses fzf to add links in a text using fzf! I want that!
		- So this speeds up his linking
- [Awesome Vim Zettelkasten demo](https://www.bitchute.com/video/wlFZJ8ltQTgg/)
	- [See &ldquo;igeleis&rdquo; user in this thread](https://www.reddit.com/r/Zettelkasten/comments/ejwbvh/luhmannzettelkasten_based_on_everything_is_a_file/)
		- Corresponds to [this user](https://forum.zettelkasten.de/profile/lunario) on Zettelkasten.de
		- Uses Vimwiki + extra scripts
		- [Related Zettelkasten thread](https://forum.zettelkasten.de/discussion/comment/4225#Comment_4225)
- [Zettelkasten + Vim + plain text in Haskell](https://github.com/aleator/Zettel-hs)
1. Timestamp all posts to provide them with a unique identifier.
	- If I want to rely heavily on links between files, I need a method for not breaking links when filenames change.
		- Is there a method for linking with identifiers without needing the timestamp to be in the filename?
		- Alternatively, I would need to write a program that scans the whole archive for the old filename, to update the links
2. Add a ‘last modified’ remark that updates on writing
	- In principle, I could outsource this to something like `git blame`
3. How to search on multiple custom defined tags at once?
	- Can you do this already with the existing TagSearch function, by passing a pattern?
		- If yes, might be still a good idea to create a wrapper function that takes multiple tags and calls TagSearch with the correct arguments.
4. Write a script that writes all tags to a ‘ctags’ format. Normally in code you only define a definition once and then have various locations where you use it. But you should be able to find all different locations. I think you by default do \-\] to jump to the last tag. But if you run g \-\] you should find all locations corresponding to the tag. What you essentially do is create *ambiguous* tags.
	- See [https://www.youtube.com/watch?v=XA2WjJbmmoM](https://www.youtube.com/watch?v=XA2WjJbmmoM) 21 mark.
	- Search tags with `ts[elect]` (refers to last tag if no match)
	- \-\] tag under cursor (also usable with helptags)
	- \-g\] ambiguous tags (actually, g\] immediately opens a list)
	- \-t jump back up the tag stack. (This is nice for going down the rabbithole and having any chance of coming back out again)
	- I think you can run ctags with a regex? This would already solve the problem.
	- Suggested answer: [https://vi.stackexchange.com/questions/268/creating-tags-between-markdown-files-similar-to-h](https://vi.stackexchange.com/questions/268/creating-tags-between-markdown-files-similar-to-h)
	- Extending ctags: file:///C:/Program%20Files%20(x86)/ctags58/EXTENDING.html

## Ctags

Right now I have in my.ctags file:

```
--langdef=markdown
--langmap=markdown:.md
--regex-markdown=/@(\w+)/\1/t,tag,tags/
--regex-markdown=/[^!]\[.*\]\([\s\.]*[\\\/]?(.*?)\s?:?\s?\d*\)/\1/l,link,links/
```

Change:

```
--regex-markdown=/@(\w.*)\s/\1/t,tag,tags/
```

This one also matches post-phenomenology as a whole. I tried to make a lazy version but that didn’t seem to work somehow. Now the whole sentence is matched.

```
--regex-markdown=/@(\w.*?)\s/\1/t,tag,tags/
```

Clear limitation: only one tag can be matched per line, so I need to put each tag on a new line. If you want to fix this you need to define a language parser for ctags. You can define more regular expressions though. Idea: hardcore regex for situations with more tags per line, up until a certain limit? I.e. just match a different group each time, i.e. the first tag, than the second etc.

Okay so exuberant ctags (also the later universal ctags ) use POSIX ERE regex, which does not support much and has the quirk that it always matches greedily. See [https://www.regular-expressions.info/posix.html](https://www.regular-expressions.info/posix.html). In other words, you really can’t have multiple tags on one page.

Even the newer universal ctags says this:

> By default it uses the Extended Regular Expressions (ERE) syntax, as used by most engines today; however it does not support many of the “modern” extensions such as lazy captures, non-capturing grouping, atomic grouping, possessive quantifiers, look-ahead/behind, etc. It is also notoriously slow when backtracking, and has some known “quirks” with respect to escaping special characters in bracket expressions.

See: [https://docs.ctags.io/en/latest/optlib.html](https://docs.ctags.io/en/latest/optlib.html)

TODO how can I match both tags AND backreferences or headers? I guess just with an “Or” statement in the regex, right?

My build of exuberant ctags was compiled in 2009 (and I downloaded the latest version).

Another issue with exuberant ctags was that it did not support special characters (utf-8, I guess). E.g. the name Pöggeler was not recognized as a tag.

So… use universal ctags to avoid these issues. It has multiline support. Has regex control flags, e.g. for case insensitivity.

```
--mline-regex-markdown=/@(\w.*)\s/\1/t/{mgroup=1}{_advanceTo=1start}
```

What about case insensitivity?

`:help tag-regexpr` says that ignorecase is used, so set ignorecase in.vimrc.

Apparently CtrlP can also search through your tags file! Does it automatically! Regular CtrlP, then Ctrl-B to search Tags. Or directly: CtrlPTag

To find backreferences, do fuzzy search on current filename with CtrlP. New simpler mapping. Fuzzy matching avoids having to specify the path, either relative or absolute.

```
--langdef=markdowntags
--languages=markdowntags
--langmap=markdowntags:.md
--kinddef-markdowntags=t,tag,tags
--mline-regex-markdowntags=/@(\w\S*)\s/\1/t/{mgroup=1}{_advanceTo=1start}
```

Uiteindelijk bleek ik vooral \\S te zijn vergeten. Dit forceert de match te stoppen voor de spatie. Daarmee wordt de extra \\s ook overbodig. Bovendien is advance to start niet nodig in dit geval, maar mocht ik moeilijkere gevallen hebben later dan is het goed die optie te onthouden. Zie: [https://docs.ctags.io/en/latest/optlib.html#multiline-pattern-flags](https://docs.ctags.io/en/latest/optlib.html#multiline-pattern-flags)

Dus de uiteindelijke score:

```
--langdef=markdowntags
--languages=markdowntags
--langmap=markdowntags:.md
--kinddef-markdowntags=t,tag,tags
--mline-regex-markdowntags=/@(\w\S*)/\1/t/{mgroup=1}
```

mgroup moet je aangeven voor mline modus. YES! Werkt super!

## Tips ‘n Tricks

### Issues with linking to line numbers

When linking to a file, you can append line numbers to open the file at the specified line as such: `file.txt:linenumber`. However, on Windows the colon is considered to be possible be part of a filename, which prevents the default vim syntax from working.

You can verify this by running `set isfname?`

A quick fix is to introduce a space between the filename and the colon.

This will not work on Windows: [Stiegler](https://www.edwinwenink.xyz/zettelkasten/stiegler-aufklarung_philosophical_engineering/)

But this will work: \[Stiegler\](Stiegler-Aufklarung\_Philosophical\_Engineering.md:20)

A permanent fix is to remove the colon from that list, by setting in your `.vimrc`:

`set isfname -=:`

If that causes trouble, add it again with `set isfname +=:`.

Solution found at [Stack overflow](https://stackoverflow.com/questions/36500099/vim-gf-should-open-file-and-jump-to-line/36500454)

*Specifying file numbers breaks GitHub preview of markdown links*.

What is a nice way to keep both the Vim reference and a correct Markdown reference? Perhaps I should have the Vim reference as a description of the link, like such:

[Stiegler-Aufklarung\_Philosophical\_Engineering.md:20](https://www.edwinwenink.xyz/zettelkasten/stiegler-aufklarung_philosophical_engineering/)

### Looks like you do not need to give a proper path with gF

If you only provide the filename rather than only a path, `gF` will start a search and work anyways! This assumes that we `cd` into the root directory of our notes, which we do with our custom `\ww` mapping.

I could use this to make links more robust against moving between folders. However, this makes my notes not useable for editors dumber than Vim. Not a problem for me, but if others use this system they should probably give full links. This of course also breaks GitHub preview.

But if I use my system above, I can maintain correct links:

1. a short reference with line number as a link descriptor
2. reference with relative path to file without line number

So, in conclusion, this should be my convention:

[Stiegler-Aufklarung\_Philosophical\_Engineering.md:20](https://www.edwinwenink.xyz/zettelkasten/stiegler-aufklarung_philosophical_engineering/)

TODO convert this in a blog post “A Convention for Combining Vim and Markdown File Linking”

## Unique IDs and Timestamps

I keep hesitating about using timestamps. And if using them, if I should always use them.

Pro:

- Chronological ordering on filesystem
- Timestamps are unique IDs. Could allow tools for persistence through renaming.

Con:

- Timestamps make filenames longer and less readable
- No grouping on filesystem based on names, e.g. papers from the same author, or index pages, or author pages.

Then there’s a related issue. Do I use timestamps for structure notes?

For example, otherwise I could group together index files by prefixing them with “index”.

## Structure

- No structure with folders, bad bad bad.
- I will use structure notes instead

Special example: convention for author pages

- Fill with references to *primary* literature
- In secondary literature, refer back to the author page, then secondary references will show up in backlinks

## Backlinks

- [index\_philosophy\_of\_technology.md](https://www.edwinwenink.xyz/zettelkasten/index_philosophy_of_technology/)

## Links vs backlinks

Denk na over wanneer links of backlinks handiger zijn.

Stelregel: gebruik alleen terugverwijzingen als je zeker weet dat de referentie stabiel blijft en geen verdere organisatie nodig heeft.

Ik gebruik in auteur pagina’s backlinks en daar is het wel logisch. Maar misschien moet ik dat bij index pagina’s niet doen.

Nadeel van backlinks vs gewone links: als je iets verandert moet je potentieel alles op veel plaatsen veranderen ipv alleen in de index zelf.

Ik heb nu een aantal notities die bij mijn “rema thesis” project horen. Wil ik dat bovenaan elke notitie hebben staan, of juist lekker in de “backlinks” sectie.

In een project is het wellicht juist één centrale plek te hebben om alle links te bewerken. Een project is wss wat dynamischer dan een auteur pagina.

Stel je voor: je hebt een project “Techniek filosofie”. Je maakt backlinks naar die notitie, en alles komt op één homp te staan. Later wil je wat verdere onderscheidingen maken. Aangezien backlinks automatisch worden bijgehouden kan dat niet. Daarom moet je een nieuwe notitie maken voor en aparte categorie. Als je nu wilt dat andere notities doorverwijzen moet je alle bestanden langs om de verwijzing aan te passen. Geen goed idee!

Dus ik moet me afvragen, wat voor een typen structuur notities zijn er? Streef net als bij programmeren naar “loose coupling” en “high cohesion”; is dat iets soortgelijks?

- author (gebruik backlinks)
	- sterke coupling; auteur blijft stabiel.
- index (gewone links?)
	- wiki-achtig; thematisch verband
- project (denk dat gewone links het meest gepast zijn)
	- wat je dan ook nodig hebt

## Dealing with “forgetting”

TODO: I notice that I’m hesitant to throw all my old notes in the Zettelkasten flat directory. When everything depends on interlinking, notes that are not linked to will be forgotten by the Zettelkasten (and by you, for sure!).

Some ideas:

1. Write a function that finds all notes that are *not* linked to! You can go through this list and think about This assumes you have generated all backlinks prior to this.
2. For migrating notes to the Zettelkasten: do this manually and step by step. On each entry, try to already establish a link. At the minimum, if the notes correspond to some project (e.g. my thesis), create a thesis index that refers to them.

## Conventions

To keep the notetaking system manageable, we should establish some conventions.

### Filenaming and directory structure

I’m still not decided on a filenaming convention.

Timestamps at the end of a filename would offer some robustness to recover from broken links. They would be fully robust if I would rewrite all tools to only use the timestamp. The clear downside is that filenames are in themselves harder to read.

- I still rely too much on directory structure. I should flatten the entire directory and instead rely on index pages in the Zettelkasten if I for example want to collect “Philosophy” notes.

If I ever write all of this into some Vim plugin (kuch learn Vimscript first kuch), I should make clear this plugin is *opiniated*.

### Linking

- Link format: see above for “Issues with linking to line numbers”
- Everything is searchable. A great secondary use for searching (i.e. grepping) is actually finding old notes to link to
	- Case study: I encountered the “Collingridge dilemma” in a lecture slide and vaguely recalled I had seen it before. I grepped for Collingridge and found the reference in notes about an academic article.
		- Because the Collingridge dilemma now occurs in multiple places, I create a new Zettel for this idea
		- I link from the lecture notes and from the article (which I just found) to the new Zettel.
		- When running backlinks, the Zettel now contains links to all notes that refer to the Collingridge dilemma

What to use tags for?

- I currently have a primitive tag system that does not allow searching on multiple tags at once; this requires some conventions to keep tag searching manageable.
- Not for authors; link to author Zettels instead and use the backlink mechanism to populate the author zettel with files to all other files that link to it.
- Not for genres such as “philosophy”: too broad. Again, you can use
- Tags could be useful to keep track of index pages though (ts “index”)
- How did Luhman do this? See [https://sociologica.unibo.it/article/view/8350/8270](https://sociologica.unibo.it/article/view/8350/8270) Tags are not used for searching but for a point of entry! So the “index” file I have should be a “Keyword Index”
- Luhman had 3200 tags. Keep them specific!
- Of course, Luhman could not search on tags. His tag index was not complete, he only listed 1 to 4 files where the tag could be found as points of entry.

## Appendix

Backup of suprsen.vimrc setup:

```sql
function! ZettelkastenSetup()
  syn region mkdFootnotes matchgroup=mkdDelimiter start="\[\["    end="\]\]"

  inoremap <expr> <plug>(fzf-complete-path-custom) fzf#vim#complete#path("rg --files -t md \| sed 's/^/[[/g' \| sed 's/$/]]/'")
  imap <buffer> [[ <plug>(fzf-complete-path-custom)

  function! s:CompleteTagsReducer(lines)
    if len(a:lines) == 1
      return "#" . a:lines[0]
    else
      return split(a:lines[1], '\t ')[1]
    end
  endfunction

  inoremap <expr> <plug>(fzf-complete-tags) fzf#vim#complete(fzf#wrap({
        \ 'source': 'bash -lc "zk-tags-raw"',
        \ 'options': '--ansi --nth 2 --print-query --exact --header "Enter without a selection creates new tag"',
        \ 'reducer': function('<sid>CompleteTagsReducer')
        \ }))
  imap <buffer> # <plug>(fzf-complete-tags)

  " setlocal formatoptions+=a
  imap <imap> -- —
endfunction

" Don't know why I can't get FZF to return {2}
function! InsertSecondColumn(line)
  " execute 'read !echo ' .. split(a:e[0], '\t')[1]
  exe 'normal! o' .. split(a:line, '\t')[1]
endfunction

command! ZKR call fzf#run(fzf#wrap({
        \ 'source': 'ruby scripts/tag-related.rb "' .. bufname("%") .. '"',
        \ 'options': '--ansi --exact --nth 2',
        \ 'sink':    function("InsertSecondColumn")
      \}))

autocmd BufNew,BufNewFile,BufRead ~/Documents/Zettelkasten/*.md call ZettelkastenSetup()
```