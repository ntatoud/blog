import { z, type SchemaContext } from 'astro:content';

export type Event = z.infer<ReturnType<typeof zEvent>>;
export const zEvent = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    tags: z.array(z.string()).optional(),
    link: z.string().url(),
    date: z.coerce.date(),
    heroImage: image().optional(),
  });
