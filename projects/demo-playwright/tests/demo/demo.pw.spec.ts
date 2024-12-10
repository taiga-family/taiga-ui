import {TuiDocumentationPagePO, tuiGoto, tuiMockImages} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {tuiIsFlakyExample} from '../../utils/is-flaky-examples';

test.describe('Demo', () => {
    const demoPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!);

    demoPaths.forEach((path) => {
        test(`${path}`, async ({page}) => {
            const documentation = new TuiDocumentationPagePO(page);

            await tuiMockImages(page);
            await tuiGoto(page, path);
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
                if (tuiIsFlakyExample(path, i)) {
                    continue;
                }

                await example.scrollIntoViewIfNeeded();
                await documentation.waitStableState(); // note: load lazy loading images
                await page.waitForTimeout(150);

                await expect(example).toHaveScreenshot([
                    path.replace('/', '').replaceAll('/', '-'),
                    `${i + 1}.png`,
                ]);
            }
        });
    });
});
