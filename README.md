# Portfolio

Persönliche Website von **Joshua Letschner**, Cloud Engineer aus der Region Karlsruhe.

Statische [Astro](https://astro.build)-Seite (TypeScript, eigenes CSS, kein Client-Framework). Der fertige Ordner `dist/` wird über **Cloudflare Workers Static Assets** ausgeliefert. Cloudflare Pages ist als Alternative beschrieben.

- Startseite mit Hero, Über mich, Projekten, fachlichen Schwerpunkten, beruflichem Weg, Persönlichem und Kontakt
- Sechs statisch erzeugte Projektseiten unter `/projekte/<slug>/`
- `/impressum/` und `/datenschutz/` als gekennzeichnete Entwürfe (noindex, nicht in der Sitemap)
- Eigene 404-Seite mit echtem HTTP-Status 404
- Keine Cookies, kein Tracking, keine externen Schriften oder Skripte

---

## Voraussetzungen

| Werkzeug | Version | Festgehalten in |
| --- | --- | --- |
| Node.js | 24 LTS | `.node-version`, `package.json` → `engines` |
| npm | 11 (liegt Node 24 bei) | `package-lock.json` |

Node 24 ist im Build-Image von Cloudflare Workers Builds vorinstalliert. Lokal, in der CI und bei Cloudflare läuft damit dieselbe Hauptversion. Mit `nvm` oder `fnm` reicht `nvm use` bzw. `fnm use` im Projektordner.

## Lokal starten

```bash
npm ci          # Abhängigkeiten exakt nach package-lock.json installieren
npm run dev     # Entwicklungsserver auf http://localhost:4321
```

### npm-Skripte

| Skript | Aufgabe |
| --- | --- |
| `npm run dev` | Astro-Entwicklungsserver |
| `npm run check` | Astro-/TypeScript-Prüfung inklusive Validierung der Projektinhalte |
| `npm run build` | Statischen Build nach `dist/` erzeugen |
| `npm run preview` | Gebaute Seite mit Astro lokal ansehen |
| `npm run preview:cloudflare` | Bauen und mit Wrangler lokal wie bei Cloudflare ausliefern (`http://localhost:8787`, kein Remote-Deployment) |
| `npm run deploy` | Bewusster manueller Deploy per Wrangler (normalerweise nicht nötig, siehe unten) |
| `npm run test:smoke` | Smoke-Tests gegen `dist/` (vorher `npm run build`) |

> `npm run preview:cloudflare` zeigt echte 404-Statuscodes, Weiterleitungen auf den abschließenden Slash und die Header aus `public/_headers`. Wird während der laufenden Vorschau neu gebaut, die Vorschau neu starten.

`package.json` enthält unter `allowScripts` die Einträge `esbuild` und `workerd` mit `false`. npm 11 fragt sonst bei jeder Installation nach diesen Installationsskripten. Beide Pakete funktionieren ohne sie.

---

## Projektstruktur

| Pfad | Zweck |
| --- | --- |
| `src/data/profile.ts` | Profil, E-Mail, Hero- und Über-mich-Texte, Timeline, Schwerpunkte, Interessen, optionale Links |
| `src/data/legal-status.json` | Freigabestatus von Impressum und Datenschutz |
| `src/content/projects/*.md` | Projekttexte mit Metadaten (eine Datei pro Projekt) |
| `src/content.config.ts` | Validiertes Schema der Projekt-Collection |
| `src/lib/projects.ts` | Laden, Sortieren und Zusatzprüfungen der Projekte, Beschriftungen |
| `src/components/` | Header, Hero, Abschnitte, Projekt-Illustrationen, Kontakt, Footer |
| `src/layouts/` | Basislayout (SEO, Header, Footer) und Layout für Rechtstexte |
| `src/pages/` | Routen: Startseite, `projekte/[slug]`, Impressum, Datenschutz, 404, `robots.txt` |
| `src/styles/global.css` | Schriften, Farb- und Abstandsvariablen, globale Styles |
| `src/assets/joshua-letschner.jpg` | Aufbereitetes Porträt (zugeschnitten, ohne Metadaten) |
| `public/` | Nur öffentliche Dateien: Schriften mit Lizenz, Favicon, Social-Preview, `_headers`, `noscript.css` |
| `scripts/prepare-portrait.mjs` | Bereitet ein Foto auf (Ausrichtung, Zuschnitt, Metadaten entfernen) |
| `scripts/social-preview/og.html` | Quelle der Social-Preview-Grafik |
| `tests/smoke.test.mjs` | Smoke-Tests für den Build |
| `wrangler.jsonc` | Konfiguration für Cloudflare Workers Static Assets |
| `.github/workflows/ci.yml` | CI für Pushes und Pull Requests (ohne Deployment) |
| `CONTENT_TODO.md` | Noch fehlende echte Angaben |

---

## Inhalte pflegen

Alle Inhalte liegen im Repository. Nach einer Änderung genügt ein Push auf `main`. Cloudflare baut und veröffentlicht dann automatisch.

### Profil, Texte, Timeline

`src/data/profile.ts` bearbeiten. Optionale Felder bleiben `undefined`, bis es einen echten Wert gibt:

- `externalLinks.github` / `externalLinks.linkedin`: erscheinen im Kontaktbereich und als `sameAs` in den Strukturdaten
- `publicCvUrl`: Download-Link zum Lebenslauf, nur für eine ausdrücklich öffentliche, bereinigte PDF in `public/`

Fehlende Werte erzeugen keinen Button und keinen `href="#"`.

### Projekte

Jede Datei in `src/content/projects/` ist ein Projekt. Der Dateiname muss dem `slug` entsprechen.

```yaml
---
title: Quiz Arena
slug: quiz-arena                 # = Dateiname, bestimmt /projekte/quiz-arena/
summary: Kurzer Teaser (20–220 Zeichen)
category: privat                 # beruflich | privat | konzept | experiment
status: in-entwicklung           # laufend | in-entwicklung | konzept | evaluierung | getestet
context: Privates Projekt in Entwicklung.
technologies: [React, Cloudflare Pages]
technologiesLabel: Projektstack (Zielarchitektur)   # optional
order: 2                         # eindeutige Reihenfolge
featured: true                   # groß auf der Startseite (aktuell 2 Projekte)
lastReviewed: "2026-11-24"       # Datum der letzten inhaltlichen Prüfung, von Hand pflegen
illustration: quiz-grid          # optional: api-flow | quiz-grid | hub-spoke | data-platform | load-balancer | iac-pipeline
illustrationCaption: Konzeptdarstellung – kein Screenshot.
links:                           # optional, nur echte https-URLs
  repository: https://github.com/…
  demo: https://…
---
```

Darunter folgt der Text in Markdown mit den Abschnitten *Worum geht es?*, *Mein Bezug*, *Technische Themen und Überlegungen* und *Stand*. Technologien und Links zeigt die Projektseite automatisch in der Seitenleiste an.

`npm run check` bzw. der Build brechen ab bei:

- ungültigen Feldern oder unbekannten Kategorien,
- URLs ohne `https://`,
- Slugs, die nicht zum Dateinamen passen,
- doppelten Slugs oder doppelter Reihenfolge.

### Impressum und Datenschutz

Die Seiten sind als **Entwurf** angelegt: sichtbarer Hinweis, `noindex`, nicht in der Sitemap. Vor der öffentlichen Freigabe:

1. Texte in `src/pages/impressum.astro` und `src/pages/datenschutz.astro` vervollständigen und prüfen (lassen).
2. In `src/data/legal-status.json` den jeweiligen Eintrag auf `"ready": true` setzen.

`noindex` verhindert nur die Aufnahme in Suchmaschinen. Die Seiten bleiben trotzdem öffentlich abrufbar.

### Foto austauschen

```bash
node scripts/prepare-portrait.mjs pfad/zum/foto.jpg
```

Das Skript dreht das Bild anhand der EXIF-Daten, schneidet es auf 4:5 zu und speichert es ohne Metadaten (auch ohne GPS) unter `src/assets/joshua-letschner.jpg`. Der Ausschnitt ist im Skript als `crop` festgelegt. Astro erzeugt daraus beim Build optimierte WebP-Varianten. Originalfotos gehören nicht nach `public/`.

### Social-Preview neu erzeugen

`scripts/social-preview/og.html` im Browser öffnen, das Fenster auf 1200 × 630 px stellen und einen Screenshot als `public/og/joshua-letschner.png` speichern. Das geht zum Beispiel über die Gerätesymbolleiste der Chrome-Entwicklertools und „Screenshot aufnehmen“.

---

## Build-Variablen

| Variable | Wirkung |
| --- | --- |
| `SITE_URL` | Öffentliche Basis-URL, z. B. `https://www.deine-domain.de`. Aktiviert Canonical-URLs, Sitemap, `og:url`/`og:image` und den Sitemap-Eintrag in `robots.txt`. Ohne Wert werden diese Angaben weggelassen; der Build funktioniert trotzdem. Muss mit `https://` beginnen. |
| `PRODUCTION_BRANCH` | Name des Produktionsbranches für die Preview-Erkennung (Standard: `main`). |
| `SITE_NOINDEX` | `true` setzt den gesamten Build auf `noindex`. |

Cloudflare setzt beim Build automatisch `WORKERS_CI_BRANCH` (Workers Builds) bzw. `CF_PAGES_BRANCH` (Pages). Ist dieser Branch nicht der Produktionsbranch, gilt der Build als Preview:

- `<meta name="robots" content="noindex, nofollow">` auf allen Seiten
- `robots.txt` mit `Disallow: /`
- keine Sitemap

Lokal ohne Variablen entsteht ein normaler, indexierbarer Build ohne Domain-Angaben. Vorlage: `.env.example`.

---

## Veröffentlichen mit Cloudflare Workers (primärer Weg)

GitHub liefert den Quellcode, Cloudflare baut und veröffentlicht ihn. Eine eigene Deploy-Action oder ein API-Token in GitHub ist nicht nötig.

### Einmalige Einrichtung

1. **GitHub verbinden:** Cloudflare-Dashboard → *Workers & Pages* → *Create* → *Import a repository* → GitHub-Konto verbinden.
2. **Repository wählen:** dieses Repository auswählen.
3. **Build-Einstellungen setzen:**

   | Einstellung | Wert |
   | --- | --- |
   | Produkt | Workers mit Git-Integration (Workers Builds) |
   | Projekt-/Worker-Name | `joshua-letschner-portfolio`. Muss exakt `name` in `wrangler.jsonc` entsprechen, sonst schlägt der Build fehl. |
   | Produktionsbranch | `main` |
   | Root directory | Repository-Wurzel (leer lassen bzw. `/`) |
   | Build command | `npm run build` |
   | Deploy command | `npx wrangler deploy` |
   | Assets | `dist`, kommt aus `assets.directory` in `wrangler.jsonc` |
   | Node-Version | 24, wird über `.node-version` erkannt. Optional zusätzlich die Build-Variable `NODE_VERSION=24` setzen. |

4. **Build-Variable setzen:** *Settings → Build → Variables and secrets* → `SITE_URL` = tatsächliche öffentliche URL. Das kann zunächst die `*.workers.dev`-Adresse sein, später die eigene Domain. Die Variable gilt nur für den Build, nicht zur Laufzeit.
5. **Erste Bereitstellung:** *Save and Deploy*. Danach ist die Seite unter `https://joshua-letschner-portfolio.<subdomain>.workers.dev` erreichbar.
6. **Eigene Domain (optional):** im Worker unter *Settings → Domains & Routes → Add → Custom domain*. Die Domain muss als Zone im selben Cloudflare-Konto liegen. Danach `SITE_URL` auf die Domain umstellen und neu deployen.

### Inhalte ändern und aktualisieren

```bash
# Text oder Projekt ändern, dann:
npm run check && npm run build && npm run test:smoke   # optional lokal prüfen
git commit -am "Projekttext aktualisiert"
git push origin main                                  # Cloudflare baut und veröffentlicht automatisch
```

Die GitHub-Action (`.github/workflows/ci.yml`) prüft parallel Installation, Typen, Build und Smoke-Tests. Sie veröffentlicht nichts.

### Preview-Builds für Branches und Pull Requests

Workers Builds kann für andere Branches als `main` eigene Vorschauen erzeugen:

- Aktivieren unter *Settings → Build → Branch control → Enable Preview Builds*.
- Für diese Branches läuft der *Preview command*. Standard ist `npx wrangler preview` (benötigt Wrangler ≥ 4.135, das Projekt nutzt 4.168). Er erzeugt eine Preview-URL der Form `<preview-name>-joshua-letschner-portfolio.<subdomain>.workers.dev`. Diese URL wird im Worker unter *Previews* angezeigt und bei GitHub als PR-Kommentar gepostet.
- Der Build eines solchen Branches setzt die Website über `WORKERS_CI_BRANCH` automatisch auf `noindex` (siehe oben). Cloudflare liefert `workers.dev`-Preview-URLs zusätzlich mit `X-Robots-Tag: noindex` aus.
- **Preview-URLs sind öffentlich erreichbar.** Wer sie schützen möchte, nutzt Cloudflare Access.

Diese Einstellungen gelten für Workers Builds. Cloudflare Pages hat ein eigenes, anderes Preview-Modell (siehe unten).

### Manuell deployen (Ausnahme)

`npm run deploy` baut und veröffentlicht per Wrangler direkt vom eigenen Rechner (`npx wrangler login` vorher). Für den normalen Ablauf nicht nötig. Lokal bauen ohne gesetztes `SITE_URL` lässt Canonical-URLs und Sitemap weg.

---

## Alternative: Cloudflare Pages

Derselbe statische Build funktioniert auch auf Pages. Das ist eine **Alternative**, kein zweites, parallel betriebenes Deployment.

1. Dashboard → *Workers & Pages* → *Create* → *Pages* → *Connect to Git* → Repository wählen.
2. Build-Einstellungen:

   | Einstellung | Wert |
   | --- | --- |
   | Framework preset | Astro (oder *None*) |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Produktionsbranch | `main` |
   | Node-Version | über `.node-version` (24) oder Variable `NODE_VERSION=24` |
   | Variablen | `SITE_URL` = echte URL. Bei abweichendem Produktionsbranch zusätzlich `PRODUCTION_BRANCH`. |

3. Keine Pages Functions und keinen Astro-SSR-Adapter hinzufügen.

**Zur `wrangler.jsonc`:** Pages wertet eine Wrangler-Datei im Repository nur aus, wenn sie `pages_build_output_dir` enthält. Die vorhandene Datei ist bewusst eine reine Workers-Konfiguration ohne diesen Schlüssel. Pages überspringt sie deshalb beim Build und nutzt die Dashboard-Einstellungen. Bitte **kein** `pages_build_output_dir` in `wrangler.jsonc` eintragen, sonst vermischen sich beide Konfigurationen. Bricht ein künftiger Pages-Build trotzdem wegen der Datei ab, ist die konkrete Anpassung: Build command auf `rm wrangler.jsonc && npm run build` stellen. Die Datei wird dann nur im Pages-Build entfernt, nicht im Repository.

`public/_headers` gilt auf Pages genauso. Pages setzt auf Preview-Deployments zusätzlich selbst `X-Robots-Tag: noindex`. `dist/404.html` wird als Fehlerseite ausgeliefert. Den Statuscode nach dem ersten Deploy mit `curl -I https://<projekt>.pages.dev/gibt-es-nicht/` prüfen.

---

## Sicherheit und Datenschutz

- **Security-Header** in `public/_headers`: Content-Security-Policy ohne `unsafe-inline` (`default-src 'self'`), `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy` und COOP/CORP. Damit die CSP greift, liefert Astro alle Skripte und Styles als Dateien aus (`build.inlineStylesheets: 'never'`, `vite.build.assetsInlineLimit: 0`). Ein Smoke-Test stellt sicher, dass keine Inline-Skripte oder -Styles entstehen. Einzige Ausnahme sind die JSON-LD-Strukturdaten; sie werden nicht ausgeführt.
- **Ohne JavaScript** funktionieren Inhalt, Navigation (alle Links dauerhaft sichtbar über `noscript.css`) und der E-Mail-Link.
- **Keine Drittanbieter:** Schriften (Geist, Geist Mono, SIL Open Font License, siehe `public/fonts/LICENSE-*.txt`), Bilder und Skripte kommen vom eigenen Host. Es gibt keine Cookies und keine Analytics.
- **Foto:** Das Porträt in `src/assets/` ist zugeschnitten und ohne EXIF/GPS. Astro schreibt beim Optimieren keine Metadaten. Ein Smoke-Test prüft alle Bilder in `dist/` auf EXIF.
- **Keine Geheimnisse im Repository:** Cloudflare verbindet sich über die GitHub-App. Ein API-Token wird nur für `npm run deploy` lokal per `wrangler login` gebraucht und nie eingecheckt.

## Gestaltung

| Rolle | Farbe | Kontrast auf `#F5F2EB` |
| --- | --- | --- |
| Hintergrund | `#F5F2EB` | – |
| Flächen | `#FFFEFA` | – |
| Text | `#20211E` | 14,5 : 1 |
| Sekundärtext | `#5B5C55` | 6,1 : 1 |
| Akzent (Rostrot) | `#A83D2E` | 5,6 : 1 |
| Linien | `#D7D3C9` | dekorativ |

Im dunklen Kontaktbereich (`#20211E`) haben Text `#F5F2EB` 14,5 : 1, Sekundärtext `#B9B6AC` 8,0 : 1 und Akzent `#E8907D` 6,7 : 1. Alle Textkombinationen erfüllen damit WCAG AA.

Bewegung ist dezent und entfällt bei `prefers-reduced-motion: reduce` vollständig. Inhalte sind nie bis zu einer Animation unsichtbar.

## Qualitätsprüfungen

Stand 24.11.2026, lokal gemessen:

- `npm ci`, `npm run check` (0 Fehler), `npm run build`, `npm run test:smoke` (8/8)
- Wrangler-Vorschau: alle Seiten 200, unbekannte Pfade 404 mit eigener Seite, `/projekte/quiz-arena` → 307 auf `/projekte/quiz-arena/`, Security-Header aktiv, `_headers` selbst nicht abrufbar
- 390, 768 und 1440 px: kein horizontales Überlaufen, keine Konsolenfehler
- Tastatur: Skip-Link, mobiles Menü (Enter, Escape mit Fokus zurück auf den Button, Schließen beim Verlassen per Tab), sichtbare Fokusrahmen
- Ohne JavaScript und mit reduzierter Bewegung geprüft
- Lighthouse 13.6 (mobil, lokal über `wrangler dev`): Startseite, „Sichere APIs in Azure“ und „Quiz Arena“ jeweils 100 / 100 / 100 / 100 (Performance / Accessibility / Best Practices / SEO). Lokale Werte enthalten keine echte Netzwerklatenz. Nach dem ersten Deploy auf der echten URL erneut messen.
