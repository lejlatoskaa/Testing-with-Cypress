const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseUrl: "https://www.inspire11.com/",
  experimentalSessionAndOrigin: true,

  // experimentalModifyObstructiveThirdPartyCode: true,
  experimentalOriginDependencies: true,

  chromeWebSecurity: false,

  setupNodeEvents(on, config) {
    // implement node event listeners here
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
