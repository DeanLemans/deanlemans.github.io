---
unlisted: false
title: Data Visualization Challenge The Struggle to Visualize thousands of Zettelkasten Notes and How I Solved It
tags:
  - clippings
source: https://wasi0013.com/2025/09/22/data-visualization-challenge-the-struggle-to-visualize-thousands-of-zettelkasten-notes-and-how-i-solved-it/
publish: true
modified: 2026-07-18
id: 01KQQV6TW9HRSRGJMK5NZJAAA6
description: My Obsidian vault had grown beyond 6,000 notes, and opening the graph view became a frustrating chore. I wanted to explore the connections without waiting for it to catch up. By converting all my notes to JSON, generating metadata and link CSVs, and loading them into Cosmograph, I could finally pan, zoom, and explore my…
created: 2025-11-16
author:
  - "[[Wasi's Log]]"
aliases:
  - 01KQQV6TW9HRSRGJMK5NZJAAA6
---

> [!danger] NOT MINE
> This is just a reference/bookmarked article from the internet i found interesting!

---

# Data Visualization Challenge The Struggle to Visualize thousands of Zettelkasten Notes and How I Solved It

When I started taking [Zettelkasten](https://zettelkasten.de/) notes in Obsidian, I never thought about scale. I just kept writing, linking, and letting the ideas grow. I initially kept all my work and personal notes together. All the notes on parenting, hobbies, personal projects, study, client projects, document on small nuances, design decisions, fragments of architectural studies, and reflections on engineering problems in one place. The notes helps me a lot, it makes me productive.

For example, It saves me hours of research when writing a new article, I simply find the clusters formed on the relevant topic of interest in the obisidan graph view and then draft an outline based on the notes and relevant reference links using [notebooklm](https://notebooklm.google/). Then, Outline to draft is mostly combining those permanent notes and filling the parts with additional information as needed.

I crossed thousands of notes quickly, most of them grew out of my daily life, work as a technical writer and senior software engineer. Alongside these, I also used the same system for taking notes for hobbies and study of religious islamic text books, learning Arabic language, etc. which added an entirely different layer of content. Each note was atomic, small on its own, but together they formed a living network of ideas that kept expanding every day.

## The obsidian Graphview experience

At that point, my primary zettelkasten vault had become more than a collection of text; it was a dense web of knowledge that I wanted to see as a whole. That's when I ran into a problem.

It seemed to me that Obsidian's graph view is built for exploration, not for heavy-duty visualization. At a small scale it shines. You can see connections between notes instantly, zoom into clusters, and follow links that you might have forgotten. It works well when you have a few hundred or even a thousand notes.

The problem starts when the network grows too large. Rendering thousands of nodes and edges at once pushes the limits of how Obsidian handles the graph. The layout becomes sluggish even in a [Mac mini M4](https://amzn.to/4ml5Dpy), every movement lags, and eventually the app freezes.

Even when it loads, the graph is often too dense to be meaningful. You get a glowing ball of connections rather than a readable structure.

![The image of the obsidian vault becoming a giant glowing ball of connections](https://wasi0013.com/wp-content/uploads/2025/09/image-12.png?w=1024)

The image of the obsidian vault becoming a giant glowing ball of connections

The Obsidian's graph view, which I had once admired for showing connections at a glance, could no longer keep up. Opening the graph felt like asking too much of the app. The layout lagged with every zoom or pan, and eventually the entire view became almost unusable.

Splitting the notes into separate vaults gave me temporary relief, but as the collection kept expanding the problem returned. For example, I had to create separate vaults for notes related to Islamic studies alone, the following image is for the "smallest vault" containing notes on a single book named "Al Quran". The core religious text book of Islam. There are currently 6236 notes in this vault in total.

![The obsidian graph view of the vault Quran](https://wasi0013.com/wp-content/uploads/2025/09/image-10.png?w=1024)

The obsidian graph view of the vault Quran

The graph view was important to me, it was a way to spot hidden clusters and relationships that text search alone couldn't reveal. For example, these are the relevant notes for the keyword charity from this vault.

![](https://wasi0013.com/wp-content/uploads/2025/09/image-13.png?w=1024)

Zooming further to reveal the actual subtle clusters formed here freezes the vault.

So I started looking for tools that could handle the weight of thousands of interconnected notes without grinding my machine to a halt. I tried most of the tricks found on reddit threads but no luck. Seemed like Obsidian's graph engine isn't designed for tens of thousands of relationships. For serious large-scale visualization, it quickly hits a ceiling.

## Searching for alternatives

[**Gephi**](https://gephi.org/) could technically handle big networks, but importing notes and keeping the connections updated became tedious. **[Neo4j Bloom](https://neo4j.com/product/bloom/)** looked promising, but it required setting up a database and learning a new workflow that felt overkill for my use case. I also tested web-based tools like **GraphXR** and **Kumu**, but they either struggled with my dataset size, limited interactivity, or required sign up.

If I turn off the Graph view, rest of the useful Obsidian feature works without the lag. So, I only needed to replace the GraphView feature of obsidian. I needed a simple tool that could handle the scaling issue without freezing. I also tried **[Cosmograph](https://cosmograph.app/)**. It wasn't perfect, but it handled the data without freezing, let me pan and zoom easily, and gave a clearer sense of the network structure than anything I had tried so far.

## Exporting my permanent notes in Markdown to CSVs for Cosmograph visualization

Cosmograph expects two CSV files:

- **Source** – This one is for edges. (i.e. rows containing source -> target links)
- **Metadata** – This one is for node metadata.

That meant I needed a way to translate my Zettelkasten into a graph structure. The first step was to convert my notes into JSON. Fortunately, I already wrote a small helper library that takes each note in my `permanent_notes` folder and turns it into a structured dictionary so that, I can feed it to LLM apis like Gemini to do data analysis.

Once individual notes are converted to json, each filename (without the `.md` extension) becomes a key, and the value is the parsed content of the note. Combined together, they form a single `notes.json` file that captures my entire vault in `JSON` format.

```
import os
import json
from zettel_helper import zettel_to_json

zettel_folder = "permanent_notes"
all_notes = {}
# zettel_to_json function parses all the .md notes and creates json object of all notes
example_all_notes = {
    "81:1": {
        'verse': 'When the sun is wrapped up [in darkness]',
        'surah': 'surah at-takwir',
        'core topic': ['cosmic events', 'day of judgement', 'stars collapsing'],
        'theme': ['end times', 'divine power', 'final reckoning'],
        'keywords': ['sun', 'wrapped', 'darkness'],
        'tags': ['sun', 'darkness', 'collapse', 'stars', 'universe'],
        'note': '...',
        'reflection': "...",
        'related verses': ['81:2', '81:3', '55:37', '78:2']
        }
    }

for filename in os.listdir(zettel_folder):
    if filename.endswith(".md"):
        zettel = os.path.join(zettel_folder, filename)
        note_json = zettel_to_json(zettel)
        # example filename 81-1.md becomes 81:1 
        key = filename.replace("-", ":").replace(".md", "")
        all_notes[key] = note_json

with open("notes.json", "w", encoding="utf-8") as f:
    json.dump(all_notes, f, indent=4, ensure_ascii=False)

print(f"Saved {len(all_notes)} notes to notes.json")
```

With `notes.json` ready, I wrote another script to generate the two `[source](https://gist.githubusercontent.com/wasi0013/cf0c5d50c8596e29ae2b34a20a2c15e6/raw/db88c1eb82dc533ddab3b069b14094e6c1955688/source.csv)` and `[metadata](https://gist.githubusercontent.com/wasi0013/40a50798df65d0ee0615ac86781e0fd8/raw/bb1cdca502a7461b18b40205257fa4bc4d5c8eaa/meta.csv)` CSVs:

```
import pandas as pd
import json

q = json.load(open('notes.json', 'r'))

meta = {}
source = []
counter = 0

def add_node(key, node_type="ayah"):
    """Add a node to meta if it doesn't exist and return its ID."""
    global counter
    if key not in meta:
        meta[key] = {"id": counter, "text": key, "type": node_type}
        counter += 1
    return meta[key]["id"]

for k, v in q.items():
    source_id = add_node(k, "ayah")

    for meta_type, value in v.items():
        if meta_type in ["note", "reflection"]:
             # Skip unnecessary fields
             continue

        # Handle reference notes
        if meta_type == "related verses":
            for ver in value:
                chapter, ayah_part = ver.split(":")
                if "-" in ayah_part:  # range of notes
                    ayah_part = ayah_part.split("(")[0] # skip the reference texts
                    start, end = map(int, ayah_part.split("-"))
                    for i in range(start, end + 1):
                        ayah = f"{chapter}:{i}"
                        target_id = add_node(ayah, "ayah")
                        source.append({"source": source_id, "target": target_id})
                else:  # single note reference
                    target_id = add_node(ver, "ayah")
                    source.append({"source": source_id, "target": target_id})
            continue

        if not isinstance(value, list):
            value = [value]
        for val in value:
            target_id = add_node(val, meta_type)
            source.append({"source": source_id, "target": target_id})

pd.DataFrame(meta.values()).to_csv("metadata.csv", index=False)
pd.DataFrame(source).to_csv("source.csv", index=False)
```

This pair of CSV files is enough to feed into Cosmograph, which renders the entire network interactively on a web browser using GPU. Unlike Obsidian, [Cosmograph](https://cosmograph.app/) handles these nodes smoothly on my [Mac mini M4](https://amzn.to/4ml5Dpy) without lagging or freezing which is exactly what I needed.

## Visualization of the same vault in Cosmograph

I decided to start small, at least by my standards. Instead of loading my entire Zettelkasten, I picked my smallest vault the one that holds my permanent notes for a long-term project on the book *Al Quran*. Even this "small" vault had grown large enough to overwhelm Obsidian's graph view (see the screenshots of the earlier section) with `6236` notes that contains more than 27k links.

For the first time, I could zoom into my Zettelkasten graph without performance issues getting in the way.

![](https://wasi0013.com/wp-content/uploads/2025/09/image-14.png?w=1024)

It felt like finally stepping in far enough to see the whole planetary system, not just the universe. I can also find the relevant note clusters by clicking on the keywords without lag or freeze:

![](https://wasi0013.com/wp-content/uploads/2025/09/image-15.png?w=1024)

## Here comes the best part

With a public data URL, Cosmograph makes it possible to share the visualization itself. You can explore the same dataset I used, [right in your browser](https://cosmograph.app/run/?data=https://gist.githubusercontent.com/wasi0013/cf0c5d50c8596e29ae2b34a20a2c15e6/raw/db88c1eb82dc533ddab3b069b14094e6c1955688/source.csv&meta=https://gist.githubusercontent.com/wasi0013/40a50798df65d0ee0615ac86781e0fd8/raw/bb1cdca502a7461b18b40205257fa4bc4d5c8eaa/meta.csv&source=source&target=target&gravity=0.09&repulsion=2&repulsionTheta=2&linkSpring=0.48&linkDistance=20&friction=0.19&renderLabels=true&renderHoveredLabel=true&renderLinks=true&nodeSizeScale=0.7&linkWidthScale=1.2&linkArrowsSizeScale=1&nodeSize=size-incoming%20links&nodeColor=color-total%20links&nodeLabel=text&linkWidth=width-number%20of%20data%20records&linkColor=color-number%20of%20data%20records&):

[Explore the Quran dataset](https://cosmograph.app/run/?data=https://gist.githubusercontent.com/wasi0013/cf0c5d50c8596e29ae2b34a20a2c15e6/raw/db88c1eb82dc533ddab3b069b14094e6c1955688/source.csv&meta=https://gist.githubusercontent.com/wasi0013/40a50798df65d0ee0615ac86781e0fd8/raw/bb1cdca502a7461b18b40205257fa4bc4d5c8eaa/meta.csv&source=source&target=target&gravity=0.09&repulsion=2&repulsionTheta=2&linkSpring=0.48&linkDistance=20&friction=0.19&renderLabels=true&renderHoveredLabel=true&renderLinks=true&nodeSizeScale=0.7&linkWidthScale=1.2&linkArrowsSizeScale=1&nodeSize=size-incoming%20links&nodeColor=color-total%20links&nodeLabel=text&linkWidth=width-number%20of%20data%20records&linkColor=color-number%20of%20data%20records&)

## Closing thoughts

This whole exercise started with frustration. I wanted to see the bigger picture of my notes, but Obsidian's graph view simply could not handle the scale. Cosmograph turned that around. By converting my notes into CSVs and loading them there, I finally had a smooth way to explore even thousands of interconnected entries.

What stood out to me is that the value of the graph view is not in the aesthetics, but in the utility. It helps me find hidden clusters, trace relationships, and connect ideas that would otherwise remain buried in text search. When the tool works, it gives me back the perspective I had been missing.

For now, I am keeping this workflow for large vaults, while still using Obsidian day to day for writing and linking. It feels like the best of both worlds: Obsidian for creation, Cosmograph for exploration.

## Wow! You survived the scroll, the lag, and the clusters. What now?

- Try running a similar experiment with your own notes or, data
	and [share your findings](http://hellowasi.com/contact) with me.
- Share this idea with a fellow note-taker who's wrestling with a similar problem.
- Back up your notes now! Future you will thank you.
- Stand up, stretch, get hydrated, and take a walk. Go find beautiful patterns in the sky;)

Tags

Categories

![](https://wasi0013.com/wp-content/uploads/2025/09/image-14.png?w=1024)
