import {defineConfig} from 'cypress';

export const viewportWidth = 1440;
export const viewportHeight = 900;

export const TUI_CYPRESS_CONFIG: Cypress.ConfigOptions = {
    projectId: `sorry-cypress`,
    video: false,
    viewportWidth,
    viewportHeight,
    fixturesFolder: `cypress/fixtures`,
    screenshotsFolder: `cypress/screenshots`,

    /**
     * @description:
     * Time, in milliseconds, to wait until most
     * DOM based commands are considered timed out.
     */
    defaultCommandTimeout: 4000,

    /**
     * @description:
     * Time, in milliseconds, to wait until a response
     * in a cy.request(), cy.wait(),
     */
    responseTimeout: 30_000,

    /**
     * @description:
     * Number of times to retry a failed test.
     * If a number is set, tests will retry in both runMode and openMode.
     */
    retries: {
        runMode: 1, // Configure retry attempts for `cypress run`
        openMode: 0, // Configure retry attempts for `cypress open`
    },

    /**
     * @description:
     * The number of tests for which snapshots and command data are kept in memory.
     * Reduce this number if you are experiencing high memory
     * consumption in your browser during a test run.
     */
    numTestsKeptInMemory: 0,

    e2e: {
        specPattern: `cypress/tests/**/*.cy.ts`,
        supportFile: `cypress/support/e2e.ts`,
        baseUrl: `http://localhost:3333`,
        /**
         * @description:
         * We've imported your old cypress plugins here.
         * You may want to clean this up later by importing these.
         */
        setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
            return require(`./cypress/plugins/index.ts`).default(on, config);
        },
    },
};

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    ...TUI_CYPRESS_CONFIG,
    env: {waitRenderedFont: `Manrope`},
});
