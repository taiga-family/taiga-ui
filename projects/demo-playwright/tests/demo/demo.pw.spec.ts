import {TuiDocumentationPagePO, tuiGoto, tuiMockImages} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';
import {checkA11y, configureAxe, injectAxe} from 'axe-playwright';

import {tuiIsFlakyExample} from '../../utils/is-flaky-examples';

test.describe('Demo', () => {
    const demoPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!);

    const axeConfig = JSON.parse(process.env['AXE_CONFIG']!);

    demoPaths.forEach((path) => {
        test(`${path}`, async ({page, browserName}) => {
            const documentation = new TuiDocumentationPagePO(page);

            await tuiMockImages(page);
            await tuiGoto(page, path);
            await injectAxe(page);
            await configureAxe(page, axeConfig);
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
                await page.waitForTimeout(path.includes('charts') ? 1000 : 150);

                const makeName = (mode: string): string[] => [
                    path.replace('/', '').replaceAll('/', '-'),
                    `${i + 1}.${mode}.png`,
                ];

                await expect.soft(example).toHaveScreenshot(makeName('desktop'));
                await example.evaluate((node) => node.setAttribute('dir', 'rtl'));
                await expect.soft(example).toHaveScreenshot(makeName('desktop-rtl'));
                await example.evaluate((node) => node.setAttribute('dir', 'auto'));

                const nestingPlatform = await example.locator('[data-platform]').all();

                // eslint-disable-next-line playwright/no-conditional-in-test
                if (nestingPlatform.length > 0) {
                    continue;
                }

                await example.evaluate((node) =>
                    node.setAttribute('data-platform', 'ios'),
                );

                await expect.soft(example).toHaveScreenshot(makeName('ios'));

                await example.evaluate((node) =>
                    node.setAttribute('data-platform', 'android'),
                );

                await expect.soft(example).toHaveScreenshot(makeName('android'));
            }

            await checkA11y(
                page,
                'tui-doc-example > .t-example',
                {detailedReport: true},
                false,
                'v2',
            );
        });
    });
});
