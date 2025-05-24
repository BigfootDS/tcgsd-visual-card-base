// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      experimentalReactChildren: true,
    })
  ],
  build: {
    inlineStylesheets: "always"
  },
  base:"tcgsd-server-url-here" // should this be removed? need a fuller picture of functionality across FE and BE to make this decision
});