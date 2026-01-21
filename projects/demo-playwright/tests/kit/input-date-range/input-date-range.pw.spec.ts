import {DemoRoute} from '@demo/routes';
import {expect, type Locator, test} from '@playwright/test';

import {
    CHAR_NO_BREAK_SPACE,
    TuiCalendarSheetPO,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputDateRangePO,
} from '../../../utils';

const {describe, beforeEach} = test;

test.describe('InputDateRange', () => {
    let inputDateRange!: TuiInputDateRangePO;
    let documentationPage!: TuiDocumentationPagePO;

    test.use({
        viewport: {width: 650, height: 650},
    });

    beforeEach(({page}) => {
        documentationPage = new TuiDocumentationPagePO(page);
    });

    describe('API', () => {
        let example!: Locator;

        beforeEach(() => {
            example = documentationPage.apiPageExample;

            inputDateRange = new TuiInputDateRangePO(
                example.locator('tui-textfield:has(input[tuiInputDateRange])'),
            );
        });

        ['s', 'm', 'l'].forEach((size) => {
            test(`correct filler display for size ${size.toUpperCase()}`, async ({
                page,
            }) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputDateRange}/API?tuiTextfieldSize=${size}`,
                );

                await inputDateRange.textfield.click();

                await expect.soft(inputDateRange.textfield).toHaveScreenshot();
                await expect.soft(inputDateRange.calendar).toHaveScreenshot();

                await inputDateRange.textfield.pressSequentially('01');

                await expect.soft(inputDateRange.textfield).toHaveScreenshot();
                await expect.soft(inputDateRange.calendar).toHaveScreenshot();

                await inputDateRange.textfield.pressSequentially('.06.1994');

                await expect.soft(inputDateRange.textfield).toHaveScreenshot();
                await expect.soft(inputDateRange.calendar).toHaveScreenshot();

                await inputDateRange.textfield.pressSequentially('01.01.2022');

                await expect.soft(inputDateRange.textfield).toHaveScreenshot();
                await expect.soft(inputDateRange.calendar).toHaveScreenshot();
            });
        });

        test('Maximum month less than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?min$=3`);
            await inputDateRange.textfield.click();

            await expect.soft(inputDateRange.textfield).toHaveScreenshot();
            await expect.soft(inputDateRange.calendar).toHaveScreenshot();
        });

        test('Minimum month more than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?min$=3`);
            await inputDateRange.textfield.click();

            await expect.soft(page).toHaveScreenshot({
                mask: [page.locator('tui-doc-page header')],
            });
        });

        test('Maximum month when items not empty', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?items$=1&max$=7`);
            await inputDateRange.textfield.click();

            await expect.soft(inputDateRange.textfield).toHaveScreenshot();
            await expect.soft(inputDateRange.calendar).toHaveScreenshot();
        });

        describe('pads with zeroes if you enter an invalid date', () => {
            test('day > 31', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API`);

                await inputDateRange.textfield.pressSequentially('32');

                await expect(inputDateRange.textfield).toHaveValue('03.02');
            });

            test('month > 12', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API`);

                await inputDateRange.textfield.pressSequentially('2913');

                await expect(inputDateRange.textfield).toHaveValue('29.1');

                await inputDateRange.textfield.pressSequentially('0');

                await expect(inputDateRange.textfield).toHaveValue('29.10');
            });

            test('pads date range if it is less than [minLength]', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API?minLength$=0`); // minLength = {day: 3}

                await inputDateRange.textfield.pressSequentially('21052023-22052023');

                await expect(inputDateRange.textfield).toHaveValue(
                    `21.05.2023${CHAR_NO_BREAK_SPACE}–${CHAR_NO_BREAK_SPACE}23.05.2023`,
                );
            });

            test('cuts date range if it is more than [maxLength]', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API?maxLength$=1`); // maxLength = {day: 5}

                await inputDateRange.textfield.pressSequentially('20052023-29052023');

                await expect(inputDateRange.textfield).toHaveValue(
                    `20.05.2023${CHAR_NO_BREAK_SPACE}–${CHAR_NO_BREAK_SPACE}24.05.2023`,
                );
            });
        });

        describe('Selecting range consisting of the same start/end date', () => {
            test('double click on the same day - selects single-day range', async ({
                page,
            }) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API`);

                await inputDateRange.textfield.click();

                const calendarSheet = new TuiCalendarSheetPO(
                    inputDateRange.calendar.locator('tui-calendar-sheet'),
                );

                await calendarSheet.clickOnDay(15);

                await expect(inputDateRange.textfield).toHaveValue('');

                await calendarSheet.clickOnDay(15);

                await expect(inputDateRange.textfield).toHaveValue(
                    '15.09.2020 – 15.09.2020',
                );
            });

            test('allows to select new range start after double click on the same day', async ({
                page,
            }) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API`);

                await inputDateRange.textfield.click();

                const calendarSheet = new TuiCalendarSheetPO(
                    inputDateRange.calendar.locator('tui-calendar-sheet'),
                );

                await calendarSheet.clickOnDay(15);
                await calendarSheet.clickOnDay(15);

                await expect(inputDateRange.calendar).not.toBeAttached();

                await inputDateRange.textfield.click();

                await expect(inputDateRange.calendar).toBeAttached();

                await calendarSheet.clickOnDay(22);

                await expect(inputDateRange.textfield).toHaveValue(
                    '15.09.2020 – 15.09.2020',
                );

                await calendarSheet.clickOnDay(25);

                await expect(inputDateRange.textfield).toHaveValue(
                    '22.09.2020 – 25.09.2020',
                );
            });

            test('no highlighting hover effect after double click on the same day', async ({
                page,
            }) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API`);

                await inputDateRange.textfield.click();

                const calendarSheet = new TuiCalendarSheetPO(
                    inputDateRange.calendar.locator('tui-calendar-sheet'),
                );

                await calendarSheet.clickOnDay(15);
                await calendarSheet.getCalendarDay(20).then(async (x) => x!.hover());

                await expect.soft(inputDateRange.calendar).toHaveScreenshot();

                await calendarSheet.clickOnDay(15);

                await expect(inputDateRange.textfield).toHaveValue(
                    '15.09.2020 – 15.09.2020',
                );
                await expect(inputDateRange.calendar).not.toBeAttached();

                await inputDateRange.textfield.click();
                await calendarSheet.getCalendarDay(22).then(async (x) => x!.hover());

                await expect.soft(inputDateRange.calendar).toHaveScreenshot();

                await calendarSheet.clickOnDay(22);

                await calendarSheet.getCalendarDay(25).then(async (x) => x!.hover());

                await expect.soft(inputDateRange.calendar).toHaveScreenshot();
            });
        });

        test('minLength=15', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?minLength$=1`);

            const calendarSheet = new TuiCalendarSheetPO(
                inputDateRange.calendar.locator('tui-calendar-sheet'),
            );

            await inputDateRange.textfield.click();
            await calendarSheet.clickOnDay(1);

            await expect(
                page.locator('tui-dropdown tui-calendar-range'),
            ).toHaveScreenshot();

            await calendarSheet.clickOnDay(18);

            await expect.soft(inputDateRange.textfield).toHaveScreenshot();
        });
    });

    describe('Examples', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.InputDateRange);
        });

        test('Select second same range => after close/open calendar displays selected period displays correctly', async () => {
            const example = documentationPage.getExample('#datalist');

            const inputDateRange = new TuiInputDateRangePO(
                example.locator('tui-textfield:has(input[tuiInputDateRange])'),
            );

            await inputDateRange.textfield.click();
            await inputDateRange.selectItem(2);
            await inputDateRange.textfield.click();

            expect(await inputDateRange.itemHasCheckmark(1)).toBeFalsy();
            expect(await inputDateRange.itemHasCheckmark(2)).toBeTruthy();

            await expect(inputDateRange.template).toHaveText(' Yesterday ');
            await expect.soft(inputDateRange.calendar).toHaveScreenshot();
        });
    });

    test('check valid active period', async ({page}) => {
        await tuiGoto(page, DemoRoute.InputDateRange);

        const example = documentationPage.getExample('#datalist');
        const inputDateRange = new TuiInputDateRangePO(
            example.locator('tui-textfield:has(input[tuiInputDateRange])'),
        );

        await inputDateRange.textfield.focus();
        await inputDateRange.textfield.click();
        await inputDateRange.selectItem(2);

        await expect(inputDateRange.template).toHaveText('Yesterday');
        await expect.soft(inputDateRange.host).toHaveScreenshot();

        await inputDateRange.textfield.blur();

        await expect.soft(inputDateRange.host).toHaveScreenshot();

        await inputDateRange.textfield.focus();
        await inputDateRange.textfield.click();
        await inputDateRange.selectItem(0);

        await expect(inputDateRange.template).toHaveText('For all the time');
        await expect.soft(inputDateRange.host).toHaveScreenshot();

        await inputDateRange.textfield.blur();

        await expect.soft(inputDateRange.host).toHaveScreenshot();
    });

    describe('items', () => {
        test('Select from [items] => select date range from calendar', async ({page}) => {
            await tuiGoto(page, DemoRoute.InputDateRange);

            const example = documentationPage.getExample('#datalist');
            const inputDateRange = new TuiInputDateRangePO(
                example.locator('tui-textfield:has(input[tuiInputDateRange])'),
            );

            const calendarSheet = new TuiCalendarSheetPO(
                inputDateRange.calendar.locator('tui-calendar-sheet'),
            );

            await inputDateRange.textfield.click();
            await inputDateRange.selectItem(1);

            await expect(inputDateRange.template).toHaveText('Today');

            await inputDateRange.textfield.click();
            await calendarSheet.clickOnDay(21);
            await calendarSheet.clickOnDay(25);

            await expect(inputDateRange.textfield).toHaveValue(
                `21.09.2020${CHAR_NO_BREAK_SPACE}–${CHAR_NO_BREAK_SPACE}25.09.2020`,
            );
            await expect.soft(example).toHaveScreenshot();
        });

        // TODO: Fix the test
        test.skip('Press backspace to remove item, textfield is empty', async ({
            page,
        }) => {
            await tuiGoto(page, DemoRoute.InputDateRange);

            const example = documentationPage.getExample('#datalist');
            const inputDateRange = new TuiInputDateRangePO(
                example.locator('tui-textfield:has(input[tuiInputDateRange])'),
            );

            await inputDateRange.textfield.click();
            await inputDateRange.selectItem(1);

            await inputDateRange.textfield.focus();
            await inputDateRange.textfield.press('Backspace');

            await expect(inputDateRange.textfield).toHaveValue('');
            await expect.soft(inputDateRange.textfield).toHaveScreenshot();
        });

        test('Enter item date, it converts to item name', async ({page}) => {
            await tuiGoto(page, DemoRoute.InputDateRange);

            const example = documentationPage.getExample('#datalist');
            const inputDateRange = new TuiInputDateRangePO(
                example.locator('tui-textfield:has(input[tuiInputDateRange])'),
            );

            await inputDateRange.textfield.focus();
            await inputDateRange.textfield.fill('25.09.2020 - 25.09.2020');

            await expect(inputDateRange.template).toHaveText('Today');
            await expect.soft(inputDateRange.textfield).toHaveScreenshot();
        });
    });
});
