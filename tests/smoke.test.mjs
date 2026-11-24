// Smoke-Tests für den fertigen Build in dist/.
// Aufruf: npm run build && npm run test:smoke
//
// Bewusst wenige, aussagekräftige Prüfungen: Routen vorhanden, Links intakt,
// Entwürfe auf noindex, keine privaten Dateien und keine Inline-Skripte (CSP).

import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { test } from 'node:test';

const dist = new URL('../dist/', import.meta.url).pathname;

const projectSlugs = [
  'sichere-apis-azure',
  'quiz-arena',
  'azure-infrastruktur-automatisierung',
  'cloud-plattform-konzept',
  'datenplattformen-cloud-kosten',
  'cloudflare-load-balancing-lab',
];

const pages = {
  '/': 'index.html',
  '/impressum/': 'impressum/index.html',
  '/datenschutz/': 'datenschutz/index.html',
  '/404': '404.html',
  ...Object.fromEntries(projectSlugs.map((slug) => [`/projekte/${slug}/`, `projekte/${slug}/index.html`])),
};

const read = (file) => readFileSync(join(dist, file), 'utf8');

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

test('dist/ existiert', () => {
  assert.ok(existsSync(dist), 'Zuerst `npm run build` ausführen.');
});

test('alle Routen wurden erzeugt', () => {
  for (const [route, file] of Object.entries(pages)) {
    assert.ok(existsSync(join(dist, file)), `${route} fehlt (${file})`);
  }
  assert.ok(existsSync(join(dist, 'robots.txt')), 'robots.txt fehlt');
  assert.ok(existsSync(join(dist, '_headers')), '_headers fehlt');
  const projectDirs = readdirSync(join(dist, 'projekte'));
  assert.equal(projectDirs.length, 6, `Erwartet 6 Projektseiten, gefunden: ${projectDirs.join(', ')}`);
});

test('jede Seite hat Sprache, Titel, Beschreibung und genau eine H1', () => {
  for (const [route, file] of Object.entries(pages)) {
    const html = read(file);
    assert.match(html, /<html lang="de"[\s>]/, `${route}: lang="de" fehlt`);
    assert.match(html, /<title>[^<]{5,}<\/title>/, `${route}: <title> fehlt`);
    assert.match(html, /<meta name="description" content="[^"]{20,}"/, `${route}: Meta-Description fehlt`);
    const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;
    assert.equal(h1Count, 1, `${route}: ${h1Count} H1-Elemente`);
  }
});

test('keine toten Platzhalter-Links und alle internen Links zeigen auf echte Seiten', () => {
  const ids = new Set([...read('index.html').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const [route, file] of Object.entries(pages)) {
    const html = read(file);
    assert.doesNotMatch(html, /href=""|href="#"/, `${route}: leerer oder "#"-Link`);
    for (const [, href] of html.matchAll(/<a [^>]*href="([^"]+)"/g)) {
      if (/^(mailto:|https:)/.test(href)) continue;
      assert.ok(!href.startsWith('http:'), `${route}: unsicherer Link ${href}`);
      if (href.startsWith('#')) continue;
      const [path, hash] = href.split('#');
      if (path === '/' && hash) {
        assert.ok(ids.has(hash), `${route}: Anker ${href} existiert nicht auf der Startseite`);
        continue;
      }
      assert.ok(path.endsWith('/'), `${route}: Link ohne abschließenden Slash: ${href}`);
      assert.ok(existsSync(join(dist, path, 'index.html')), `${route}: Link ${href} führt ins Leere`);
    }
  }
});

test('Entwürfe und 404 sind auf noindex gesetzt', () => {
  for (const file of ['impressum/index.html', 'datenschutz/index.html', '404.html']) {
    assert.match(read(file), /<meta name="robots" content="noindex/, `${file}: noindex fehlt`);
  }
});

test('Sitemap enthält keine Entwürfe (falls erzeugt)', () => {
  const sitemaps = readdirSync(dist).filter((name) => name.startsWith('sitemap'));
  for (const name of sitemaps) {
    const xml = read(name);
    assert.doesNotMatch(xml, /\/(impressum|datenschutz)\/|404/, `${name} enthält Entwurf oder 404`);
  }
});

test('keine Inline-Skripte, Inline-Styles oder externen Ressourcen (CSP)', () => {
  for (const [route, file] of Object.entries(pages)) {
    const html = read(file);
    for (const [tag] of html.matchAll(/<script\b[^>]*>/g)) {
      const allowed = /\ssrc="\/_astro\//.test(tag) || /type="application\/ld\+json"/.test(tag);
      assert.ok(allowed, `${route}: nicht erlaubtes Skript ${tag}`);
    }
    assert.doesNotMatch(html, /<style[\s>]/, `${route}: Inline-<style> gefunden`);
    assert.doesNotMatch(html, /\sstyle="/, `${route}: style-Attribut gefunden`);
    assert.doesNotMatch(html, /(src|href)="(https?:)?\/\/[^"]+\.(js|css|woff2?)"/, `${route}: externe Ressource`);
    assert.doesNotMatch(html, /fonts\.googleapis|googletagmanager|google-analytics/, `${route}: Tracking/Google Fonts`);
  }
});

test('keine privaten Dateien oder Bild-Metadaten im Build', () => {
  for (const file of walk(dist)) {
    const name = relative(dist, file);
    // Fotos kommen ausschließlich als optimierte Build-Bilder aus src/assets.
    if (!name.startsWith('_astro/')) {
      assert.doesNotMatch(name, /\.(jpe?g|heic|pdf|docx?)$/i, `Unerwartete Datei: ${name}`);
    }
    assert.doesNotMatch(name, /IMG_\d+/i, `Originalfoto im Build: ${name}`);
    assert.doesNotMatch(name, /lebenslauf|anschreiben|bewerbung|\.env|\.dev\.vars/i, `Private Datei: ${name}`);
    if (/\.(jpe?g|webp|avif|png)$/i.test(name)) {
      const bytes = readFileSync(file);
      for (const marker of ['Exif\0\0', 'EXIF', 'eXIf']) {
        assert.ok(!bytes.includes(Buffer.from(marker)), `${name} enthält EXIF-Metadaten`);
      }
    }
  }
});
