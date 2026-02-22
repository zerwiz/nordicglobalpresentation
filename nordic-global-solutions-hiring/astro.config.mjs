import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nordicglobal.netlify.app',
  build: {
    assets: '_astro',
  },
});
