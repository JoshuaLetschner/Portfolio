// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import legalStatus from './src/data/legal-status.json' with { type: 'json' };

/**
 * Build-Umgebung
 * --------------
 * SITE_URL           Öffentliche Basis-URL, z. B. https://example.org (ohne erfundene Standarddomain).
 *                    Ohne Wert: keine Canonical-URLs, keine Sitemap, keine absoluten OG-Bilder.
 * PRODUCTION_BRANCH  Name des Produktionsbranches (Standard: main).
 * SITE_NOINDEX       "true" erzwingt noindex für den gesamten Build (z. B. für Tests).
 *
 * Cloudflare setzt beim Build automatisch WORKERS_CI_BRANCH (Workers Builds)
 * bzw. CF_PAGES_BRANCH (Pages). Builds anderer Branches gelten als Preview
 * und werden vollständig auf noindex gesetzt.
 */
const env = process.env;

function readSiteUrl() {
  const raw = env.SITE_URL?.trim();
  if (!raw) return undefined;
  let url;
  try {
    url = new URL(raw);
  } catch {
    throw new Error(`SITE_URL ist keine gültige URL: "${raw}"`);
  }
  if (url.protocol !== 'https:' && url.hostname !== 'localhost') {
    throw new Error(`SITE_URL muss mit https:// beginnen: "${raw}"`);
  }
  return url.origin;
}

const site = readSiteUrl();
const productionBranch = env.PRODUCTION_BRANCH?.trim() || 'main';
const ciBranch = env.WORKERS_CI_BRANCH || env.CF_PAGES_BRANCH;
const isPreviewBuild = Boolean(ciBranch) && ciBranch !== productionBranch;
const allowIndexing = env.SITE_NOINDEX !== 'true' && !isPreviewBuild;

/** Seiten, die noch Entwurf sind, landen nie in der Sitemap. */
const draftPaths = Object.entries(legalStatus)
  .filter(([, status]) => !status.ready)
  .map(([page]) => `/${page}/`);

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Alle Styles und Skripte als Dateien ausliefern, damit die CSP ohne
    // 'unsafe-inline' auskommt (siehe public/_headers).
    inlineStylesheets: 'never',
  },
  compressHTML: true,
  // Doppelte Projekt-Slugs brechen den Build ab, statt nur zu warnen.
  prerenderConflictBehavior: 'error',
  vite: {
    build: { assetsInlineLimit: 0 },
    define: {
      __ALLOW_INDEXING__: JSON.stringify(allowIndexing),
    },
  },
  integrations:
    site && allowIndexing
      ? [
          sitemap({
            filter: (page) => {
              const { pathname } = new URL(page);
              return !draftPaths.includes(pathname) && !pathname.startsWith('/404');
            },
          }),
        ]
      : [],
});
