/// <reference types="node" />
import {defineConfig} from 'cypress';

import {
    TUI_BLOCK_HOSTS as blockHosts,
    TUI_CYPRESS_DESKTOP_VIEWPORT_HEIGHT as viewportHeight,
    TUI_CYPRESS_DESKTOP_VIEWPORT_WIDTH as viewportWidth,
} from './cypress/cypress.options';
import {DEEP_PATHS} from './cypress/support/helpers/deep-paths';

export const TUI_CYPRESS_CONFIG: Cypress.ConfigOptions = {
    blockHosts,
    /**
     * @description:
     * Time, in milliseconds, to wait until most
     * DOM based commands are considered timed out.
     */
    defaultCommandTimeout: 4000,
    e2e: {
        baseUrl: `http://localhost:3333`,
        /**
         * @description:
         * We've imported your old cypress plugins here.
         * You may want to clean this up later by importing these.
         */
        setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
            return require(`./cypress/plugins/index.ts`).default(on, config);
        },
        specPattern: `cypress/tests/**/*.cy.ts`,
        supportFile: `cypress/support/e2e.ts`,
    },
    env: {
        DEEP_PATHS,
        componentsExclusion: [
            [`components/select`, [5]],
            [`components/multi-select`, [4]],
            [`components/mobile-calendar`, [2, 3]], // flaky test, need investigate
            [`components/table`, [4, 5]], // randomly generated data
            [`components/preview`, [1, 2, 3]],
            [`components/progress-bar`, [6]], // indeterminate progress bar
        ],
        fonts: {
            '@tui-desktop': {font: `Manrope`, width: 1280},
            '@tui-mobile': {font: `Manrope`, width: 767},
            '@tui-mobile-min': {font: `Manrope`, width: 360},
            '@tui-tablet': {font: `Manrope`, width: 1024},
        },
        waitBeforeAction: 50,
        waitBeforeScreenshot: 1000,
    },
    fixturesFolder: `cypress/fixtures`,
    /**
     * @description:
     * The number of tests for which snapshots and command data are kept in memory.
     * Reduce this number if you are experiencing high memory
     * consumption in your browser during a test run.
     */
    numTestsKeptInMemory: 0,
    projectId: `sorry-cypress`,

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
        openMode: 0, // Configure retry attempts for `cypress open`
        runMode: 1, // Configure retry attempts for `cypress run`
    },

    screenshotsFolder: `cypress/screenshots`,

    video: false,

    viewportHeight,

    viewportWidth,
};

// noinspection JSUnusedGlobalSymbols
export default defineConfig(TUI_CYPRESS_CONFIG);
