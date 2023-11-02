import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`Tree`, () => {
    test(`Programmatic control`, async ({page}) => {
        await tuiGoto(page, `/components/tree`);
        await page.locator(`#programmatic button.programmatic`).nth(0).click();
        await page.locator(`#programmatic button.programmatic`).nth(1).click();
        await page.locator(`#programmatic button.programmatic`).nth(2).click();

        await expect(page.locator(`#programmatic`)).toHaveScreenshot(
            `01-programmatic-control.png`,
        );
    });
});
