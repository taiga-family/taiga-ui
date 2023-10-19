import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`MobileCalendar`, () => {
    test.use({viewport: {width: 400, height: 812}});

    test(`works`, async ({page}) => {
        await tuiGoto(page, `components/mobile-calendar`);
        const example = new TuiDocumentationPagePO(page).getExample(`#dropdown`);
        const chooseDateButton = example
            .locator(`tui-mobile-calendar-example-1 button`)
            .first();

        await chooseDateButton.click();
        await expect(example).toHaveScreenshot(`01-mobile-calendar.png`);
    });

    test(`check disabled state`, async ({page}) => {
        await tuiGoto(page, `components/mobile-calendar/API?tuiMode=null&max$=1`);
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await apiPageExample.scrollIntoViewIfNeeded();
        await expect(page).toHaveScreenshot(`01-mobile-calendar-disabled.png`, {
            mask: [page.locator(`tui-mobile-calendar`)],
        });
    });

    test(`check enabled state`, async ({page}) => {
        await tuiGoto(page, `components/mobile-calendar/API?tuiMode=null&max$=0`);
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await apiPageExample.scrollIntoViewIfNeeded();
        await expect(page).toHaveScreenshot(`01-mobile-calendar-enabled.png`, {
            mask: [page.locator(`tui-mobile-calendar`)],
        });
    });
});
