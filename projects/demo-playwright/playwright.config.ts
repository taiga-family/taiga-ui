import {defineConfig, devices} from '@playwright/test';
import {ViewportSize} from 'playwright-core';

const DEFAULT_VIEWPORT: ViewportSize = {width: 750, height: 700};

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: __dirname,
    testMatch: `**/*.spec.ts`,
    outputDir: `tests-results`,
    snapshotDir: `snapshots`,
    reporter: process.env.CI ? `github` : [[`html`, {outputFolder: `tests-report`}]],
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 0 : 0,
    workers: process.env.CI ? `100%` : `50%`,
    use: {
        baseURL: `http://localhost:${process.env.NG_SERVER_PORT || 3333}`,
        trace: `on-first-retry`,
        viewport: DEFAULT_VIEWPORT,
    },
    projects: [
        {
            name: `chromium`,
            use: {
                ...devices[`Desktop Chrome`],
                viewport: DEFAULT_VIEWPORT,
            },
        },
    ],
    expect: {
        toHaveScreenshot: {
            animations: `disabled`,
            caret: `hide`,
        },
    },
});
