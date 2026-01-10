// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://cloud9aviation.info',
  server: {
    allowedHosts: ["championless-caridad-toxophily.ngrok-free.dev"],
  },
});