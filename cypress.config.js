const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    "experimentalOriginDependencies": true,
    "e2e": {
      "specPattern": "cypress/e2e/*.js"
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
    },
  },
});
