import {DemoRoute} from '@demo/routes';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';
import {
    CHAR_NO_BREAK_SPACE,
    TuiCalendarPO,
    TuiCalendarSheetPO,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputDateRangePO,
    TuiMobileCalendarPO,
} from '../../../utils';

test.describe('InputDateRange', () => {
    let inputDateRange!: TuiInputDateRangePO;
    let documentationPage!: TuiDocumentationPagePO;

    test.use({
        viewport: {width: 650, height: 650},
    });

    test.beforeEach(({page}) => {
        documentationPage = new TuiDocumentationPagePO(page);
    });

    test.describe('API', () => {
        let example!: Locator;

        let calendar!: TuiCalendarPO;

        test.beforeEach(() => {
            example = documentationPage.apiPageExample;

            inputDateRange = new TuiInputDateRangePO(
                example.locator('tui-input-date-range'),
            );

            calendar = new TuiCalendarPO(inputDateRange.calendar);
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

                await expect(inputDateRange.textfield).toHaveScreenshot(
                    `01-textfield-size-${size}-empty.png`,
                );
                await expect(inputDateRange.calendar).toHaveScreenshot(
                    `01-calendar-size-${size}-empty.png`,
                );

                await inputDateRange.textfield.pressSequentially('01');

                await expect(inputDateRange.textfield).toHaveScreenshot(
                    `02-textfield-size-${size}-set-day.png`,
                );
                await expect(inputDateRange.calendar).toHaveScreenshot(
                    `02-calendar-size-${size}-set-day.png`,
                );

                await inputDateRange.textfield.pressSequentially('.06.1994');

                await expect(inputDateRange.textfield).toHaveScreenshot(
                    `03-textfield-size-${size}-set-from-date.png`,
                );
                await expect(inputDateRange.calendar).toHaveScreenshot(
                    `03-calendar-size-${size}-set-from-date.png`,
                );

                await inputDateRange.textfield.pressSequentially('01.01.2022');

                await expect(inputDateRange.textfield).toHaveScreenshot(
                    `04-textfield-size-${size}-set-to-date.png`,
                );
                await expect(inputDateRange.calendar).toHaveScreenshot(
                    `04-calendar-size-${size}-set-to-date.png`,
                );
            });
        });

        test('Maximum month less than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?min$=3`);
            await inputDateRange.textfield.click();

            await expect(inputDateRange.textfield).toHaveScreenshot(
                '05-textfield-maximum-month.png',
            );
            await expect(inputDateRange.calendar).toHaveScreenshot(
                '05-calendar-maximum-month.png',
            );
        });

        test('Minimum month more than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?min$=3`);
            await inputDateRange.textfield.click();

            await expect(page).toHaveScreenshot('06-input-date-range-minimum-month.png', {
                mask: [page.locator('tui-doc-page header')],
            });
        });

        test('Maximum month when items not empty', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?items$=1&max$=7`);
            await inputDateRange.textfield.click();

            await expect(inputDateRange.textfield).toHaveScreenshot(
                '06-textfield-maximum-month-with-items.png',
            );
            await expect(inputDateRange.calendar).toHaveScreenshot(
                '06-calendar-maximum-month-with-items.png',
            );
        });

        test.describe('prevents changes if you enter an invalid date', () => {
            test('day > 31', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API`);

                await inputDateRange.textfield.pressSequentially('32');

                await expect(inputDateRange.textfield).toHaveValue('3');

                await inputDateRange.textfield.pressSequentially('1');

                await expect(inputDateRange.textfield).toHaveValue('31');
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
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API?maxLength$=0`); // maxLength = {day: 5}

                await inputDateRange.textfield.pressSequentially('20052023-29052023');

                await expect(inputDateRange.textfield).toHaveValue(
                    `20.05.2023${CHAR_NO_BREAK_SPACE}–${CHAR_NO_BREAK_SPACE}24.05.2023`,
                );
            });
        });

        test('Select from [items] => select date range from calendar', async ({page}) => {
            const calendarSheet = new TuiCalendarSheetPO(
                inputDateRange.calendar.locator('tui-calendar-sheet'),
            );

            await tuiGoto(
                page,
                `${DemoRoute.InputDateRange}/API?items$=1&sandboxExpanded=true`,
            );

            await inputDateRange.textfield.click();
            await inputDateRange.selectItem(1);

            await expect(inputDateRange.textfield).toHaveValue('Today');

            await inputDateRange.textfield.click();
            await calendarSheet.clickOnDay(21);

            await expect(inputDateRange.textfield).toHaveValue(
                `21.09.2020${CHAR_NO_BREAK_SPACE}–${CHAR_NO_BREAK_SPACE}25.09.2020`,
            );
            await expect(example).toHaveScreenshot(
                '07-item-and-calendar-interactions.png',
            );
        });

        test('Calendar shows end of period, when selected any range', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?items$=1`);

            await inputDateRange.textfield.click();
            await inputDateRange.selectItem(0);

            await inputDateRange.textfield.click();

            await expect(example).toHaveScreenshot('09-calendar-shows-end-of-period.png');
        });

        test('Press backspace to remove item, textfield is empty', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?items$=1`);

            await inputDateRange.textfield.click();
            await calendar.itemButton.first().click();

            await inputDateRange.textfield.focus();
            await inputDateRange.textfield.press('Backspace');

            await expect(inputDateRange.textfield).toHaveValue('');
            await expect(inputDateRange.textfield).toHaveScreenshot(
                '10-input-date-range.png',
            );
        });

        test('Enter item date, it converts to item name', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateRange}/API?items$=1`);

            await inputDateRange.textfield.focus();
            await inputDateRange.textfield.fill('25.09.2020 - 25.09.2020');

            await expect(inputDateRange.textfield).toHaveValue('Today');
            await expect(inputDateRange.textfield).toHaveScreenshot(
                '11-input-date-range.png',
            );
        });

        test.describe('Mobile emulation', () => {
            test.use(TUI_PLAYWRIGHT_MOBILE);

            let mobileCalendar!: TuiMobileCalendarPO;

            test.beforeEach(() => {
                mobileCalendar = new TuiMobileCalendarPO(inputDateRange.calendar);
            });

            test('Selection of only single date produces range with the same start and end', async ({
                page,
            }) => {
                await tuiGoto(page, `${DemoRoute.InputDateRange}/API`);
                await inputDateRange.textfieldIcon.click();

                const [calendarSheet] = await mobileCalendar.getCalendarSheets();

                await calendarSheet?.clickOnDay(17);
                await mobileCalendar.confirmButton.click();

                await expect(inputDateRange.textfield).toHaveValue(
                    `17.09.2020${CHAR_NO_BREAK_SPACE}–${CHAR_NO_BREAK_SPACE}17.09.2020`,
                );
            });
        });
    });

    test.describe('Examples', () => {
        test.beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.InputDateRange);
        });

        test('Select second same range => after close/open calendar displays selected period displays correctly', async () => {
            const example = documentationPage.getExample('#custom-period');

            const inputDateRange = new TuiInputDateRangePO(
                example.locator('tui-input-date-range'),
            );

            await inputDateRange.textfield.click();
            await inputDateRange.selectItem(2);
            await inputDateRange.textfield.click();

            expect(await inputDateRange.itemHasCheckmark(1)).toBeFalsy();
            expect(await inputDateRange.itemHasCheckmark(2)).toBeTruthy();

            await expect(inputDateRange.textfield).toHaveValue('Yet another yesterday');
            await expect(inputDateRange.calendar).toHaveScreenshot(
                '08-calendar-correct-selected-period-after-close-open.png',
            );
        });

        test.describe('with `input[tuiTextfieldLegacy]` inside', () => {
            test('filler has no change detection problems', async () => {
                const example = documentationPage.getExample('#base');
                const inputDateRange = new TuiInputDateRangePO(
                    example.locator('tui-input-date-range'),
                );

                /**
                 * To ensure that example is not changed and
                 * still contains InputDateRange with projected <input tuiTextfieldLegacy>
                 */
                await expect(
                    inputDateRange.host.locator('input[tuiTextfieldLegacy]'),
                ).toBeAttached();

                await inputDateRange.textfield.focus();

                await expect(inputDateRange.host).toHaveScreenshot(
                    '12-backspace-pressed-0-times.png',
                );

                for (let i = 1; i <= 16; i++) {
                    await inputDateRange.textfield.press('Backspace');

                    await expect(inputDateRange.host).toHaveScreenshot(
                        `12-backspace-pressed-${i}-times.png`,
                    );
                }

                await expect(inputDateRange.textfield).toHaveValue('');
            });
        });
    });

    test('check valid active period', async ({page}) => {
        await tuiGoto(page, DemoRoute.InputDateRange);

        const example = documentationPage.getExample('#custom-period');
        const inputDateRange = new TuiInputDateRangePO(
            example.locator('tui-input-date-range'),
        );

        await inputDateRange.textfield.focus();
        await inputDateRange.textfieldIcon.click();
        await inputDateRange.selectItem(1);

        await expect(inputDateRange.textfield).toHaveValue('Yesterday');
        await expect(inputDateRange.host).toHaveScreenshot(
            '13-data-range-custom-period-yesterday-focused.png',
        );

        await inputDateRange.textfield.blur();

        await expect(inputDateRange.host).toHaveScreenshot(
            '14-data-range-custom-period-yesterday-unfocused.png',
        );

        await inputDateRange.textfield.focus();
        await inputDateRange.textfieldIcon.click();
        await inputDateRange.selectItem(0);

        await expect(inputDateRange.textfield).toHaveValue('Today');
        await expect(inputDateRange.host).toHaveScreenshot(
            '15-data-range-custom-period-today-focused.png',
        );

        await inputDateRange.textfield.blur();

        await expect(inputDateRange.host).toHaveScreenshot(
            '16-data-range-custom-period-today-unfocused.png',
        );
    });
});
