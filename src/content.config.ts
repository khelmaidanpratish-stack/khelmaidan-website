import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/articles',
  }),

  schema: z.object({
    title: z.string(),

    category: z.enum([
      'Football',
      'Cricket',
      'Volleyball',
      'Extras',
    ]),

    // Accept both quoted date strings and YAML-parsed dates,
    // then normalize everything to YYYY-MM-DD.
    publishedAt: z.coerce.date().transform((date) =>
      date.toISOString().slice(0, 10)
    ),

    excerpt: z.string(),

    image: z.string().optional().default(''),

    author: z.string().default('KhelMaidan'),

    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };