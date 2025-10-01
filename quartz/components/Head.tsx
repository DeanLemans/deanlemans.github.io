import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../plugins/emitters/ogImage"
export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    // Url of current page
    const socialUrl =
      fileData.slug === "404" ? url.toString() : joinSegments(url.toString(), fileData.slug!)

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some(
      (e) => e.name === CustomOgImagesEmitterName,
    )
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Preconnect to CDNs to reduce DNS lookup time */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preload" as="style" href={googleFontHref(cfg.theme)} />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} media="print" />
            <noscript>
              <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            </noscript>
            <script
              dangerouslySetInnerHTML={{
                __html: `document.querySelectorAll('link[media="print"]').forEach(function(l){l.media='all'})`,
              }}
            />
            {cfg.theme.typography.title && (
              <>
                <link
                  rel="preload"
                  as="style"
                  href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)}
                />
                <link
                  rel="stylesheet"
                  href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)}
                  media="print"
                />
                <noscript>
                  <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
                </noscript>
              </>
            )}
          </>
        )}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />

        <meta name="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
          </>
        )}

        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />

        {/* Inline critical CSS to prevent layout shifts */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Prevent layout shift from font loading */
              body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                margin: 0;
                padding: 0;
              }
              /* Reserve space for KaTeX math elements */
              .katex, .katex-display {
                font-size: 1em;
                min-height: 1.2em;
              }
              /* Prevent CLS from list items */
              ul, ol {
                margin: 0;
                padding: 0 0 0 2em;
              }
              /* Prevent shifts from centered content */
              .center {
                min-height: 1px;
              }
            `,
          }}
        />

        {/* Add critical CSS with high priority */}
        {css.map((resource, index) => {
          // Preload the first CSS file (index.css) as it's critical
          if (index === 0) {
            const href = typeof resource === "string" ? resource : resource.content
            return (
              <>
                <link rel="preload" as="style" href={href} />
                {CSSResourceToStyleElement(resource, true)}
              </>
            )
          }
          return CSSResourceToStyleElement(resource, true)
        })}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
