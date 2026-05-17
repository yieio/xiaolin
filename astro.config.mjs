import { defineConfig } from "astro/config";
import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://comic.yie.io",
  adapter: node({ mode: "standalone" }),
  output: "server",

  i18n: {
    defaultLocale: "zh",
    locales: ["en", "zh"],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
    domains: [],
  },

  vite: {
    ssr: {
      noExternal: [],
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "zh",
        locales: {
          zh: "zh-CN",
          en: "en",
        },
      },
    }),
  ],
});