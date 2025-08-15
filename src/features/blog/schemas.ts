import { z, type SchemaContext } from 'astro:content';

export type Languages = z.infer<ReturnType<typeof zLanguages>>;
const zLanguages = () => z.enum(['fr', 'en']);
export const LANGUAGES_ASSETS: Record<
  Languages,
  { flag: string; name: string }
> = {
  fr: {
    flag: '🇫🇷',
    name: 'French',
  },
  en: {
    flag: '🇬🇧',
    name: 'English',
  },
};

export type BlogPost = z.infer<ReturnType<typeof zBlogPost>>;
export const zBlogPost = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    translations: z
      .array(
        z
          .object({
            lang: zLanguages(),
            url: z.string().url(),
          })
          .transform((val) => ({
            ...LANGUAGES_ASSETS[val.lang],
            url: val.url,
          }))
      )
      .optional(),
    tags: z.array(z.string()).optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    published: z.boolean().optional(),
  });
