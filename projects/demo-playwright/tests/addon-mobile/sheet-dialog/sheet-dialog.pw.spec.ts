import {DemoRoute} from '@demo/routes';
import {TuiDocumentationApiPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

test.describe('SheetDialog', () => {
    test.use(TUI_PLAYWRIGHT_MOBILE);

    test('Close sheet by route navigation', async ({page}) => {
        await tuiGoto(page, DemoRoute.SheetDialog);
        await page.locator('tui-tabs a:has-text("API")').click();

        const example = new TuiDocumentationApiPagePO(page).apiPageExample;
        const button = example.locator('button:has-text("Click")');

        await button.click();
        await expect.soft(page).toHaveScreenshot('01-sheet-dialog.png');

        await page.evaluate(() => {
            history.back();
            history.back();
        });

        await expect.soft(page).toHaveScreenshot('02-sheet-dialog.png');
    });

    test('Does not show stale scrollbar thumb after enter animation', async ({page}) => {
        await page.setViewportSize({width: 375, height: 812});
        await tuiGoto(page, DemoRoute.SheetDialog);
        await page.emulateMedia({reducedMotion: 'no-preference'});
        await page.reload();
        await page.locator('tui-tabs a:has-text("API")').click();

        await page.evaluate(() => {
            document.addEventListener('animationend', ({target}) => {
                if (
                    !(target instanceof HTMLElement) ||
                    target.localName !== 'tui-sheet-dialog'
                ) {
                    return;
                }

                requestAnimationFrame(() => {
                    const thumb = document.querySelector<HTMLElement>(
                        '.t-dialog > .t-scrollbars .t-bar_vertical .t-thumb',
                    );

                    document.documentElement.dataset.sheetDialogThumbHeight =
                        thumb?.style.height ?? '';
                });
            });
        });

        const example = new TuiDocumentationApiPagePO(page).apiPageExample;
        const getThumbHeight = async (): Promise<string | null> =>
            page.locator('html').getAttribute('data-sheet-dialog-thumb-height');

        await example.locator('button:has-text("Click")').click();
        await expect.poll(getThumbHeight).toBe('100%');
    });
});
