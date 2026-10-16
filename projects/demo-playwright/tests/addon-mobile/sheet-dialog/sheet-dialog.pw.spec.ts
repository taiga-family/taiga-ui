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

    test('stays open on a scripted scroll to the top (no touch gesture)', async ({
        page,
    }) => {
        await tuiGoto(page, DemoRoute.SheetDialog);
        await page.locator('tui-segmented a:has-text("API")').click();

        const example = new TuiDocumentationApiPagePO(page).demo;

        await example.locator('button:has-text("Click")').click();

        const sheet = page.locator('tui-sheet-dialog');

        await expect(sheet).toBeVisible();

        // A scripted scroll to the top — scrollTo/scrollIntoView, a focus/tab, or
        // Playwright's implicit scrollIntoViewIfNeeded before a click — reaches the
        // top with no preceding touch and must not be mistaken for a dismiss.
        await page.evaluate(async () => {
            const el = document.querySelector('tui-sheet-dialog');

            if (!el) {
                return;
            }

            if (el.scrollTop <= 0 && el.scrollHeight > el.clientHeight) {
                el.scrollTop = 64;
                await new Promise((resolve) => {
                    setTimeout(resolve, 32);
                });
            }

            el.scrollTo({top: 0});
        });

        await page.waitForTimeout(600);
        await expect(sheet).toBeVisible();
    });
});
