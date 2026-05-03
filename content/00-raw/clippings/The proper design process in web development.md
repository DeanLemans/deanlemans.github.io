---
title: The proper design process in web development
source: https://unixdigest.com/articles/the-proper-design-process-in-web-development.html
author:
created: 2025-11-04
description:
tags:
  - clippings
publish: true
modified: 2026-04-19
id: 01KQQV6TTT4T9WA45NXECEF7W9
---
> [!danger] NOT MINE  
> This is just a reference/bookmarked article from the internet i found interesting!

---

# The proper design process in web development

Published on . Modified on 2023-11-09.

Today web developers are told that in order to do so-called modern web development they need to use JavaScript frameworks because they are an essential part of modern front-end web development. What a load of rubbish!

### Table of content

- [Introduction](https://unixdigest.com/articles/#intro)
- [Not everyone has fast Internet and fast computers](https://unixdigest.com/articles/#fast)
- [HTML is fast and responsive by default and the web works without JavaScript](https://unixdigest.com/articles/#resp)
- [Hysteria](https://unixdigest.com/articles/#hyst)
- [Performance, security, convenience and principles in relation to software development](https://unixdigest.com/articles/#wip)
- [Getting the balance right](https://unixdigest.com/articles/#bal)
- [The decision making process](https://unixdigest.com/articles/#how)
- [Final comments](https://unixdigest.com/articles/#fin)
- [Recommended reading](https://unixdigest.com/articles/#rec)

## Introduction

Today many web developers are taught that in order to do so-called modern web development they need to use JavaScript frameworks because they are an essential part of modern front-end web development. Such frameworks are promoted as applications that provide developers with "tried and tested" tools for building scalable and interactive web applications. Likewise, back-end development must not take place without spinning up yet another pile of framework glue just to send a single byte of information to the browser.

I am sure you have noticed, about 98% of all websites on the Internet today run JavaScript and most of them run shitty slow, even on modern hardware. This is despite the fact that most of them don't even need JavaScript in the first place because they don't provide any special features, they are not web applications, they are just simple websites. Yet, if you disable JavaScript they stop working all together!

I know all about fast deployment and fast shipping and the constant fear of someone else eating your lunch, but there is also such a thing as something being too crappy to ship.

Good software development, whether web related or otherwise, contain a minimal and basic set of steps that are required in order to develop a sound and proper product and there has to be at least a minimal balance between performance, security, convenience and design principles. We cannot simply slap a so-called modern JavaScript framework together with a bloated back-end and call it a "jobs done!"

The monetized part of the software industry sucks today. Not only in web development, but in software development in general. All that these companies care about is how much money can be made as quickly as possible, even when that mean that they ship total crap. In e.g. game development it has become a standard that games are rushed and released with loads of errors and performance problems.

Being an effective web developer means using the most appropriate tools for the job. JavaScript frameworks may make front-end development easier, but there is a price to pay.

JavaScript frameworks deal with the DOM interactions for you, but in order to translate what you write into DOM changes, frameworks run their own code, which in turn makes your software much larger and much more computationally expensive to operate.

Web development priorities must guard performance and accessibility, but this is not how so-called modern web development is done nowadays, rather modern web developer priorities, which is amplified by the use of frameworks, have completely inverted the structure of the web. Instead of a robust, content-first network of documents, the web now puts JavaScript first and user experience last.

If we should transfer the current status of software and web development to the car manufacturing industry, then it would be comparable to releasing cars with engines that don't run correctly.

" *What is that you say? The ignition timing is out of sync? The gearbox is not properly aligned with the engine causing the shaft from the flywheel to the gearbox to bind? The airbag inflator module deploys too slow? Oh, well, the deadline is tomorrow, ship it!*"

While there is nothing wrong in trying to optimize the development process, the frantic obsession with fast delivery has become a really big problem. Too many corners are being cut.

It doesn't help either that all these companies who sleeplessly worry about fast delivery are being taken advantage of by a cultist crowd of people who religiously promote different software development methodologies, most of which are useless junk. A lot of conferences, a lot of books, and a lot of disciples. Hoards of money grabbing snake oil selling evangelists. They make endless promises of improved development and project managers eat all of it raw in their desperate attempt to fulfill the requirements of greedy business owners and investors.

We have all had the unpleasant experience of buying a product or a service that was bad, yet still pushed to marked despite flaws. So, if we have had that experience, should we not try to do better ourselves?

## Not everyone has fast Internet and fast computers

I currently have a fibernet based Internet connection with good speed, but not long ago I only had access to the Internet via a [DSL modem](https://en.wikipedia.org/wiki/DSL_modem) running on an old copper based phone line. It was not only slow, but the entire family had to share it, and the copper wires were so poorly insulated against electromagnetic noise that it randomly lost connection to the ISP. Every time it did that, it took about 2 minutes before it regained connection again.

Many people in Denmark today still only have access to the Internet via DSL modems. In some few parts of Denmark you can't even get that.

According to [International Telecommunication Union (ITU)](https://www.itu.int/hub/2021/11/facts-and-figures-2021-2-9-billion-people-still-offline/), as of 2021, 4.9 billion people, actively use the internet. About 2.9 billion people are still offline, of which an estimated 96 per cent live in developing countries. And even among the 4.9 billion counted as active "Internet users", many hundreds of millions only get the chance to go online infrequently, via shared devices, or using connectivity speeds that markedly limit the usefulness of their connection.

I know two families who live in [Pakistan](https://en.wikipedia.org/wiki/Pakistan). Both families are regularly without electricity for hours because the matter of balancing the country's supply against the demand for electricity is unresolved. When they do have electricity, they need to use it sparingly. This means that people gather around a simple old laptop hoping to brush up on news, study, or get a glimpse of something exciting on the Internet.

I also know of other people around the world, in the US, Belgium, Scotland, England, Australia, Germany, Poland, and many other places, that do not have access to fast Internet.

In the US people typically pay twice as much as Europe for high speed Internet, when they can even get it. Across the country, internet service providers are simulating that there is a major competition and are keeping high bandwidth Internet back. It's a nationwide problem, even in Silicon Valley where you'd think Internet might be great.

> I pay $100 a month for Internet. My husband, a video producer, can't upload his videos to the company's servers and there's no point in the kids even trying to stream games to YouTube or Twitch.
> 
> ― Internet user from the US

It's a humbling experience when you are used to fast Internet to browse the Internet on an old computer or just slow Internet connection. You can try it out yourself, just use the throttling feature in the developer tools for [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/) or [Chrome/chromium](https://developer.chrome.com/docs/devtools/overview/). Now, browse the Internet like that for a couple of hours, try to do the stuff you regularly do. It will really make you appreciate so-called modern web development (sarcasm, just in case you didn't get that).

You need to select the `Network` pane. Then check the `Disable caching` option and choose a throttle speed. On Firefox, try the `GPRS` or `Regular 2G` speed. On Chrome/Chromium you can manually type in the download and upload speeds in kbit/s.

Some websites are so poorly built that you simply cannot use them.

Take a look at this blog post (contains a relevant YouTube video) by Andy Bell who could not use the UK Power Networks power outage tool on his phone during an outage because [it heavily depends on JavaScript](https://andy-bell.co.uk/this-is-why-performance-matters/).

## HTML is fast and responsive by default and the web works without JavaScript

Ingenious software is simple and simplicity is the heart of the [Unix philosophy](https://en.wikipedia.org/wiki/Unix_Philosophy). The more code lines you have removed, the more progress you have made. As the number of lines of code in your software shrinks, the more skilled you have become and the less your software sucks. So you need to ask yourself: **Do I really need that?**

> We used to sit around in the UNIX Room saying, "What can we throw out? Why is there this option?" It's often because there is some deficiency in the basic design — you didn't really hit the right design point. Instead of adding an option, think about what was forcing you to add that option.  
>   
> ― Doug McIlroy.

> Modern programming scares me in many respects, where they will just build layer after layer after layer that does nothing except translate.
> 
> ― Ken Thompson

A website is basically a document. Documents published on the Internet are in HTML, which is a standard [markup language](https://en.wikipedia.org/wiki/Markup_language) for documents designed to be displayed in a web browser. HTML has structure, e.g. "this is a title", "this is a link", and "this is a paragraph". HTML is responsive by default and it is very fast. Take a look at [this basic HTML page](https://unixdigest.com/basic-html-example.html) and try to change the size of the view screen. It works everywhere on any size of screen.

Then you shake it up with some CSS, which is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS adds some shiny to the structure. CSS says, "let's make all the paragraphs have tiny text and brown colors" and "let's move this image to the middle of the screen and add a black border". And now everything suddenly looks amazing. Take a look at [this basic HTML page with some CSS](https://unixdigest.com/basic-html-with-css-example.html) added.

We need to understand the architecture we're working with. We should not default to use JavaScript to write HTML or CSS nor should we use JavaScript to translate JSON or some other interwoven rubbish excuse of a language. We send HTML and CSS directly from the web server to the browser because HTML and CSS are the native language of the browser, it's called server-side rendering.

We can then add some tiny JavaScript snippets if we truly need programming structures.

## Hysteria

" *But we have gone cloud! Our back-end now consists of 143 different micro services, 24 of which do basic database querying. All of this talk to the front-end via JSON and we need JavaScript for that!*"

Yes, I know. It's called messing up.

" *But we need JavaScript to make form fields and do input validation!*"

No, you don't. Form fields are just HTML, you don't need any JavaScript to create those.

Input validation belongs on the server and you should never only do input validation in the client in the first place.

Since you need to do input validation on the server anyway, you might as well just do that. If done properly, you validate the entire form in one go and then the user will not notice any difference. And basic navigation, such as using the tabulator key to jump between fields, still work correctly then.

" *But we're making web applications not websites and we cannot do that without JavaScript frameworks!*"

A web application is a website that has so much functionality that it works like a regular desktop application. Google Maps is a web application. GitHub is a web application. YouTube and Gmail are web applications.

Webshops, corporate websites, blogs, etc., are not web applications and they do not need any JavaScript at all.

" *But we need a framework because we work in a team!*"

Huh?

" *Are you saying we need to write everything ourselves from scratch?*"

No, but just like if we were e.g. designing a new car, we would not begin by grabbing the toolbox, likewise proper web development does not begin by grabbing a framework or a library.

We need to strike a balance between performance, security, convenience, design and development principles.

Most websites today are so basic that they do not need any frameworks or libraries, yet they are stuffed with it and cannot function if you disable JavaScript, it's pathetic.

## Performance, security, convenience and principles in relation to software development

Performance, security, convenience, design and development principles are the issues we need to handle well in order to strike a sound balance.

### Performance

Performance in relation to software is about getting the software to perform as efficiently as possible. It's primarily about speed and about fully utilizing the hardware resources we have available.

In e.g. game development, performance is important in order to avoid stuttering of video and audio. The less optimized a game is, the more CPU and GPU power it requires. If the game is poorly optimized it can only run on the most powerful equipment without stuttering, if at all. Power requirements in relation to wattage also increase many times.

In relation to web development, performance is important in order to avoid slow loading speeds, as we have seen. But loading speed is not the only concern. Hardware requirements are important considerations too. If a busy website isn't optimized, the hardware requirements for the web server can multiply by as much as 10 (or even more). This is not only more expensive, but it also has a big impact on the environment as much more electrical power is required to run multiple servers.

When a lot of complex JavaScript is used, the server not only has to send much more data to the browser, since it sends all the JavaScript source code which the [JavaScript engine](https://en.wikipedia.org/wiki/JavaScript_engine) in the browser has to run, but the requirements of both CPU power and memory at the client computer increases many times.

### Security

Security in relation to web development is a branch of Internet security which again is a branch of computer security. It covers a big area of concern such as proper identification and authentication, prevention of theft, prevention of denial of service, prevention of tampering and vandalism, and much more.

A lack of proper security regarding web development can affect both the server and the client.

JavaScript libraries and frameworks are often put together by many individual and independent JavaScript components which are fetched during development with the JavaScript package manager [npm](https://www.npmjs.com/) and then incorporated into the finishing product. Most web developers today never read the code they download, even though [they cannot trust third party code without reading it first](https://unixdigest.com/articles/no-you-cannot-trust-third-party-code-without-reading-it-first.html). This leaves a lot of room for [malware](https://en.wikipedia.org/wiki/Malware) and [supply chain attacks](https://en.wikipedia.org/wiki/Supply_chain_attack).

Since the Internet is an inherently insecure channel for information exchange, with high risk of intrusion, insecure websites and web applications are often an entry point for attackers.

### Convenience

Convenience is about procedures, products and services intended to increase ease in accessibility and usage. It's about saving resources such as time, effort and energy and generally decrease frustration.

In relation to software and web development, convenience is about saving time and human effort.

Convenience is very important because it saves time, human energy and effort. However, as with everything else, we need a balance. Something can be too convenient and there are also such things as laziness, negligence and irresponsibility.

### Principles

Generally a principle is a guide or rule for behavior or evaluation. In relation to design specifically, principles serve as guidelines for how to construct, design and build stuff. In relation to software development, whether web related or otherwise, principles concern both performance, security and convenience.

Some principles are based upon sound and practical experience, such as the principle of [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) (SoC). Other principles, such as many of the different design patterns, have no real life benefit, on the contrary because they are mainly based upon theory, they often complicates the development of software unnecessarily.

## Getting the balance right

Ideally we want everything to be as performant, as secure, and as convenient as possible and we want to be able to rely upon sound principles that help us achieve those goals.

A [Formula One car](https://en.wikipedia.org/wiki/Formula_One_car) is built for optimal performance, not for convenience, as such it is very uncomfortable to drive and it requires both a good physique and a strong mental discipline.

Is a Formula One car secure?

Well, not compared to a [Knight XV SUV](https://en.wikipedia.org/wiki/Knight_XV) that has ballistic hardened steel and ballistic fiberglass fenders and bumpers making it fully armored.

But we don't need ballistic hardened steel, ballistic fiberglass fenders and bumpers on a Formula One car. Even though that would make it much more secure, it would also make it very slow and completely unsuited for racing.

Balance is achieved on a case by case evaluation of the specific requirements of the problem we're trying to solve. The less we understand the problem and the architecture, the less we're able to reach a good balance.

Since we're doing web development, we need to prioritize performance and security. Convenience is important too, but not if it compromises performance or security.

This doesn't mean that we do all web development in Rust in order to make the website or web application fast, but we should consider our approach. If we use an interpreted programming language we need to realize that every framework, every ORM library, and every template engine we put on top is another big layer of unneeded complex and slow code. The more custom made and discrete code we use, the faster the web application becomes.

Rather than using a framework, it's much better to use small libraries. Even better to just take out the specific code you need from the library, and then use that. Integrate it into the application as native code. This is another good way to make sure you really understand how the code works in your project.

## The decision making process

Good software development, which involves web development, is a [decision making process](https://en.wikipedia.org/wiki/Decision-making) in which the basic sciences are applied in order to use resources optimally to meet stated objectives. As such, a fundamental element of this process is the establishment of objectives and criteria, analysis, construction, testing and evaluation.

Let's consider the bare minimum in the process.

1. **Determine the requirements**  
	First we need to determine clearly what kind of problem we're trying to solve. Are we building a webshop or the next iteration of Google Maps?
2. **Analyze the problem**  
	So we're building a webshop. What features does this webshop require and what challenges does it provide? Users potential geographical location is relevant. The importance of performance, security, and convenience must be determined in relation to all these issues.
3. **Plan or design the software-based solution**  
	Determine what solution best solves the problem in optimal balance between performance, security, and convenience.
4. **Develop the software**
5. **Test the software**
6. **Deploy the software**
7. **Maintain the software**

Long term consequences are important considerations. The idea that we ship first and fix later rarely works and if you screw up, you cannot fix it later because then you will be out of business. This also means that you should avoid all the hyped-up tech, development methodologies and deployment methodologies that are promoted as "the modern approach" and then embrace the "boring". The boring represents that which has been battle tested and proven over the years to work really well.

The hype over some specific product or method will eventually settle and either be discarded as useless or join the ranks of the boring.

My advice is that you don't sign-up your project to be a guinea pig for hyperbole.

Since a lot of design principles only concern theoretical problems we need to get rid of all that too.

Two things help greatly in discarding useless principles:

1. **Pragmatic experience**  
	If we have no experience, we need to [stand on the shoulders of others](https://idioms.thefreedictionary.com/stand+on+someone%27s+shoulders). " *I am building X and I am trying to achieve Y, will principle Z benefit me in relation to that? Why? How? What are the pros and cons?*"  
	We need to search for people with real life experience and avoid code methodology cult members.
2. **Investigation**  
	Investigation includes both study and a [trial and error](https://en.wikipedia.org/wiki/Trial_and_error) approach during testing, which eventually will lead to experience.  
	If you have a small application that only does a simple set of tasks, do you really need to consider e.g. the principle of separation of concern (SoC)? Does it make the maintainability of the software more convenient? Six months from now, will it help you understand your code better? Does it make the software run less efficient? Try it out and compare the results.

## Final comments

As software developers we need to be able to take at least a tiny amount of pride in the work we do and we need to try our best to make good solutions. Why should always strive to [keep our dignity and not sell our souls](https://unixdigest.com/articles/this-is-how-you-keep-your-dignity-and-not-sell-your-soul.html).

> I am just doing the job I am paid to do. If I don't do it, someone else will anyway.
> 
> ― Typical excuse stated by people who compromise their integrity

We also need to have an engineering attitude towards technology. We need to be curious about HOW the technology works and WHY. It is important in order to use the right tools and use them correctly, we cannot do that if we don't understand the tech.

I know working as a web developer for a company or a client that doesn't care about proper software development can be very frustrating. I personally reject such jobs as I don't want to be a part of something like that, but I have previously had clients who turned out to be people who's only concern were the speed of the development process, I didn't initially know that, but then they starting cutting corners. This has long term devastating consequences for the business.

Good companies exist out there too, companies who really care. Some have learned the hard way. Others have just been blessed with the right people or the right attitude from the get go.

When we have a choice, we should look at the products the company make and then ask ourselves if that is something we want to be associated with.

Let's stop making rubbish and try to work to make the Internet a better place for all.

## Recommended reading

- [Understanding the Digital World](https://openlibrary.org/books/OL32660845M/Understanding_the_Digital_World) by Brian Kernighan.
- [Coders at Work: Reflections on the Craft of Programming](https://codersatwork.com/) by Peter Seibel.