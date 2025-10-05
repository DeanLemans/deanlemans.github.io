import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const and =
  (...conds: ((p: any) => boolean)[]) =>
  (p: any) =>
    conds.every((c) => c(p))

const isNotHome = (page: any) => {
  const s = page?.fileData?.slug
  return s !== "index" && s !== "home"
}

const isNotCV = (page: any) => {
  const s = page?.fileData?.slug
  return s !== "CV-Software" && s !== "CV-Gardening"
}

const desktop = (c: any) => Component.DesktopOnly(c)
const mobile = (c: any) => Component.MobileOnly(c)
const conditional = (component: any, condition: (p: any) => boolean) =>
  Component.ConditionalRender({ component, condition })

const searchBar = Component.Flex({
  components: [
    { Component: Component.Search(), grow: true },
    { Component: Component.Darkmode() },
    { Component: Component.DesktopOnly(Component.ReaderMode()) },
  ],
})

const leftSidebarComponents = [
  Component.PageTitle(),
  Component.DesktopOnly(Component.CustomText({ text: "My personal site" })),
  Component.MobileOnly(Component.Spacer()),
  searchBar,
  Component.DesktopOnly(Component.Explorer()),
]

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [desktop(Component.Graph())],
  footer: Component.Footer({
    links: {
      "Site Content License": "https://creativecommons.org/licenses/by/4.0",
      "Contact Links": "https://linksta.cc/@Dean",
      "Source Code": "https://github.com/DeanLemans/my-site",
      "Guest Book": "https://thegardener.atabook.org/",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    conditional(Component.Breadcrumbs(), isNotHome),
    conditional(Component.ArticleTitle(), isNotHome),
    conditional(Component.ContentMeta(), isNotHome),
  ],
  left: leftSidebarComponents,
  right: [
    desktop(conditional(Component.TableOfContents(), isNotHome)),
    desktop(conditional(Component.Backlinks(), and(isNotHome, isNotCV))),
    mobile(Component.Explorer()),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    desktop(searchBar),
    desktop(Component.Explorer()),
  ],
  right: [mobile(searchBar)],
}
