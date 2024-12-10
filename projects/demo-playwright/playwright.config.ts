import {defineConfig, devices} from '@playwright/test';
import type {ViewportSize} from 'playwright-core';

import {pages as PUBLIC_PAGES} from '../demo/src/modules/app/pages';
import {tuiGetDemoPathsForE2E} from './utils/get-demo-paths';

const DEFAULT_VIEWPORT: ViewportSize = {width: 750, height: 700};

process.env['DEMO_PATHS'] = JSON.stringify(tuiGetDemoPathsForE2E(PUBLIC_PAGES));

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: __dirname,
    testMatch: '**/*.pw.spec.ts',
    outputDir: 'tests-results',
    snapshotDir: 'snapshots',
    reporter: process.env.CI
        ? [['blob'], ['github']]
        : [['html', {outputFolder: 'tests-report'}]],
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? Number(process.env.RETRY_COUNT ?? 2) : 0,
    workers: process.env.CI ? '100%' : '50%',
    timeout: 5 * 60 * 1000,
    use: {
        baseURL: `http://localhost:${process.env.NG_SERVER_PORT || 3333}`,
        trace: 'on-first-retry',
        testIdAttribute: 'automation-id',
        actionTimeout: 10_000,
        contextOptions: {
            deviceScaleFactor: 2,
            reducedMotion: 'reduce',
            viewport: DEFAULT_VIEWPORT,
            screen: DEFAULT_VIEWPORT,
            hasTouch: true,
        },
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome HiDPI'],
                viewport: DEFAULT_VIEWPORT,
            },
        },
        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari'],
                viewport: DEFAULT_VIEWPORT,
            },
        },
    ],
    expect: {
        toHaveScreenshot: {
            animations: 'disabled',
            caret: 'hide',
            scale: 'device',
            threshold: 0.02,
        },
        toMatchSnapshot: {
            threshold: 0.02,
        },
    },
});
