import { getCollection, type CollectionEntry } from 'astro:content';

type Params = {
  limit?: number;
};

type BlogPostEntry = CollectionEntry<'blogPosts'>;
export async function getBlogPostCollection({
  limit = undefined,
}: Params = {}) {
  const blogPosts = (await getCollection('blogPosts'))
    .filter(isPublished)
    .sort(latest);

  if (limit) {
    return blogPosts.slice(0, limit);
  }

  return blogPosts;
}

const latest = (post1: BlogPostEntry, post2: BlogPostEntry) =>
  (post2.data.pubDate?.valueOf() ?? 0) - (post1.data.pubDate?.valueOf() ?? 0);

const isPublished = (post: BlogPostEntry) =>
  post.data.published || !import.meta.env.PROD;
