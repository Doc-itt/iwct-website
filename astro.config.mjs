// Astro build config: site URL, sitemap, and Tailwind v4 via Vite.
// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://iwctpainting.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
