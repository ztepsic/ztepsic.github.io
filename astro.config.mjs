import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.ztepsic.com",
  integrations: [
    icon(),
    sitemap({
      lastmod: new Date("2024-08-07"),
      i18n: {
        defaultLocale: "en", // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en-US", // The `defaultLocale` value must present in `locales` keys
          hr: "hr-HR",
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hr"],
  },
});
