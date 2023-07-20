/// <reference types="node" />
import {defineConfig} from 'cypress';

import {
    TUI_BLOCK_HOSTS as blockHosts,
    TUI_CYPRESS_DESKTOP_VIEWPORT_HEIGHT as viewportHeight,
    TUI_CYPRESS_DESKTOP_VIEWPORT_WIDTH as viewportWidth,
} from './cypress/cypress.options';
import {DEMO_PATHS} from './cypress/support/helpers/demo-paths';
import {DEEP_PATHS} from './cypress/tests/deep/deep.cy';

export const TUI_CYPRESS_CONFIG: Cypress.ConfigOptions = {
    projectId: `sorry-cypress`,
    video: false,
    blockHosts,
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

    env: {
        DEMO_PATHS,
        DEEP_PATHS,
        componentsExclusion: [
            [`components/select`, [5]],
            [`components/multi-select`, [4]],
            [`components/mobile-calendar`, [2, 3]], // flaky test, need investigate
            [`components/table`, [4, 5]], // randomly generated data
            [`components/preview`, [1, 2, 3]],
            [`components/progress-bar`, [6]], // indeterminate progress bar
        ],
        waitBeforeScreenshot: 1000,
        waitBeforeAction: 50,
        fonts: {
            '@tui-mobile-min': {width: 360, font: `Manrope`},
            '@tui-mobile': {width: 767, font: `Manrope`},
            '@tui-tablet': {width: 1024, font: `Manrope`},
            '@tui-desktop': {width: 1280, font: `Manrope`},
        },
    },

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
export default defineConfig(TUI_CYPRESS_CONFIG);
