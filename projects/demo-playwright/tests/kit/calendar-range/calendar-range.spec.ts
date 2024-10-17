import {DemoRoute} from '@demo/routes';
import {
    TuiCalendarRangePO,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('CalendarRange', () => {
    let example!: Locator;
    let calendarRange!: TuiCalendarRangePO;
    let documentationPage!: TuiDocumentationPagePO;

    test.use({
        viewport: {width: 650, height: 650},
    });

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, DemoRoute.CalendarRange, {
            date: new Date(2020, 8, 25),
        });

        documentationPage = new TuiDocumentationPagePO(page);
        example = documentationPage.apiPageExample;

        calendarRange = new TuiCalendarRangePO(example.locator('tui-calendar-range'));
    });

    test.describe('Examples', () => {
        test('With another range switcher', async () => {
            example = documentationPage.getExample('#with-another-range-switcher');
            calendarRange = new TuiCalendarRangePO(example.locator('tui-calendar-range'));

            const getRangeSwitcher = (): Locator =>
                example.locator('p button[data-appearance="action"]');

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-defaults-items-and-values.png',
            );

            await calendarRange.selectItem(1);
            await calendarRange.itemHasCheckmark(1);

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-range-switcher-after-select-week.png',
            );

            await getRangeSwitcher().click();

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-items-and-values-after-click-on-month-range-switcher.png',
            );

            await getRangeSwitcher().click();

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-items-and-values-after-click-on-quarter-range-switcher.png',
            );

            await getRangeSwitcher().click();

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-defaults-items-and-values.png',
            );
        });
    });

    test.describe('API', () => {
        test('Maximum month when items not empty', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.CalendarRange}/API?items$=1&max$=4`);

            await expect(example).toHaveScreenshot('06-maximum-month-with-items.png');
        });
    });
});
