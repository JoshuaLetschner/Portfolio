import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type ProjectCategory = Project['data']['category'];
export type ProjectStatus = Project['data']['status'];

export const categoryLabels: Record<ProjectCategory, string> = {
  beruflich: 'Berufliches Thema',
  privat: 'Privates Projekt',
  konzept: 'Konzept / Evaluierung',
  experiment: 'Experiment',
};

export const categoryDescriptions: Record<ProjectCategory, string> = {
  beruflich: 'Themen aus meiner Arbeit als Cloud Engineer, anonymisiert beschrieben.',
  privat: 'Eigene Projekte außerhalb der Arbeit.',
  konzept: 'Überlegungen und Bewertungen – kein ausgerolltes Produkt.',
  experiment: 'Kleine Versuchsaufbauten, um etwas auszuprobieren.',
};

export const statusLabels: Record<ProjectStatus, string> = {
  laufend: 'Laufend',
  'in-entwicklung': 'In Entwicklung',
  konzept: 'Konzeptphase',
  evaluierung: 'In Evaluierung',
  getestet: 'Im Lab getestet',
};

export const linkLabels = {
  repository: 'Quellcode',
  demo: 'Live-Demo',
  website: 'Website',
} as const;

/**
 * Lädt alle Projekte sortiert nach `order` und prüft die Daten zusätzlich zum
 * Schema: Slug muss dem Dateinamen entsprechen, Slugs und Reihenfolge müssen
 * eindeutig sein. Ein Verstoß bricht den Build ab.
 */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  const seenSlugs = new Map<string, string>();
  const seenOrder = new Map<number, string>();

  for (const project of projects) {
    const file = project.filePath ?? project.id;
    const fileSlug = file.split('/').pop()?.replace(/\.md$/, '');
    if (fileSlug !== project.data.slug) {
      throw new Error(
        `Projekt "${file}": slug "${project.data.slug}" muss dem Dateinamen "${fileSlug}" entsprechen.`,
      );
    }
    const slugOwner = seenSlugs.get(project.data.slug);
    if (slugOwner) {
      throw new Error(`Doppelter Projekt-Slug "${project.data.slug}" in ${slugOwner} und ${file}.`);
    }
    seenSlugs.set(project.data.slug, file);

    const orderOwner = seenOrder.get(project.data.order);
    if (orderOwner) {
      throw new Error(`Doppelte Reihenfolge ${project.data.order} in ${orderOwner} und ${file}.`);
    }
    seenOrder.set(project.data.order, file);
  }

  return projects.sort((a, b) => a.data.order - b.data.order);
}

export function projectUrl(project: Project): string {
  return `/projekte/${project.data.slug}/`;
}

export interface ProjectLink {
  key: keyof typeof linkLabels;
  label: string;
  href: string;
}

/** Nur tatsächlich eingetragene Links – fehlende erzeugen kein Element. */
export function projectLinks(project: Project): ProjectLink[] {
  const links: ProjectLink[] = [];
  for (const key of Object.keys(linkLabels) as (keyof typeof linkLabels)[]) {
    const href = project.data.links[key];
    if (href) links.push({ key, label: linkLabels[key], href });
  }
  return links;
}

const dateFormatter = new Intl.DateTimeFormat('de-DE', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatDate(isoDate: string): string {
  return dateFormatter.format(new Date(`${isoDate}T00:00:00Z`));
}
