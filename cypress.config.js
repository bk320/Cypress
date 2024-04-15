const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  projectId: "yh1bzy",
  reporter: "cypress-mochawesome-reporter",

  //defaultCommandTimeout: 3000,
  viewportWidth: 1400,

  viewportHeight: 1000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
