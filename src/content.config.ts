import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

import { zBlogPost } from '@/features/blog/schemas';

export const collections = {
  blogPosts: defineCollection({
    loader: glob({
      pattern: '**/*.mdx',
      base: './src/features/blog/content',
    }),
    schema: zBlogPost,
  }),
};
