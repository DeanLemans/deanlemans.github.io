---
unlisted: false
title: This is an Actual Website
tags:
source: https://actualwebsite.org/
publish: true
modified: 2026-07-18
id: 01KQQV6TTHH4QKV5BHB0NM6H7R
description: A less profane and non-Oedipal manifesto for a better World Wide Web
created: 2025-10-26
author:
  - "[[Matthew Graybosch]]"
aliases:
  - 01KQQV6TTHH4QKV5BHB0NM6H7R
---

> [!danger] NOT MINE
> This is just a reference/bookmarked article from the internet i found interesting!

---

# This is an Actual Website

## Everything You Need

You may have forgotten, or never learned in the first place, but this is how a website should work.

- A website should be a collection of one or more hypertext documents.
- A website should fit into any screen.
- A website should look consistent in all standards-compliant browsers.
- A website should be accessible to all people, regardless of what assistive technologies they might need.
- A website and its documents should be navigable by hyperlinks.
- A website's documents should be searchable using a browser's "find in page" feature.
- A website should be legible and present a coherent message. [\[1\]](https://actualwebsite.org/#fn1)
- A website should not need JavaScript, but a *little* JavaScript can enhance the experience.
- A website should not need CSS either, but browsers provide *terrible* default styles that probably haven't been updated since 2001.

## We Have The Technology

All that stuff that [a website should be and do?](https://actualwebsite.org/#ideal-website-attributes) We already have it. [\[2\]](https://actualwebsite.org/#fn2) Perhaps we always have.

Tim Berners-Lee and his colleagues at [CERN](https://cern.ch/) got this mostly right about 30 years ago, building on concepts from [Project Xanadu](https://xanadu.com/) to create a practical implementation of hypertext documents.

The first website was built in 1989. [It’s still available](https://info.cern.ch/hypertext/WWW/TheProject.html), and why shouldn't it be? It's nothing but a collection of hypertext documents. Never mind IE6; you could probably render it on a [Tamagotchi](https://en.wikipedia.org/wiki/Tamagotchi) or a toaster running [NetBSD](https://netbsd.org/) if you had to. Don't forget that the [very first web browser](https://en.wikipedia.org/wiki/WorldWideWeb) was built on and for a NeXT workstation, and [the second](https://en.wikipedia.org/wiki/Line_Mode_Browser) was designed to run on dumb terminals.

You could probably render *this* site in such old browsers, or at least [NCSA Mosaic](https://en.wikipedia.org/wiki/Mosaic_\(web_browser\)). However, such old browsers would mangle the text because they don't support [Unicode](https://en.wikipedia.org/wiki/Unicode). In fairness, the first version of the Unicode standard wasn't published until 1991.

## Self-Inflicted Problems

This site would work just fine in pre-Unicode browsers from the 1990s if I had stuck to the 127-character [ASCII](https://en.wikipedia.org/wiki/ASCII) character set and specified that encoding instead of [UTF-8](https://en.wikipedia.org/wiki/UTF-8). But I'm used to Unicode text and being able to use typographic quotes. [\[3\]](https://actualwebsite.org/#fn3)

As far as self-inflicted problems go, this is pretty mild. We do much worse to ourselves and each other, just to earn a living.

- We use the wrong tools for the job.
- We choose novelty for its own sake.
- We stack abstractions atop one another like Jenga towers.

## This Isn't Entirely Our Fault

I'll admit it. Building websites is *hard*. A lot of what makes this a miserable experience arose out of the [browser wars](https://thehistoryoftheweb.com/browser-wars/).

It was bad enough that JavaScript was incredibly slow and janky at first [\[4\]](https://actualwebsite.org/#fn4), especially if you were used to strongly typed languages like C. It really didn't help that the major browser vendors couldn't agree on how to implement standards like HTML, CSS, or ECMAScript. Netscape did things in a particular way, and Microsoft insisted on doing things a different way. The W3C didn't have enough authority to sit either party down and tell them to cool it with the proprietary extensions.

Web developers got caught in the middle. They had to decide whether to support one browser or try to support both. Now it might be happening again, if Google decides they can afford to add proprietary functionality to Chrome. [\[5\]](https://actualwebsite.org/#fn5)

Nevertheless, we can do better. Especially if we're professional web developers.

Does your blog really need all the JavaScript you're using? Does it need to be built with React? Do you really need a build step that depends on Node and over 9,000 npm packages? *Who are you trying to impress?*

Likewise to the people who slavishly imitate [oedipal websites](http://motherfuckingwebsite.com/) and brag about [only needing 7 CSS declarations](http://bettermotherfuckingwebsite.com/) or think that [using HTTPS and gzip matter](https://bestmotherfucking.website/). *What good is asceticism for its own sake?*

You say it's satire. You know full well that some people are going to take it literally.

## You Might Never Have Seen a Website Before

Like the person who has always shaved has no notion of their natural state, you have no notion of what a website is or could be. All you have ever seen are pale imitations of newspapers, magazines, and television. The web should be hypertext communicating messages that were at least meaningful to their authors.

This is a real, sensibly dressed website. Look at it. If a college dropout like me can manage this, then so can *you*.

## This Is Not Satire

I won't claim that this is 100% objective fact. It is my opinion alone, but free to a good home. While this had originally been a parody and response to more profane and oedipal sites, it's become more than that to me. I wouldn't have spent the weekend after my wife and I had been sick with influenza writing all of this text otherwise.

> The World Wide Web:
> a communications medium barely alive.
> We can fix it.
> We have the technology.
> We can make it better than it was.
> Better, stronger, faster…

a parody of The Six Million Dollar Man 's opening monologue

This popped into my head as my fever broke. I thought it was too good not to use even if it dates me. We have *always* had the technology. It's time we learned to use it.

## Suggestions for Better Websites

The following are my preferences, which should not be mistaken for prescriptions.

- Exhaust the possibilities of HTML before using CSS or JavaScript.
	- [HTML5 form elements](https://www.the-art-of-web.com/html/html5-form-validation/) provide more functionality than you might have expected.
	- The [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) element will let you serve images in bandwidth efficient formats like [AVIF](https://caniuse.com/avif) while still supporting JPEG or PNG as a fallback for visitors using Microsoft browsers.
	- You can use [`<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) and [`<summary>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) instead of building your own accordions.
	- Try the [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element before using a framework just because you want to pop up a modal.
	- You can integrate multimedia into your pages with the [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) and [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) elements.
	- Check out [`<template>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) and [`<slot>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) when you need to build [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components).
- Many layout problems that once demanded the use of frameworks like Bootstrap might be solvable with new CSS features like [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) and [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout).
- Omit needless graphics. If your website can convey its intended message when you replace all of the images with public-domain photos of [William Howard Taft](https://tafttest.com/), then you might not have needed them in the first place.
- Test your site with [Lynx](https://lynx.invisible-island.net/) or another browser that doesn't support CSS and JavaScript. If it doesn't work there, it doesn't actually work.
- Use relative URLs for links within your website. This will make it easier to move a site between hosts and domains. If somebody wants to mirror your site (with your consent) this will make their lives easier, too.
- Provide updates to visitors via [feeds](https://aboutfeeds.com/) (and [please expose them](https://rknight.me/blog/please-expose-your-rss/)) instead of trying to cajole them into signing up for your newsletter. People get too much email already; let's not make it *worse*.
- Consider using Unix tools like the shell, [GNU make](https://www.sitepoint.com/using-gnu-make-front-end-development-build-tool/), the W3C's [HTML-XML-utils](https://www.w3.org/Tools/HTML-XML-utils/README) and [rsync](https://rsync.samba.org/) before tying yourself to static site generators or the Node/npm ecosystem.
- If at all practical, provide downloadable compressed archives of your website for offline viewing and archival.
- Do not implement Facebook's Open Graph protocol. [\[6\]](https://actualwebsite.org/#fn6) Let them learn how to use standard meta tags. It's not like anybody on Facebook, Instagram, or Threads will see the links you share there.
- Do not implement Twitter cards. Let them (and their imitators) learn how to use standard meta tags, too. Besides, Twitter has become a [Nazi bar](https://en.wiktionary.org/wiki/Nazi_bar).
- Do not worry too much about SEO. There was a WWW before Google. There may well be a WWW after Google. Learning HTML and CSS will probably serve you well long after Google becomes little more than a bad memory.
- **Validate your HTML.** Running pages through the [W3C Validator](https://validator.w3.org/) will identify errors and help you learn to write better HTML. The validator will let you upload files or even type markup directly into a text area. The [W3C](https://www.w3.org/) also provides validators for [RSS/Atom feeds](https://validator.w3.org/feed/) and [stylesheets](https://jigsaw.w3.org/css-validator/), too. Use them regularly.
- **Validate your JavaScript.** Using [JSLint](https://www.jslint.com/) will help you write cleaner, more performant, and more standards-compliant JS. You don't need to install it, but you can if you want to. The JSLint website will let you paste code for validation. This should be a convenient way to refine little functions for enhancing a personal website.

Having expressed these opinions, it doesn't actually matter what tools you use, as long as they help you build the website *you* want to build. All I ask is that you think about what you're doing, and refrain from using trendy tech just because somebody else told you should use it.

- [Motherf\*\*\*ing Website](http://motherfuckingwebsite.com/)
- [Better Motherf\*\*\*ing Website](http://bettermotherfuckingwebsite.com/)
- [Best Motherf\*\*\*ing Website](https://bestmotherfucking.website/)
- [The Web Is F\*\*\*ed](https://thewebisfucked.com/) by [Kev Quirk](https://kevquirk.com/)
- [A Reality Where CSS and JavaScript Don’t Exist](https://bt.ht/posts/css-js-mistake/) by [Bradley Taunt](https://bt.ht/)
- [The Website Obesity Crisis](https://idlewords.com/talks/website_obesity.htm) by [Maciej Ceglowski](https://idlewords.com/)
- [Old CSS, New CSS](https://eev.ee/blog/2020/02/01/old-css-new-css/) by [Eevee](https://eev.ee/)
- [This Page is Designed to Last](https://jeffhuang.com/designed_to_last/) by [Jeff Huang](https://jeffhuang.com/)
- [The Proper Design Process in Web Development](https://unixsheikh.com/articles/the-proper-design-process-in-web-development.html) by [Unix Sheikh](https://unixsheikh.com/)
- [The Web Is Fantastic](https://rknight.me/blog/the-web-is-fantastic/) by [Robb Knight](https://rknight.me/)
- [How Standard Ebooks serves millions of requests per month with a 2GB VPS; or, a paean to the classic web](https://alexcabal.com/posts/standard-ebooks-and-classic-web-tech) by [Alex Cabal](https://alexcabal.com/)
- [Come full circle - back to HTML](https://unixsheikh.com/articles/come-full-circle-back-to-html.html) by [Unix Sheikh](https://unixsheikh.com/)
- [Writing HTML in HTML](http://ankarstrom.se/~john/articles/html/) by [John Ankarström](http://ankarstrom.se/)
- [Supporting extensive backwards compatibility on the web](https://yukinu.com/blog/2022/05/15/supporting-extensive-backwards-compatibility.html) by [Yukinu](https://yukinu.com/)
- [HTML Web Components](https://blog.jim-nielsen.com/2023/html-web-components/) by [Jim Nielsen](https://www.jim-nielsen.com/)
- [A Subtle Nicety of Fault Tolerance in HTML & CSS](https://blog.jim-nielsen.com/2024/fault-tolerance-html-css/) by [Jim Nielsen](https://www.jim-nielsen.com/)
- [A manifesto for small, static, web apps](https://rosswintle.uk/2024/02/a-manifesto-for-small-static-web-apps/) by [Ross Wintle](https://rosswintle.uk/)
- [100 things you can do on your personal website](https://jamesg.blog/2024/02/19/personal-website-ideas/) by [capjamesg](https://jamesg.blog/)

If you have any questions about this website, or would like to suggest additions or corrections, please reach out to the author by [email](https://actualwebsite.org/).

You can also reach me on the Fediverse by tagging [@starbreaker@indieweb.social](https://indieweb.social/@starbreaker).

---

## Notes

1. Unfortunately, this isn't guaranteed, especially on the commercial Web. A *lot* of corporate websites talk too much and say too little. (Not in plain text, either.) [↩](https://actualwebsite.org/#fn1-link)
2. Web *applications* are another story, and outside the scope of this website. I personally think that web applications were a mistake. It's a mistake that pays my bills, though. [↩](https://actualwebsite.org/#fn2-link)
3. Nöt tö mentiön [heavy metal ümlauts](https://en.wikipedia.org/wiki/Metal_umlaut). Classic 7-bit ASCII just isn't metalhead-friendly. [↩](https://actualwebsite.org/#fn3-link)
4. It had gotten bad enough that [Douglas Crockford](https://www.crockford.com/) wrote a slim little book called [JavaScript: The Good Parts](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/) in 2008. I think it's the best work of satirical fantasy ever written, because JavaScript has no good parts.[↩](https://actualwebsite.org/#fn4-link)
5. I'm using the word "competing" a bit loosely here. Google Chrome has become the new Internet Explorer, the browser most people use. Microsoft is still pushing their Edge browser, but it's based on Chromium, the parts of Chrome that Google released as open source software. Apple is still pushing Safari, but that's for Macs and iOS devices. Firefox is still hanging in there, but Mozilla gets a fair amount of funding from Google in exchange for making Google the default search engine in Firefox. The situation is just a *bit* bleak. [↩](https://actualwebsite.org/#fn5-link)
6. Unfortunately, refusal to provide metadata for parasocial media negatively impacts people using Federated social platforms like Mastodon because these platforms also use proprietary meta tags like Open Graph and Twitter Cards instead of using standard meta tags to generate link previews. I have found what appears to be a [minimal solution social markup](https://meiert.com/en/blog/minimal-social-markup/) courtesy of [Jens Oliver Meiert](https://meiert.com/). If this works well enough, it might prove a reasonable compromise. [↩](https://actualwebsite.org/#fn6-link)

---

---
