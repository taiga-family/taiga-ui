import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiInputDatePO} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE_USER_AGENT} from '../../../playwright.options';

test.describe('InputDate and mobile user agent', () => {
    const date = new Date(2023, 10, 1);

    test.use({
        viewport: {width: 430, height: 932},
        userAgent: TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
    });

    test('InputDate mobile dropdown', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.InputDate}`, {date});

        const documentationPage = new TuiDocumentationPagePO(page);
        const example = documentationPage.getExample('#mobile');
        const november = '[automation-id="tui-calendar-sheet__cell"]';

        const inputDate = new TuiInputDatePO(
            example.locator('tui-textfield:has(input[tuiInputDate])').nth(1),
        );

        // eslint-disable-next-line playwright/no-force-option
        await inputDate.textfield.first().click({position: {x: 260, y: 20}, force: true});

        await page.waitForSelector('tui-sheet-dialog', {state: 'visible'});
        await page.waitForTimeout(300); // safari flaky

        await expect.soft(page).toHaveScreenshot('03-input-date-range-mobile-1.png');

        await page.locator(november).nth(11).click();

        await expect.soft(page).toHaveScreenshot('03-input-date-range-mobile-2.png');
    });

    test('InputDate mobile calendar', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.InputDate}`, {date});

        const documentationPage = new TuiDocumentationPagePO(page);
        const example = documentationPage.getExample('#mobile');
        const november = '[automation-id="tui-primitive-calendar-mobile__cell"]';

        const inputDate = new TuiInputDatePO(
            example.locator('tui-textfield:has(input[tuiInputDate])').nth(2),
        );

        // eslint-disable-next-line playwright/no-force-option
        await inputDate.textfield.first().click({position: {x: 260, y: 20}, force: true});

        await page.waitForSelector('tui-mobile-calendar-sheet', {state: 'visible'});
        await page.waitForTimeout(300); // safari flaky

        await expect
            .soft(page)
            .toHaveScreenshot('03-input-date-range-mobile-calendar-1.png');

        await page.locator(november).nth(11).click();

        await expect
            .soft(page)
            .toHaveScreenshot('03-input-date-range-mobile-calendar-2.png');
    });
});
