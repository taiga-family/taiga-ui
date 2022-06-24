import {defineConfig} from 'cypress';

export const viewportWidth = 1440;
export const viewportHeight = 900;

export default defineConfig({
    projectId: 'sorry-cypress',
    video: false,
    viewportWidth,
    viewportHeight,
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',

    /**
     * @description:
     * Time, in milliseconds, to wait until most
     * DOM based commands are considered timed out.
     */
    defaultCommandTimeout: 8000,

    /**
     * @description:
     * Time, in milliseconds, to wait until a response
     * in a cy.request(), cy.wait(),
     */
    responseTimeout: 5000,

    /**
     * @description:
     * The number of tests for which snapshots and command data are kept in memory.
     * Reduce this number if you are experiencing high memory
     * consumption in your browser during a test run.
     */
    numTestsKeptInMemory: 50,

    e2e: {
        specPattern: 'cypress/tests/**/*.spec.ts',
        supportFile: 'cypress/support/e2e.ts',
        baseUrl: 'http://localhost:3333',
        /**
         * @description:
         * We've imported your old cypress plugins here.
         * You may want to clean this up later by importing these.
         */
        setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
            return require('./cypress/plugins/index.ts').default(on, config);
        },
    },
});
