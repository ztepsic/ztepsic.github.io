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
    }),
  ],
});
