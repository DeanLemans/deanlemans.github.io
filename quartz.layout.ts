import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const and =
  (...conds: ((p: any) => boolean)[]) =>
  (p: any) =>
    conds.every((c) => c(p))

const notHome = (page: any) => {
  const s = page?.fileData?.slug
  return s !== "index" && s !== "home"
}

const notCV = (page: any) => {
  const s = page?.fileData?.slug
  return s !== "CV-Software" && s !== "CV-Gardening"
}

const desktop = (c: any) => Component.DesktopOnly(c)
const mobile = (c: any) => Component.MobileOnly(c)
const conditional = (component: any, condition: (p: any) => boolean) =>
  Component.ConditionalRender({ component, condition })

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.Graph()],
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
    conditional(Component.Breadcrumbs(), notHome),
    conditional(Component.ArticleTitle(), notHome),
    conditional(Component.ContentMeta(), notHome),
  ],
  left: [
    Component.PageTitle(),
    Component.DesktopOnly(Component.CustomText({ text: "My personal site" })),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.DesktopOnly(Component.ReaderMode()) },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    desktop(conditional(Component.TableOfContents(), notHome)),
    desktop(conditional(Component.Backlinks(), and(notHome, notCV))),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    desktop(Component.Search()),
    desktop(Component.Darkmode()),
    desktop(Component.DesktopOnly(Component.ReaderMode())),
    desktop(Component.Explorer()),
  ],
  right: [
    mobile(Component.Search()),
    mobile(Component.Darkmode()),
    mobile(Component.DesktopOnly(Component.ReaderMode())),
  ],
}
