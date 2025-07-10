import { z, type SchemaContext } from 'astro:content';

export type BlogPost = z.infer<ReturnType<typeof zBlogPost>>;
export const zBlogPost = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
  });
