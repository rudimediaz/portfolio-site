import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import Icons from "unplugin-icons/vite";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
});
