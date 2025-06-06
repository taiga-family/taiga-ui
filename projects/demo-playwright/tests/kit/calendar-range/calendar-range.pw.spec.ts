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

            await expect
                .soft(example)
                .toHaveScreenshot(
                    '05-calendar-range-correct-display-defaults-items-and-values-1.png',
                );

            await calendarRange.selectItem(1);
            await calendarRange.itemHasCheckmark(1);

            await expect
                .soft(example)
                .toHaveScreenshot(
                    '05-calendar-range-correct-display-range-switcher-after-select-week.png',
                );

            await resetButton.click();

            await expect
                .soft(example)
                .toHaveScreenshot(
                    '05-calendar-range-correct-display-items-and-values-after-click-on-month-range-switcher.png',
                );

            await resetButton.click();

            await expect
                .soft(example)
                .toHaveScreenshot(
                    '05-calendar-range-correct-display-items-and-values-after-click-on-quarter-range-switcher.png',
                );

            await resetButton.click();

            await expect
                .soft(example)
                .toHaveScreenshot(
                    '05-calendar-range-correct-display-defaults-items-and-values-2.png',
                );
        });

        describe('With value', () => {
            test('Month switching via chevron', async ({page}) => {
                example = documentationPage.getExample('#with-value');
                calendarRange = new TuiCalendarRangePO(
                    example.locator('tui-calendar-range'),
                );

                await calendarRange.previousMonth.click();

                await page.mouse.click(100, 100); // clear focus

                await expect
                    .soft(example)
                    .toHaveScreenshot('07-calendar-range-with-value-click-chevron.png');
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

            await expect
                .soft(example)
                .toHaveScreenshot('06-maximum-month-with-items.png');
        });

        test('Dont allow to select disabled dates in calendar', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.CalendarRange}/API?disabledItemHandler$=1`);

            await expect
                .soft(example)
                .toHaveScreenshot('08-disabled-dates-1-default.png');

            const getCells = (): Locator =>
                page.locator('[automation-id="tui-calendar-sheet__cell"]');

            await getCells().nth(1).click();

            await expect
                .soft(example)
                .toHaveScreenshot('08-disabled-dates-2-select-from.png');

            await getCells().nth(9).hover();

            await expect
                .soft(example)
                .toHaveScreenshot('08-disabled-dates-3-hover-to.png');

            await getCells().nth(9).click();
            await page.mouse.click(100, 100); // clear focus

            await expect
                .soft(example)
                .toHaveScreenshot('08-disabled-dates-4-click-to.png');

            await getCells().nth(0).click();
            await page.mouse.click(100, 100); // clear focus

            await expect
                .soft(example)
                .toHaveScreenshot('08-disabled-dates-5-click-to.png');
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

                await expect(alert).toContainText('15.09.2020 – 15.09.2020');
                await expect
                    .soft(example)
                    .toHaveScreenshot('07-double-click-on-the-same-day.png');
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

                await expect(alert).toContainText('22.09.2020 – 25.09.2020');
                await expect
                    .soft(example)
                    .toHaveScreenshot(
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

                await expect.soft(example).toHaveScreenshot('09-1-has-hover-effect.png');

                await calendarSheet.clickOnDay(15);

                await calendarSheet.getCalendarDay(22).then(async (x) => x!.hover());

                await expect.soft(example).toHaveScreenshot('09-2-no-hover-effect.png');

                await calendarSheet.clickOnDay(22);

                await calendarSheet.getCalendarDay(25).then(async (x) => x!.hover());

                await expect.soft(example).toHaveScreenshot('09-3-has-hover-effect.png');
            });
        });

        describe('[maxLength] property', () => {
            let alert!: Locator;

            beforeEach(async ({page}) => {
                await tuiGoto(page, `${DemoRoute.CalendarRange}/API?maxLength$=0`, {
                    date: today,
                });
                alert = page.locator('tui-alerts tui-notification');
            });

            test('click on the 1st date (beginning of date range) disables invalid cells for the 2nd date', async () => {
                const [calendarSheet] = await calendarRange
                    .getCalendars()
                    .then(async ([x]) => x.getCalendarSheets());

                await calendarSheet.clickOnDay(15);

                await expect
                    .soft(example)
                    .toHaveScreenshot('10-1-max-length-disables-cells.png');

                await expect(alert).not.toBeAttached();
            });

            test('click on disabled cell does nothing', async () => {
                const [calendarSheet] = await calendarRange
                    .getCalendars()
                    .then(async ([x]) => x.getCalendarSheets());

                await calendarSheet.clickOnDay(15);

                await expect(alert).not.toBeAttached();

                await calendarSheet.clickOnDay(30);

                await expect(alert).not.toBeAttached();

                await expect
                    .soft(example)
                    .toHaveScreenshot('10-2-max-length-after-click-on-disabled-cell.png');
            });

            test('selects valid 2nd date – date range is completed', async () => {
                const [calendarSheet] = await calendarRange
                    .getCalendars()
                    .then(async ([x]) => x.getCalendarSheets());

                await calendarSheet.clickOnDay(15);
                await calendarSheet.clickOnDay(19);

                await expect(alert).toContainText('15.09.2020 – 19.09.2020');
                await expect
                    .soft(example)
                    .toHaveScreenshot('10-3-max-length-selects-2nd-valid-date.png');
            });
        });
    });
});
