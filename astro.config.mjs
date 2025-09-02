import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/static";

export default defineConfig({
  site: "https://zeta-rpg.github.io/Tapiales-church",
  base: "/",
  adapter: netlify(),
});

