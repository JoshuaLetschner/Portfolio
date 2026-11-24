# Code-Agent-Prompt: Persönliche Website für Joshua Letschner

> Diesen gesamten Prompt im Repository an den Code-Agenten übergeben. Er soll die Website tatsächlich implementieren. Inhaltsstand: 24. November 2026. Die Fakten und Formulierungen unten sind die Grundlage; die ursprünglichen Bewerbungsunterlagen müssen dafür nicht in das Repository kopiert werden.

## 1. Dein Auftrag

Du bist ein erfahrener Frontend-Entwickler mit gutem Gespür für Typografie, persönliche Portfolios und wartbare Websites. Erstelle meine vollständige persönliche Website: **Joshua Letschner, Cloud Engineer aus der Region Karlsruhe**.

Die Website soll mich als Person, meinen beruflichen Hintergrund und ausgewählte berufliche sowie private Projekte vorstellen. Sie soll individuell, hochwertig und glaubwürdig wirken. Besucher sollen schnell verstehen, womit ich mich beschäftige, wie ich an technische Aufgaben herangehe und was mich neben der Arbeit interessiert.

Implementiere eine fertige, responsive Website mit den unten angegebenen Inhalten, Unterseiten, funktionierender Navigation und Deployment-Konfiguration. Liefere nicht nur ein Konzept oder ein leeres Template. Triff gewöhnliche Design- und Implementierungsentscheidungen selbstständig.

**Hosting:** Cloudflare Workers mit Static Assets als primärer Weg; derselbe statische Build soll alternativ auf Cloudflare Pages funktionieren. Ich verbinde mein GitHub-Repository selbst mit Cloudflare. Nach dieser Verbindung sollen Änderungen am Produktionsbranch automatisch gebaut und veröffentlicht werden.

Die Seite ist mein persönliches Portfolio. Sie ist keine offizielle Website meines Arbeitgebers, keine Agentur und kein Shop. Stelle mich nicht ungefragt als Freelancer, Jobsuchenden oder für Aufträge verfügbar dar.

## 2. Verlässliche Inhalte über mich

### Profil

| Feld | Inhalt |
| --- | --- |
| Name | Joshua Letschner |
| Aktuelle Rolle | Cloud Engineer mit Schwerpunkt Microsoft Azure |
| Arbeitgeber | INIT, Karlsruhe; seit Januar 2025 |
| Öffentliche Ortsangabe | Region Karlsruhe |
| Ausbildung | Fachinformatiker für Systemintegration |
| Kontakt-E-Mail | joshua@letschner.de |
| Sprachen | Deutsch: Muttersprache; Englisch: fließend |
| Berufliche Themen | Cloud-Infrastruktur, Automatisierung, Netzwerke, API-Sicherheit, Betrieb und Kostenbetrachtung |
| Persönliche Interessen | Gaming, Strategie- und Aufbauspiele, Minecraft mit Mods, Reisen und eigene Softwareprojekte |

Nutze „Cloud Engineer“ als aktuelle Berufsbezeichnung. Mein Lebenslauf und Anschreiben aus Oktober 2024 bilden frühere Stationen ab; die Bewerbung als IT Consultant beschreibt nicht meine aktuelle Rolle. Behaupte weder einen Hochschulabschluss noch eine Senior-, Lead- oder Architektenposition.

### Beruflicher Weg

| Zeitraum | Station | Geeignete öffentliche Beschreibung |
| --- | --- | --- |
| Seit Januar 2025 | Cloud Engineer bei INIT, Karlsruhe | Beschäftigung mit Azure-Infrastruktur, Cloud-Netzwerken, Automatisierung und sicheren Schnittstellen im Umfeld von Mobilitätssoftware. |
| Juli 2022 – Juni 2024 | IT-Support Engineer bei Schleupen SE | IT-Infrastruktur betreuen, bestehende Umgebungen analysieren und Kunden bei technischen Fragen und Verbesserungen unterstützen. |
| 2019 – 2022 | Ausbildung zum Fachinformatiker für Systemintegration | Ausbildung bei Schleupen SE und der Heinrich-Hertz-Schule Karlsruhe. |
| 2017 – 2019 | Fachhochschulreife | Albert-Einstein-Schule Ettlingen. |

Für die Ausbildung genügt die Jahresangabe, da unterschiedliche Unterlagen den Abschlussmonat leicht unterschiedlich führen. Erfinde keine Tätigkeit für die Zeit zwischen Juli und Dezember 2024. Frühere Nebenjobs und die Realschule müssen nicht auf die Website.

### Fachliche Themen

Stelle Fähigkeiten als nachvollziehbare Themenfelder dar. Nutze keine Prozentbalken, Sterne oder erfundenen Kompetenzstufen.

| Themenfeld | Inhalt |
| --- | --- |
| Azure & Cloud | Hub-Spoke-Netzwerke, App Services, Application Gateway/WAF, API Management, Azure Firewall, Private DNS, Entra ID und Key Vault |
| Automatisierung & Betrieb | Terraform, PowerShell, Azure DevOps, Azure Monitor und Log Analytics |
| Netzwerke & API-Sicherheit | Cloudflare, Reverse Proxies, VPN, mTLS, OAuth 2.0 und Client-Credentials-Flows |
| Datenplattformen: aktuelle Projektthemen | Oracle Autonomous Database auf Azure, Microsoft Fabric sowie Bewertung von Datenintegration, Kapazitäten und Betriebskosten |
| Infrastruktur-Hintergrund | Windows Server, Active Directory, Hyper-V, VMware, Proxmox, Veeam, Microsoft SQL Server und Endpoint Security |
| Eigenes Webprojekt | Quiz Arena; React sowie Cloudflare Pages, Workers und D1 als geplanter beziehungsweise verwendeter Projektstack, ohne ungeprüfte Aussagen zum Implementierungsstand |

Die Website soll Schwerpunkte zeigen und nicht jede Technologie gleich stark gewichten. D1, Fabric und Oracle nicht automatisch als jahrelange Expertenerfahrung darstellen. Keine Zertifizierungen, Kundenzahlen, Umsatzwerte, Einsparungen oder Verfügbarkeitswerte erfinden.

## 3. Fertige Textgrundlage

Verwende die folgenden Texte als Ausgangspunkt. Du darfst sie für guten Lesefluss behutsam bearbeiten, ohne neue Tatsachen hinzuzufügen.

### Hero

- Kleine Einordnung: **Cloud Engineer · Region Karlsruhe**
- Hauptüberschrift: **Joshua Letschner.**
- Aussage darunter: **Cloud-Infrastruktur verstehen. Automatisieren. Weiterdenken.**
- Kurztext: „Ich arbeite mit Microsoft Azure, automatisiere Infrastruktur und beschäftige mich mit sicheren Schnittstellen. Neben meinem Job entwickle ich eigene Projekte und probiere neue technische Ideen aus.“
- Primäre Aktion: **Projekte ansehen** → Projektbereich.
- Sekundäre Aktion: **Kontakt aufnehmen** → Kontaktbereich.

### Über mich

„Ich bin Joshua und arbeite als Cloud Engineer bei INIT in Karlsruhe. Mein Weg in die IT begann mit einer Ausbildung zum Fachinformatiker für Systemintegration und anschließender Arbeit im IT-Support. Heute beschäftige ich mich vor allem mit Microsoft Azure, Automatisierung und der Frage, wie sich Infrastruktur sicher und nachvollziehbar betreiben lässt.

Mich interessiert das Zusammenspiel der einzelnen Bausteine: Netzwerke, Identitäten, Schnittstellen und Anwendungen. Dabei schaue ich auch darauf, wie sich eine Lösung im Alltag betreuen lässt und welche Kosten sie verursacht.

Außerhalb der Arbeit spiele ich gerne Strategie- und Aufbauspiele, reise und setze eigene Ideen um. Mit Quiz Arena verbinde ich zum Beispiel Softwareentwicklung mit Spieleabenden.“

### Kontakt

Überschrift: **Lass uns ins Gespräch kommen.**

Text: „Du möchtest dich über Cloud-Infrastruktur, Automatisierung oder eines meiner Projekte austauschen? Schreib mir gerne eine E-Mail.“

E-Mail als sichtbarer, funktionierender `mailto:`-Link. Optional eine zugängliche Schaltfläche zum Kopieren mit Erfolgsmeldung. Ohne JavaScript muss der E-Mail-Link weiter funktionieren.

Keine erfundenen Aussagen wie „aktuell offen für neue Stellen“, „weltweit für Kunden verfügbar“ oder „Jetzt Erstgespräch buchen“.

## 4. Projekte: Inhalte und Grenzen der Aussagen

Erstelle sechs Einträge. Unterscheide im Datenmodell und in der Darstellung **berufliches Thema**, **privates Projekt**, **Konzept/Evaluierung** und **Experiment**. Ein Thema, über das ich nachdenke oder das ich teste, ist kein nachgewiesen abgeschlossenes Produkt.

Für jeden Eintrag gibt es einen kurzen Teaser und eine eigene statisch generierte Detailseite. Die Detailseiten sollen ungefähr 180–300 Wörter haben, soweit die belegten Inhalte dafür ausreichen. Kürzer ist besser als erfundener Fülltext.

### A. Sichere APIs in Azure

- **Slug:** `sichere-apis-azure`
- **Einordnung:** Berufliches Projektthema; Arbeit an Integration und Konfiguration.
- **Teaser:** „API-Zugriffe absichern und Authentifizierung zwischen Clients, API Management und Backend nachvollziehbar gestalten.“
- **Themen:** Azure API Management, mTLS, OAuth 2.0 Client Credentials, Entra ID, Key Vault, Terraform und Azure App Services.
- **Mein belegbarer Bezug:** Beschäftigung mit mTLS-Terminierung an APIM, OAuth-Tokenbeschaffung für Backend-Aufrufe und der Einbindung von API-Konfigurationen in Terraform und Deployment-Abläufe.
- **Erklärbarer Inhalt:** Client-Zertifikate und Backend-Token erfüllen unterschiedliche Aufgaben; Netzwerkanbindung, Identität und Automatisierung müssen zusammen betrachtet werden.
- **Grenze:** Keine Aussage, dass ich das gesamte System allein entwickelt habe. Keine Behauptung, sämtliche APIs seien öffentlich erreichbar. Keine echten Endpunkte, Policys, Schlüssel oder Kundentopologien veröffentlichen.

### B. Quiz Arena

- **Slug:** `quiz-arena`
- **Einordnung:** Privates Projekt in Entwicklung.
- **Teaser:** „Eine Quiz-Web-App für gemeinsame Spieleabende mit mehreren Teams und einem Editor für eigene Fragen.“
- **Bekannter Stand:** Es gibt bereits eine besprochene Benutzeroberfläche; Designverbesserungen und Quizdateien waren Teil der bisherigen Arbeit. Der genaue Fertigstellungsstand einzelner Funktionen ist nicht vollständig belegt.
- **Projektziel:** Quizze im Web bearbeiten, mehrere Teams verwalten, Fragen nach Kategorien und Punkten organisieren, Quizze als JSON importieren/exportieren und zentral speichern.
- **Geplanter Stack:** React, Cloudflare Pages/Workers und D1. Stelle diesen ausdrücklich als Projektstack beziehungsweise Zielarchitektur dar, solange Repository oder lauffähige App einzelne Bestandteile nicht bestätigen.
- **Persönlicher Bezug:** Eigene Quizsets, unter anderem zum Thema „Around the World“; verständliche Bedienung und ein eigenständiges visuelles Design sind mir wichtig.
- **Grenze:** Nicht automatisch sämtliche geplanten Funktionen als fertig ausweisen. Keinen Benutzerzähler, öffentlichen Launch oder Open-Source-Status erfinden. Die Portfolio-Aufgabe umfasst keine Neuimplementierung der Quiz-App.
- **Visual:** Ein kleines abstraktes Fragenraster darf als Illustration dienen. Beschrifte es bei Bedarf als Konzeptdarstellung; nicht als echten Screenshot ausgeben.

### C. Gemeinsame Cloud-Basis für getrennte Workloads

- **Slug:** `cloud-plattform-konzept`
- **Einordnung:** Berufliche Architekturkonzeption und Kostenbetrachtung.
- **Teaser:** „Gemeinsame Plattformdienste und getrennte Workloads so zusammendenken, dass Sicherheit, Betrieb und Kosten zusammenpassen.“
- **Themen:** Azure Hub-Spoke, zentrale Netzwerkdienste, gemeinsame Ingress-Dienste, getrennte Workload-Spokes, APIM, Application Gateway und Azure Firewall.
- **Mein Bezug:** Beschäftigung mit einer kosteneffizienten Plattformbasis für mehrere Kunden und der sinnvollen Platzierung gemeinsam genutzter Dienste.
- **Erklärbarer Inhalt:** Gemeinsame Komponenten reduzieren nicht automatisch alle Kosten; Trennung, Abhängigkeiten und Betriebsaufwand gehören in die Bewertung.
- **Grenze:** Als Konzept darstellen, nicht als von mir vollständig ausgerollte SaaS-Plattform. Keine Mandantenanzahlen, Kundennamen, IP-Bereiche, Subscription-Namen oder realen Netzpläne.

### D. Datenplattformen und Cloud-Kosten

- **Slug:** `datenplattformen-cloud-kosten`
- **Einordnung:** Berufliche Evaluierung und Planung.
- **Teaser:** „Datenbanken, Datenintegration und Analyseplattformen unter technischen und wirtschaftlichen Gesichtspunkten vergleichen.“
- **Themen:** Oracle Autonomous Database auf Azure, Microsoft Fabric, Datenintegration, Kapazitätsplanung sowie gemeinsame und dedizierte Datenbanken.
- **Mein Bezug:** Vergleich von Datenbankmodellen und Beschäftigung mit der Dimensionierung von Fabric sowie der Integration von Oracle-Daten.
- **Erklärbarer Inhalt:** Neben Compute und Speicher spielen Lastprofile, Betriebsmodell, Isolation und Skalierbarkeit eine Rolle.
- **Grenze:** Keine konkreten Kundenkalkulationen, Kapazitäten oder Einsparungen. GoldenGate und SharePlex höchstens als betrachtete Technologien erwähnen; keinen verifizierten Produktivbetrieb oder abgeschlossene Migration behaupten.

### E. Cloudflare Load-Balancing-Lab

- **Slug:** `cloudflare-load-balancing-lab`
- **Einordnung:** Technisches Experiment; nicht automatisch einem Kundenprojekt zuordnen.
- **Teaser:** „Verkehr zwischen zwei Azure App Services verteilen und sichtbar machen, welches Backend eine Anfrage beantwortet.“
- **Bekannter Bezug:** Cloudflare Load Balancing mit zwei App Services und Nginx wurde getestet. Hostnamen, Origin-Konfiguration und die Unterscheidbarkeit der Backends waren konkrete Themen.
- **Darstellung:** Kleine technische Versuchsanordnung mit verständlicher Erklärung von Ziel, Aufbau und getesteten Fragestellungen.
- **Grenze:** Keine belastbaren Failover-Zeiten, Lasttests oder Produktionsreife behaupten. Eine Illustration zeigt nur ein vereinfachtes Lab, keine interne Umgebung.

### F. Azure-Infrastruktur und Automatisierung

- **Slug:** `azure-infrastruktur-automatisierung`
- **Einordnung:** Laufendes berufliches Arbeitsfeld.
- **Teaser:** „Cloud-Ressourcen, Netzwerke und Betriebsanforderungen mit wiederholbaren Konfigurationen zusammenbringen.“
- **Themen:** Terraform, Azure DevOps, Hub-Spoke-Netzwerke, App Services, Monitoring und Trennung von Produktions- und Testumgebungen.
- **Mein Bezug:** Laufende Beschäftigung mit Azure-Architekturen, Ressourcenplanung, Infrastrukturmodulen und Betriebsfragen.
- **Erklärbarer Inhalt:** Nachvollziehbare Änderungen, wiederverwendbare Konfigurationen und die Verbindung von Architektur, Betrieb und Kosten.
- **Grenze:** Keine vollständige Plattformverantwortung, Zertifizierung oder pauschale Hochverfügbarkeitsgarantie behaupten. Als breites Arbeitsfeld kennzeichnen, nicht als sechstes abgeschlossenes Kundenprodukt.

### Aufbau der Detailseiten

Verwende kurze, verständliche Abschnitte:

1. Worum geht es?
2. Mein Bezug / meine Arbeit daran.
3. Technische Themen und Überlegungen.
4. Stand und gegebenenfalls nächste Schritte.
5. Technologien und vorhandene Links.

Keine erfundenen „Ergebnisse“ erzwingen. Ergebnisse, geplante Funktionen und Beobachtungen müssen unterscheidbar sein. Alle aktuellen Einordnungen erhalten intern `lastReviewed: "2026-11-24"`; kein automatisch aktualisiertes Datum, das eine neue Prüfung vortäuscht.

GitHub-, Live-Demo- und sonstige Projektlinks nur anzeigen, wenn eine echte URL konfiguriert ist. Ein fehlender Link erzeugt keinen toten Button und kein `href="#"`.

## 5. Umgang mit privaten und internen Informationen

Diese Datei enthält bereits die für die Website ausgewählten Informationen. Verwende andere Dateien im Repository nicht ungeprüft als öffentliche Inhalte.

- Verwende „INIT“ und „Schleupen SE“ als berufliche Stationen. Keine Firmenlogos oder Aussagen, die eine offizielle Partnerschaft oder Empfehlung suggerieren.
- Berufliche Projekte bleiben anonymisiert. Keine Namen von Kunden, Verkehrsbetrieben, Ausschreibungen, Ansprechpartnern oder internen Projekten.
- Keine internen Domains, Tenant-IDs, Subscription-IDs, Infrastrukturadressen, Kundenzahlen, Architektur-Screenshots, Budgets, Anforderungen oder Sicherheitskonfigurationen.
- Private Wohnanschrift, Telefonnummer, Geburtsdatum, Beziehungsstatus und finanzielle Angelegenheiten gehören nicht in das Portfolio.
- Originalen Lebenslauf und originales Anschreiben nicht in `public/`, Git oder Deployment-Artefakte kopieren. Sie enthalten private Angaben und einen veralteten Bewerbungsstand.
- Einen Lebenslauf-Download nur vorsehen, wenn später eine ausdrücklich für die Öffentlichkeit bestimmte, bereinigte Datei bereitgestellt wird. Bis dahin bleibt der Download vollständig ausgeblendet.
- Keine externen Profile oder Porträtfotos anhand meines Namens suchen und übernehmen. Kein künstliches Foto von mir erzeugen.

## 6. Gestaltung

### Gewünschter Eindruck

Eigenständiges persönliches Portfolio mit technischer Klarheit und etwas Persönlichkeit. Große Typografie, ruhiger Satz, sichtbare Abstände und eine bewusste Komposition. Es darf hochwertig und etwas editorial wirken, muss aber leicht lesbar bleiben.

Ich habe bereits deutlich gemacht, dass mir generische KI-Designs mit blauen Farbverläufen nicht gefallen. Vermeide deshalb blaue/lila Verläufe, Neon-Glows, Glassmorphism, fliegende Partikel, endlose gleichartige Karten und die übliche SaaS-Landingpage-Optik. Ebenso keine Schreibmaschinenanimation, kein Fake-Terminal und keine zufälligen Codezeilen als Dekoration.

### Konkrete Designrichtung

- Standardansicht: warmes Off-White, fast schwarze Schrift und ein sparsamer Rostrot-Akzent.
- Ausgangsfarben: Hintergrund `#F5F2EB`, Flächen `#FFFEFA`, Text `#20211E`, sekundärer Text `#5B5C55`, Akzent `#A83D2E`, dezente Trennlinien `#D7D3C9`.
- Prüfe Kontraste in der tatsächlichen Verwendung. Die Palette ist eine Gestaltungsbasis, kein Nachweis der Barrierefreiheit.
- Eine klare Sans-Serif, beispielsweise lokal eingebundene Geist Sans; eine kleine Monospace-Ergänzung für Metadaten ist möglich. Beachte die Font-Lizenz und halte sie im Repository vor. Keine Laufzeitabfragen an Google Fonts.
- Hero auf großen Displays asymmetrisch: großer Name und Intro links, eine reduzierte persönliche Fläche rechts. Verwende ein typografisches „JL“ mit einer eigenen Linienkomposition, solange kein freigegebenes Porträt existiert.
- Projektübersicht bevorzugt als abwechslungsreiche Liste mit Titel, kurzer Beschreibung, Einordnung und ausgewählten Illustrationen. Zwei hervorgehobene Projekte sind „Sichere APIs in Azure“ und „Quiz Arena“.
- Die berufliche Timeline soll lesbar und kompakt sein. Zeige die aktuelle Station zuerst.
- Abgerundete Ecken sparsam; keine Pillen für jede Information und keine Emojis als primäres Icon-System.
- Maximal etwa 1.200 px Inhaltsbreite; Fließtext deutlich schmaler. Auf Mobilgeräten genügend Rand, vernünftige Schriftgrößen und komfortable Touch-Flächen.
- Dezente Hover-/Focus-Effekte. Bewegung kurz und optional; `prefers-reduced-motion` respektieren. Inhalte dürfen nicht bis zu einer Animation unsichtbar bleiben.

Ein Dark Mode ist für Version 1 nicht erforderlich. Priorisiere eine überzeugende, vollständig ausgearbeitete Gestaltung.

## 7. Seiten und Funktionen

### Startseite `/`

In sinnvoller Reihenfolge:

1. Header mit Name oder JL-Monogramm und Navigation zu Über mich, Projekte, Erfahrung und Kontakt.
2. Hero mit zwei funktionierenden Aktionen.
3. Über mich mit persönlichem, nicht werblichem Text.
4. Ausgewählte Projekte und weitere Einblicke, insgesamt sechs verlinkte Einträge.
5. Fachliche Schwerpunkte mit kurzen Erklärungen statt einer riesigen Logo-Wand.
6. Beruflicher Weg.
7. Kleiner persönlicher Abschnitt zu Gaming, Reisen und eigenen Projekten.
8. Kontakt und Footer.

### Weitere Routen

- `/projekte/[slug]/`: sechs Detailseiten.
- `/impressum/` und `/datenschutz/`: technisch vorbereitete Seiten für die tatsächlichen Betreiberangaben und passenden Texte.
- Eigene 404-Seite mit Rückweg zur Startseite und echtem HTTP-404-Status.

Für Impressum und Datenschutz keine fiktiven Angaben, keine aus Bewerbungsunterlagen kopierte Privatanschrift und keine behauptete Rechtskonformität. Fehlende Angaben in `CONTENT_TODO.md` festhalten. Bis zur Ergänzung die betreffenden Seiten sichtbar als Entwurf kennzeichnen, mit `noindex` versehen und aus der Sitemap ausschließen. Dokumentiere, dass diese Entwürfe vor der öffentlichen Freigabe vervollständigt und geprüft werden müssen; `noindex` ist keine Zugriffssperre.

### Verhalten

- Responsive Navigation mit semantischem Button, korrektem `aria-expanded`, Tastaturbedienung, Escape zum Schließen und nachvollziehbarer Fokusführung.
- Ankersprünge dürfen nicht unter dem Header verschwinden.
- Normale Projektlinks und Browser-Zurück müssen funktionieren; kein Modal als einzige Zugriffsmöglichkeit auf Projektinhalte.
- Optional genau eine einfache Projektfilterung nach beruflich, privat und Experiment. Nur bauen, wenn sie die Übersicht bei sechs Einträgen wirklich verbessert; ohne JavaScript bleiben alle Projekte sichtbar.
- Kein Login, Admin-Bereich, CMS, Kontaktformular, Chatbot oder Newsletter in Version 1.
- Kein Blog mit erfundenen Artikeln und keine automatisch eingebundenen GitHub-Aktivitäten.
- Sprache der gesamten Oberfläche: Deutsch. Keine unvollständige Sprachumschaltung.

## 8. Technische Umsetzung

### Stack

- **Astro mit statischer Ausgabe**, TypeScript und klar strukturiertem CSS.
- Standardmäßig Astro-Komponenten und kleines Vanilla-JavaScript für notwendige Interaktionen. Kein React-Runtime-Bundle nur für das Portfolio.
- Projekttexte in Markdown Content Collections mit validiertem Schema; Profil, Kontakt, Timeline und Links in zentralen TypeScript-Daten.
- Nutze die zur installierten stabilen Astro-Version passende Content-Collection-API und prüfe aktuelle offizielle Dokumentation. Keine veralteten APIs aus Erinnerung kopieren.
- npm als Paketmanager, eingecheckte `package-lock.json`, passende stabile Node-LTS-Version dokumentieren und über Versionsdatei sowie `engines` konsistent festhalten.
- `output: 'static'`; für diesen Build keinen SSR-Adapter, keinen laufenden Node-Server und keine Datenbank einführen.
- Cloudflare Workers Static Assets liefert den fertigen Ordner `dist/` aus. Die sechs Projektseiten werden beim Build erzeugt.

### Vorgeschlagene Struktur

| Pfad | Zweck |
| --- | --- |
| `src/data/profile.ts` | Profil, E-Mail, Timeline, Interessen und optionale externe Links |
| `src/content/projects/*.md` | Projektbeschreibungen mit Metadaten |
| `src/content.config.ts` | Validiertes Collection-Schema; Pfad an tatsächliche Astro-Version anpassen |
| `src/components/` | Wiederverwendbare Header-, Projekt-, Timeline- und Kontakt-Komponenten |
| `src/layouts/` | Basislayout und Layout für Projektseiten |
| `src/pages/` | Statische Routen inklusive Projektseiten und 404 |
| `src/styles/` | Designvariablen und globale Styles |
| `public/` | Nur ausdrücklich öffentliche Fonts, Icons, Bilder und Header-Dateien |
| `wrangler.jsonc` | Workers-Deployment für Static Assets |
| `.github/workflows/ci.yml` | Prüfungen für Pushes und Pull Requests |
| `README.md` | Lokaler Start, Inhaltspflege, Build und Cloudflare-Anbindung |
| `CONTENT_TODO.md` | Noch fehlende echte Angaben, ohne öffentliche Platzhalter-Buttons |

Das Projektschema soll mindestens Titel, Slug, Kurzbeschreibung, Kategorie, Status, Technologien, Reihenfolge, `featured`, `lastReviewed` und optionale echte URLs unterstützen. Validierung soll ungültige URLs und doppelte Slugs erkennen. Die Datenhaltung darf nicht von einer Laufzeit-API abhängen.

Optionale Felder wie GitHub-Profil, LinkedIn, Foto, Domain und öffentlicher Lebenslauf starten ohne Wert. Gib keine erfundenen Handles ein und leite die Website-Domain nicht aus meiner E-Mail-Adresse ab.

### Qualität, SEO und Datenschutz

- Semantisches HTML, ein klares H1 pro Seite, Skip-Link, sichtbare Fokuszustände und sinnvolle Alternativtexte.
- Inhalt, Navigation und Kontakt funktionieren grundsätzlich ohne JavaScript.
- Bilder lokal optimieren und mit Abmessungen ausliefern; keine unnötigen Hintergrundvideos.
- Individuelle Seitentitel, Meta-Descriptions, Open-Graph-Angaben und eine selbst erstellte typografische Social-Preview-Grafik.
- Canonical-URLs und Sitemap aus einer konfigurierten echten `SITE_URL` erzeugen. Ohne diese Konfiguration keine erfundene Produktionsdomain ausgeben; lokale Preview bleibt funktionsfähig.
- `Person`-Strukturdaten nur mit tatsächlich vorhandenen öffentlichen Angaben; `sameAs` nur für echte konfigurierte Profile.
- Preview-Deployments auf `noindex` setzen und aus der Produktions-Sitemap halten; beachte, dass eine Preview-URL trotzdem öffentlich erreichbar sein kann.
- Fonts und Assets lokal. Standardmäßig keine Analytics, Tracking-Pixel, externen Embeds oder Marketing-Cookies.
- Sinnvolle Security-Header über `public/_headers`; eine CSP nur so konfigurieren, dass tatsächliche Astro-Skripte und Styles weiter funktionieren. Lokalen Cloudflare-Preview dafür prüfen.
- Keine Zugangsdaten, Cloudflare-API-Tokens oder privaten Dokumente im Repository oder Client-Bundle.
- Als Qualitätsziel auf dem gebauten Stand: mobile Lighthouse-Werte möglichst mindestens 95 für Performance, Accessibility, Best Practices und SEO. Nur tatsächlich gemessene Werte berichten und mögliche Abweichungen erklären.

## 9. Cloudflare und GitHub

### Primär: Workers Static Assets + Workers Builds

Lege eine vollständige `wrangler.jsonc` an. Für den rein statischen Build ist diese Konfiguration die Ausgangsbasis:

```jsonc
{
  "$schema": "./node_modules/wrangler/config-schema.json",
  "name": "joshua-letschner-portfolio",
  "compatibility_date": "2026-11-24",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "404-page",
    "html_handling": "auto-trailing-slash"
  }
}
```

Prüfe die Konfiguration gegen die tatsächlich verwendete Wrangler-Version. Setze bei einer späteren Umsetzung ein gültiges geprüftes Kompatibilitätsdatum. Für einen Worker, der ausschließlich Assets ausliefert, keinen unnötigen `main`-Entrypoint, kein `ASSETS`-Binding und keine `nodejs_compat`-Flag hinzufügen. Kein SPA-Fallback: Die Website hat echte statische Unterseiten und eine echte 404-Seite.

Stelle mindestens folgende npm-Skripte bereit:

| Skript | Aufgabe |
| --- | --- |
| `npm run dev` | Astro-Entwicklung lokal |
| `npm run check` | Astro-/TypeScript- und Inhaltsprüfung |
| `npm run build` | Statischen Build erzeugen |
| `npm run preview` | Astro-Build lokal ansehen |
| `npm run preview:cloudflare` | Build mit Wrangler lokal prüfen, ohne Remote-Deployment |
| `npm run deploy` | Bewusster manueller Workers-Deploy per Wrangler |

Dokumentiere für meine GitHub-Anbindung:

| Cloudflare-Einstellung | Wert / Vorgehen |
| --- | --- |
| Produkt | Workers mit Git-Integration / Workers Builds |
| Repository | Das von mir verbundene GitHub-Repository |
| Projektverzeichnis | Repository-Wurzel, sofern tatsächlich dort implementiert |
| Produktionsbranch | `main`, oder den vorhandenen Branchnamen ausdrücklich übernehmen |
| Build Command | `npm run build` |
| Deploy Command | `npx wrangler deploy` |
| Assets | `dist`, über `assets.directory` konfiguriert |
| Worker-Name | Muss mit `name` in `wrangler.jsonc` übereinstimmen |
| Node-Version | Dieselbe unterstützte Version wie lokal und in CI |
| Website-URL | Tatsächliche öffentliche URL als `SITE_URL` konfigurieren |

Cloudflare soll nach Pushes selbst aus GitHub bauen und deployen. Keine zweite automatisch deployende GitHub-Action hinzufügen. Eine CI-Action für Installation, Prüfung und Build ist erwünscht, benötigt aber kein Cloudflare-Deployment-Token. Dokumentiere Preview-Branch-/PR-Einstellungen anhand der aktuellen Workers-Builds-Dokumentation, ohne sie mit den Einstellungen von Pages gleichzusetzen.

Erkläre im README kurz: GitHub verbinden, Repository wählen, Build-Einstellungen setzen, erste Bereitstellung, echte Domain optional verbinden, Inhalte ändern und per Push aktualisieren. GitHub liefert den Quellcode; Cloudflare baut und veröffentlicht ihn.

### Alternative: Cloudflare Pages

Beschreibe zusätzlich den statischen Pages-Weg im README:

- GitHub-Repository verbinden.
- Build-Befehl `npm run build`.
- Ausgabeverzeichnis `dist`.
- Passende Node-Version und echte `SITE_URL` setzen.
- Keine Pages Functions und keinen Astro-SSR-Adapter für diese statische Website.

Dieser Weg ist eine Alternative, kein zweites gleichzeitig betriebenes Deployment. Workers- und Pages-Konfiguration nicht in einer Wrangler-Datei vermischen. Falls die aktuelle Pages-Erkennung mit der Workers-Konfiguration kollidiert, liefere eine klar dokumentierte getrennte Konfigurationsvariante beziehungsweise die konkret nötige Anpassung. Beide Wege verwenden denselben statischen Website-Code.

Ich übernehme die Kontoverbindung und das erste öffentliche Deployment. Bereite alles dafür vor und teste lokal; veröffentliche nicht eigenmächtig und ändere keine DNS-Einträge.

## 10. Arbeitsweise und Abnahme

1. Prüfe zuerst das vorhandene Repository und seine Anweisungen. Bewahre vorhandene sinnvolle Inhalte und Änderungen. Kein ungefragtes Zurücksetzen oder Austausch des gesamten Repositories.
2. Setze Layout, Inhalte, Datenmodell und Projektseiten vollständig um. Zeige mir keine Auswahl zwischen mehreren unfertigen Templates.
3. Konfiguriere Cloudflare, CI und dokumentierte npm-Skripte passend zum implementierten Build.
4. Führe `npm ci`, die Projektprüfung und einen Produktionsbuild aus. Prüfe die gebauten Seiten auch über Wrangler lokal.
5. Kontrolliere Startseite, alle sechs Projektseiten, Navigation, Kontakt und 404 bei direktem Aufruf sowie nach einem Reload.
6. Prüfe mindestens 390 px, 768 px und 1440 px Breite, horizontales Overflow, Tastaturbedienung, Fokuszustände und reduzierte Bewegung.
7. Prüfe echte 404-Statuscodes, Assets, funktionierende Links, Konsole und gegebenenfalls Lighthouse. Verwende wenige sinnvolle Smoke-Tests; keine breite Testsuite für triviale Texte.
8. Kontrolliere `dist/` und Git-Änderungen auf private Dateien, Geheimnisse, erfundene Projektlinks und irreführende Aussagen über Projektstände.
9. Dokumentiere verbleibende Angaben kompakt in `CONTENT_TODO.md`: echte Domain, optionale soziale Profile, optionales Foto, gegebenenfalls bestätigte Projektlinks und Betreiber-/Datenschutztexte. Fehlende optionale Angaben dürfen den lokalen Build nicht blockieren.
10. Liefere eine kurze Abschlussmeldung mit implementierten Funktionen, ausgeführten Prüfungen, tatsächlichen Ergebnissen und den konkreten Cloudflare-Einstellungen. Behaupte keinen erfolgreichen öffentlichen Deploy, wenn nur lokal getestet wurde.

Die Aufgabe ist fertig, wenn eine individuell gestaltete, inhaltlich ausgefüllte und lokal geprüfte Website vorliegt, die ich mit meinem GitHub-Repository an Cloudflare anbinden kann. Offen bleiben dürfen nur echte, noch nicht vorliegende persönliche Angaben und die von mir vorzunehmende Veröffentlichung.

## 11. Offizielle technische Referenzen

Zum Erstellungszeitpunkt geprüft. Bei der Umsetzung aktuelle Versionen und Unterschiede zwischen rein statischen Builds und SSR beachten:

- [Cloudflare Workers: Static Assets](https://developers.cloudflare.com/workers/static-assets/)
- [Cloudflare Workers: Static Site Generation und 404-Seiten](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/)
- [Cloudflare Workers: Konfiguration und Assets-Binding](https://developers.cloudflare.com/workers/static-assets/binding/)
- [Cloudflare Workers Builds: Git-Integration](https://developers.cloudflare.com/workers/ci-cd/builds/)
- [Cloudflare Pages: Git-Integration](https://developers.cloudflare.com/pages/configuration/git-integration/)
- [Cloudflare Pages: Astro](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Astro: Deployment auf Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Astro: Cloudflare-Adapter; für rein statische Builds nicht erforderlich](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)

**Beginne jetzt mit der Implementierung und arbeite bis zum lokal getesteten Ergebnis.**
