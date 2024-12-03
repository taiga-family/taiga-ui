import {resolve} from 'node:path';

/**
 * https://playwright.dev/docs/test-sharding#merge-reports-cli
 */
export default {
    testDir: __dirname,
    reporter: [
        [
            'html',
            {open: 'never', outputFolder: resolve(process.cwd(), 'playwright-report')},
        ],
        ['json', {outputFile: resolve(process.cwd(), 'all-blob-reports/results.json')}],
    ],
};
