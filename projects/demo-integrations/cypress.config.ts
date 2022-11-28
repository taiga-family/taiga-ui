import {defineConfig} from 'cypress';

import {TUI_COMPONENTS_EXCLUSION} from './cypress/support/properties/exclusions';

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
    defaultCommandTimeout: 30_000,

    /**
     * @description:
     * Time, in milliseconds, to wait until a response
     * in a cy.request(), cy.wait(),
     */
    responseTimeout: 30_000,

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

export const TUI_CYPRESS_ENV = {
    componentsExclusion: TUI_COMPONENTS_EXCLUSION,
    waitBeforeScreenshotComponents: 0,
    waitRenderedFont: `Manrope`,
    waitBeforeScreenshot: 1000,
    waitBeforeAction: 50,
};

export default defineConfig({
    ...TUI_CYPRESS_CONFIG,
    env: TUI_CYPRESS_ENV,
});
