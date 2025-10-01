import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Helper to check if page is not home/index
const isNotHomePage = (page: any) => page.fileData.slug !== "index" && page.fileData.slug !== "home"

// Shared search bar with darkmode and reader mode
const searchBar = Component.Flex({
  components: [
    {
      Component: Component.Search(),
      grow: true,
    },
    { Component: Component.Darkmode() },
    { Component: Component.ReaderMode() },
  ],
})

// Combined left sidebar (desktop + mobile)
const leftSidebarComponents = [
  Component.PageTitle(),
  Component.CustomText({
    text: "My personal site",
  }),
  Component.MobileOnly(Component.Spacer()),
  searchBar,
  Component.DesktopOnly(Component.Explorer()),
]

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Site Content License": "https://creativecommons.org/licenses/by/4.0",
      "Contact Links": "https://linksta.cc/@Dean",
      "Source Code": "https://github.com/DeanLemans/my-site",
      "Guest Book": "https://thegardener.atabook.org/",
    },
  }),
}

// components for pages that display a single page
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: isNotHomePage,
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: isNotHomePage,
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: isNotHomePage,
    }),
  ],
  left: leftSidebarComponents,
  right: [
    Component.DesktopOnly(
      Component.ConditionalRender({
        component: Component.Graph(),
        condition: (page) => page.fileData.slug !== "CV",
      }),
    ),

    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(
      Component.Backlinks({
        excludeFiles: ["Recently Edited"],
      }),
    ),
    Component.MobileOnly(Component.Explorer()),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(searchBar),
  ],
  right: [Component.DesktopOnly(Component.Explorer({})), Component.MobileOnly(searchBar)],
}
