---
unlisted: false
title: On the Capacity, Performance, and Reliability of microSD Cards
tags:
source: https://www.bahjeez.com/the-great-microsd-card-survey/
publish: true
modified: 2026-07-18
id: 01KQQV6TV4M3EFXM75RTP7WAPR
description: "Or: What are the best microSD cards you can get for under $15 in 2024 2025? Before you get in: Support me on Patreon! If you just want to see my (current) top picks, click here. If you want to see details on the cards I'm testing, click here. If you want..."
created: 2025-11-08
author:
  - "[[Matt Cole]]"
aliases:
  - 01KQQV6TV4M3EFXM75RTP7WAPR
---

> [!danger] NOT MINE
> This is just a reference/bookmarked article from the internet i found interesting!

---

# On the Capacity, Performance, and Reliability of microSD Cards

*Or: What are the best microSD cards you can get for under $15 in ~~2024~~ 2025?*

Before you get in:

- [Support me on Patreon!](http://patreon.com/MattCole)
- If you just want to see my (current) top picks, [click here](https://www.bahjeez.com/the-great-microsd-card-survey/#overall-picks).
- If you want to see details on the cards I'm testing, [click here](https://www.bahjeez.com/the-great-microsd-card-survey/results-explorer/).
- If you want to see the table with my raw data, [click here](https://www.bahjeez.com/the-great-microsd-card-survey/all-microsd-card-results/).
- If you want to see more ways you can help, [click here](https://www.bahjeez.com/the-great-microsd-card-survey/#how-can-i-help).
- If you want to read in more detail about the background behind this project and my methodology, read on!

## Introduction

MicroSD cards are ubiquitous nowadays, having found applications in a wide variety of consumer devices — including smartphones, digital cameras, and single-board computers. While innovation is continuing to take place in this space, the market has largely matured. There are a wide variety of brands, models, and capacities available today, but it could be argued that consumers see little difference — aside from capacity — from one brand or model of card to the next. This ubiquity has helped to drive prices down to the point where a card able to store hundreds of gigabytes of data can be obtained for less than the price of a single meal at an average restaurant.

As with any popular product, the market is littered with fakes. For example, 1 terabyte microSD cards from major brands — such as SanDisk or Lexar — cost around $70-$100, depending on the specific brand or model. A cursory search on Amazon for a 1 TB microSD card, however, yields off-brand (or no-brand) cards with prices as low as $12.99. How are these brands able to offer their products for far less than their name-brand competitors? In many cases, these cards are what is known as "fake flash" — cards that have been programmed to advertise a certain capacity to their host device, but whose actual capacity is far less. For example, a card advertised as having a capacity of 1 terabyte might have an actual capacity closer to 8 gigabytes. On these cards, the actual storage space is typically located at the beginning of the card's logical address space; writes that occur beyond the end of the available space are simply discarded, while reads will typically result in all zeroes. Additionally, most filesystem implementations will fill up the available space in a linear fashion. Altogether, this means that the user might not notice anything wrong until they've filled the card's physical space — at which point they will find that the data that was saved beyond the end of the card's physical space is simply gone and unrecoverable.

Fake flash is not completely worthless, however. If the true amount of physical space can be determined, the card's partition table can be adjusted so that filesystems do not take up more than the amount of physical space available on the card. But, how well do these cards perform — in terms of performance and durability — compared to their "legitimate" counterparts? Is there value in buying fake flash if the caveat on the amount of available space is known beforehand? This was the question that I sought to answer. And so, in July 2023, I began purchasing various brands and capacities of microSD cards — name-brand and off-brand, authentic-capacity flash and fake flash — and I've been testing them continuously since then.

On this page, I'm listing the results I've obtained so far. Keep in mind, this is an ongoing project — many of the cards I purchased are still undergoing testing, and others are still sitting in the packaging waiting to be tested.

**Disclaimer:** These tests are not being sponsored by anyone other than myself. All equipment and materials used have been paid for out of my own pocket. I'll update this if this ever changes.

## Criteria

For each card I purchased, I wanted to be able to answer the following questions:

1. **Authenticity:** Is the card the size it says it is, or is it fake flash?
2. **Performance:** How well does the card perform in reading and writing operations? Does the card perform well enough to merit the various speed class markings that appear on the card or the card's packaging?
3. **Endurance:** How much data can be written to the card before the card becomes unreliable or fails completely?

### Authenticity

On the authenticity front, I'm primarily concerned with whether or not a card is "fake flash". For the purposes of this survey, I'm defining "fake flash" to mean "SD media whose physical capacity is less than what is advertised to the host via its CSD register". (I don't have a method for determining whether a card has a capacity that is more than what is advertised… *yet*.)

As a secondary concern, I'm also going to be evaluating whether a card can be considered "skimpy flash". For the purposes of this survey, I'm defining "skimpy flash" to mean "any flash media whose physical capacity — as advertised to the host via its CSD register — is less than what is printed on the card's exterior or the product packaging". And, for the purposes of this survey, sizes will be evaluated using linear scales — that is, 1 terabyte = 1,000,000,000,000 bytes, 1 gigabyte = 1,000,000,000 bytes, and so on. For example, if a card is labelled as being 32GB in size, does it *actually* have at least 32,000,000,000 bytes of available space, or does it have something closer to 31,500,000,000 bytes of available space?

Why include this criteria? Because it can have a material effect on a user's experience with a card. Skimpy flash is a problem with name-brand and off-brand media alike — with a couple particular name-brands actually being the worst offenders in my survey (so far). (That said, there are a couple other name-brands that were actually the *least* offenders as well.) Consider, for example, two 64GB cards I obtained — one from Kioxia (the company formed as a result of Toshiba spinning off their flash memory division in 2018) that had a capacity of about 61.89GB, and one from Lexar that had a capacity of about 64.09GB. This is a difference of almost 2.2GB — or about 18 *minutes* of 1080p video (at 16Mbps).

### Performance

The SD Association has created a number of performance standards for SD cards, each with their own mark. Virtually all SD and microSD cards sold today carry at least one of these marks. I'm concerned with how well cards performed overall, but I'm also concerned with whether or not the card performed well enough to qualify for the markings that it bears — both on the packaging and on the card itself.

As of today, the SD Association has defined the following speed classes:

- **Class 2, 4, 6, 10:** These speed classes dictate that read and write speeds should be at least 2MB/sec, 4MB/sec, 6MB/sec, and 10MB/sec, respectively. Cards have an application unit (AU) size defined internally, and write performance is measured by the amount of time taken to write in a sequential fashion to a single AU. (In the case of SDXC and SDUC cards, write performance is measured over a single AU or a 4MB segment of an AU, whichever is smaller.) Read performance, on the other hand, is measured by the amount of time taken to perform 256 random read operations.
- **U1 and U3:** These speed classes dictate that read and write speeds should be at least 10MB/sec and 30MB/sec, respectively, when operating in UHS-I or UHS-II mode. The semantics of how performance is measured is largely the same as for Class 2/4/6/10.
- **Video Speed Class 6, 10, 30, 60, and 90:** Version 5 of the SD card specification added a set of video speed classes, as well as some new commands to control the operation of the card and place the card into Video Speed Class recording mode. When operating in this mode, these speed classes dictate that write speeds should be at least 6MB/sec, 10MB/sec, 30MB/sec, 60MB/sec, and 90MB/sec, respectively.
- **Application Performance Class 1 and 2:** These speed classes dictate a minimum number of random read and write operations per second (where each operation is 4KB in size), as well as a minimum sequential read and write speed of 10MB/sec. Application Performance Class 1 dictates a minimum of 1500 read operations per second and 500 write operations per second, while Application Performance Class 2 dictates a minimum of 4,000 read operations per second and 2,000 write operations per second.

Realistically, I don't have the ability to perform tests exactly as the SD specification prescribes (although I'm working on that), so I've tried to engineer tests that at least approximate the spirit of the test. Many of the cards I tested performed far beyond what would have been required for the speed class markings they carried, while others fell far short of them. Others fell into a gray area, where they came close to the thresholds needed to qualify for one or more speed class markings, but technically fell short — and until such time as I'm able to test them properly, I'm willing to concede that they might have qualified for a particular speed class marking had they been tested under the right conditions. I'll note these in my results.

### Endurance

This one is pretty simple: how long will the card last if we write to every available byte on the card? Flash media has a tendency to degrade and become less reliable the more it's written to, so I'm interested in seeing not only how many times we can write to the card before data errors start cropping up, but also how many times we can write to the card before it becomes completely unusable. I'm not sure there's a standard here — at least, the SD specification doesn't seem to define one — but I've seen things online indicating that 2,000 write cycles seems to be a reasonable expectation, so I'm going with that. Specifically, I want to see whether a card can reliably store data across at least 2,000 read/write cycles. Flash media isn't perfect — some data errors are bound to occur even before the card has hit the 2,000 write cycle mark — so some allowance will be made for data errors that occur early on, as long as the error does not recur shortly afterwards.

## Methodology

I had originally intended to use a combination of [f3](https://github.com/AltraMayor/f3) and [stressdisk](https://github.com/ncw/stressdisk) to perform these tests; however, after finding some shortcomings to both tools, I decided to write a single tool that would combine the functionalities of both. I've made the source code available [on GitHub](https://github.com/mikaey/mfst).

Admittedly, these tests have not been completely scientific in nature, despite my desire to do so — for example:

- I've been making code fixes to my tool as the project has gone on, and different cards were tested by the different versions of the program (or multiple versions of the program).
- I'm using multiple different models/brands of SD card reader (although I'm in the process of trying to migrate to a single model).
- I'm using different PCs that are running different versions of Ubuntu.

But, the general strategy I took is described in the following sections.

Most of these cards were tested on x86\_64 PCs running Ubuntu (although I have a couple of ARM SBCs, running Armbian, in the mix as well). SD cards are connected to SD card readers, which are attached to the system via USB. The device is opened with the `O_DIRECT` and `O_SYNC` flags to try to minimize the effects of caching by the system.

### Authenticity

The logical space on the card (not including the Protected Area, if any) is divided into eight equal or near-equal segments. The length of each segment is determined by taking the total number of sectors on the card and dividing by eight. (Side note: Linux always considers a sector to be 512 bytes, regardless of the physical size of the sector on the device.) A starting sector is then chosen in each segment:

- In the first segment, the starting sector is always sector 0.
- In the last segment, a random starting sector is chosen such that is at most 8MB from the end of the device. (**Note:** for the purposes of this test, 1MB = 1,048,576 bytes.)
- In the remaining segments, a random starting sector is chosen that is at most 4MB from the end of the segment.

Next, nine blocks of random data, each 4MB in length, are generated and held in memory. (This number was chosen in the hopes that it would exceed the foreseeable write cache size of any SD card by at least a factor of 2.) Each block is written to the card, in a linear fashion, starting with each of the starting sectors chosen earlier. The final 4MB is written in a linear fashion starting 4MB from the end of the device's logical address space. (**Edit 3/13/2024:** At some point I made a change so that the blocks are written in reverse order — e.g., starting with the last block and working back to the first. Within each block, however, data is still written sequentially from beginning to end.) Each block is then read back and compared to the data written. If all nine blocks match what was written to the card, the card is considered "genuine"; e.g., that its physical space matches (or possibly exceeds) the amount of space indicated in its CSD register. If the contents of the first block do not match what was written to the card, the card is considered unusable and testing stops completely. Otherwise, the card is considered "fake". The logical space on the card is then bisected, 4MB of new random data is generated and written starting at the sector in the center of the new window, then read back and compared to the data written. This process is repeated until the extent of the card's physical space has been determined.

I should note that my algorithm isn't perfect — I've come across some fake flash that purported to be 512GB (but in actuality was closer to 32GB) that was misidentified as being closer to 256GB in size. In these situations, I've been allowing the first round of the endurance test to run on the device and using the results of that to determine where the card's physical space ends.

### Performance

The performance test is divided into two parts: a sequential I/O test and a random I/O test. Each of these parts is divided into a read test and a write test. The read test is performed first, followed by the write test. Data obtained from read operations is not checked for consistency. USB3-enabled readers are used to ensure that the speed of the USB bus is not a bottleneck.

During the sequential I/O tests, data is read from or written to the device continuously for 30 seconds. Data is read from or written to the device in chunks equal to the logical sector size (512 bytes) multiplied by the maximum number of sectors per request (as indicated by a `BLKSECTGET` `ioctl` call). After 30 seconds have passed, the total amount of data read or written is divided by the amount of time actually taken (measured with microsecond resolution) to determine the sequential data rate measurement.

During the random I/O tests, data is read from or written to the device continuously for 30 seconds. Each read or write operations is targeted to a random sector in the card's physical storage space (as determined during the authenticity test). Data is read from or written to the device in 4KB chunks (as prescribed by section 4.16.2.4.2 of the SD Card Physical Layer Simplified Specification, version 9.0). After 30 seconds have passed, the total number of I/O operations is divided by the amount of time actually taken (measured with microsecond resolution) to determine the random IOPS measurement.

Again, these tests aren't perfect. In fact, there's a number of issues with them. For example:

- Most speed classes require you to issue a CMD20 command to the card to put it into an operating state where it will meet the demands of that speed class. Most USB card readers (including the ones I'm using) don't provide a way to issue arbitrary commands to a card. The reader might be issuing this command to the card transparently to my application, or it might not be — I just don't know.
- SD cards are divided into sections, called Application Units (or AUs). The Video Speed Classes in particular require certain commands to be issued to it to put the card into Video Speed Class mode and to specify which AU the host will be writing to. The host is then supposed to write only to that AU, in a sequential fashion (skipping over any blocks that are already in use). Once the host has reached the end of the AU, it must issue another command to specify which AU it will be writing to next. Again, my card readers don't provide a way for the host to issue these commands to the card, so my application isn't doing this. Given the complexity involved in using Video Speed Class mode, I doubt that any of the card readers I'm using are doing this transparently for me.
- The Application Performance Classes require the card to be preconditioned in a certain way — e.g., you're supposed to start by fully erasing the card, filling up 75% of it with data, then overwriting part of that data with 256MB of data (written in a sequential fashion). You're then supposed to use that 256MB region for performing the actual performance tests. The test itself is supposed to last for 10 minutes. My application does not do this — primarily because, when I initially wrote the random I/O tests, I got my technical details from Wikipedia, which fails to mention any of these details. Additionally, the host is supposed to issue a number of commands to the card to perform the preconditioning — for example, CMD38 is to be used to perform a full erase of the card; CMD25 is to be used when filling up 75% of the card; and, if Application Performance Class 2 is being tested, CMD45/CMD46/CMD47/CMD48 are to be used to perform the actual reading/writing. Again, my card readers don't provide a way to issue these commands to the card, so I have no way of doing this.
- In addition, read and write operations for the Application Performance Class tests are supposed to be 4KB-aligned. I didn't fix this in my code until just now.

So I think I'm going to say that my tests encompass the spirit of each of the speed classes…but until I learn Verilog and can program an FPGA to perform a proper set of speed tests, my tests aren't going to truly accurate.

### Endurance

The physical space on the card's user area (as determined during the authenticity test) is divided into 16 roughly equal segments — that is, the physical number of sectors is divided by 16 (rounding down), and each segment is assigned that number of sectors. The first segment begins at sector `(physical_number_of_sectors / 16) * 0`, the second segment begins at `(physical_number_of_sectors / 16) * 1`, the third segment begins at `(physical_number_of_sectors / 16) * 2`, and so on. If the number of physical sectors on the card is not evenly divisible by 16, any extra sectors are assigned to the last segment. (I'll note that while it's possible for an SDSC card — that is, a card that is 2GB or less in size — to have a number of sectors that is not evenly divisible by 16, it's not possible for an SDHC, SDXC, or SDUC card. This is because, for an SDHC, SDXC, or SDUC card, the card's capacity \[in bytes\] is determined by taking the contents of the `C_SIZE` field — from the card's CSD register — and multiplying it by 512KB (or 524,288), which is itself a multiple of 16 sectors \[or 8,192 bytes\]. However, in practice, the authenticity test frequently finds fake flash whose physical number of sectors is not a multiple of 16.)

At the beginning of each round, the order of the segments is randomized. Then, for each segment (in the order they appear in the randomized list), a seed is determined, and a pseudorandom number generator is initialized with that seed. Pseudorandom data is then generated and written to the entire segment in a sequential fashion.

Once all segments have been written, the order of the segments is randomized again. Then, for each segment (in the order they appear in the randomized list), the pseudorandom number generator is re-initialized using the same seed that was used when the data was written to that segment. The pseudorandom data is regenerated; the data is read back from the card (again, in a sequential fashion) and compared to the pseudorandom data. If any discrepancies are found, the sector in which discrepancy appeared is flagged as "bad". (The program continues to write to/read from sectors that have been flagged as "bad", but does not take any further action if further discrepancies are found in those sectors.)

One all segments have been read back, the round is considered complete, and the program moves on to the next round.

If an I/O error occurs, the program has logic to detect whether the device has become disconnected from the system. If it has, it pauses, displays a message to the user, and waits for the device to be reconnected. If the disconnect occurred during a write operation, the segment in which the error occurred is restarted to avoid any corruption that may have occurred due to the contents of any write caches being lost at the time of the disconnect.

If it is determined that the device is still connected to the system, the program has logic to retry the I/O operation a set number of times. If all of those attempts fail, the program attempts to perform a reset operation on the card reader. Once the reset is complete, the program makes another set of attempts to retry the I/O operation. This process is repeated a set number of times, or until the I/O operation completes successfully. If all retry/reset attempts are exhausted, the program flags the sector in which the error occurred as "bad" and moves on to the next sector. (I'll note that, at present, there is no distinction between a sector that has been flagged as "bad" due to a data discrepancy and a sector that has been flagged as "bad" due to a failed I/O operation; therefore, the program will still attempt to read and write to the sector on future rounds.)

This process repeats until any of the following conditions are met:

- An I/O error occurs, a reset operation is performed, and the reset attempt failed
- 50% or more of the sectors on the card have been flagged as "bad"

In the former case, there have been some instances where I've been able to "resurrect" the card and continue testing — generally by physically unplugging the card reader from the system and plugging it back in. If the card comes back to life through such a measure, I've generally allowed the endurance test to continue.

### Card Readers Used

I've used the following card readers in my testing so far:

- [SmartQ Single](https://www.amazon.com/gp/product/B06ZYXR7DL/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1): A nice low-cost SD card reader that supports USB 3.0. However, in my testing, this reader has a tendency to stop responding after extended continuous use (generally once every few days). The reader has to be physically unplugged and reconnected to continue working.
- [SmartQ Duo](https://www.amazon.com/gp/product/B07VB6C3QJ/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1): Slightly more expensive than the SmartQ Single and sporting an almost identical form factor, it supports dual LUNs (meaning that it can operate on two cards simultaneously — one in the microSD slot, one in the full-size SD slot). It doesn't seem to have the same problems with disconnects that the SmartQ Single does.
- [SanDisk MobileMate](https://www.amazon.com/gp/product/B07G5JV2B5/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1): A compact reader that only accepts microSD cards. SanDisk has a technology that allows for faster transfer rates than is possible under the UHS-I protocol (up to 170MB/sec), and requires both a compatible card and a compatible reader to achieve. This reader supports these enhanced transfer rates.
- [JJC CR-UTC4AC](https://www.amazon.com/dp/B09T63PQ1W?ref=ppx_yo2ov_dt_b_product_details&th=1): A slightly larger, but still compact, SD/microSD card reader. This is a dual-LUN reader that supports UHS-II, and features USB-C, USB-A, and micro-USB connectors (although the micro-USB connector only supports USB 2.0). This has quickly become my reader of choice as it is only slightly more expensive than the SanDisk MobileMate while supporting UHS-II. I'll note that some of these readers were sourced from Amazon Marketplace, while others were sourced from AliExpress; however, they are physically identical (at least on the exterior), and the product packaging was identical. I believe that there are no differences between the two.
- Lexar LRWM05U-7000: This is a compact UHS-II-compatible microSD reader that was bundled with the three Lexar Professional cards I purchased. It looks like Lexar doesn't sell these by themselves.
- [Prograde Digital Dual Slot Mobile Reader](https://www.amazon.com/gp/product/B0B69GX2PX/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1): A compact SD/microSD card reader with dual slots and dual LUNs that sports a USB-C connector and supports USB 3.2 and UHS-II. At some point I made the decision that I wanted to have at least one UHS-II-compatible card, and went in search of a good quality UHS-II-compatible card reader. This one initially appeared to be the best/cheapest option (until I later discovered the JJS CR-UTC4AC). I haven't noticed any significant difference in performance between this one and any of the other readers I'm using. Its main downside is its USB-C connector — only because I only have a single USB-C port across the two machines that I'm presently using.
- [Platinum PT-CRSA1](https://www.bestbuy.com/site/platinum-uhs-i-usb-3-2-gen-1-memory-card-reader-black/6439244.p?skuId=6439244): A more moderately-priced single LUN SD/microSD card reader. Honestly, I bought this one because I ran out of SD readers, and I happened to be at Best Buy at the time, and I wanted to see if they had anything comparable to what I had been using. This happened to be the cheapest USB 3.0-compatible card reader they had. I would say it's been *fine*, but I won't be buying any more of these — partly because the JJS CR-UTC4AC is a better value for slightly less money, but partly because Best Buy doesn't carry them anymore.
- [Togconn TOG-SD-CR](https://www.amazon.com/gp/product/B0BXKFDKKS/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1): A nice low-cost multi-LUN card reader. This reader can read two SD cards, a Memory Stick, a CompactFlash card, and an xD card simultaneously. (This reader has two full-size SD card slots and two microSD card slots, but each full-size SD/microSD slot pair are a single LUN.) At one point, I was looking to see if there was a cost-effective way to test multiple cards at the same time. While there are readers out there that will read four SD cards simultaneously, they cost more than what I wanted to pay — so I settled on this one instead. Originally the plan was to use a microSD-to-Memory Stick adapter, a microSD-to-CompactFlash adapter, and a microSD-to-xD adapter to fill all of the available slots on this card reader; however, my results have been disappointing. While the microSD-to-CompactFlash reader is working well, I quickly noticed that a microSD card plugged into a microSD-to-Memory Stick adapter appeared to the reader as the wrong size. Reviews of microSD-to-xD adapters indicated poor results as well, so I opted not to even try. Consequently, I currently have two microSD cards plugged directly into this reader, with a third card plugged in using a [QUMOX B664U microSD-to-CompactFlash adapter](https://www.amazon.com/gp/product/B019RD86NI/ref=ppx_yo_dt_b_asin_title_o09_s01?ie=UTF8&psc=1). (I'm not using the second port on the QUMOX, as that would cause it to RAID the two cards together — which I don't want.)
- Realtek RTS5129: This card reader isn't one I purchased directly; rather, it was built into one of the laptops that I used as one of my test rigs. Its primary advantage is that the Linux kernel module presents it as an SD/MMC reader (rather than a generic block storage device, as with all the other readers I've used). Since it's wired up to the USB 2.0 bus internally, I didn't use it for any performance testing; I only used it to read the contents of the various card registers for later analysis.
- [ASUIZO CAZE](https://www.indiegogo.com/projects/caze-full-protection-high-speed-card-reader-case/x/708561#/): This is another dual LUN reader that I picked up from Indiegogo. It supports UHS-II and USB 3.1 gen 2, as well as providing rugged storage for multiple SD cards, SIM cards, and a SIM card removal tool.

### Overall Scoring

As I was working on writing this, I realized that I needed a rating system for these cards. I was originally just looking at the top 10 in each of the three categories, but it became apparent that there were no crossovers between the top 10 in all three categories. There were a few that appeared in the top 10 in both the capacity and endurance categories — but it was only four of them, and two were from brands that were known to put out fake flash. That wasn't ideal — so I decided to come up with a different system.

Here's how it's going to work:

- Each model will receive a separate score in each of the three categories (capacity, performance, and endurance). The total score for that model will be the average of the three scores.
- The score for the capacity test will be the distance, in standard deviations, of that model's average skimp score from the average skimp score for all cards. Since we want to penalize fake flash and (to a lesser extent) skimpy flash, we're going to negate the score — ergo, fake flash will generally have a negative score here, and genuine flash will generally have a positive score.

	Let's look at an example. Let's say a card has a skimp score of 3.3%, the average is 14.29%, and the standard deviation is 31.33%. This would mean that the card's skimp score is actually 0.35 standard deviations *below* average (`(3.3 - 14.29) / 31.33 = -0.35`). We then negate this result, which would give us a score of +0.35.

	This is going to penalize fake flash — and hard — and that's kinda the idea. We don't want to reward fake flash *at all*.
- The score for the performance test will consist of four sub-scores, for each of the performance metrics (sequential read speed, sequential write speed, random read speed, random write speed), averaged together. As with the capacity test, we'll use the distance, in standard deviations, from the average. Here, we want to reward faster-performing cards, so we're not going to negate the scores like we did with the capacity score — the best-performing cards will generally have a positive score, while the worst-performing cards will generally have a negative score.

	Let's look at an example. Let's say a card got 100MB/sec sequential read speeds, 50MB/sec sequential write speeds, 2,000 IOPS/sec random read speeds, and 250 IOPS/sec random write speeds. Now, let's say the averages are 50MB/sec sequential read speeds, 25MB/sec sequential write speeds, 1,000 IOPS/sec random read speeds, and 350 IOPS/sec random write speeds. Finally, let's say the standard deviations are 25MB/sec in sequential read speeds, 25MB/sec in sequential write speeds, 100 IOPS/sec random read speeds, and 50 IOPS/sec random write speeds. That would mean that the card scored 2 standard deviations above average in sequential read speeds (`(100 - 50) / 25 = 2`), 0 standard deviations above average in sequential write speeds (`(50 - 50) / 25 = 0`), 10 standard deviations above average in random read speeds (`(2000 - 1000) / 100 = 10`), and 2 standard deviations *below* average in random write speeds (`(250 - 35) / 50 = -2`). The individual scores for this card would be 2, 0, 10, and -2. We then take the four scores and average them together, giving it an overall performance score of 2.5 (` ( 2 + 0 + 10 + -2 ) / 4 = 2.5`).
- The score for the endurance test will consists of six sub-scores: one for the number of read/write cycles the card endured before experiencing its first error, and one each for how many read/write cycles the card endured before 0.1%, 1%, 10%, 25%, and 50% of the sectors on the card have been marked as "bad". If a card fails before reaching any of these thresholds, they will be considered to have instantly hit those thresholds. We want to reward cards that fail more slowly, so we're going to take each threshold and subtract it from the previous one to figure out how many read/write cycles it went between hitting each one. For example, if a card hits the 1% threshold after 2,500 read/write cycles, and it hits the 10% threshold after 3,500 read/write cycles, then we'll use the difference between the two — 1,000 in this example — as the basis for calculating the score. We'll then figure out the distance, in standard deviations, from the average for each category, and finally we'll average all six scores together.

	Ok, that was a mouthful, so let's look at an example. Let's say a card experiences its first error at 1,000 read/write cycles, it hits the 0.1% threshold after 2,000 read/write cycles, the 1% threshold after 3,000 read/write cycles, the 10% threshold after 4,000 read/write cycles, the 25% threshold after 5,000 read/write cycles, and the 50% threshold after 6,000 read/write cycles. That means that we would use 1,000 as the basis for calculating each score.

	Now, let's say that the average for each category is 500, and the standard deviation is 250. A score of 1,000 would be two standard deviations above the average (`(1000 - 500) / 250 = 2`), so the card would receive a score of 2 in each of the six categories. We then take the average of all six scores — which would be 2, so the card would receive a score of 2 for endurance.

This isn't a perfect system — obviously, a card's score is going to change whenever I test any other card — but it does give us something that lets us easily and objectively rate one card in comparison to the others. A perfectly average card will have a score of 0; a below average card will have a negative score; and an above average card will have a positive score.

## Results

There's a number of ways I could break down this data. Since I did define some goals for this project, let's go in order of those goals.

### Capacity

As I said earlier, I wanted to identify whether these cards really offered the capacity that they advertised. For this result, I created a metric called "skimp" — which I'm defining as:

*S* = 1 – (*C* <sub>Physical</sub> / *C* <sub>Package</sub>)

Where *C* <sub>Physical</sub> is the card's physical capacity, *C* <sub>Package</sub> is the capacity advertised on the package (or in some cases, on the exterior of the card or on the product listing for the card), and *S* is the skimp factor, expressed as a percentage. Think of it like the answer to the question of "how much capacity am I losing because the actual physical capacity of the card is lower than what's advertised on the package?" Lower numbers (or even negative numbers) are better. For example, if a card is advertised as being 8GB in size, and the physical storage capacity is 7.8GB, then it would have a skimp factor of 2.5%, because you lost 2.5% of the stated capacity of the card. On the other hand, if a card is advertised as being 8GB in size, and it turns out to actually be 8.2GB in size, then it would have a skimp factor of -2.5%. I used linear scaling for data storage prefixes (e.g., one kilobyte = 1,000 bytes, one megabyte = 1,000 kilobytes, etc.), because if I had used binary scaling, no card would have had a skimp level anywhere close to 0.

So…is there a difference between the cards I got from Amazon vs. the cards I got from AliExpress?

(Error bars represent the range of values obtained.)

At first glance, it would look like the AliExpress cards were a lot more skimpy — and they were — but there's a reason for this: I only ordered authentic cards from Amazon, whereas I ordered a mix of authentic and fake cards from AliExpress.

What if we narrow down the data to just the authentic cards from both marketplaces?

Well, the margin is a little closer here, but the AliExpress cards were still skimpier. Why is that? Let's break this down further: both by which marketplace I obtained them from, and by brand/model. (Note that I'm adding the off-brand/knockoffs back in — just so that I don't have to make another chart later that has all the cards.)

(Side note: I like making rainbows.)

Admittedly it's kinda hard to tell with this chart — because it includes the fake cards, and the chart has to scale to show those ~~— but aside from the Kingston Canvas Select Plus's, all of the Amazon cards had a skimp factor of 0.65% or less, whereas the AliExpress cards — even the name-brand ones — were all over the place (with the Kioxia Exceria Plus 32GB being the worst non-fake flash offender, coming in at a skimp factor of 3.32%).~~ (This statement is no longer true — I've ordered **plenty** of cards from Amazon now that have had skimp factors way above 0.65%, with some of them being over 5%.)

From this data, I think we can draw a couple of conclusions:

- Authentic cards generally (but not always) have a skimp factor of 5% or less.
- Fake cards generally have a skimp factor of 50% or more.

Is it possible for a card to be fake and have a skimp factor of less than 50%? Sure — but in practicality, it doesn't seem to happen. I think it's more practical for fake flash sellers to scale up the logical storage space by a factor of 2 or more. (**Edit:** OK, the QWQ Extreme Pro 16GB and the Somnambulist 128GB proved me wrong here.)

By that same token, is it possible for an authentic card to have a skimp factor of more than 5%? Sure — I just didn't find any examples of this happening.

We can also pick out the top 10 performers in this category:

1. ATP Industrial 4GB
2. Auotkn Extreme 8GB
3. QEEDNS 8GB
4. Kingston Industrial 8GB
5. Bekit 8GB
6. Lexar Professional 1000x 64GB
7. Samsung EVO Plus 64GB
8. Samsung PRO Endurance 32GB
9. Samsung PRO Plus 128GB
10. Samsung EVO Plus 32GB

(**Note:** The charts above are being automatically rendered using data from my spreadsheet — so it's possible that the charts above indicate a different top 10, and I just haven't updated the list above. The list here is current as of 10/18/2025.)

Here's how these cards lined up on my rating scale:

We can also look at these cards from another angle: price per gigabyte:

Here, we can see that the AliExpress cards had a little bit of an advantage. Here's how it shook out for all of the cards I've tested so far:

Here, the Lenovo thinkplus 128GB is the winner.

October 18, 2025

### Performance

The second goal of this project was to look at performance — so let's compare how the Amazon cards performed when compared to the AliExpress cards.

(Error bars represent the range of values obtained.)

At first glance, it would appear that there's a marked difference between the Amazon cards and the AliExpress cards — with Amazon cards performing better than the AliExpress cards across the board and with less variability in scores across Amazon cards vs. AliExpress cards. Again, however, I obtained mostly name-brand cards from Amazon, whereas I got a mix of name-brand, off-brand, and knock-off cards from AliExpress. What if we separate the AliExpress cards out into name-brand cards, off-brand cards (fake and authentic), and knockoff cards (fake and authentic)?

Well…it still looks like the Amazon cards did better than the name-brand cards I got from AliExpress.

But it also highlights a couple more important differences:

- Categorically, off-brand cards did worse than name-brand cards in all performance metrics.
- Categorically, knockoff cards did worse than off-brand cards, and *much* worse than name-brand cards, in all performance metrics. (Yes, most of the fake cards I tested got less than 10 write operations per second on the random write test. Yes, some of them got *less than one write operation per second*. I don't know how they managed to suck so bad…but they found a way.)

Ok, let's spin this a different way: which cards performed the best? First, let's look at the individual scores in each category. Error bars here represent the range of values obtained — ideally, you want to see values that are clustered closer together (e.g., smaller error bars), as this indicates that the individual samples are mostly consistent with each other.

Now, how did these cards score according to my ratings system?

The graphs in this section are all dynamically generated from my data — so the top 10 may change at any point. But as of this writing, the top 10 would be:

1. SanDisk microSD EXPRESS 128GB
2. Kingston Canvas Go! Plus 64GB
3. PNY PRO Elite Prime 64GB
4. SanDisk Extreme 64GB
5. PNY Premier-X 128GB
6. Delkin Devices HYPERSPEED 128GB
7. HP MicroSDXC mx330 64GB
8. Kingston High Endurance 32GB
9. Kioxia Exceria G2 64GB
10. Samsung EVO Plus 64GB

We can also look at this a different way: which cards would work best in certain applications?

When using a microSD card in a digital camera, sequential write speeds are generally going to be the most important. When taking still photographs, the camera must generally be able to write the picture out to the card before it can take the next one (although most cameras can usually store a certain amount of data in RAM to allow for bursts) — so faster write speeds means the camera can be ready to take the next picture sooner. When shooting video, the camera has to be able to write data out to the card faster than the camera can generate it — if it can't, it generally has to stop recording video. Sequential read speeds are important as well, as you generally want to be able to offload pictures and videos — to, say, your computer — very quickly.

The nice thing about this ratings system is that I can very easily re-weight certain categories. So for this rating, let's give the sequential write speed double weight, and random I/O scores half weight:

So, for photography/videography, my top picks here would be:

1. SanDisk microSD EXPRESS 128GB
2. Kingston Canvas Go! Plus 64GB
3. PNY PRO Elite Prime 64GB
4. SanDisk Extreme 64GB
5. PNY Premier-X 128GB
6. SanDisk ImageMate PRO 128GB
7. Delkin Devices HYPERSPEED 128GB
8. Kioxia Exceria G2 64GB
9. HP MicroSDXC mx330 64GB
10. SanDisk Extreme 32GB

The other way we could look at it is in something like a tablet, mobile phone, or mobile game console (like a Nintendo Switch or a Steam Deck). Here, random read speeds are going to be most important — as you want your apps/games to load quickly. Sequential write speeds are going to be a factor as well — as that's going to affect how quickly you can download new apps and games.

So let's re-weight these cards — we'll give random read speeds double weight, and we'll give random write and sequential read speeds half weight:

So, the top picks here would be:

1. SanDisk microSD EXPRESS 128GB
2. Kingston Canvas Go! Plus 64GB
3. PNY PRO Elite Prime 64GB
4. SanDisk Extreme 64GB
5. PNY Premier-X 128GB
6. Delkin Devices HYPERSPEED 128GB
7. Kioxia Exceria G2 64GB
8. HP MicroSDXC mx330 64GB
9. Samsung PRO Endurance 32GB
10. Kingston High Endurance 32GB

There are several here that appear on all three lists, and I think I'm going to declare them to be "all-around good performance cards":

1. SanDisk microSD EXPRESS 128GB
2. Kingston Canvas Go! Plus 64GB
3. PNY PRO Elite Prime 64GB
4. SanDisk Extreme 64GB
5. PNY Premier-X 128GB
6. Delkin Devices HYPERSPEED 128GB
7. HP MicroSDXC mx330 64GB
8. Kioxia Exceria G2 64GB

July 20, 2025

### Endurance

This is an area where it's going to take *a while* to get conclusive results. It takes time to test these cards, and some of them last longer than others. Take the Hiksemi NEO 8GB, for example: sample #1 has been going nearly non-stop for over a year and a half, has completed over 92,000 read/write cycles, and hasn't experienced a single error so far. Its small capacity (relatively speaking) is one of the main reasons it's been able to complete so many read/write cycles — it has averaged about 143 read/write cycles completed per day. Compare this to sample #2 of the Kingston Canvas Select Plus 32GB — which performed similarly in performance tests — which is only averaging about 25 read/write cycles per day. Larger cards are moving even more slowly: for example, the three Hiksemi NEO 128GB samples have averaged between 4.8 and 7.3 read/write cycles per day. At these rates, it takes between 9 and 15 *months* to test a card to 2,000 read/write cycles — not to mention how long it would take a particularly reliable card to be tested to the point of failure.

Nevertheless, after a year of testing, I've obtained a fair amount of data, and I think it's worth sharing.

So…let's go over some high-level findings.

Time to first error is the number of read/write cycles completed, without errors, before the card encounters its first error. In this context, "errors" includes unrecoverable I/O errors, data mismatches between what was written to the card and what was read back, and other failures that cause the card to become unusable. Note that cards that have not yet experienced their first error are not included in these figures unless otherwise noted.

In this area:

- The average number of read/write cycles completed before first error, for all cards, was 2,562, with a median value of 1,502 (*n* =196, min=0, max=20,876).
- Name-brand cards obtained from Amazon performed markedly better than name-brand cards obtained from AliExpress. The average time to first error for name-brand cards from Amazon was 3,738 read/write cycles, with a median value of 1,487 (*n* =38, min=0, max=20,876); for name-brand cards from AliExpress, the average was 1,633 read/write cycles, with a median value of 1,294 (*n* =45, min=0, max=6,356).
- Name-brand cards performed similarly to off-brand cards (not including fake flash cards). The average time to first error for name-brand cards was 2,785, with a median value of 1,487 (*n* =86, min=0, max=20,876); while the average for off-brand cards was 2,735 read/write cycles with a median value of 1,774 (*n* =79, min=0, max=15,934). If you've been watching this page, you should note that this is a reversal from how I had reported this result previously: in the past, name-brand cards had performed markedly worse than off-brand cards. However, as time has gone on and I've obtained more data, name-brand cards have closed the gap.
- Unsurprisingly, fake flash performed significantly worse than authentic flash. The average time to first error for fake flash was 1,537 read/write cycles, with a median value of just 408 (*n* =30, min=0, max=10,582); for authentic cards, the average was 2,747, with a median value of 1,587 (*n* =166, min=0, max=20,876).
- Among name brands — depending on how you look at it, Samsung and Kingston are currently the top performers in this category. Samsung has the highest *average* time to the first error, at 5,814 read/write cycles (*n* =6, min=0, max=17,514); however, Kingston has a higher *median* time, at 2,865 read/write cycles (n=10, min=5, max=8,800). Lenovo was the worst performer, completing an average of 291 read/write cycles before encountering their first error (*n* =3, min=246, max=320). (However, expect this to change in the future — as I have more Lenovo cards in the works.)
	- There are name-brand cards that have performed exceptionally well, but are not included here because they have not experienced their first error. If all of these cards experienced their first error now, Kingston would be the top performer.
- Among off-brand cards (not including fake flash cards), Microdrive performed the best, completing — on average — 7,333 read/write cycles before encountering their first error, with a median value of 6,973 (*n* =3, min=4,270, max=10,757). XrayDisk was the worst performer, completing — on average — just 27 read/write cycles before encountering their first error, with a median value of 12 (*n* =3, min=2, max=67).
	- Once again, there are some cards that have performed exceptionally well, but are not included here because they have not encountered their first error. If all of these cards experienced their first error now, ATP would become the top performer.

The chart below shows the distribution of the number of read/write cycles completed before first error for all cards. (Note that this graph updates automatically from my data — so it might be out of sync with anything I said above.)

The graph below shows percentile rankings for the various categories of cards I discussed above. (Again, this graph updates automatically from my data — so it might be out of sync with anything I said above.)

August 31, 2025 (charts/graphs update automatically)

It should be noted that a number of cards suffered errors early on, but many times those errors tended to be minor — affecting perhaps only a handful of sectors, and not recurring for some time. I'm not sure if these errors are being caused by the cards, or if some other factor is involved — such as issues with saturation of the USB bus, issues with the readers, issues with the Linux kernel, or something else entirely. Perhaps these issues wouldn't come up in real-world use. It's also possible that these errors might arise during normal use, but would go unnoticed by the user because they occurred so infrequently or affected files that would never be used (such as log files that get automatically overwritten).

It might be more useful to examine the time to 0.1% failure — that is, the number of read/write cycles a card can complete before 0.1% of the sectors on the card have experienced errors. By the time a card reaches this point, a user would likely start to notice corruption in their files and/or filesystem corruption and would begin to suspect that the card had gone bad.

Note that these figures only include cards that have reached the 0.1% failure threshold unless otherwise noted:

- The average time to 0.1% failure, for all cards, was 5,097 read/write cycles, with a median value of 3,161 read/write cycles (*n* =125, min=0, max=46,310).
- Once again, name-brand cards obtained from Amazon performed better than name-brand cards obtained from AliExpress. The average for name-brand cards from Amazon was 7,707, with a median value of 5,215 (*n* =19, min=921, max=20,876), while the average for name-brand cards from AliExpress was 6,640, with a median value of 3,486 (*n* =14, min=1,326, max=46,310).
- Name-brand cards performed better than off-brand cards (not including fake flash). The average for name-brand cards was 7,254, with a median value of 3,882 (*n* =33, min=921, max=46,310); while the average for off-brand cards was 5,341, with a median value of 4,238 (*n* =62, min=0, max=19,851).
- Again — unsurprisingly — fake flash performed significantly worse than authentic flash. The average for fake flash was 2,249 read/write cycles, with a median value of just 652 (*n* =29, min=0, max=14,670); while the average for authentic flash was 5,957 read/write cycles, with a median value of 4,080 (*n* =96, min=0, max=46,310).
- Among name brands, ATP had the highest time to the 0.1% failure threshold, at 46,310 read/write cycles — however, this is (as of the time of this writing) based off of a single card. The next runner-up was Samsung, with an average time of 14,530 read/write cycles — but this is (as of the time of this writing) based off just two cards. Third place goes to Lexar, with an average of 9,511 read/write cycles; however, this is based off the results of a single card. SP was the worst here, with an average of just 2,000 read/write cycles and a median value of 1,776 read/write cycles (*n* =6, min=921, max=3,882).
	- If all cards — that have not yet reached the 0.1% failure threshold — were to reach the 0.1% failure threshold now, ATP would still take the top spot. Kingston would come in second, and Lexar would come in third. Kingston's #2 spot is being propped up by how well the Kingston Industrial 8GB cards have done; if we were to exclude these from the results, Lexar would take the #2 spot, and Kingston would come in a close third. Patriot would come in last place — but that's only because I just recently started testing them. SP would be the next-worst.
- Among off-brand cards (not including fake flash), OV performed the best, with an average of 17,021 read/write cycles before reaching the 0.1% failure threshold — but this is based off the results of a single card. Hiksemi came in second place, with an average of 9,813 read/write cycles and a median value of 8,685 read/write cycles (*n* =5, min=5,165, max=19,851). QWQ performed the worst, with an average of 1,156 read/write cycles (*n* =3, min=274, max=1,916).
- If all cards — that have not yet reached 0.1% failure threshold — were to reach the 0.1% failure threshold now:
	- Between cards sourced from AliExpress vs. Amazon, the data would skew a little in favor of cards sourced from AliExpress. This holds true even if you look at just name-brand cards from AliExpress vs. name-brand cards from Amazon.
	- Between name-brand cards, off-brand authentic cards, and fake flash cards, the data would skew in favor of name-brand cards by a pretty wide margin.

The graph below shows the distribution of the number of read/write cycles completed before reaching 0.1% failure for all cards. (Once again, this graph updates automatically from my data — so it might be out of sync with anything I said above.)

The graph below shows percentile rankings for the various categories of cards I discussed above. (Again, this graph updates automatically from my data — so it might be out of sync with anything I said above.)

September 1, 2025 (charts/graphs update automatically)

#### Time to 1% Failure

By the time a card reaches a 1% failure rate, the user would likely notice major issues with the card — filesystem structures would likely be corrupted, files would likely be corrupted, and there's a good chance that the card would have to be reformatted — resulting in data loss — in order to become usable again.

This measure is slightly less useful than the previous two measures; however, there are some use cases where it might still be useful — for example, when considering a card that is going to be used in a device where data will be continuously overwritten and rarely read, such as a dashcam or security camera, In this type of situation, the user may not notice any issues until it affects filesystem structures, causing the device to exhibit errors when it tries to read those structures from the card. The "time to 0.1% failure" measure may be useful for determining when it's time to replace the card, while this measure may be more useful for determining when the card has reached the end of its useful lifespan.

Again, note that these figures only include cards that have reached the 1% failure threshold.

In this area:

- The average time to 1% failure, for all cards, was 5,322 read/write cycles, with a median value of 3,724 read/write cycles (*n* =123, min=0, max=46,368).
- Between name-brand cards sourced from AliExpress vs. name-brand cards sourced from Amazon, name-brand cards sourced from Amazon fared better than name-brand cards sourced from AliExpress. The average for name-brand cards sourced from Amazon was 7,707, with a median value of 5,215 (*n* =19, min=921, max=20,876); while the average for name-brand cards sourced from AliExpress was 6,645, with a median value of 3,486 (*n* =14, min=1,326, max=46,368). These results are virtually identical to the same set of results in the "time to 0.1% failure" section above; the reason for this — at least, in my observation — is that name-brand cards tend to either stop responding to commands or make themselves read-only long before reaching the 0.1% failure threshold. (In my result set, when a card dies before reaching a given threshold, that threshold is filled in using the number of read/write cycles successfully completed before failure — thus, a card that fails before reaching the 0.1% failure threshold will show the same number of cycles for the time to the 0.1%, 1%, 10%, 25%, and 50% failure thresholds.)
- Between name-brand cards and off-brand cards (not including fake flash), name-brand cards performed better. The average for name-brand cards was 7,256, with a median value of 3,882 (*n* =33, min=921, max=46,368); for off-brand cards, the average was 5,412, with a median value of 4,384 (*n* =60, min=0, max=19,851). Once again, the values for the name-brand cards are almost identical to those from the "time to 0.1% failure" section above — and again, this is because — in my observation — name-brand cards tend to stop working well before reaching the 0.1% failure threshold, while off-brand cards more often tend to "fail" by reaching the 50% failure threshold.
- Once again, fake flash performed significantly worse than authentic flash. The average for authentic flash was 6,018 read/write cycles, with a median value of 4,240 (*n* =94, min=0, max=46,368); the average for fake flash was 3,067, with a median value of just 763 (*n* =29, min=0, max=15,514).
- I'll note that a lot of cards die (or make themselves read-only) before they make it to the 1% failure threshold. Of the 119 cards I have that have died so far, only 55 survived long enough to make it past the 1% failure threshold.

The graph below shows the distribution of the number of read/write cycles completed before reaching 1% failure.

The graph below shows percentile rankings for the various categories of cards I discussed above. (Again, this graph updates automatically from my data — so it might be out of sync with anything I said above.)

September 2, 2025 (charts/graphs update automatically)

#### Time to 10% Failure

By the time a card reaches 10% failure, the card is likely to be completely unusable. Files and filesystem structures are likely to be corrupted, rendering most data unusable and only partially recoverable. I don't think there's much of a use case here for not noticing issues with a card by the time it reaches the 10% failure threshold, so these statistics are primarily for curiosity more than anything.

Again, note that these figures only include cards that have reached the 10% failure threshold.

In this area:

- The average time to 10% failure, for all cards, was 5,651 read/write cycles, with a median value of 3,724 (n=121, min=0, max=26,558).
- Between name-brand cards sourced from AliExpress vs. name-brand cards sourced from Amazon, name-brand cards sourced from Amazon fared better than name-brand cards sourced from AliExpress. The average for name-brand cards sourced from Amazon was 7,707, with a median value of 5,215 (*n* =19, min=921, max=20,876); while the average for name-brand cards sourced from AliExpress was 6,658, with a median value of 3,486 (*n* =14, min=1,326, max=46,527). Once again, these results are virtually identical to the results in the "time to 0.1% failure" and "time to 1% failure" sections above; and again, the reason for this — at least, in my observation — is that name-brand cards tend to either stop responding to commands or make themselves read-only long before reaching the 10% failure threshold.
- Between name-brand cards and off-brand cards (not including fake flash), name-brand cards performed better. The average for name-brand cards was 7,262, with a median value of 3,882 (*n* =33, min=921, max=46,527); for off-brand cards, the average was 5,577, with a median value of 4,299 (*n* =58, min=0, max=22,535). Once again, the values for the name-brand cards are almost identical to those from the "time to 0.1% failure" section above — and for the same reasons that I stated above.
- Once again, fake flash performed significantly worse than authentic flash — although interestingly, fake flash closed the gap a bit in this category. The average for authentic flash was 6,138 read/write cycles, with a median value of 4,172 (*n* =92, min=0, max=46,527); the average for fake flash was 4,105, with a median value of just 1,334 (*n* =29, min=0, max=27,564).
- I'll note that most cards die (or make themselves read-only) before making it to the 10% failure threshold. Of the 119 cards I have that have failed so far, only 48 survived long enough to make it to the 10% failure threshold.

The graph below shows the distribution of the number of read/write cycles completed before reaching 10% failure.

The graph below shows percentile rankings for the various categories of cards I discussed above. (Again, this graph updates automatically from my data — so it might be out of sync with anything I said above.)

September 2, 2025 (charts/graphs update automatically)

#### Time to 25% Failure

By the time a card reaches the 25% failure threshold, it's extremely likely that the card will be completely unusable. Once again, I can't think of a use case where someone would allow a card to continue operating until it reaches this point, so these numbers are purely for curiosity.

Again, note that these figures only include cards that have reached the 25% failure threshold.

In this area:

- The average time to 25% failure, for all cards, was 5,391 read/write cycles, with a median value of 3,605 (*n* =120, min=0, max=29,042).
- Between name-brand cards sourced from AliExpress vs. name-brand cards sourced from Amazon, name-brand cards sourced from Amazon fared better than name-brand cards sourced from AliExpress. The average for name-brand cards sourced from Amazon was 7,707, with a median value of 5,215 (*n* =19, min=921, max=20,876); while the average for name-brand cards sourced from AliExpress was 3,592, with a median value of 3,181 (*n* =13, min=1,326, max=6,356).
- Between name-brand cards and off-brand cards (not including fake flash), name-brand cards performed better. The average for name-brand cards was 6,035, with a median value of 3,869 (*n* =32, min=921, max=20,876); for off-brand cards, the average was 5,653, with a median value of 4,299 (*n* =58, min=0, max=24,252).
- Once again, fake flash performed worse than authentic flash. The average for authentic flash was 5,743 read/write cycles, with a median value of 4,129 (*n* =91, min=0, max=24,252); the average for fake flash was 4,286, with a median value of just 1,509 (*n* =29, min=0, max=29,042).
- I'll note that the majority of cards die (or make themselves read-only) before making it to the 25% failure threshold. Of the 119 cards I have that have failed so far, only 41 survived long enough to reach the 25% failure threshold.

The graph below shows the distribution of the number of read/write cycles completed before reaching 25% failure.

The graph below shows percentile rankings for the various categories of cards I discussed above. (Again, this graph updates automatically from my data — so it might be out of sync with anything I said above.)

September 2, 2025 (graphs update automatically)

#### Time to Complete Failure

In my testing, I consider a card to be completely failed when either (a) it encounters an issue that renders the card inoperable, or (b) 50% or more of the sectors on the card have experienced errors. The former is a more useful metric; the latter is primarily just for funsies.

And once again, note that these figures only include cards that have completely failed.

In this area:

- The average time to complete failure, for all cards, was 5,362 read/write cycles, with a median value of 3,616 (n=119, min=0, max=29,042).
- Between name-brand cards sourced from AliExpress vs. name-brand cards sourced from Amazon, name-brand cards sourced from Amazon fared better than name-brand cards sourced from AliExpress. The average for name-brand cards sourced from Amazon was 7,707, with a median value of 5,215 (*n* =19, min=921, max=20,876); while the average for name-brand cards sourced from AliExpress was 3,592, with a median value of 3,181 (*n* =13, min=1,326, max=6,356). (Yes, this is identical to the data from the "time to 25% failure" section above.)
- Between name-brand cards and off-brand cards (not including fake flash), name-brand cards performed better. The average for name-brand cards was 6,035, with a median value of 3,869 (*n* =32, min=921, max=20,876); for off-brand cards, the average was 5,551, with a median value of 4,265 (*n* =57, min=0, max=26,041).
- Once again, fake flash performed worse than authentic flash. The average for authentic flash was 5,681 read/write cycles, with a median value of 4,082 (*n* =90, min=0, max=26,041); the average for fake flash was 4,372, with a median value of just 1,509 (*n* =29, min=0, max=29,042).
- The majority of cards become inoperable (either they stop working completely or they make themselves read-only) long before hitting the 50% failure threshold. Of the 119 cards I have that have failed so far, only 35 survived long enough to make it to the 50% failure threshold.

The graph below shows the distribution of the number of read/write cycles completed before completely failing.

The graph below shows percentile rankings for the various categories of cards I discussed above. (Again, this graph updates automatically from my data — so it might be out of sync with anything I said above.)

September 2, 2025 (graph updates automatically)

#### Known Failure Modes

There were a number of ways in which I observed cards failing. I'm lumping them into two categories: data verification errors, and card failures. The "data verification errors" category consists of bit flip errors, data shift errors, missing data errors, write failure errors, and corrupted data errors. The "card failures" category consists of unresponsive cards, corrupted CSDs, and write-protected cards.

The term "bit flip errors" refers to a phenomenon when the data read back matches the data written to the card, with the exception of a few bits — or sometimes only one bit. Bit flip errors can occur when a bit flips from a 0 to a 1, or from a 1 to a 0. Bit flip errors tended to happen most frequently on fake flash and low-quality flash, and once they started, they tended to increase in number and frequency as time went on.

Address decoding errors refers to a situation where the card returns incorrect data due to addressing the wrong portion of flash memory. It's not known whether these errors are occurring when reading or writing the data, but I assume it can happen on either one. This phenomenon affects a variable number of sectors at a time; however, most times the number of sectors is in the single-digits, and most commonly (but not always) the data is offset by two sectors (forward) from where it should have been.

It took me some time to notice this phenomenon occurring; however, once I did, I started noticing it happening more and more. It doesn't seem to be isolated to any particular brand of card, any particular card reader, or any particular host machine. It's frankly baffling the hell out of me, because I don't know if it's just something wrong with the cards or if it's something else. However, this tended to be a pretty common failure mode for name-brand cards.

I'm using the term "missing data error" to refer to a situation where a card responded to a read request, but the data returned consists of a single byte repeated over and over (usually `00` or `ff`). This type of error tends to occur with fake flash when reading from a sector that isn't mapped to a physical sector in the card's flash storage.

I have observed instances where the data read back from the card was actually written during a previous round of testing. I'm using the term "write failure" to refer to this type of error. Given that the data that was read back frequently originated from a completely different sector from where it was originally written to, I think it's reasonable to surmise that this is a failure in the card's wear leveling algorithm, and that one of two things happened:

- The original data was committed to the card, but the wear leveling algorithm failed to correctly store the location of the data in its block map; or
- The wear leveling algorithm correctly updated its block map; however, it failed to write the original data to the card, and thus the data that was read back was the data that was in that block previously.

I'm using the term "corrupted data errors" to refer to any other situation where a card responded to a read request, but the data returned did not match the data written. Sometimes this can be due to a write request that was cached by the card but not written out (or only partially written out) to the card's flash storage. In general, though, I'm using this term to refer to a data verification error that doesn't fit into any of the other categories.

##### Unresponsive Cards

I'm using the term "unresponsive card" to refer to a situation where the system did not expose the card as a block device when plugged into a card reader.

Upon further inspection, I managed to get a little more insight as to what's happening with at least some of these cards. When initializing a card, the host is supposed to send ACMD41 to the card to tell it to begin its power-up sequence. While the power-up sequence is taking place, the host can issue additional ACMD41s to the card to ask the card whether it has finished powering up. From the time the card gets the first ACMD41, it has one second to complete its power-up sequence. With at least a few cards, I could see it responding to the ACMD41s commands, but they would never indicate that their power-up sequence was complete.

I was able to unintentionally trigger this scenario with a working card while working on an FPGA design — and after diagnosing the issue for some time, I concluded that the issue was that the card was being undervolted. This leads me to conclude that the "dead" cards have some component (like a resistor, transistor, diode, etc.) that has failed, and is either preventing the card from getting up to operating voltage or is preventing it from detecting that it got up to operating voltage.

##### Corrupted CSD

The CSD register is a register that the host can read from the card, and specifies a number of parameters for the card — such as whether the card is write protected, how much time it should take for a nominal write operation to complete, and — most importantly — the size of the card. There have been two instances (with a single brand of card) where the contents of the card's CSD register changed, which resulted in the overall capacity of the card changing to be far less than what it was originally. When this has happened, I've immediately declared the card "dead" without any further testing.

##### Write-Protected Cards

Some cards have been known to make themselves write-protected — either by indicating as such in the CSD register or by exhibiting I/O errors whenever writes are attempted. It is not known whether this behavior is accidental or by design. If this behavior is by design, a hypothetical design might be as follows:

- A card has a certain number of "spare" sectors. These sectors are designated for performing wear leveling and/or bad sector replacement.
- The card maintains a sector map, for its internal use, that maps logical sectors to physical ones. When the host requests a given sector, it uses this map to determine the physical location of the requested sector in the flash core.
- As wear leveling is performed, the sector map is updated to reflect the physical location of each logical sector in the card's user area.
- If a bad sector is detected, it is flagged as such in the sector map and replaced with one of the spare sectors — thus reducing the number of spare sectors available.
- Once the card runs out of spare sectors (or falls below a defined threshold), it makes itself read-only to protect the integrity of the data already on the card.

Of course, the other explanation is that this behavior is accidental — for example, the portion of flash memory where the card stores its write-protect flags could become corrupted, causing it to report that it is write protected.

Regardless of the mechanism, when this situation occurs, I've generally tried to reset the card — by pulling it from the reader and reinserting it — to try to resolve the situation. (After all, there is a "write protect until power cycle" flag in the Physical Layer Specification.) If that fails to fix it, I've declared the card "dead".

##### Device Mangling

I've noted a few instances now where a read request for one device seemingly returns data from another device. I'm referring to this type of error as a "device mangling error". It's entirely plausible that some of the errors that I previously classified as address decoding errors or corrupted data errors were actually device mangling errors.

### Overall Picks

To get a list of top performers, I'm going to look primarily at the top scores in the capacity and performance categories. For now, I'm not going to include any of the endurance data in here, as I still have incomplete data for all but a handful of cards.

**Note: This list is subject to change at any time!**

![](https://www.bahjeez.com/wp-content/uploads/2025/07/SanDisk_microSD_Express_128GB.png)

![](https://www.bahjeez.com/wp-content/uploads/2024/06/image-27.png)

![](https://www.bahjeez.com/wp-content/uploads/2025/07/Samsung-Pro-PLUS-128GB-e1753023013820.webp)

![](https://www.bahjeez.com/wp-content/uploads/2025/03/PNY-Flash-Memory-Cards-microSDXC-PRO-Elite-Prime-64GB-3x-fr-e1743084401156.png)

![](https://www.bahjeez.com/wp-content/uploads/2024/03/image-2-e1710099742305.png)

![](https://www.bahjeez.com/wp-content/uploads/2024/06/image-42.png)

![](https://www.bahjeez.com/wp-content/uploads/2024/11/DelkinDevicesHYPERSPEED128GB.jpg)

![](https://www.bahjeez.com/wp-content/uploads/2024/06/image-26.png)

![](https://www.bahjeez.com/wp-content/uploads/2025/07/Kingston-High-Endurance-32GB-e1753023617759.webp)

![](https://www.bahjeez.com/wp-content/uploads/2024/06/image-30.png)

Here's how the actual scores shook out:

This lines up pretty well with the results that I've been seeing — so maybe my rating system isn't so bad after all.

July 20, 2025

## Individual Cards

***Details on individual cards have been moved to the new [Results Explorer](https://www.bahjeez.com/results-explorer/) page!***

## Known Issues

If I'm looking at this from a scientific point of view, there are a number of issues with the way I conducted this test. I didn't have clear goals when I started this project, and that probably contributed to these issues. Below are some issues I can think of.

### Card Readers

I experimented with various card readers during the course of this experiment, trying to determine which ones would not only perform best, but also allow me to test as many cards as possible simultaneously. This resulted in using a mix of various card readers, which may have affected my results. While the obvious difference (if any) would be in performance, it's also possible that some of the other errors I encountered were due to the card reader rather than the card. (This was certainly the case with the SmartQ Single due to its tendency to randomly stop working: if it stopped working during a write operation, a certain amount of data — usually around 1MB — would be lost. I had to account for this in my code by rewriting the missing data when the card reader was reconnected.)

### Performance Test Method

The SD Card Association's Physical Layer Specification provides a number of criteria for how speed tests are to be performed — including block size, commands to be used, preconditioning of the card, size of write operations, size of the area to be written to, length of the test, etc. These criteria were not followed for a number of reasons — primarily owing to the fact that USB card readers don't expose a lot of the functionality needed. I would like to develop something that could run on an FPGA and run the tests using the conditions prescribed in the specification. (I have an FPGA starter kit that I'm learning on now, but I will need a faster one at some point in the future, as I can only run the SD bus at 25MHz with the one I have. **Side note:** I did try to do this with an Arduino Duo as a proof of concept, but I was only able to run the SD bus at about 10KHz with it — and the clock signal was not very stable with it.)

### Endurance Test Method

The endurance test is a continuous test — during each round, the host overwrites the entire user area of the card, as fast as conditions will allow. Once this process has finished, the host immediately proceeds to read back the entire user area of the card — again, as fast as conditions will allow. While this is representative of some uses cases, it fails to take some other common use cases into account.

One such use case would be in a mobile phone or mobile gaming console (yes, I'm looking at you, Nintendo Switch), where the card would have a tendency to heat up and cool down according to when the user uses their device. A possible follow-up experiment would be to perform an endurance test where testing is paused (and the device is allowed to cool down) between every round or every few rounds of testing, or where the card is removed from the card reader and placed in a cold environment (such as a refrigerator or freezer) for a certain amount of time before being returned to the card reader.

Another such use case would be in a digital camera, where the ability to retain data for long periods of time is an important factor. A possible follow-up experiment would be to perform an endurance test where the card is overwritten, then placed in storage for a certain amount of time, then read back and compared to the original data written.

### Host Machines Used

While I don't think it had much of an influence on my results, I did use two different machines for this experiment. Let's face it — I'm trying to do this on the cheap, so I grabbed a couple of old laptops I had sitting around, put RAM and a hard drive back in one of them, installed Ubuntu on them, and put them to work. The first laptop I used was an MSI GE62VR-7RF that had an i7-7700HQ; the other one was a Lenovo Y580 that had an i7-3630QM. Theoretically there could have been some irregularity in the results caused by, say, differences in the USB host controller — but at this point in time, I don't have any reason to suspect this is the case.

### Ubuntu Version Used

As I mentioned above, I used two different machines for running this experiment. I set them up at different times, as I didn't expect that I was going to need a second machine. I apparently set them up with two different versions of Ubuntu: for the first machine (which was the MSI, by the way), I grabbed a Ubuntu boot stick I had laying around — which had Ubuntu Desktop 20.04 on it — and installed that. Since I didn't need/want the desktop environment on there, I used Ubuntu Server 22.04 for the second machine. The two are running practically the same Linux Kernel version (one is running 5.15.0-79-generic, the other is running 5.15.0-78-generic). Again, it's possible that the difference between the two introduced some irregularity into my results — but I don't have any reason to suspect this is the case.

### Heat Dissipation

These cards get hot. Really hot. How hot? This hot:

![](https://www.bahjeez.com/wp-content/uploads/2024/02/IMG_3016-225x300.jpg)

For you non-Americans, here it is in non-Freedom units:

![](https://www.bahjeez.com/wp-content/uploads/2024/02/IMG_3019-225x300.jpg)

Now…is it an issue? I don't know. I spot checked the specs for a few of the cards I'm testing, and they all listed the maximum operating temperature as 185ºF (85ºC) — and my measurements were well below that. But does that mean that *all* of my cards are rated up to that temperature? Well…they probably are, but I don't know for sure.

This rig is in a small closet (probably less than 40 sq. ft.) with its own air conditioner, constantly trying to keep the room at 72ºF — but it can only do so much. And I just don't know if that amount of heat is causing issues with the cards themselves, or if it's causing issues with the USB hub that it's attached to (which is absorbing a lot of this heat).

## Conclusion

I think there's a number of conclusions I could make based on the data I've collected and what I've seen thus far::

- **Capacity:**
	- Skimp is a problem across the industry. The only brand that was consistently not skimpy was Samsung.
	- Many card brands offer cards in various capacities. When you look at prices for authentic flash, price will generally scale up as capacity goes up. (This doesn't always hold true for smaller cards — but it almost always holds true for larger cards.) When you look at fake flash, however, the prices will generally be pretty similar — usually within about $1 of each other — regardless of the capacity.
	- As of this writing, there's a very limited number of 2TB microSD cards known to exist: the Kioxia Exceria Plus G2, the SanDisk Extreme, and the SanDisk Extreme PRO. If you see a 2TB card and it's not one of these, there's an almost 100% chance that it's fake.
	- There are brands that will sell both fake flash and authentic flash. Usually, smaller sizes will be authentic, while larger sizes will be fake — but there are exceptions to this.
- **Performance:**
	- Almost all new microSD cards today support UHS-I. Under UHS-I, the maximum possible transfer rate *should be* 104MB/sec (although in actuality, the maximum transfer rate will be a little less than this).
	- Fake flash cards usually tends to fall far short of this limit.
	- Most off-brand flash cards, and many name-brand flash cards, get close to this limit — probably as close as they can feasibly get when you factor in the time needed to issue commands, the time needed to transfer preambles/CRCs, etc. — at least in sequential read speeds. Most cards didn't even get halfway to this mark with their sequential write speeds.
	- SanDisk managed to figure out how to go *over* this limit — I haven't figured out exactly how they do it, but I suspect that their trick is simply providing a faster clock signal to the card. It does, however, require both a card and a reader that support these faster transfer rates. And, while SanDisk led the way here, other brands seem to be following — including Kingston and Samsung.
- **Endurance:**
	- Fake flash cards (unsurprisingly) tends to fail earlier than authentic flash cards. There are isolated exceptions to this, but when it happens, it tends to be just that — an exception to the rule.
	- Name-brand flash, off-brand flash, and fake flash all tend to fail in different ways.
		- Fake flash cards tends to start exhibiting bit flip errors early on. Generally, once you see your first error on a fake flash card, the number of errors (per read/write cycle) only goes up from there.
		- Off-brand cards do tend to follow this same pattern, although the first error tends to happen later than it does with fake flash cards. This could be an indication that off-brand cards use higher quality flash media than fake flash cards.
		- Name-brand flash doesn't necessarily last any longer than off-brand flash before experiencing its first error. However, errors with name-brand flash generally tend to be fewer and farther between. I believe this is because name-brand flash usually employs error correction and wear leveling techniques that help reduce the frequency of errors. Name-brand flash does tend to be more susceptible to address decoding errors — and I don't know yet whether those errors could be resolved by trying to re-read the affected sector or not.

I'm still not done with this project — I think there's still a lot of data to be gained here. So for now, I'll conclude this by leaving you with words I once heard a wise person say:

> *Further study is needed.*

## How can I help?

Ok, since people have asked, here's how you can help:

- **[Support me on Patreon.](http://patreon.com/MattCole)** Any money donated will go directly towards purchasing new cards or testing supplies. Plus, get notified when cards die, when I start testing new cards, and vote on which cards I test next!
- **Buy me some microSD cards.** I'll happily test any cards that are out of my price range that anyone wants to purchase for me. [Here’s my Amazon wishlist](https://www.amazon.com/hz/wishlist/ls/Q8MORJE6MU7M?ref_=wl_share) — but if there's a particular card you want me to test and you're willing to purchase them and ship them to me, please let me know in the comments!

	In particular, what I'd like to get are (a) additional sizes for models I already have (for example, if a card comes in a 32GB, a 64GB, and a 128GB version, and I already have the 32GB version, I'd want to test the 64GB and 128GB version as well), and (b) brands/models that I don't already have represented here. **If you purchase me any microSD cards, please purchase them in quantities of 3 or more.**

	This wishlist also includes supplies that I need to test cards — such as card readers and host machines. The more of these I have, the quicker I can start testing new cards!
- **[Donate to me directly.](https://paypal.me/bahjeez)** Any money donated will go directly towards purchasing new cards or testing supplies.

Thank you everyone in advance!
