import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "ofethz",
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
    },
  },
});