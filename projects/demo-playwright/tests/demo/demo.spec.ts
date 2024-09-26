import {
    TuiDocumentationPagePO,
    tuiGoto,
    tuiMockImages,
    waitStableState,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

import {tuiIsFlakyExample} from './is-flaky-examples';

test.describe('Demo', () => {
    const demoPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!);

    demoPaths.forEach((path) => {
        test(path, async ({page}) => {
            const documentation = new TuiDocumentationPagePO(page);

            await tuiMockImages(page);
            await tuiGoto(page, path);
            await documentation.waitStableState();

            await expect(async () => {
                const examples = await page.locator('tui-doc-example').all();

                expect(examples.length).toBeGreaterThan(0);

                for (const example of examples) {
                    await expect(example.getByTestId('tui-doc-example')).toBeAttached();
                }
            }).toPass();

            const visibleExamples: Locator[] = [];
            const examples = await page.getByTestId('tui-doc-example').all();

            for (const example of examples) {
                if (await waitStableState(example)) {
                    visibleExamples.push(example);
                }
            }

            for (const [i, example] of visibleExamples.entries()) {
                if (tuiIsFlakyExample(path, i)) {
                    continue;
                }

                await example.scrollIntoViewIfNeeded();
                await documentation.waitStableState(); // note: load lazy loading images

                await expect(example).toHaveScreenshot(
                    [path.replace('/', '').replaceAll('/', '-'), `${i + 1}.png`],
                    {threshold: 0.02},
                );
            }
        });
    });
});
