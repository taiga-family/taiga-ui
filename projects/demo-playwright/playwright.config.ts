import {defineConfig, devices} from '@playwright/test';
import {type configureAxe} from 'axe-playwright';
import {type ViewportSize} from 'playwright-core';

import {pages as PUBLIC_PAGES} from '../demo/src/pages/app/pages';
import {tuiGetDemoPathsForE2E} from './utils/get-demo-paths';

const DEFAULT_VIEWPORT: ViewportSize = {width: 750, height: 700};
const THRESHOLD = parseFloat(process.env.PW_THRESHOLD ?? '') || 0.02;
const MAX_DIFF_PIXEL_RATIO = parseFloat(process.env.PW_MAX_DIFF_PIXEL_RATIO ?? '');

export const AXE_CONFIG: NonNullable<Parameters<typeof configureAxe>[1]> = {
    reporter: 'v2',
    rules: [
        {id: 'scrollable-region-focusable', enabled: false},
        {id: 'heading-order', enabled: false},
        {id: 'label', enabled: false},
        {id: 'landmark-unique', enabled: false},
        {id: 'landmark-no-duplicate-main', enabled: false},
        {id: 'landmark-no-duplicate-banner', enabled: false},
        {id: 'nested-interactive', enabled: false},
        {id: 'empty-table-header', enabled: false},
    ],
};

process.env['DEMO_PATHS'] = JSON.stringify(tuiGetDemoPathsForE2E(PUBLIC_PAGES));
process.env['AXE_CONFIG'] = JSON.stringify(AXE_CONFIG);

const chromium = {
    name: 'chromium',
    use: {...devices['Desktop Chrome HiDPI'], viewport: DEFAULT_VIEWPORT},
};

const options = Object.fromEntries(
    Object.entries({
        threshold: THRESHOLD,
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO,
    }).filter(([, value]) => !Number.isNaN(value)),
);

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
    snapshotPathTemplate:
        process.env.SNAPSHOT_PATH_TEMPLATE ??
        '{testDir}/snapshots/{platform}-{projectName}/{testFilePath}/{arg}{ext}',
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
            permissions: ['clipboard-read'],
        },
    },
    projects: process.env.CI
        ? [
              chromium,
              {
                  name: 'webkit',
                  use: {...devices['Desktop Safari'], viewport: DEFAULT_VIEWPORT},
              },
              {
                  name: 'firefox',
                  use: {...devices['Desktop Firefox HiDPI'], viewport: DEFAULT_VIEWPORT},
              },
          ]
        : [chromium],
    expect: {
        toHaveScreenshot: {
            animations: 'disabled',
            caret: 'hide',
            scale: 'device',
            ...options,
        },
        toMatchSnapshot: {...options},
    },
});
