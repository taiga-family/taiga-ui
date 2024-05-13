import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE_USER_AGENT} from '../../../playwright.options';

test.describe('InputDate and mobile user agent', () => {
    const date = new Date(2023, 10, 1);
    const november = '.t-month-wrapper:nth-child(2) .t-cell';

    test.use({
        viewport: {width: 430, height: 932},
        userAgent: TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
    });

    test('InputDateRange', async ({page}) => {
        await tuiGoto(page, 'components/input-date-range/API', {date});

        await new TuiDocumentationPagePO(page).apiPageExample
            .locator('tui-input-date-range .t-icons')
            .click();

        await page.waitForSelector('tui-mobile-calendar-dropdown', {state: 'visible'});
        await expect(page).toHaveScreenshot('01-input-date-range-mobile-1.png');

        await page.locator(november).nth(0).click();
        await expect(page).toHaveScreenshot('01-input-date-range-mobile-2.png');

        await page.locator(november).nth(11).click();
        await expect(page).toHaveScreenshot('01-input-date-range-mobile-3.png');

        await page.locator(november).nth(19).click();
        await expect(page).toHaveScreenshot('01-input-date-range-mobile-4.png');

        await page.locator(november).nth(25).click();
        await expect(page).toHaveScreenshot('01-input-date-range-mobile-5.png');
    });

    test('InputDateMulti', async ({page}) => {
        await tuiGoto(page, 'components/input-date-multi/API', {date});

        await new TuiDocumentationPagePO(page).apiPageExample
            .locator('tui-input-date[multiple] .t-icons')
            .click();

        await page.waitForSelector('tui-mobile-calendar-dropdown', {state: 'visible'});
        await expect(page).toHaveScreenshot('02-input-date-range-mobile-1.png');

        await page.locator(november).nth(0).click();
        await expect(page).toHaveScreenshot('02-input-date-range-mobile-2.png');

        await page.locator(november).nth(11).click();
        await expect(page).toHaveScreenshot('02-input-date-range-mobile-3.png');

        await page.locator(november).nth(19).click();
        await expect(page).toHaveScreenshot('02-input-date-range-mobile-4.png');

        await page.locator(november).nth(25).click();
        await expect(page).toHaveScreenshot('02-input-date-range-mobile-5.png');

        await page.locator(november).nth(25).click();
        await page.locator(november).nth(19).click();
        await page.locator(november).nth(11).click();
        await page.locator(november).nth(0).click();

        await expect(page).toHaveScreenshot('02-input-date-range-mobile-6.png');
    });

    test('InputDate', async ({page}) => {
        await tuiGoto(page, 'components/input-date/API', {date});

        await new TuiDocumentationPagePO(page).apiPageExample
            .locator('tui-input-date .t-icons')
            .click();

        await page.waitForSelector('tui-mobile-calendar-dropdown', {state: 'visible'});
        await expect(page).toHaveScreenshot('03-input-date-range-mobile-1.png');

        await page.locator(november).nth(0).click();
        await expect(page).toHaveScreenshot('03-input-date-range-mobile-2.png');

        await page.locator(november).nth(11).click();
        await expect(page).toHaveScreenshot('03-input-date-range-mobile-3.png');

        await page.locator(november).nth(19).click();
        await expect(page).toHaveScreenshot('03-input-date-range-mobile-4.png');

        await page.locator(november).nth(25).click();
        await expect(page).toHaveScreenshot('03-input-date-range-mobile-5.png');

        await page.locator(november).nth(25).click();
        await expect(page).toHaveScreenshot('03-input-date-range-mobile-6.png');
    });
});
