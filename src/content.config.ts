import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

import { zBlogPost } from '@/features/blog/schemas';
import { zEvent } from '@/features/events/schemas';

export const collections = {
  blogPosts: defineCollection({
    loader: glob({
      pattern: '**/*.mdx',
      base: './src/features/blog/content',
    }),
    schema: zBlogPost,
  }),
  events: defineCollection({
    loader: glob({
      pattern: '**/*.mdx',
      base: './src/features/events/content',
    }),
    schema: zEvent,
  }),
};
