import { z, type SchemaContext } from 'astro:content';

export type zEventRole = z.infer<typeof zEventRole>;
export const zEventRole = z.enum([
  'attendee',
  'animator',
  'speaker',
  'organizer',
  'volunteer',
]);

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
    role: zEventRole,
  });
