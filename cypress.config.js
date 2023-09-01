const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    experimentalOriginDependencies: true,
    specPattern: "cypress/e2e/*.js",
    env: {
      allure: true,
      allureResultsPath: "allure-results",
      allureReuseAfterSpec: true,
      allureAttachRequests: true,
      allureClearSkippedTests: false,
      allureAddVideoOnPass: false,
      video: false,
    }
  },
});
