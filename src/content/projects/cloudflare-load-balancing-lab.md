---
title: Cloudflare Load-Balancing-Lab
slug: cloudflare-load-balancing-lab
summary: Verkehr zwischen zwei Azure App Services verteilen und sichtbar machen, welches Backend eine Anfrage beantwortet.
category: experiment
status: getestet
context: Technisches Experiment in einer kleinen Versuchsanordnung.
technologies:
  - Cloudflare Load Balancing
  - Azure App Services
  - Nginx
order: 6
featured: false
lastReviewed: "2026-11-24"
illustration: load-balancer
illustrationCaption: Vereinfachtes Lab-Setup – keine interne Umgebung.
---

## Worum geht es?

Ein kleines technisches Experiment: Wie verteilt Cloudflare Load Balancing Anfragen auf zwei Azure App Services – und wie lässt sich von außen erkennen, welches Backend eine Anfrage tatsächlich beantwortet hat?

## Aufbau

Die Versuchsanordnung ist bewusst einfach gehalten:

- zwei Azure App Services als Origins,
- Nginx auf beiden Backends,
- ein Cloudflare Load Balancer davor, der die Anfragen verteilt.

Eine zentrale Frage war, wie sich die beiden Backends in ihrer Antwort unterscheiden lassen – nur dann ist bei jeder Anfrage nachvollziehbar, wo sie gelandet ist.

## Getestete Fragestellungen

- **Hostnamen:** Welcher Hostname kommt beim Origin an, und erwartet der App Service genau diesen?
- **Origin-Konfiguration:** Wie müssen die Origins im Load Balancer eingetragen sein, damit Anfragen korrekt weitergeleitet werden?
- **Unterscheidbarkeit:** Wie macht man sichtbar, welches Backend geantwortet hat, ohne in Logs suchen zu müssen?

## Was ich daraus mitnehme

Gerade der Hostname ist bei App Services hinter einem vorgelagerten Dienst ein Punkt, an dem man genau hinschauen muss. Ein Lab wie dieses hilft, solche Details in Ruhe auszuprobieren, bevor sie in einem echten Projekt relevant werden.

## Stand

Ein Experiment, kein Produktionsaufbau. Failover-Zeiten oder Lastverhalten habe ich nicht belastbar gemessen; die Grafik zeigt nur das vereinfachte Lab.
