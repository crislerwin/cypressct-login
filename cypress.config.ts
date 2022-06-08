import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "Crisler",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    viewportHeight: 1000,
    viewportWidth: 1000,
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
