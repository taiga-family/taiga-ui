import {defineConfig, devices} from '@playwright/test';
import {ViewportSize} from 'playwright-core';

import {pages as PUBLIC_PAGES} from '../demo/src/modules/app/pages';
import {tuiGetDemoPathsForE2E} from './tests/demo/get-demo-paths';

const DEFAULT_VIEWPORT: ViewportSize = {height: 700, width: 750};

process.env[`DEMO_PATHS`] = JSON.stringify(tuiGetDemoPathsForE2E(PUBLIC_PAGES));

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    expect: {
        toHaveScreenshot: {
            animations: `disabled`,
            caret: `hide`,
        },
    },
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    fullyParallel: true,
    outputDir: `tests-results`,
    projects: [
        {
            name: `chromium`,
            use: {
                ...devices[`Desktop Chrome`],
                viewport: DEFAULT_VIEWPORT,
            },
        },
    ],
    reporter: process.env.CI ? `github` : [[`html`, {outputFolder: `tests-report`}]],
    retries: process.env.CI ? 0 : 0,
    snapshotDir: `snapshots`,
    testDir: __dirname,
    testMatch: `**/*.spec.ts`,
    use: {
        baseURL: `http://localhost:${process.env.NG_SERVER_PORT || 3333}`,
        trace: `on-first-retry`,
        viewport: DEFAULT_VIEWPORT,
    },
    workers: process.env.CI ? `100%` : `50%`,
});
