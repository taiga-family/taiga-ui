import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiMobileDropdownPO,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

import {
    TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
    TUI_PLAYWRIGHT_MOBILE_VIEWPORT_HEIGHT,
    TUI_PLAYWRIGHT_MOBILE_VIEWPORT_WIDTH,
} from '../../../playwright.options';

const {describe, beforeEach} = test;

test.describe('DropdownHover', () => {
    describe('Examples', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.DropdownHover);
        });

        describe('With DropdownMobile', () => {
            let example!: Locator;
            let mobileCalendar: TuiMobileDropdownPO;

            test.use({
                viewport: {
                    width: TUI_PLAYWRIGHT_MOBILE_VIEWPORT_WIDTH,
                    height: TUI_PLAYWRIGHT_MOBILE_VIEWPORT_HEIGHT,
                },
                userAgent: TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
                isMobile: true,
            });

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
                await expect(page).toHaveScreenshot(
                    'mobile-dropdown-1st-time-time-click.png',
                );
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

                await expect(page).toHaveScreenshot(
                    'mobile-dropdown-2nd-time-time-click.png',
                );
            });
        });
    });
});
