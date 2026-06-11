import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.bigbytetech.com.au",
  // GitHub Pages serves the site from the docs/ folder on main
  outDir: "./docs",
  integrations: [react(), sitemap(), tailwind({ applyBaseStyles: false })],
  server: {
    port: 8080,
  },
});
