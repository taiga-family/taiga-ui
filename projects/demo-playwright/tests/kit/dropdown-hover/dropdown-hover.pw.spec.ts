import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiMobileDropdownPO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

const {describe, beforeEach} = test;

test.describe('DropdownHover', () => {
    describe('Examples', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.DropdownHover);
        });

        describe('With DropdownOpen', () => {
            let example!: Locator;

            beforeEach(async ({page}) => {
                example = new TuiDocumentationPagePO(page).getExample('#dropdown-open');

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

        describe('With DropdownMobile', () => {
            let example!: Locator;
            let mobileCalendar: TuiMobileDropdownPO;

            test.use(TUI_PLAYWRIGHT_MOBILE);

            beforeEach(({page}) => {
                example = new TuiDocumentationPagePO(page).getExample('#dropdown-mobile');
                mobileCalendar = new TuiMobileDropdownPO(
                    page.locator('tui-dropdown-mobile'),
                );
            });

            test('Opens mobile version of dropdown on the 1st time click', async ({
                page,
            }) => {
                await example.locator('button').hover();

                await expect(page.locator('tui-dropdown')).not.toBeAttached();
                await expect(page.locator('tui-dropdown-mobile')).toBeVisible();
                await expect
                    .soft(page)
                    .toHaveScreenshot('mobile-dropdown-1st-time-time-click.png');
            });

            test('Closes dropdown on click on overlay', async ({page, browserName}) => {
                // TODO: why does this test keep failing in safari

                test.skip(
                    browserName !== 'chromium',
                    'This feature is only relevant in Chrome',
                );

                await example.locator('button').click();

                await expect(page.locator('tui-dropdown-mobile')).toBeVisible();

                await mobileCalendar.overlay.click();

                await expect(page.locator('tui-dropdown-mobile')).not.toBeAttached();
            });

            test('Opens mobile version of dropdown on the 2nd time click', async ({
                page,
                browserName,
            }) => {
                // TODO: why does this test keep failing in safari

                test.skip(
                    browserName !== 'chromium',
                    'This feature is only relevant in Chrome',
                );

                await example.locator('button').click();
                await mobileCalendar.overlay.click();
                await example.locator('button').click();

                await expect(page.locator('tui-dropdown-mobile')).toBeVisible();

                await expect
                    .soft(page)
                    .toHaveScreenshot('mobile-dropdown-2nd-time-time-click.png');
            });
        });
    });
});
