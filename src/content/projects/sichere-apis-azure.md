---
title: Sichere APIs in Azure
slug: sichere-apis-azure
summary: API-Zugriffe absichern und Authentifizierung zwischen Clients, API Management und Backend nachvollziehbar gestalten.
category: beruflich
status: laufend
context: Berufliches Projektthema; Arbeit an Integration und Konfiguration.
technologies:
  - Azure API Management
  - mTLS
  - OAuth 2.0 Client Credentials
  - Microsoft Entra ID
  - Azure Key Vault
  - Terraform
  - Azure App Services
order: 1
featured: true
lastReviewed: "2026-11-24"
illustration: api-flow
illustrationCaption: Vereinfachte, allgemeine Darstellung – keine reale Umgebung.
---

## Worum geht es?

Eine Schnittstelle in der Cloud erreichbar zu machen, ist nur der erste Schritt. Genauso wichtig ist, wer sie aufrufen darf, wie sich ein Aufrufer ausweist und wie die API ihrerseits das dahinterliegende Backend erreicht. In diesem beruflichen Projektthema geht es darum, diese Wege zwischen Clients, Azure API Management (APIM) und Backend-Diensten abzusichern und nachvollziehbar zu gestalten.

## Mein Bezug

Mein Anteil liegt bei Integration und Konfiguration. Konkret beschäftige ich mich mit:

- der Terminierung von mTLS an API Management,
- der Beschaffung von OAuth-Tokens für Aufrufe an das Backend,
- der Einbindung von API-Konfigurationen in Terraform und Deployment-Abläufe.

## Technische Themen und Überlegungen

Client-Zertifikate und Backend-Tokens erfüllen unterschiedliche Aufgaben. Mit mTLS weist sich der aufrufende Client per Zertifikat gegenüber API Management aus. Für den Aufruf des Backends geht es dagegen um ein Token, das über den Client-Credentials-Flow mit Entra ID bezogen wird. Beides lässt sich nicht gegeneinander austauschen – es sind zwei getrennte Fragen der Vertrauenskette.

Dazu kommt: Netzwerkanbindung, Identität und Automatisierung müssen zusammen betrachtet werden. Eine sauber konfigurierte Authentifizierung hilft wenig, wenn die Netzwerkanbindung nicht passt, und umgekehrt. Zertifikate und Geheimnisse gehören in einen Key Vault statt in Konfigurationsdateien. Wenn API-Konfigurationen über Terraform und Deployment-Abläufe laufen, bleiben Änderungen nachvollziehbar und wiederholbar.

## Stand

Ein laufendes berufliches Thema. Echte Endpunkte, Policys, Schlüssel und Topologien veröffentliche ich bewusst nicht; die Grafik zeigt nur das Prinzip.
