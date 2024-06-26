import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://master--admirable-sunflower-8b0b7e.netlify.app/",
  integrations: [preact()]
});