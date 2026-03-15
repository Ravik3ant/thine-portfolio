// @ts-check
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  // Static output — works on Vercel, Railway (serve with any static file server),
  // or open directly from disk.
  output: "static",
  integrations: [vue()],
});
