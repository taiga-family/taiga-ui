import assert from 'node:assert';

import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

for (const deviceScaleFactor of [1.1, 1.25, 1.5]) {
    test.describe(`Copy at DPR ${deviceScaleFactor}`, () => {
        test.use({deviceScaleFactor});

        test('does not render a seam across the original text', async ({page}) => {
            await tuiGoto(page, DemoRoute.Copy);

            const example = new TuiDocumentationPagePO(page).getExample('#basic');
            const copy = example.locator('tui-copy').last();
            const content = copy.locator('.t-content');

            await expect(content).toContainText('Very very long text');
            await page.mouse.move(0, 0);

            for (const width of [744, 745, 746, 747, 748, 749, 750, 751]) {
                await page.setViewportSize({width, height: 700});
                await copy.scrollIntoViewIfNeeded();

                const bounds = await content.boundingBox();

                assert(bounds, 'Copy content must have a bounding box');

                // Compare screenshots of the original text, not the mask implementation.
                const clip = {
                    x: bounds.x + 4,
                    y: bounds.y + 2,
                    width: bounds.width - 8,
                    height: bounds.height - 4,
                };

                const masked = await page.screenshot({clip});
                const unmasked = await page.screenshot({
                    clip,
                    style: 'tui-copy .t-content { mask-image: none !important; }',
                });

                expect(
                    masked.equals(unmasked),
                    `Mask seam at DPR ${deviceScaleFactor} and viewport ${width}px`,
                ).toBe(true);
            }
        });
    });
}
