import {DemoRoute} from '@demo/routes';
import {expect, type Locator, test} from '@playwright/test';

import {
    CHAR_NO_BREAK_SPACE,
    TuiCalendarSheetEO,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputDateRangeEO,
} from '../../../utils';

const {describe, beforeEach} = test;

test.describe('InputDateRange', () => {
    let inputDateRange!: TuiInputDateRangeEO;
    let documentationPage!: TuiDocumentationPagePO;

    test.use({viewport: {width: 650, height: 650}});

    beforeEach(({page}) => {
        documentationPage = new TuiDocumentationPagePO(page);
    });

    describe('API', () => {
        let example!: Locator;

        beforeEach(({page}) => {
            example = documentationPage.demo;

            inputDateRange = new TuiInputDateRangeEO(page, example);
        });

        ['s', 'm', 'l'].forEach((size) => {
            test(`correct filler display for size ${size.toUpperCase()}`, async ({
                page,
            }) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputDateRange}/API?tuiTextfieldSize=${size}`,
                );

                await inputDateRange.input.click();

                await expect
                    .soft(inputDateRange.input)
                    .toHaveScreenshot(`01-textfield-size-${size}-empty.png`);
                await expect
                    .soft(inputDateRange.calendar)
                    .toHaveScreenshot(`01-calendar-size-${size}-empty.png`);

                await inputDateRange.input.pressSequentially('01');

                await expect
                    .soft(inputDateRange.input)
                    .toHaveScreenshot(`02-textfield-size-${size}-set-day.png`);
                await expect
                    .soft(inputDateRange.calendar)
                    .toHaveScreenshot(`02-calendar-size-${size}-set-day.png`);

                await inputDateRange.input.pressSequentially('.06.1994');

                await expect
                    .soft(inputDateRange.input)
                    .toHaveScreenshot(`03-textfield-size-${size}-set-from-date.png`);
                await expect
                    .soft(inputDateRange.calendar)
                    .toHaveScreenshot(`03-calendar-size-${size}-set-from-date.png`);

                await inputDateRange.input.pressSequentially('01.01.2022');

                await expect
                    .soft(inputDateRange.input)
                    .toHaveScreenshot(`04-textfield-size-${size}-set-to-date.png`);
                await expect
                    .soft(inputDateRange.calendar)
                    .toHaveScreenshot(`04-calendar-size-${size}-set-to-date.png`);
            });
        });

        test('Maximum month less than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?min$=3`);
            await inputDateRange.input.click();

            await expect
                .soft(inputDateRange.input)
                .toHaveScreenshot('05-textfield-maximum-month.png');
            await expect
                .soft(inputDateRange.calendar)
                .toHaveScreenshot('05-calendar-maximum-month.png');
        });

        test('Minimum month more than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?min$=3`);
            await inputDateRange.input.click();

            await expect
                .soft(page)
                .toHaveScreenshot('06-input-date-range-minimum-month.png', {
                    mask: [page.locator('tui-doc-page header')],
                });
        });

        test('Maximum month when items not empty', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?items$=1&max$=7`);
            await inputDateRange.input.click();

            await expect
                .soft(inputDateRange.input)
                .toHaveScreenshot('06-textfield-maximum-month-with-items.png');
            await expect
                .soft(inputDateRange.calendar)
                .toHaveScreenshot('06-calendar-maximum-month-with-items.png');
        });

        test('uses dropdown scrolling for long period items', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?items$=2`);
            await inputDateRange.input.click();

            const dropdown = page.locator('tui-dropdown');
            const calendar = inputDateRange.calendar.locator(
                '[automation-id="tui-calendar-range__calendar"]',
            );

            await expect
                .poll(async () =>
                    dropdown.evaluate(
                        ({clientHeight, scrollHeight}) => scrollHeight > clientHeight,
                    ),
                )
                .toBe(true);

            expect(
                await inputDateRange.items.evaluate(
                    ({clientHeight, scrollHeight}) => scrollHeight === clientHeight,
                ),
            ).toBe(true);
            expect(
                await calendar.evaluate((element) => getComputedStyle(element).position),
            ).toBe('sticky');

            await dropdown.evaluate((element) =>
                element.scrollTo({top: element.scrollHeight}),
            );

            await expect
                .poll(async () => dropdown.evaluate(({scrollTop}) => scrollTop))
                .toBeGreaterThan(0);
        });

        describe('pads with zeroes if you enter an invalid date', () => {
            test('day > 31', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API`);

                await inputDateRange.input.pressSequentially('32');

                await expect(inputDateRange.input).toHaveValue('03.02');
            });

            test('month > 12', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API`);

                await inputDateRange.input.pressSequentially('2913');

                await expect(inputDateRange.input).toHaveValue('29.1');

                await inputDateRange.input.pressSequentially('0');

                await expect(inputDateRange.input).toHaveValue('29.10');
            });

            test('pads date range if it is less than [minLength]', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API?minLength$=0`); // minLength = {day: 3}

                await inputDateRange.input.pressSequentially('21052023-22052023');

                await expect(inputDateRange.input).toHaveValue(
                    `21.05.2023${CHAR_NO_BREAK_SPACE}–${CHAR_NO_BREAK_SPACE}23.05.2023`,
                );
            });

            test('cuts date range if it is more than [maxLength]', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API?maxLength$=1`); // maxLength = {day: 5}

                await inputDateRange.input.pressSequentially('20052023-29052023');

                await expect(inputDateRange.input).toHaveValue(
                    `20.05.2023${CHAR_NO_BREAK_SPACE}–${CHAR_NO_BREAK_SPACE}24.05.2023`,
                );
            });
        });

        describe('Selecting range consisting of the same start/end date', () => {
            test('double click on the same day - selects single-day range', async ({
                page,
            }) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API`);

                await inputDateRange.input.click();

                const calendarSheet = new TuiCalendarSheetEO(
                    page,
                    inputDateRange.calendar,
                );

                await calendarSheet.clickOnDay(15);

                await expect(inputDateRange.input).toHaveValue(
                    `15.09.2020${CHAR_NO_BREAK_SPACE}–${CHAR_NO_BREAK_SPACE}`,
                );

                await calendarSheet.clickOnDay(15);

                await expect(inputDateRange.input).toHaveValue('15.09.2020 – 15.09.2020');
            });

            test('allows to select new range start after double click on the same day', async ({
                page,
            }) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API`);

                await inputDateRange.input.click();

                const calendarSheet = new TuiCalendarSheetEO(
                    page,
                    inputDateRange.calendar,
                );

                await calendarSheet.clickOnDay(15);
                await calendarSheet.clickOnDay(15);

                await expect(inputDateRange.calendar).not.toBeAttached();

                await inputDateRange.input.click();

                await expect(inputDateRange.calendar).toBeAttached();

                await calendarSheet.clickOnDay(22);

                await expect(inputDateRange.input).toHaveValue(
                    `22.09.2020${CHAR_NO_BREAK_SPACE}–${CHAR_NO_BREAK_SPACE}`,
                );

                await calendarSheet.clickOnDay(25);

                await expect(inputDateRange.input).toHaveValue('22.09.2020 – 25.09.2020');
            });

            test('no highlighting hover effect after double click on the same day', async ({
                page,
            }) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API`);

                await inputDateRange.input.click();

                const calendarSheet = new TuiCalendarSheetEO(
                    page,
                    inputDateRange.calendar,
                );

                await calendarSheet.clickOnDay(15);
                await calendarSheet.getCalendarDay(20).hover();

                await expect
                    .soft(inputDateRange.calendar)
                    .toHaveScreenshot('12-1-has-hover-effect.png');

                await calendarSheet.clickOnDay(15);

                await expect(inputDateRange.input).toHaveValue('15.09.2020 – 15.09.2020');
                await expect(inputDateRange.calendar).not.toBeAttached();

                await inputDateRange.input.click();
                await expect(inputDateRange.calendar).toBeAttached();
                await calendarSheet.getCalendarDay(22).hover();

                await expect
                    .soft(inputDateRange.calendar)
                    .toHaveScreenshot('12-2-no-hover-effect.png');

                await calendarSheet.clickOnDay(22);
                await calendarSheet.getCalendarDay(25).hover();

                await expect
                    .soft(inputDateRange.calendar)
                    .toHaveScreenshot('12-3-has-hover-effect.png');
            });
        });

        test('minLength=15', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?minLength$=1`);

            const calendarSheet = new TuiCalendarSheetEO(page, inputDateRange.calendar);

            await inputDateRange.input.click();
            await calendarSheet.clickOnDay(1);
            await page.mouse.move(0, 0);

            await expect(
                page.locator('tui-dropdown tui-calendar-range'),
            ).toHaveScreenshot('input-date-range-min-length-15-1.png');

            await calendarSheet.clickOnDay(18);
            await page.mouse.move(0, 0);

            await expect
                .soft(inputDateRange.input)
                .toHaveScreenshot('input-date-range-min-length-15-2.png');
        });

        test('allows to select new range after same-day range with maxLength', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?maxLength$=1`);

            await inputDateRange.input.click();

            const calendarSheet = new TuiCalendarSheetEO(page, inputDateRange.calendar);

            await calendarSheet.clickOnDay(15);
            await calendarSheet.clickOnDay(15);

            await expect(inputDateRange.input).toHaveValue(
                `15.09.2020${CHAR_NO_BREAK_SPACE}–${CHAR_NO_BREAK_SPACE}15.09.2020`,
            );

            await expect(inputDateRange.calendar).not.toBeAttached();

            await inputDateRange.input.click();

            await calendarSheet.clickOnDay(22);
            await calendarSheet.clickOnDay(25);

            await expect(inputDateRange.input).toHaveValue(
                `22.09.2020${CHAR_NO_BREAK_SPACE}–${CHAR_NO_BREAK_SPACE}25.09.2020`,
            );
        });
    });

    describe('Examples', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.InputDateRange);
        });

        test('Select second same range => after close/open calendar displays selected period displays correctly', async ({
            page,
        }) => {
            const example = documentationPage.getExample('#data-list');
            const inputDateRange = new TuiInputDateRangeEO(page, example);

            await inputDateRange.input.click();
            await inputDateRange.selectItem(2);
            await inputDateRange.input.click();

            let checkmark = await inputDateRange.getCheckmark(1);

            await expect(checkmark!).toHaveCount(0);
            checkmark = await inputDateRange.getCheckmark(2);
            await expect(checkmark!).toHaveCount(1);

            await expect(inputDateRange.template).toHaveText(' Yesterday ');
            await expect
                .soft(inputDateRange.calendar)
                .toHaveScreenshot(
                    '08-calendar-correct-selected-period-after-close-open.png',
                );
        });
    });

    test('check valid active period', async ({page}) => {
        await tuiGoto(page, DemoRoute.InputDateRange);

        const example = documentationPage.getExample('#data-list');
        const inputDateRange = new TuiInputDateRangeEO(page, example);

        await inputDateRange.input.focus();
        await inputDateRange.input.click();
        await inputDateRange.selectItem(2);

        await expect(inputDateRange.template).toHaveText('Yesterday');
        await expect
            .soft(inputDateRange.host)
            .toHaveScreenshot('13-data-range-custom-period-yesterday-focused.png');

        await inputDateRange.input.blur();

        await expect
            .soft(inputDateRange.host)
            .toHaveScreenshot('14-data-range-custom-period-yesterday-unfocused.png');

        await inputDateRange.input.focus();
        await inputDateRange.input.click();
        await inputDateRange.selectItem(0);

        await expect(inputDateRange.template).toHaveText('For all the time');
        await expect
            .soft(inputDateRange.host)
            .toHaveScreenshot('15-data-range-custom-period-today-focused.png');

        await inputDateRange.input.blur();

        await expect
            .soft(inputDateRange.host)
            .toHaveScreenshot('16-data-range-custom-period-today-unfocused.png');
    });

    describe('items', () => {
        test('Select from [items] => select date range from calendar', async ({page}) => {
            await tuiGoto(page, DemoRoute.InputDateRange);

            const example = documentationPage.getExample('#data-list');
            const inputDateRange = new TuiInputDateRangeEO(page, example);
            const calendarSheet = new TuiCalendarSheetEO(page);

            await inputDateRange.input.click();
            await inputDateRange.selectItem(1);

            await expect(inputDateRange.template).toHaveText('Today');

            await inputDateRange.input.click();
            await expect(inputDateRange.calendar).toBeAttached();
            await calendarSheet.clickOnDay(21);
            await calendarSheet.clickOnDay(25);

            await expect(inputDateRange.input).toHaveValue(
                `21.09.2020${CHAR_NO_BREAK_SPACE}–${CHAR_NO_BREAK_SPACE}25.09.2020`,
            );
            await expect
                .soft(example)
                .toHaveScreenshot('07-item-and-calendar-interactions.png');
        });

        // TODO: Fix the test
        test.skip('Press backspace to remove item, textfield is empty', async ({
            page,
        }) => {
            await tuiGoto(page, DemoRoute.InputDateRange);

            const example = documentationPage.getExample('#data-list');
            const inputDateRange = new TuiInputDateRangeEO(page, example);

            await inputDateRange.input.click();
            await inputDateRange.selectItem(1);

            await inputDateRange.input.focus();
            await inputDateRange.input.press('Backspace');

            await expect(inputDateRange.input).toHaveValue('');
            await expect
                .soft(inputDateRange.input)
                .toHaveScreenshot('10-input-date-range.png');
        });

        test('Enter item date, it converts to item name', async ({page}) => {
            await tuiGoto(page, DemoRoute.InputDateRange);

            const example = documentationPage.getExample('#data-list');
            const inputDateRange = new TuiInputDateRangeEO(page, example);

            await inputDateRange.input.focus();
            await inputDateRange.input.fill('25.09.2020 - 25.09.2020');

            await expect(inputDateRange.template).toHaveText('Today');
            await expect
                .soft(inputDateRange.input)
                .toHaveScreenshot('11-input-date-range.png');
        });
    });
});
