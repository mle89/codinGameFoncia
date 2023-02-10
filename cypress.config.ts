import { defineConfig } from "cypress";
import * as webpack from "@cypress/webpack-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";

// This config to set cucumber as a preprocessor
async function setupNodeEvents(
  
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 60000,
  video: true,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Foncia Autoamtion report",
    reportFilename: "[status]-[datetime]-fullreport",
    timestamp: "yyyy-mm-dd_HH-MM-ss",
  },
  e2e: {
    // This parameter allows navigating between different domains
    chromeWebSecurity: false,
    // This parameter specifies .feature files as files for test execution
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
