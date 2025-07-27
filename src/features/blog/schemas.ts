import { z, type SchemaContext } from 'astro:content';

export type BlogPost = z.infer<ReturnType<typeof zBlogPost>>;
export const zBlogPost = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    published: z.boolean().optional(),
  });
