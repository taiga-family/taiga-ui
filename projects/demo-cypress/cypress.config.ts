/// <reference types="node" />
import {tuiAddSnapshotPlugin} from '@taiga-ui/testing/cypress/snapshot/plugin';
import {defineConfig} from 'cypress';

import {
    TUI_BLOCK_HOSTS as blockHosts,
    TUI_CYPRESS_DESKTOP_VIEWPORT_HEIGHT,
    TUI_CYPRESS_DESKTOP_VIEWPORT_HEIGHT as viewportHeight,
    TUI_CYPRESS_DESKTOP_VIEWPORT_WIDTH,
    TUI_CYPRESS_DESKTOP_VIEWPORT_WIDTH as viewportWidth,
} from './cypress/cypress.options';
import {DEEP_PATHS} from './cypress/support/helpers/deep-paths';

export const TUI_CYPRESS_CONFIG: Cypress.ConfigOptions = {
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
        async setupNodeEvents(
            on: Cypress.PluginEvents,
            config: Cypress.PluginConfigOptions,
        ) {
            await tuiAddSnapshotPlugin(on, config, {
                newSnapshotMarkFn: oldFileName => `==new==${oldFileName}`,
                newSnapshotMarkEnabled: config.baseUrl === `http://localhost:3333/`,
            });

            const webpackPreprocessor = require(
                `@cypress/webpack-batteries-included-preprocessor`,
            );
            const webpackOptions = webpackPreprocessor.defaultOptions.webpackOptions;

            webpackOptions.module.rules.unshift({
                test: /[/\\]@angular[/\\].+\.m?js$/,
                resolve: {
                    fullySpecified: false,
                },
                use: {
                    loader: `babel-loader`,
                    options: {
                        plugins: [`@angular/compiler-cli/linker/babel`],
                        compact: false,
                        cacheDirectory: true,
                    },
                },
            });

            on(
                `file:preprocessor`,
                webpackPreprocessor({
                    webpackOptions,
                    typescript: require.resolve(`typescript`),
                }),
            );

            on(`before:browser:launch`, (browser, launchOptions) => {
                if (browser.name === `chrome`) {
                    launchOptions.args.push(
                        `--font-render-hinting=none`, // prevent inconsistent text rendering in headless mode
                        `--window-size=${TUI_CYPRESS_DESKTOP_VIEWPORT_WIDTH},${TUI_CYPRESS_DESKTOP_VIEWPORT_HEIGHT}`,
                        `--force-device-scale-factor=2`,
                        `--high-dpi-support=1`,
                        `--force-prefers-reduced-motion`,
                        `--force-color-profile=srgb`,
                        `--disable-dev-shm-usage`,
                        `--disable-gpu`,
                        `--incognito`,
                    );
                }

                return launchOptions;
            });
        },
    },
};

// noinspection JSUnusedGlobalSymbols
export default defineConfig(TUI_CYPRESS_CONFIG);
