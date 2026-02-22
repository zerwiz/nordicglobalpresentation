import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'http://localhost:3000',
  server: { port: 3000 },
  build: { assets: '_astro' },
});
