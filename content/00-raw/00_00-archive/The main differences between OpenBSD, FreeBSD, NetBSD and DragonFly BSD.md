---
unlisted: "true"
title: The main differences between OpenBSD, FreeBSD, NetBSD and DragonFly BSD
tags:
  - clippings
source: "https://unixdigest.com/articles/the-main-differences-between-openbsd-freebsd-netbsd-and-dragonflybsd.html"
published:
publish: "true"
modified: 2026-10-25
description:
created: 2026-10-25
author:
---

> [!danger] NOT MINE
> This is just a reference/bookmarked article from the internet i found interesting!

---

# The main differences between OpenBSD, FreeBSD, NetBSD and DragonFly BSD

People who consider trying out one of the different BSD variants, OpenBSD, FreeBSD, NetBSD or DragonFly BSD, often ask about the main differences between the four projects. In this article I am going to address that issue.

Even though all the four BSDs share a common ancestry with the [Berkeley Software Distribution](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution) (BSD), and even though all the BSDs can serve as a multi-purpose [operating system](https://en.wikipedia.org/wiki/Operating_system), they are independent projects and they are very different.

None of the BSDs are distributions, they are all complete operating systems.

## OpenBSD

Each developer working on [OpenBSD](https://www.openbsd.org/) has their priorities, but the main focus of the project is to be the number one most secure and robust operating system.

Other common goals are:

- Provide the best development platform possible. Provide full source access to developers and users, including the ability to look at CVS tree changes directly.
- Try to make the software stable and robust.
- Greater integration of cryptographic software.
- Track and implement standards (ANSI, POSIX, parts of X/Open, etc.)
- Support as many different systems and hardware as feasible.
- Be as politics-free as possible; solutions should be decided on the basis of technical merit.
- Focus on being developer-oriented in all senses.
- Do not let serious problems sit unsolved.
- Make a release approximately every six months.

**OpenBSD in a nutshell:**

![Picture of a tank](https://unixdigest.com/includes/images/openbsd-tank.webp)

## FreeBSD

[FreeBSD](https://www.freebsd.org/) is an operating system for a variety of platforms which focuses on features, speed, and stability.

Some of the main goals of the project are:

- Cutting edge features.
- Powerful and very fast Internet solutions.
- Advanced embedded platform.
- Run a huge number of applications.
- Easy to install.

**FreeBSD in a nutshell:**

![Picture of a Mercedes Brabus](https://unixdigest.com/includes/images/freebsd-brabus.webp)

## NetBSD

[NetBSD](https://www.netbsd.org/) users enjoy a simple, well-documented, and fully integrated UNIX-like system that feels minimal, and in many ways traditional, while including many modern and interesting features, and support for recent hardware.

Some of the main goals of the project are:

- Provides a portable system, which runs on many hardware platforms.
- Provides a well designed, stable, and fast BSD system.
- Avoid encumbering licenses.
- Interoperate well with other systems.
- Conforms to open systems standards as much as is practical.

**NetBSD in a nutshell:**

![Picture of a multi-purpose camper](https://unixdigest.com/includes/images/netbsd-camper.webp)

## DragonFly BSD

One of the original goals of the [DragonFly BSD](https://www.dragonflybsd.org/) project was performance-oriented, the project sought to do SMP in more superior ways to the work being done in other operating system kernels. The results of this process has been an immense improvement in scalability.

Some of the main goals of the project are:

- Extreme scaling with autotuning kernel resources and scaling metrics such as kernel hash-tables based on available memory.
- Kernel modifications with advanced thread scheduling.
- Development of the the DragonFly BSD device filesystem.
- Implement a virtual kernel feature for running DragonFly BSD kernels in userland inside DragonFly BSD kernels.
- Implement a revamped NFSv3 implementation which gets rid of the nfsiod threads and implements a fully asynchronous RPC mechanism using only two kernel threads.
- Development of the DragonFly BSD HAMMER filesystem.

**DragonFly BSD in a nutshell:**

![Picture of a large train](https://unixdigest.com/includes/images/dragonflybsd-train.webp)

## Final comments

Even though the technologies and goals listed here are correctly attributed to each project, this article does not do any of the projects justice - it was mostly meant as a humorous post (the pictures).
