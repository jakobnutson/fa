import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
    site: 'https://jakobnutson.github.io',
    base: '/fa',
    integrations: [
        mdx(),
         partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ]
});
