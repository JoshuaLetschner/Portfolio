---
title: Gemeinsame Cloud-Basis für getrennte Workloads
slug: cloud-plattform-konzept
summary: Gemeinsame Plattformdienste und getrennte Workloads so zusammendenken, dass Sicherheit, Betrieb und Kosten zusammenpassen.
category: konzept
status: konzept
context: Berufliche Architekturkonzeption und Kostenbetrachtung.
technologies:
  - Azure Hub-Spoke
  - Azure Firewall
  - Application Gateway
  - Azure API Management
  - Zentrale Netzwerkdienste
order: 4
featured: false
lastReviewed: "2026-11-24"
illustration: hub-spoke
illustrationCaption: Vereinfachtes Konzeptbild – kein realer Netzplan.
---

## Worum geht es?

Wenn mehrere Kunden auf einer Cloud-Plattform betrieben werden, stellt sich früh eine Grundsatzfrage: Welche Dienste teilen sich alle, und was muss pro Kunde getrennt bleiben? Dieses Konzept beschäftigt sich mit einer kosteneffizienten Plattformbasis in Azure, bei der gemeinsame Plattformdienste und getrennte Workloads zusammenpassen.

## Mein Bezug

Ich beschäftige mich mit der Frage, wie eine solche Basis aufgebaut sein kann und wo gemeinsam genutzte Dienste sinnvoll platziert werden. Es handelt sich um konzeptionelle Arbeit, nicht um eine von mir vollständig ausgerollte Plattform.

## Technische Themen und Überlegungen

Ausgangspunkt ist ein Hub-Spoke-Modell: Zentrale Netzwerkdienste wie Azure Firewall liegen im Hub, die Workloads in getrennten Spokes. Dazu kommt die Frage, wo gemeinsame Ingress-Dienste wie Application Gateway und API Management ihren Platz finden.

Eine zentrale Erkenntnis aus der Beschäftigung damit: Gemeinsame Komponenten senken nicht automatisch alle Kosten. Ein geteilter Dienst spart vielleicht Infrastruktur, schafft aber Abhängigkeiten zwischen Workloads, die vorher unabhängig waren. Bei der Bewertung gehören deshalb mehrere Fragen zusammen:

- Wie stark müssen Workloads voneinander getrennt sein?
- Welche Abhängigkeiten entstehen durch gemeinsam genutzte Dienste?
- Wie hoch ist der Betriebsaufwand für zentrale gegenüber verteilten Komponenten?
- Wie verändern sich die Kosten, wenn weitere Workloads dazukommen?

## Stand

Ein Konzept in der Bewertung. Mandantenanzahlen, Kundennamen, Adressbereiche und reale Netzpläne sind bewusst nicht Teil dieser Beschreibung.
