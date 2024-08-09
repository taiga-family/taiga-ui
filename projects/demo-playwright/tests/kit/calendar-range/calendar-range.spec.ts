import {
    TuiCalendarRangePO,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, Locator, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('CalendarRange', () => {
    describe('API', () => {
        let documentationPage: TuiDocumentationPagePO;
        let example: Locator;
        let calendarRange: TuiCalendarRangePO;

        beforeEach(({page}) => {
            documentationPage = new TuiDocumentationPagePO(page);
            example = documentationPage.apiPageExample;
            calendarRange = new TuiCalendarRangePO(example.locator('tui-calendar-range'));
        });

        test('When click on right calendar, months not switch', async ({page}) => {
            await tuiGoto(page, 'components/calendar-range/API?maxLength$=0');
            await calendarRange.clickRightCalendar();

            await documentationPage.prepareApiPageBeforeScreenshot();
            await expect(page).toHaveScreenshot('calendar-range-max-length-click.png');
        });

        test('When set defaultViewedMonth, calendar shows defaultViewedMonth', async ({
            page,
        }) => {
            await tuiGoto(page, 'components/calendar-range/API?defaultViewedMonth$=2');

            await documentationPage.prepareApiPageBeforeScreenshot();
            await expect(page).toHaveScreenshot(
                'calendar-range-default-viewed-month.png',
            );
        });
    });
});
