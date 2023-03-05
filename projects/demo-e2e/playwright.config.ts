import {devices, PlaywrightTestConfig, Project} from '@playwright/test';

import {tuiPlaywrightMergeUseConfig as merge} from './support/extensions/merge-config';

const url = new URL(`http://localhost:3333/`);

console.info(`Base URL`, url.origin);

const use: Project['use'] = {
    baseURL: url.origin,
    trace: `on-first-retry`,
    ignoreHTTPSErrors: true,
    deviceScaleFactor: 2,
    headless: true,
    viewport: {
        width: 1440,
        height: 900,
    },
};

// noinspection JSUnusedGlobalSymbols
export default {
    use,
    workers: 1,
    forbidOnly: true,
    fullyParallel: true,
    snapshotDir: `snapshots/`,
    outputDir: `snapshots/__diff_output__`,
    reporter: `./support/extensions/reporter.ts`,
    testMatch: `projects/demo-e2e/tests/**/*.e2e.ts`,
    snapshotPathTemplate: `snapshots/{projectName}/{testFilePath}/{arg}{ext}`,
    timeout: 5 * 60 * 1000, // Timeout for each test
    globalTimeout: 60 * 60 * 1000, // Maximum time the whole test suite can run,
    expect: {
        toHaveScreenshot: {
            threshold: 0.2,
            maxDiffPixelRatio: 0.05,
        },
    },
    webServer: url.port
        ? {
              command: `npm start -- --port ${url.port}`,
              ignoreHTTPSErrors: true,
              reuseExistingServer: true,
              timeout: 120 * 1000 * 5,
              url: url.origin,
          }
        : undefined,
    projects: [
        {
            name: `chromium`,
            use: merge(devices[`Desktop Chrome`], use),
        },
        {
            name: `firefox`,
            use: merge(devices[`Desktop Firefox`], use),
        },
        {
            name: `webkit`,
            use: merge(devices[`Desktop Safari`], use),
        },
        {
            name: `Mobile Chrome`,
            use: merge(devices[`Pixel 5`], use),
        },
        {
            name: `Mobile Safari`,
            use: merge(devices[`iPhone 12`], use),
        },
    ],
} as PlaywrightTestConfig;
