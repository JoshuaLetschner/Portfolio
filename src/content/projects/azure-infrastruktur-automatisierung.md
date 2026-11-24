---
title: Azure-Infrastruktur und Automatisierung
slug: azure-infrastruktur-automatisierung
summary: Cloud-Ressourcen, Netzwerke und Betriebsanforderungen mit wiederholbaren Konfigurationen zusammenbringen.
category: beruflich
status: laufend
context: Laufendes berufliches Arbeitsfeld – kein einzelnes, abgeschlossenes Projekt.
technologies:
  - Terraform
  - Azure DevOps
  - Hub-Spoke-Netzwerke
  - Azure App Services
  - Azure Monitor
  - Log Analytics
order: 3
featured: false
lastReviewed: "2026-11-24"
illustration: iac-pipeline
illustrationCaption: Vereinfachte Darstellung des Ablaufs.
---

## Worum geht es?

Dieser Eintrag beschreibt kein einzelnes Projekt, sondern ein breites Arbeitsfeld, das sich durch meinen Alltag als Cloud Engineer zieht: Cloud-Ressourcen, Netzwerke und Betriebsanforderungen so zusammenzubringen, dass sich eine Umgebung wiederholbar aufbauen und verlässlich betreiben lässt.

## Mein Bezug

Ich beschäftige mich laufend mit Azure-Architekturen, mit der Planung von Ressourcen, mit Infrastrukturmodulen in Terraform und mit Betriebsfragen. Dazu gehört auch die Frage, wie Produktions- und Testumgebungen sauber voneinander getrennt bleiben.

## Technische Themen und Überlegungen

**Nachvollziehbare Änderungen.** Wenn Infrastruktur als Code beschrieben ist, lässt sich jede Änderung prüfen, besprechen und über Azure DevOps ausrollen, statt sie von Hand im Portal vorzunehmen.

**Wiederverwendbare Konfigurationen.** Module helfen, wiederkehrende Bausteine wie Netzwerke oder App Services einheitlich aufzubauen, ohne dieselbe Konfiguration mehrfach zu pflegen.

**Getrennte Umgebungen.** Test- und Produktionsumgebungen sollen sich ähneln, aber nicht gegenseitig beeinflussen. Das betrifft Netzwerke, Berechtigungen und die Abläufe beim Ausrollen.

**Architektur, Betrieb und Kosten zusammen denken.** Eine Architektur ist erst dann gut, wenn sie sich auch im Alltag überwachen und betreuen lässt. Monitoring mit Azure Monitor und Log Analytics gehört deshalb von Anfang an dazu – ebenso der Blick darauf, was eine Lösung im Betrieb kostet.

## Stand

Ein laufendes Arbeitsfeld, das sich mit jedem Thema weiterentwickelt. Es steht nicht für eine vollständige Plattformverantwortung und nicht für ein abgeschlossenes Kundenprodukt.
