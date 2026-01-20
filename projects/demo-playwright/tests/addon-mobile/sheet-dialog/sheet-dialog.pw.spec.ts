import {DemoRoute} from '@demo/routes';
import {TuiDocumentationApiPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

test.describe('SheetDialog', () => {
    test.use(TUI_PLAYWRIGHT_MOBILE);

    test('Close sheet by route navigation', async ({page}) => {
        await tuiGoto(page, DemoRoute.SheetDialog);
        await page.locator('tui-segmented a:has-text("API")').click();

        const example = new TuiDocumentationApiPagePO(page).demo;
        const button = example.locator('button:has-text("Click")');

        await button.click();
        await expect.soft(page).toHaveScreenshot('01-sheet-dialog.png');

        await page.evaluate(() => {
            history.back();
            history.back();
        });

        await expect.soft(page).toHaveScreenshot('02-sheet-dialog.png');
    });
});
