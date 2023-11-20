import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`Textarea`, () => {
    [`m`, `l`].forEach(size => {
        test(`size=${size}`, async ({page}) => {
            await tuiGoto(page, `components/checkbox/API?size=${size}`);
            const example = page.locator(`#demo-content`);

            await expect(example).toHaveScreenshot(`checkbox-size-${size}.png`);
        });
    });
});
