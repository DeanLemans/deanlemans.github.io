import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      //GitHub: "https://github.com/jackyzha0/quartz",
      //"Using Quartz": "https://github.com/jackyzha0/quartz",
      "Site Content License": "https://creativecommons.org/licenses/by/4.0",
      "Contact Links": "https://linksta.cc/@Dean",
      "Source Code": "https://github.com/DeanLemans/my-site",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    //Component.ConditionalRender({
    //component: Component.Breadcrumbs(),
    //condition: (page) => page.fileData.slug !== "index",
    //}),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    //Component.ContentMeta(),
    //Component.TagList(), //will need to figure out a better (orginising) system for this.
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Darkmode()
    //Component.Flex({
      //components: [
        //{
        //Component: Component.Search(),
        //grow: false,
        //},
        //{ Component: Component.Darkmode() },
      //],
    //}),
    
  ],
  right: [
    Component.ConditionalRender({
      component: Component.Graph({
        localGraph: {
          depth: 1, // how many hops of notes to display
          scale: 1.5, // default view scale
          fontSize: 1, // what size should the node labels be?
          showTags: true, // whether to show tags in the graph
          enableRadial: true, // whether to constrain the graph, similar to Obsidian
        },
        globalGraph: {
          depth: -1,
          scale: 1,
          fontSize: 1.5,
          showTags: false, // whether to show tags in the graph
          enableRadial: true, // whether to constrain the graph, similar to Obsidian
        },
      }),
      condition: (page) => page.fileData.slug !== "CV",
    }),
    Component.Explorer({
      title: "",
      sortFn: (a, b) => {
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        if (!a.isFolder && b.isFolder) {
          return -1
        } else {
          return 1
        }
      },
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["misc"])

        const title = node.data.title.toLowerCase() ?? ""
        return node.data.tags.includes("explorerexclude") && !omit.has(title)
      },
    }),
    //Component.DesktopOnly(Component.TableOfContents()),
    //Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
// rework this to (possibly) fix explorer
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    //Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    //Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
  ],
  right: [
    Component.Explorer({
      title: "",
      sortFn: (a, b) => {
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        if (!a.isFolder && b.isFolder) {
          return -1
        } else {
          return 1
        }
      },
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["misc"])

        const title = node.data.title.toLowerCase() ?? ""
        return node.data.tags.includes("explorerexclude") && !omit.has(title)
      },
    }),
  ],
}
