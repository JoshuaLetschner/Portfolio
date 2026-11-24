/**
 * Zentrale Profildaten.
 *
 * Nur Angaben eintragen, die öffentlich sichtbar sein sollen. Optionale Felder
 * bleiben `undefined`, bis es einen echten Wert gibt – die Website blendet
 * fehlende Links dann vollständig aus (kein `href="#"`, kein toter Button).
 */

export interface TimelineEntry {
  period: string;
  /** Maschinenlesbarer Zeitraum für <time>-Elemente. */
  start: string;
  end?: string;
  title: string;
  organization?: string;
  description?: string;
  current?: boolean;
}

export interface FocusArea {
  title: string;
  /** Kurze Einordnung in eigenen Worten. */
  description: string;
  items: string[];
  weight: 'schwerpunkt' | 'projektthema' | 'hintergrund' | 'privat';
}

export interface ExternalLinks {
  github?: string;
  linkedin?: string;
}

export const profile = {
  name: 'Joshua Letschner',
  firstName: 'Joshua',
  role: 'Cloud Engineer',
  roleDetail: 'Cloud Engineer mit Schwerpunkt Microsoft Azure',
  employer: 'INIT',
  employerCity: 'Karlsruhe',
  employedSince: 'Januar 2025',
  location: 'Region Karlsruhe',
  education: 'Fachinformatiker für Systemintegration',
  email: 'joshua@letschner.de',
  languages: [
    { name: 'Deutsch', level: 'Muttersprache', code: 'de' },
    { name: 'Englisch', level: 'fließend', code: 'en' },
  ],
  /** Datum der letzten inhaltlichen Prüfung – bewusst fest eingetragen. */
  contentReviewed: '2026-11-24',
} as const;

/**
 * Optionale externe Profile. Erst eintragen, wenn die URL wirklich existiert.
 * Sie erscheinen dann im Kontaktbereich und als `sameAs` in den Strukturdaten.
 */
export const externalLinks: ExternalLinks = {
  github: undefined,
  linkedin: undefined,
};

/**
 * Öffentlicher, bereinigter Lebenslauf (z. B. '/lebenslauf-joshua-letschner.pdf').
 * Bleibt leer, bis eine ausdrücklich zur Veröffentlichung bestimmte Datei vorliegt.
 */
export const publicCvUrl: string | undefined = undefined;

export const hero = {
  eyebrow: 'Cloud Engineer · Region Karlsruhe',
  statement: ['Cloud-Infrastruktur verstehen.', 'Automatisieren.', 'Weiterdenken.'],
  intro:
    'Ich arbeite mit Microsoft Azure, automatisiere Infrastruktur und beschäftige mich mit sicheren Schnittstellen. Neben meinem Job entwickle ich eigene Projekte und probiere neue technische Ideen aus.',
};

export const about = [
  'Ich bin Joshua und arbeite als Cloud Engineer bei INIT in Karlsruhe. Mein Weg in die IT begann mit einer Ausbildung zum Fachinformatiker für Systemintegration und anschließender Arbeit im IT-Support. Heute beschäftige ich mich vor allem mit Microsoft Azure, Automatisierung und der Frage, wie sich Infrastruktur sicher und nachvollziehbar betreiben lässt.',
  'Mich interessiert das Zusammenspiel der einzelnen Bausteine: Netzwerke, Identitäten, Schnittstellen und Anwendungen. Dabei schaue ich auch darauf, wie sich eine Lösung im Alltag betreuen lässt und welche Kosten sie verursacht.',
  'Außerhalb der Arbeit spiele ich gerne Strategie- und Aufbauspiele, reise und setze eigene Ideen um. Mit Quiz Arena verbinde ich zum Beispiel Softwareentwicklung mit Spieleabenden.',
];

export const timeline: TimelineEntry[] = [
  {
    period: 'Seit Januar 2025',
    start: '2025-01',
    title: 'Cloud Engineer',
    organization: 'INIT, Karlsruhe',
    description:
      'Beschäftigung mit Azure-Infrastruktur, Cloud-Netzwerken, Automatisierung und sicheren Schnittstellen im Umfeld von Mobilitätssoftware.',
    current: true,
  },
  {
    period: 'Juli 2022 – Juni 2024',
    start: '2022-07',
    end: '2024-06',
    title: 'IT-Support Engineer',
    organization: 'Schleupen SE',
    description:
      'IT-Infrastruktur betreuen, bestehende Umgebungen analysieren und Kunden bei technischen Fragen und Verbesserungen unterstützen.',
  },
  {
    period: '2019 – 2022',
    start: '2019',
    end: '2022',
    title: 'Ausbildung zum Fachinformatiker für Systemintegration',
    organization: 'Schleupen SE und Heinrich-Hertz-Schule Karlsruhe',
  },
  {
    period: '2017 – 2019',
    start: '2017',
    end: '2019',
    title: 'Fachhochschulreife',
    organization: 'Albert-Einstein-Schule Ettlingen',
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: 'Azure & Cloud',
    description:
      'Netzwerk-, Plattform- und Identitätsdienste in Azure – und wie sie zusammenspielen, damit Anwendungen erreichbar und trotzdem gut abgeschirmt sind.',
    items: [
      'Hub-Spoke-Netzwerke',
      'App Services',
      'Application Gateway/WAF',
      'API Management',
      'Azure Firewall',
      'Private DNS',
      'Entra ID',
      'Key Vault',
    ],
    weight: 'schwerpunkt',
  },
  {
    title: 'Automatisierung & Betrieb',
    description:
      'Infrastruktur als Code beschreiben, Änderungen über Pipelines ausrollen und den laufenden Betrieb im Blick behalten.',
    items: ['Terraform', 'PowerShell', 'Azure DevOps', 'Azure Monitor', 'Log Analytics'],
    weight: 'schwerpunkt',
  },
  {
    title: 'Netzwerke & API-Sicherheit',
    description:
      'Wege von Anfragen nachvollziehen und absichern: vom Proxy über Zertifikate bis zum Token für den Backend-Aufruf.',
    items: [
      'Cloudflare',
      'Reverse Proxies',
      'VPN',
      'mTLS',
      'OAuth 2.0',
      'Client-Credentials-Flows',
    ],
    weight: 'schwerpunkt',
  },
  {
    title: 'Datenplattformen',
    description:
      'Datenbanken und Analyseplattformen technisch und wirtschaftlich einordnen – aktuelle Projektthemen, keine langjährige Spezialisierung.',
    items: [
      'Oracle Autonomous Database auf Azure',
      'Microsoft Fabric',
      'Datenintegration',
      'Kapazitäten und Betriebskosten',
    ],
    weight: 'projektthema',
  },
  {
    title: 'Infrastruktur-Hintergrund',
    description: 'Grundlagen aus Ausbildung und IT-Support.',
    items: [
      'Windows Server',
      'Active Directory',
      'Hyper-V',
      'VMware',
      'Proxmox',
      'Veeam',
      'Microsoft SQL Server',
      'Endpoint Security',
    ],
    weight: 'hintergrund',
  },
  {
    title: 'Eigenes Webprojekt',
    description: 'Quiz Arena – mit React sowie Cloudflare Pages, Workers und D1 als Projektstack.',
    items: ['React', 'Cloudflare Pages', 'Cloudflare Workers', 'Cloudflare D1'],
    weight: 'privat',
  },
];

export const focusWeightLabels: Record<FocusArea['weight'], string> = {
  schwerpunkt: 'Schwerpunkt',
  projektthema: 'Aktuelles Projektthema',
  hintergrund: 'Hintergrund',
  privat: 'Privates Projekt',
};

export const personal = [
  {
    icon: 'strategy',
    title: 'Strategie & Aufbau',
    text: 'Ich spiele gerne Strategie- und Aufbauspiele sowie Minecraft mit Mods.',
  },
  {
    icon: 'travel',
    title: 'Reisen',
    text: 'Ich reise gerne. Das Foto oben ist unterwegs entstanden.',
  },
  {
    icon: 'build',
    title: 'Eigene Projekte',
    text: 'Neben dem Job setze ich eigene Software-Ideen um und probiere neue Technik aus – aktuell vor allem Quiz Arena.',
    link: { href: '/projekte/quiz-arena/', label: 'Zu Quiz Arena' },
  },
] as const;

export const contact = {
  heading: 'Lass uns ins Gespräch kommen.',
  text: 'Du möchtest dich über Cloud-Infrastruktur, Automatisierung oder eines meiner Projekte austauschen? Schreib mir gerne eine E-Mail.',
};

export const navigation = [
  { href: '/#ueber-mich', label: 'Über mich' },
  { href: '/#projekte', label: 'Projekte' },
  { href: '/#erfahrung', label: 'Erfahrung' },
  { href: '/#kontakt', label: 'Kontakt' },
];
