import {TuiDocumentationPagePO, tuiGoto, tuiMockImages} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';
import {checkA11y, configureAxe, injectAxe} from 'axe-playwright';

import {tuiIsFlakyExample} from '../../utils/is-flaky-examples';

test.describe('Demo', () => {
    const demoPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!);

    demoPaths.forEach((path) => {
        test(`${path}`, async ({page, browserName}) => {
            const documentation = new TuiDocumentationPagePO(page);

            await tuiMockImages(page);
            await tuiGoto(page, path);
            await injectAxe(page);
            await configureAxe(page, {
                reporter: 'v2',
                rules: [
                    {id: 'scrollable-region-focusable', enabled: false},
                    {id: 'heading-order', enabled: false},
                    {id: 'label', enabled: false},
                    {id: 'landmark-unique', enabled: false},
                    {id: 'landmark-no-duplicate-main', enabled: false},
                    {id: 'nested-interactive', enabled: false},
                ],
            });
            await documentation.waitTuiIcons();
            await documentation.waitStableState();

            await expect(async () => {
                const examples = await page.locator('tui-doc-example').all();

                expect(examples.length).toBeGreaterThan(0);

                for (const example of examples) {
                    await expect(example.getByTestId('tui-doc-example')).toBeAttached();
                }
            }).toPass();

            const examples = await page.getByTestId('tui-doc-example').all();

            for (const [i, example] of examples.entries()) {
                // eslint-disable-next-line playwright/no-conditional-in-test
                if (tuiIsFlakyExample(path, i, browserName)) {
                    continue;
                }

                await example.scrollIntoViewIfNeeded();
                await documentation.waitStableState(); // note: load lazy loading images

                // e2e flaky: wait more time for charts graphics
                await page.waitForTimeout(path.includes('charts') ? 500 : 150);

                await expect(example).toHaveScreenshot([
                    path.replace('/', '').replaceAll('/', '-'),
                    `${i + 1}.png`,
                ]);
            }

            await checkA11y(page, 'tui-doc-example > .t-example', {detailedReport: true});
        });
    });
});
