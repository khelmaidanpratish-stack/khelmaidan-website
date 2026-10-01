import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Football', 'Cricket', 'Volleyball', 'Extras']),
    publishedAt: z.string(),
    excerpt: z.string(),
    image: z.string().optional().default(''),
    author: z.string().default('KhelMaidan'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };
