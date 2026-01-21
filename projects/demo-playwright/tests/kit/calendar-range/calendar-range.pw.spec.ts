import {DemoRoute} from '@demo/routes';
import {
    TuiCalendarRangePO,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

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

            await expect.soft(example).toHaveScreenshot();

            await calendarRange.selectItem(1);
            await calendarRange.itemHasCheckmark(1);

            await expect.soft(example).toHaveScreenshot();

            await resetButton.click();

            await expect.soft(example).toHaveScreenshot();

            await resetButton.click();

            await expect.soft(example).toHaveScreenshot();

            await resetButton.click();

            await expect.soft(example).toHaveScreenshot();
        });

        describe('With value', () => {
            test('Month switching via chevron', async ({page}) => {
                example = documentationPage.getExample('#with-value');
                calendarRange = new TuiCalendarRangePO(
                    example.locator('tui-calendar-range'),
                );

                await calendarRange.previousMonth.click();

                await page.mouse.click(100, 100); // clear focus

                await expect.soft(example).toHaveScreenshot();
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

            await expect.soft(example).toHaveScreenshot();
        });

        test('Dont allow to select disabled dates in calendar', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.CalendarRange}/API?disabledItemHandler$=1`);

            await expect.soft(example).toHaveScreenshot();

            const getCells = (): Locator =>
                page.locator('[automation-id="tui-calendar-sheet__cell"]');

            await getCells().nth(1).click();

            await expect.soft(example).toHaveScreenshot();

            await getCells().nth(9).hover();

            await expect.soft(example).toHaveScreenshot();

            await getCells().nth(9).click();
            await page.mouse.click(100, 100); // clear focus

            await expect.soft(example).toHaveScreenshot();

            await getCells().nth(0).click();
            await page.mouse.click(100, 100); // clear focus

            await expect.soft(example).toHaveScreenshot();
        });

        describe('Selecting range consisting of the same start/end date', () => {
            let alert!: Locator;

            beforeEach(({page}) => {
                alert = page.locator('tui-popups [tuiNotification]');
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
                await expect.soft(example).toHaveScreenshot();
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
                await expect.soft(example).toHaveScreenshot();
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

                await expect.soft(example).toHaveScreenshot();

                await calendarSheet.clickOnDay(15);

                await calendarSheet.getCalendarDay(22).then(async (x) => x!.hover());

                await expect.soft(example).toHaveScreenshot();

                await calendarSheet.clickOnDay(22);

                await calendarSheet.getCalendarDay(25).then(async (x) => x!.hover());

                await expect.soft(example).toHaveScreenshot();
            });
        });

        describe('[maxLength] property', () => {
            let alert!: Locator;

            beforeEach(async ({page}) => {
                await tuiGoto(page, `${DemoRoute.CalendarRange}/API?maxLength$=0`, {
                    date: today,
                });
                alert = page.locator('tui-popups [tuiNotification]');
            });

            test('click on the 1st date (beginning of date range) disables invalid cells for the 2nd date', async () => {
                const [calendarSheet] = await calendarRange
                    .getCalendars()
                    .then(async ([x]) => x.getCalendarSheets());

                await calendarSheet.clickOnDay(15);

                await expect.soft(example).toHaveScreenshot();

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

                await expect.soft(example).toHaveScreenshot();
            });

            test('selects valid 2nd date – date range is completed', async () => {
                const [calendarSheet] = await calendarRange
                    .getCalendars()
                    .then(async ([x]) => x.getCalendarSheets());

                await calendarSheet.clickOnDay(15);
                await calendarSheet.clickOnDay(19);

                await expect(alert).toContainText('15.09.2020 – 19.09.2020');
                await expect.soft(example).toHaveScreenshot();
            });
        });

        describe('[minLength] property', () => {
            let alert!: Locator;

            describe('{month: 1}', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.CalendarRange}/API?minLength$=2`, {
                        date: new Date(2018, 1, 28),
                    });
                    alert = page.locator('tui-popups [tuiNotification]');
                });

                test('31.03.2018 => {month: 1} => 01.03.2018 // all days of March, a full month', async () => {
                    const [, endSheet] = await calendarRange
                        .getCalendars()
                        .then(async ([x]) => x.getCalendarSheets());

                    await endSheet!.clickOnDay(31);

                    await expect(example).toHaveScreenshot();

                    await endSheet!.clickOnDay(2);
                    await expect(alert).not.toBeAttached();

                    await endSheet!.clickOnDay(1);
                    await expect(alert).toContainText('01.03.2018 – 31.03.2018');
                });

                test('17.03.2018 => {month: 1} => 18.02.2018 // full month with from-day', async () => {
                    const [startSheet, endSheet] = await calendarRange
                        .getCalendars()
                        .then(async ([x]) => x.getCalendarSheets());

                    await endSheet!.clickOnDay(17);

                    await expect(example).toHaveScreenshot();

                    await startSheet.clickOnDay(19);
                    await expect(alert).not.toBeAttached();

                    await startSheet.clickOnDay(18);
                    await expect(alert).toContainText('18.02.2018 – 17.03.2018');
                });

                test('30.03.2018 => {month: 1} => 28.02.2018 // full month, when current month has more days, then final', async () => {
                    const [startSheet, endSheet] = await calendarRange
                        .getCalendars()
                        .then(async ([x]) => x.getCalendarSheets());

                    await endSheet!.clickOnDay(30);

                    await expect(example).toHaveScreenshot();

                    await endSheet!.clickOnDay(1);
                    await expect(alert).not.toBeAttached();

                    await startSheet.clickOnDay(28);
                    await expect(alert).toContainText('28.02.2018 – 30.03.2018');
                });
            });

            describe('{month: 1, day: 1}', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.CalendarRange}/API?minLength$=3`, {
                        date: new Date(2018, 1, 28),
                    });
                    alert = page.locator('tui-popups [tuiNotification]');
                });

                test('31.03.2018 => {month: 1, day: 1} => 28.02.2018 // all days of March plus one day', async () => {
                    const [startSheet, endSheet] = await calendarRange
                        .getCalendars()
                        .then(async ([x]) => x.getCalendarSheets());

                    await endSheet!.clickOnDay(31);

                    await expect(example).toHaveScreenshot();

                    await endSheet!.clickOnDay(1);
                    await expect(alert).not.toBeAttached();

                    await startSheet.clickOnDay(28);
                    await expect(alert).toContainText('28.02.2018 – 31.03.2018');
                });

                test('17.03.2018 => {month: 1, day: 1} => 17.02.2018 // full month with from-day plus one day', async () => {
                    const [startSheet, endSheet] = await calendarRange
                        .getCalendars()
                        .then(async ([x]) => x.getCalendarSheets());

                    await endSheet!.clickOnDay(17);

                    await expect(example).toHaveScreenshot();

                    await startSheet.clickOnDay(18);
                    await expect(alert).not.toBeAttached();

                    await startSheet.clickOnDay(17);
                    await expect(alert).toContainText('17.02.2018 – 17.03.2018');
                });
            });
        });
    });
});
