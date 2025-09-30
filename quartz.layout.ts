import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// Helper to check if page is not home/index
const isNotHomePage = (page: any) => page.fileData.slug !== "index" && page.fileData.slug !== "home"

// Shared search and darkmode flex component
const searchAndDarkmode = Component.Flex({
  components: [
    {
      Component: Component.Search(),
      grow: true,
    },
    { Component: Component.Darkmode() },
    { Component: Component.ReaderMode() },
  ],
})

// Shared left sidebar configuration
const leftSidebarComponents = [
  Component.PageTitle(),
  Component.MobileOnly(Component.Spacer()),
  Component.Explorer(),
  searchAndDarkmode,
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
    Component.ConditionalRender({
      component: Component.Graph(),
      condition: (page) => page.fileData.slug !== "CV",
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [Component.PageTitle(), Component.MobileOnly(Component.Spacer()), searchAndDarkmode],
  right: [Component.Explorer({})],
}
