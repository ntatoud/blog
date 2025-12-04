// @ts-check
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import typedRoutes from '@bearstudio/astro-typed-routes';
import tailwindcss from '@tailwindcss/vite';
import rehypePrettyCode from 'rehype-pretty-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://noe.tatoud.com',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    react(),
    sitemap(),
    typedRoutes(),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      strictPort: true,
    },
  },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
        },
      ],
    ],
  },
});
