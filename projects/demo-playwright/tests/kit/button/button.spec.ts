import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`Button`, () => {
    test.use({
        viewport: {width: 400, height: 150},
    });

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `components/button`);
    });

    test(`dropdown`, async ({page}) => {
        const example = new TuiDocumentationPagePO(page).getExample(`#dropdown`);

        const button = example.locator(`button[data-appearance=primary]`);

        await button.scrollIntoViewIfNeeded();

        await expect(page).toHaveScreenshot(`button-dropdown-1.png`);
        await button.click();

        await expect(page).toHaveScreenshot(`button-dropdown-2.png`);
        await button.click();

        await expect(page).toHaveScreenshot(`button-dropdown-3.png`);
    });
});
