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
    reporter: process.env.CI ? 'github' : [['html', {outputFolder: 'tests-report'}]],
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? '100%' : '50%',
    use: {
        baseURL: `http://localhost:${process.env.NG_SERVER_PORT || 3333}`,
        trace: 'on-first-retry',
        viewport: DEFAULT_VIEWPORT,
        testIdAttribute: 'automation-id',
        actionTimeout: 10_000,
        contextOptions: {
            reducedMotion: 'reduce',
        },
    },
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome HiDPI'],
                viewport: DEFAULT_VIEWPORT,
                launchOptions: {
                    args: [
                        '--no-sandbox',
                        '-–no-first-run',
                        '--disable-setuid-sandbox',
                        '--hide-scrollbars',
                        '--printBackground=true',
                        '--disable-dev-shm-usage',
                        '--disable-gpu',
                        '--font-render-hinting=medium',
                        '--disable-skia-runtime-opts',
                        '--disable-lcd-text',
                        '--disable-accelerated-2d-canvas',
                        '--disable-canvas-aa',
                        '--disable-composited-antialiasing',
                        '--force-device-scale-factor=2',
                        '--high-dpi-support=1',
                        '--force-prefers-reduced-motion',
                        '--force-color-profile=srgb',
                        '--incognito',
                    ],
                },
            },
        },
    ],
    expect: {
        toHaveScreenshot: {
            animations: 'disabled',
            caret: 'hide',
            scale: 'device',
            threshold: 0.25,
            maxDiffPixelRatio: 0.025,
            maxDiffPixels: 25,
        },
        toMatchSnapshot: {
            threshold: 0.25,
            maxDiffPixelRatio: 0.025,
            maxDiffPixels: 25,
        },
    },
});
