import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('MobileCalendar', () => {
    test.use({viewport: {width: 400, height: 812}});

    test('works', async ({page}) => {
        await tuiGoto(page, 'components/mobile-calendar');
        const example = new TuiDocumentationPagePO(page).getExample('#dropdown');

        await example.locator('button:has-text("Choose a date")').click();

        await page.waitForTimeout(100);

        await expect(page).toHaveScreenshot('01-mobile-calendar.png');
    });

    test('check disabled state', async ({page}) => {
        await tuiGoto(page, 'components/mobile-calendar/API?max$=1');
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await expect(apiPageExample).toHaveScreenshot('02-mobile-calendar-disabled.png');
    });

    test('check enabled state', async ({page}) => {
        await tuiGoto(page, 'components/mobile-calendar/API?max$=0');
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await expect(apiPageExample).toHaveScreenshot('03-mobile-calendar-enabled.png');
    });
});
