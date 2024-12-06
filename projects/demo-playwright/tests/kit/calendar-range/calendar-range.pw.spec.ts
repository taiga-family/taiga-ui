import {DemoRoute} from '@demo/routes';
import {
    TuiCalendarRangePO,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('CalendarRange', () => {
    const today = new Date(2020, 8, 25);
    let example!: Locator;
    let calendarRange!: TuiCalendarRangePO;
    let documentationPage!: TuiDocumentationPagePO;

    test.use({
        viewport: {width: 650, height: 650},
    });

    beforeEach(({page}) => {
        documentationPage = new TuiDocumentationPagePO(page);
    });

    describe('Examples', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.CalendarRange, {
                date: today,
            });
        });

        test('With another range switcher', async () => {
            example = documentationPage.getExample('#with-another-range-switcher');
            calendarRange = new TuiCalendarRangePO(example.locator('tui-calendar-range'));

            const resetButton = example.locator('p button[data-appearance="action"]');

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-defaults-items-and-values_1.png',
            );

            await calendarRange.selectItem(1);
            await calendarRange.itemHasCheckmark(1);

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-range-switcher-after-select-week.png',
            );

            await resetButton.click();

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-items-and-values-after-click-on-month-range-switcher.png',
            );

            await resetButton.click();

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-items-and-values-after-click-on-quarter-range-switcher.png',
            );

            await resetButton.click();

            await expect(example).toHaveScreenshot(
                '05-calendar-range-correct-display-defaults-items-and-values_2.png',
            );
        });

        describe('With value', () => {
            test('Month switching via chevron', async () => {
                example = documentationPage.getExample('#with-value');
                calendarRange = new TuiCalendarRangePO(
                    example.locator('tui-calendar-range'),
                );

                await calendarRange.previousMonth.click();

                await expect(example).toHaveScreenshot(
                    '07-calendar-range-with-value-click-chevron.png',
                );
            });
        });
    });

    describe('API', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.CalendarRange, {
                date: today,
            });

            documentationPage = new TuiDocumentationPagePO(page);
            example = documentationPage.apiPageExample;

            calendarRange = new TuiCalendarRangePO(example.locator('tui-calendar-range'));
        });

        test('Maximum month when items not empty', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.CalendarRange}/API?items$=1&max$=4`);

            await expect(example).toHaveScreenshot('06-maximum-month-with-items.png');
        });

        describe('Selecting range consisting of the same start/end date', () => {
            let alert!: Locator;

            beforeEach(({page}) => {
                alert = page.locator('tui-alerts tui-notification');
            });

            test('double click on the same day - selects single-day range', async ({
                page,
            }) => {
                await tuiGoto(page, `${DemoRoute.CalendarRange}/API`);

                const [calendarSheet] = await calendarRange
                    .getCalendars()
                    .then(async ([x]) => x.getCalendarSheets());

                await calendarSheet.clickOnDay(15);

                await expect(alert).not.toBeAttached();

                await calendarSheet.clickOnDay(15);

                await expect(alert).toContainText(
                    '{from: {year: 2020, month: 8, day: 15}, to: {year: 2020, month: 8, day: 15}}',
                );
                await expect(example).toHaveScreenshot(
                    '07-double-click-on-the-same-day.png',
                );
            });

            test('allows to select new range start after double click on the same day', async ({
                page,
            }) => {
                await tuiGoto(page, `${DemoRoute.CalendarRange}/API`);

                const [calendarSheet] = await calendarRange
                    .getCalendars()
                    .then(async ([x]) => x.getCalendarSheets());

                await calendarSheet.clickOnDay(15);
                await calendarSheet.clickOnDay(15);

                await calendarSheet.clickOnDay(22);

                await expect(alert).not.toBeAttached();

                await calendarSheet.clickOnDay(25);

                await expect(alert).toContainText(
                    '{from: {year: 2020, month: 8, day: 22}, to: {year: 2020, month: 8, day: 25}}',
                );
                await expect(example).toHaveScreenshot(
                    '08-new-range-after-double-click-on-the-same-day.png',
                );
            });

            test('no highlighting hover effect after double click on the same day', async ({
                page,
            }) => {
                await tuiGoto(page, `${DemoRoute.CalendarRange}/API`);

                const [calendarSheet] = await calendarRange
                    .getCalendars()
                    .then(async ([x]) => x.getCalendarSheets());

                await calendarSheet.clickOnDay(15);
                await calendarSheet.getCalendarDay(20).then(async (x) => x!.hover());

                await expect(example).toHaveScreenshot('09-1-has-hover-effect.png');

                await calendarSheet.clickOnDay(15);

                await calendarSheet.getCalendarDay(22).then(async (x) => x!.hover());

                await expect(example).toHaveScreenshot('09-2-no-hover-effect.png');

                await calendarSheet.clickOnDay(22);

                await calendarSheet.getCalendarDay(25).then(async (x) => x!.hover());

                await expect(example).toHaveScreenshot('09-3-has-hover-effect.png');
            });
        });
    });
});
