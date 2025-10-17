import { i18n } from "../i18n"
import { FullSlug, pathToRoot, joinSegments, getFileExtension } from "../util/path"
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
    const iconPath = joinSegments(baseDir, `static/icon.png`)

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

        {/* no-cache headers */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />

        {/* Aggressive client-side cache clearing:
            - Unregisters service workers
            - Deletes Cache Storage entries
            - Clears localStorage/sessionStorage
            - Reloads the page once with a cache-busting query param
            This runs immediately in the head to reduce chance of serving stale resources. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  // Unregister all service workers
                  if ('serviceWorker' in navigator && navigator.serviceWorker.getRegistrations) {
                    navigator.serviceWorker.getRegistrations().then(function(regs){
                      regs.forEach(function(r){
                        try { r.unregister(); } catch(e){}
                      });
                    }).catch(function(){});
                  }

                  // Delete all Cache Storage entries
                  if (window.caches && caches.keys) {
                    caches.keys().then(function(keys){
                      return Promise.all(keys.map(function(key){
                        try { return caches.delete(key); } catch(e){ return Promise.resolve(false); }
                      }));
                    }).catch(function(){});
                  }

                  // Clear local/session storage (best-effort)
                  try { if (window.localStorage) { localStorage.clear(); } } catch(e){}
                  try { if (window.sessionStorage) { sessionStorage.clear(); } } catch(e){}

                  // Ensure we reload once with a cache-busting query param to force fresh fetches.
                  // Avoid infinite reload loops by checking for an existing cache_cleared param.
                  var marker = 'cache_cleared';
                  if (window.location && window.location.href.indexOf(marker) === -1) {
                    var sep = window.location.href.indexOf('?') === -1 ? '?' : '&';
                    try {
                      // Use replace so history isn't flooded
                      window.location.replace(window.location.href + sep + marker + '=' + Date.now());
                    } catch (e) {
                      // fallback to reload if replace fails
                      window.location.reload(true);
                    }
                  }
                } catch (e) {
                  // swallow errors; we don't want to break page render
                }
              })();
            `,
          }}
        />

        {/* Preconnects */}
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
                __html: `document.querySelectorAll('link[media="print"]').forEach(l=>l.media='all')`,
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

        {/* Inline critical CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                margin: 0;
                padding: 0;
              }
              .katex, .katex-display { font-size: 1em; min-height: 1.2em; }
              ul, ol { margin: 0; padding: 0 0 0 2em; }
              .center { min-height: 1px; }
            `,
          }}
        />

        {/* CSS */}
        {css.map((resource, index) => {
          if (typeof resource === "string") {
            return (
              <>
                {index === 0 && <link rel="preload" as="style" href={resource} />}
                <link rel="stylesheet" href={resource} />
              </>
            )
          }
          return CSSResourceToStyleElement(resource, true)
        })}

        {/* JS */}
        {js
          .filter((r) => r.loadTime === "beforeDOMReady")
          .map((r) =>
            "src" in r
              ? JSResourceToScriptElement(r as any, true)
              : JSResourceToScriptElement(r, true),
          )}

        {additionalHead.map((r) => (typeof r === "function" ? r(fileData) : r))}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
