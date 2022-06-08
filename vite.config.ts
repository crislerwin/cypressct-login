import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { ViteAliases } from "vite-aliases";

export default defineConfig({
  plugins: [reactRefresh(), ViteAliases()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@assets": "/src/assets",
      "@styles": "/src/styles",
      "@hooks": "/src/hooks",
      "@constants": "/src/constants",
      "@api": "/src/api",
      "@router": "/src/router",
      "@store": "/src/store",
      "@locales": "/src/locales",
      "@config": "/src/config",
      "@mock": "/src/mock",
    },
  },
});
