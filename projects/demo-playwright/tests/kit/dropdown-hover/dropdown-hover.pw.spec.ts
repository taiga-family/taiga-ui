import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

const {describe, beforeEach} = test;

test.describe('DropdownHover', () => {
    describe('Examples', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.DropdownHover);
        });

        describe('With DropdownMobile', () => {
            let example!: Locator;

            test.use(TUI_PLAYWRIGHT_MOBILE);

            beforeEach(({page}) => {
                example = new TuiDocumentationPagePO(page).getExample('#dropdown-mobile');
            });

            test('Opens mobile version of dropdown on the 1st time click', async ({
                page,
            }) => {
                await example.locator('button').click();
                await expect(page.locator('tui-dropdown')).not.toBeAttached();
                await expect(page.locator('tui-sheet-dialog')).toBeVisible();
                await expect
                    .soft(page)
                    .toHaveScreenshot('mobile-dropdown-1st-time-time-click.png');
            });

            test('Closes dropdown on click on overlay', async ({page}) => {
                await example.locator('button').click();
                await expect(page.locator('tui-sheet-dialog')).toBeVisible();
                await page.locator('tui-sheet-dialog').click({position: {x: 32, y: 32}});
                await expect(page.locator('tui-sheet-dialog')).not.toBeAttached();
            });

            test('Opens mobile version of dropdown on the 2nd time click', async ({
                page,
            }) => {
                await example.locator('button').click();
                await page.locator('tui-sheet-dialog').click({position: {x: 32, y: 32}});
                await example.locator('button').click();
                await expect(page.locator('tui-sheet-dialog')).toBeVisible();
                await expect
                    .soft(page)
                    .toHaveScreenshot('mobile-dropdown-2nd-time-time-click.png');
            });
        });
    });
});
