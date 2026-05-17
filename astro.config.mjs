import { defineConfig } from "astro/config";
// import node from "@astrojs/node";
import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://comic.yie.io",
  adapter: vercel(),
  output: "server",

  i18n: {
    defaultLocale: "zh",
    locales: ["en", "zh"],
    routing: "manual",
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