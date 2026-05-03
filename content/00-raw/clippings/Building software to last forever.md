---
title: Building software to last forever
source: https://herman.bearblog.dev/building-software-to-last-forever/
author:
  - "[[Herman's blog]]"
created: 2025-10-31
description: How Bear is going to live a long and healthy life
publish: true
modified: 2026-04-19
tags:
  - clippings
id: 01KQQV6TWEDRF3RTJRYK6PJA97
---
> [!danger] NOT MINE  
> This is just a reference/bookmarked article from the internet i found interesting!

---

# Building software to last forever

I recently received the following email regarding [Bear](https://bearblog.dev/):

```
Hi,

I am a huge fan and love the service as it is. 

However, I am curious how the continuation of the service is guaranteed. 

- Joe
```

This is a great question, and one I have put a lot of thought into, even going so far as to put **"Built to last forever"** on the landing page. While drafting a lengthly reply I realised that I'd never articulated the design philosophy of Bear to anyone bar friends.

So, without further ado, here are the choices I made in designing and building Bear with regards to longevity:

### Software & Infrastructure

Software that is resilient is generally infrastructure agnostic. Bear is built using Django/Python and can be hosted on (almost) any infrastructure. This is opposed to, say, building using Firebase, where Google holds the reins and can change or [discontinue the product entirely](https://killedbygoogle.com/). Right now Bear runs on Heroku, but could be moved to a different provider at the drop of a hat (or run on a Raspberry Pi in my basement).

I explicitly decided to use Django, which is a battle-tested tool with a large, dedicated community. I steered clear of cutting-edge frameworks since there are more unknowns at scale, while Django is pretty well understood. This also allows someone else to pick up the development and maintenance more easily in the future as the tools aren't proprietary or niche.

On top of that, rendering is done server-side using the default templating system which reduces cross-browser compatibility issues. Bear will render the same on your kindle or smart fridge since all of the lifting is done on the server. It helps that there is minimal styling and that it uses vanilla HTML and CSS. So if you have internet access, Bear should work.

### Entity structure & Investment

Investors have their place in software projects, but not in this one. Bear is profitable and covers its operating expenses (which are quite small, given the nature of the product). I've found that funding tends to muddy the water in terms of product direction. This is something I'd like to avoid. We've seen incentive mismatches happen with Medium (and I foresee it happening to Substack) where monetisation is prioritised over product integrity. This is what happens with [$163 million in funding](https://www.crunchbase.com/organization/medium). The idea with Bear is to refine the existing features to the point of perfection, instead of building new features or pushing monetisation.

On top of that, there is a process in place to hand over the project to a trusted party in the worst case scenario. I'm only 30 as of this writeup, but I think it's prudent to ensure that the product outlives me if things go terribly wrong 💀. My broader plan is to form an entity or foundation that ensures the longevity of Bear. I'm still deciding on the exact structure and I am considering a non-profit similar to the [Django Software Foundation](https://www.djangoproject.com/foundation/).

### Personal accountability

And finally, I am inherently tied to Bear as part of my professional and technical identity. It's not something that is easily sold. I also run both my personal blog as well as my [company website](https://justsketch.me/) (where I actually draw a salary) on Bear, so I'm incentivised to improve and maintain the platform. In-so-doing everyone else benefits as well.

Bear is a project which I want to see grow, but not at the rate a Silicon Valley startups. When it comes down to it, my feelings towards my work are summarised in an older post of mine titled [My product is my garden](https://herman.bearblog.dev/my-product-is-my-garden/).

\--