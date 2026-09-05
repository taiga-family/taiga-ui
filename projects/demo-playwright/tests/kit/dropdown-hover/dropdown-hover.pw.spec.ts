import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

test.describe('DropdownHover', () => {
    test.describe('Examples', () => {
        test.beforeEach(async ({page}) => tuiGoto(page, DemoRoute.DropdownHover));

        test.describe('With DropdownOpen', () => {
            let example!: Locator;

            test.beforeEach(async ({page}) => {
                example = new TuiDocumentationPagePO(page).getExample(
                    '#with--dropdown-open',
                );

                await example.scrollIntoViewIfNeeded();
            });

            test('opens dropdown after hover and hide after click', async ({page}) => {
                const button = example.locator('button', {hasText: 'Hoverable'});
                const dropdown = page.locator('tui-dropdown');

                await button.hover();
                await page.waitForTimeout(300);
                await expect(dropdown).toBeAttached();

                await button.click();
                await expect(dropdown).not.toBeAttached();
            });

            test('opens dropdown after hover and instantly click', async ({page}) => {
                const button = example.locator('button', {hasText: 'Hoverable'});
                const dropdown = page.locator('tui-dropdown');

                await button.evaluate((el) => {
                    el.dispatchEvent(new MouseEvent('mouseover', {bubbles: true}));
                    el.dispatchEvent(new PointerEvent('pointerdown', {bubbles: true}));
                    el.dispatchEvent(new MouseEvent('click', {bubbles: true}));
                });

                await expect(dropdown).toBeAttached();

                await page.waitForTimeout(300);
                await button.click();
                await expect(dropdown).not.toBeAttached();
            });
        });

        test.describe('With DropdownMobile', () => {
            let example!: Locator;
            let po!: TuiDocumentationPagePO;

            test.use(TUI_PLAYWRIGHT_MOBILE);

            test.beforeEach(({page}) => {
                po = new TuiDocumentationPagePO(page);
                example = po.getExample('#mobile');
            });

            test('Opens mobile version of dropdown on the 1st time click', async ({
                page,
            }) => {
                await example.locator('button').click();
                await expect(page.locator('tui-dropdown')).not.toBeAttached();
                await expect(page.locator('tui-sheet-dialog')).toBeVisible();
                await po.hideContent();
                await expect
                    .soft(page)
                    .toHaveScreenshot('mobile-dropdown-1st-time-time-click.png');
            });

            test('Closes dropdown on click on overlay', async ({page}) => {
                await example.locator('button').click();
                await expect(page.locator('tui-sheet-dialog')).toBeVisible();
                await page.locator('tui-sheet-dialog').click({position: {x: 32, y: 32}});
                await po.hideContent();
                await expect(page.locator('tui-sheet-dialog')).not.toBeAttached();
            });

            test('Opens mobile version of dropdown on the 2nd time click', async ({
                page,
            }) => {
                await example.locator('button').click();
                await page.locator('tui-sheet-dialog').click({position: {x: 32, y: 32}});
                await example.locator('button').click();
                await expect(page.locator('tui-sheet-dialog')).toBeVisible();
                await po.hideContent();
                await expect
                    .soft(page)
                    .toHaveScreenshot('mobile-dropdown-2nd-time-time-click.png');
            });
        });
    });
});
