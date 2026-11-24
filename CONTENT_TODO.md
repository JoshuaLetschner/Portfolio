# Offene Inhalte

Diese Angaben fehlen noch oder müssen bestätigt werden. Keiner der Punkte blockiert den lokalen Build. Fehlende optionale Angaben erscheinen nicht auf der Website, auch nicht als Platzhalter-Buttons.

## Vor der öffentlichen Freigabe

- [ ] **Impressum vervollständigen.** Anbietername und ladungsfähige Anschrift sowie ggf. weitere Pflichtangaben in `src/pages/impressum.astro` eintragen und prüfen (lassen). Danach in `src/data/legal-status.json` `"impressum": { "ready": true }` setzen. Bis dahin: sichtbarer Entwurf, `noindex`, nicht in der Sitemap. Die Seite ist trotzdem öffentlich abrufbar.
- [ ] **Datenschutzerklärung schreiben.** Der Entwurf in `src/pages/datenschutz.astro` beschreibt nur den technischen Aufbau. Es fehlen u. a. Hosting durch Cloudflare, Server-Logs, Rechtsgrundlagen und Betroffenenrechte. Nach Prüfung `"datenschutz": { "ready": true }` setzen.
- [ ] **Echte Domain bzw. URL festlegen.** In Cloudflare die Build-Variable `SITE_URL` setzen (zunächst ggf. die `workers.dev`-Adresse). Erst dann gibt es Canonical-URLs, Sitemap, `og:image` und `og:url`.
- [ ] **Originalfoto im Repository.** `IMG_7340.JPEG` liegt im Repository-Root und in der Git-Historie. Es enthält EXIF-Daten inklusive **GPS-Position**. Die Website nutzt nur die bereinigte Kopie in `src/assets/`, und das Original landet nicht in `dist/`. Ist das GitHub-Repository öffentlich, sind die Daten dort aber einsehbar. Empfehlung: Original aus dem Repository entfernen und ggf. die Historie bereinigen.

## Optional

- [ ] **GitHub-Profil** → `externalLinks.github` in `src/data/profile.ts`
- [ ] **LinkedIn-Profil** → `externalLinks.linkedin` in `src/data/profile.ts`
- [ ] **Öffentlicher Lebenslauf.** Nur eine ausdrücklich dafür bereinigte PDF ohne private Anschrift, Telefonnummer oder Geburtsdatum nach `public/` legen und `publicCvUrl` setzen. Bis dahin bleibt der Download ausgeblendet.
- [ ] **Projektlinks.** Für Projekte mit öffentlichem Code oder Demo unter `links:` im Frontmatter eintragen (nur `https://`).
- [ ] **Quiz Arena: Stand bestätigen.** Welche der geplanten Funktionen (Editor, Teams, Kategorien/Punkte, JSON-Import/-Export, zentrale Speicherung) und welche Teile des Stacks (React, Pages/Workers, D1) tatsächlich umgesetzt sind. Danach Text, `technologiesLabel` und ggf. `status` anpassen und `lastReviewed` aktualisieren.
- [ ] **Weitere Fotos.** Neue Bilder immer über `scripts/prepare-portrait.mjs` (oder gleichwertig) von Metadaten befreien.

## Nach dem ersten Deploy

- [ ] Lighthouse (mobil) auf der echten URL messen. Die lokalen Werte stehen im README.
- [ ] `curl -I https://<url>/gibt-es-nicht/` muss `404` liefern.
- [ ] Security-Header prüfen, z. B. mit `curl -I https://<url>/`.
- [ ] Preview-Builds: Preview-URL auf `noindex` prüfen.
