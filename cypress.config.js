const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    URL: "http://localhost:5173"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
