import { getCollection, type CollectionEntry } from 'astro:content';

type Params = {
  limit?: number;
};

export async function getBlogPostCollection({
  limit = undefined,
}: Params = {}) {
  const blogPosts = (await getCollection('blogPosts')).sort(latest);

  if (limit) {
    return blogPosts.slice(0, limit);
  }

  return blogPosts;
}

function latest(
  post1: CollectionEntry<'blogPosts'>,
  post2: CollectionEntry<'blogPosts'>
) {
  return (
    (post2.data.pubDate?.valueOf() ?? 0) - (post1.data.pubDate?.valueOf() ?? 0)
  );
}
