import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://konsultank3.space',
  output: 'static',
  build: {
    format: 'directory'
  }
});
