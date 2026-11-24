import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Einordnung eines Eintrags – bewusst getrennt dargestellt. */
export const projectCategories = ['beruflich', 'privat', 'konzept', 'experiment'] as const;

/** Bearbeitungsstand. Kein Status behauptet ein abgeschlossenes Produkt. */
export const projectStatuses = [
  'laufend',
  'in-entwicklung',
  'konzept',
  'evaluierung',
  'getestet',
] as const;

export const projectIllustrations = [
  'api-flow',
  'quiz-grid',
  'hub-spoke',
  'data-platform',
  'load-balancer',
  'iac-pipeline',
] as const;

/** Nur echte, öffentlich erreichbare HTTPS-URLs. */
const publicUrl = z.url({ protocol: /^https$/, hostname: z.regexes.domain });

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '*.md' }),
  schema: z
    .object({
      title: z.string().min(3),
      /** Muss dem Dateinamen entsprechen; bestimmt die URL /projekte/<slug>/. */
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug nur aus a–z, 0–9 und Bindestrichen'),
      summary: z.string().min(20).max(220),
      category: z.enum(projectCategories),
      status: z.enum(projectStatuses),
      /** Kurze Einordnung in einem Satz, z. B. „Berufliches Projektthema; …“ */
      context: z.string().min(10),
      technologies: z.array(z.string().min(1)).min(1),
      /** Überschrift der Technologieliste, z. B. für einen geplanten Stack. */
      technologiesLabel: z.string().default('Technologien und Themen'),
      order: z.number().int().positive(),
      featured: z.boolean().default(false),
      lastReviewed: z.iso.date(),
      illustration: z.enum(projectIllustrations).optional(),
      illustrationCaption: z.string().optional(),
      /** Optionale Links – nur mit echter URL eintragen, sonst weglassen. */
      links: z
        .object({
          repository: publicUrl.optional(),
          demo: publicUrl.optional(),
          website: publicUrl.optional(),
        })
        .strict()
        .default({}),
    })
    .strict(),
});

export const collections = { projects };
