// Astro build config: site URL, sitemap, and Tailwind v4 via Vite.
// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://iwctpainting.com',
  // Business card QR code target — keep in sync with public/_redirects.
  redirects: {
    '/card': { status: 302, destination: '/contact' },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
