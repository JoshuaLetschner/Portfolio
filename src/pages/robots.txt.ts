import type { APIRoute } from 'astro';

/** robots.txt passend zum Build: Preview-Builds sperren, Produktion mit Sitemap. */
export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *'];
  if (__ALLOW_INDEXING__) {
    lines.push('Allow: /');
    if (site) lines.push('', `Sitemap: ${new URL('/sitemap-index.xml', site).href}`);
  } else {
    lines.push('Disallow: /');
  }
  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
