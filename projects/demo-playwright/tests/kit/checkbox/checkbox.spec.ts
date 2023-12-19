import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Checkbox', () => {
    ['m', 'l'].forEach(size => {
        test(`size=${size}`, async ({page}) => {
            await page.setViewportSize({width: 300, height: 300});
            await tuiGoto(page, `components/checkbox/API?size=${size}`);
            const {apiPageExample} = new TuiDocumentationPagePO(page);

            await expect(apiPageExample).toHaveScreenshot(`checkbox-size-${size}.png`);
        });
    });
});
