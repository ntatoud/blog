import rss from '@astrojs/rss';

import type { APIRoute } from 'astro';

import { AUTHOR, SITE_DESCRIPTION, SITE_TITLE } from '@/consts';
import { getBlogPostCollection } from '@/features/blog/posts';

export const GET: APIRoute = async function get(context) {
  const posts = await getBlogPostCollection();

  return rss({
    title: `${SITE_TITLE} | Blog`,
    description: SITE_DESCRIPTION,
    site: context.site! + '/blog',
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      author: AUTHOR,
      link: `${context.site}/blog/${post.id}`,
      categories: post.data.tags,
    })),
    customData: '<language>en-EN</language>',
  });
};
