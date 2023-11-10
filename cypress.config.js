const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2dbk4o',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
