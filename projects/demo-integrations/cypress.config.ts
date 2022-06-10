import {defineConfig} from 'cypress';

export const viewportWidth = 1440;
export const viewportHeight = 900;

export default defineConfig({
    projectId: 'sorry-cypress',
    video: false,
    screenshotsFolder: 'cypress/screenshots',
    fixturesFolder: 'cypress/fixtures',
    viewportWidth,
    viewportHeight,
    defaultCommandTimeout: 10000,
    responseTimeout: 10000,
    numTestsKeptInMemory: 1,
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
            return require('./cypress/plugins/index.ts').default(on, config);
        },
        specPattern: 'cypress/tests/**/*.spec.ts',
        supportFile: 'cypress/support/e2e.ts',
        baseUrl: 'http://localhost:3333',
    },
});
