import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const and =
  (...conds: Array<(p: any) => boolean>) =>
  (p: any) =>
    conds.every((c) => c(p))

const notSlug = (page: any, slugs: string[]) => {
  const s = page?.fileData?.slug
  return !slugs.includes(s)
}

const notHome = (page: any) => notSlug(page, ["index", "home"])
const notCV = (page: any) => notSlug(page, ["CV-Software", "CV-Gardening"])

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
    desktop(Component.CustomText({ text: "My personal site" })),
    mobile(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: desktop(Component.ReaderMode()) },
      ],
    }),
    Component.Explorer({
      filterFn: function (node) {
        const omitList = ["00-raw", "journal", "02_03-clippings"]
        const name = (node.displayName + "/" + node.slugSegment).toLowerCase()
        for (let i = 0; i < omitList.length; i++) {
          if (name.includes(omitList[i])) return false
        }
        return true
      },
    }),
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
    desktop(Component.CustomText({ text: "My personal site" })),
    mobile(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: desktop(Component.ReaderMode()) },
      ],
    }),
    Component.Explorer(),
  ],
  right: [desktop(Component.TableOfContents()), desktop(Component.Backlinks())],
}
