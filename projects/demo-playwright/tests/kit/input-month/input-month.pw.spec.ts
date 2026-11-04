import {DemoRoute} from '@demo/routes';
import {
    TuiCalendarMonthEO,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputMonthEO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

const {describe, beforeEach} = test;

describe('InputMonth', () => {
    let example: Locator;
    let inputMonth: TuiInputMonthEO;

    describe('API', () => {
        beforeEach(({page}) => {
            example = new TuiDocumentationPagePO(page).demo;
            inputMonth = new TuiInputMonthEO(page, example);
        });

        describe('dropdown', () => {
            test('opens on click for NOT readonly input', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputMonth}/API?readonly=false`);

                await expect(inputMonth.calendar.host).not.toBeAttached();
                await inputMonth.click();
                await expect(inputMonth.calendar.host).toBeAttached();
            });

            test('does NOT open on click for readonly input', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputMonth}/API?readonly=true`);

                await expect(inputMonth.calendar.host).not.toBeAttached();
                await inputMonth.click();
                await expect(inputMonth.calendar.host).not.toBeAttached();
            });

            test('does NOT open on click for disabled input', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputMonth}/API?disabled=true`);

                await expect(inputMonth.calendar.host).not.toBeAttached();
                // eslint-disable-next-line playwright/no-force-option
                await inputMonth.click({force: true});
                await expect(inputMonth.calendar.host).not.toBeAttached();
            });

            test('closes dropdown on the second click on the textfield', async ({
                page,
            }) => {
                await tuiGoto(page, `${DemoRoute.InputMonth}/API`);

                await inputMonth.click();
                await expect(inputMonth.calendar.host).toBeAttached();
                await inputMonth.click();
                await expect(inputMonth.calendar.host).not.toBeAttached();
            });

            test('closes on Esc', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputMonth}/API`);

                await inputMonth.click();
                await expect(inputMonth.calendar.host).toBeAttached();
                await page.keyboard.press('Escape');
                await expect(inputMonth.calendar.host).not.toBeAttached();
            });

            test('opens dropdown after click on textfield cleaner', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputMonth}/API`);

                await inputMonth.click();

                const calendarMonth = new TuiCalendarMonthEO(page);

                await calendarMonth.selectMonth(8);
                await expect(inputMonth.input).toHaveValue('September 2020');
                await expect(inputMonth.calendar.host).not.toBeAttached();

                await inputMonth.cleaner.click();
                await expect(inputMonth.input).toHaveValue('');
                await expect(inputMonth.calendar.host).toBeAttached();
            });

            test('opens dropdown on click on calendar icon (disabled=false&readonly=false)', async ({
                page,
            }) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputMonth}/API?disabled=false&readonly=false`,
                );

                await expect(inputMonth.calendar.host).not.toBeAttached();

                await inputMonth.clickOnIcon();
                await expect(inputMonth.calendar.host).toBeAttached();
            });

            test('does NOT open dropdown on click on calendar icon for disabled input', async ({
                page,
            }) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputMonth}/API?disabled=true&readonly=false`,
                );

                await expect(inputMonth.calendar.host).not.toBeAttached();

                await inputMonth.clickOnIcon({force: true});
                await expect(inputMonth.calendar.host).not.toBeAttached();
            });

            test('does NOT open dropdown on click on calendar icon for readonly input', async ({
                page,
            }) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputMonth}/API?disabled=false&readonly=true`,
                );

                await expect(inputMonth.calendar.host).not.toBeAttached();

                await inputMonth.clickOnIcon();
                await expect(inputMonth.calendar.host).not.toBeAttached();
            });

            describe('with enabled native picker', () => {
                test.use(TUI_PLAYWRIGHT_MOBILE);

                beforeEach(async ({page}) => {
                    await tuiGoto(page, DemoRoute.InputMonth);
                    example = new TuiDocumentationPagePO(page).getExample(
                        '#native-picker',
                    );
                    inputMonth = new TuiInputMonthEO(page, example);
                });

                test('does NOT open desktop dropdown on click', async () => {
                    await inputMonth.click();
                    await expect(inputMonth.calendar.host).not.toBeAttached();
                });

                test('does NOT open desktop dropdown on cleaner click', async () => {
                    await inputMonth.click();
                    await inputMonth.nativePicker.fill('2025-04');
                    await expect(inputMonth.input).toHaveValue('April 2025');
                    await expect(inputMonth.calendar.host).not.toBeAttached();

                    await inputMonth.cleaner.click();
                    await expect(inputMonth.input).toHaveValue('');
                    await expect(inputMonth.calendar.host).not.toBeAttached();
                });

                test('does NOT open desktop dropdown on calendar icon click', async () => {
                    await inputMonth.clickOnIcon();
                    await expect(inputMonth.calendar.host).not.toBeAttached();
                });
            });
        });

        describe('Keyboard clearing', () => {
            [true, false].forEach((cleanerEnabled) => {
                describe(`tuiTextfieldCleaner=${cleanerEnabled}`, () => {
                    beforeEach(async ({page}) => {
                        await tuiGoto(
                            page,
                            `${DemoRoute.InputMonth}/API?tuiTextfieldCleaner=${cleanerEnabled}`,
                        );
                        await inputMonth.selectMonth(8);
                        await expect(inputMonth.input).toHaveValue('September 2020');
                        await inputMonth.click();

                        await expect(inputMonth.calendar.host).toBeAttached();
                    });

                    test('Backspace', async ({page}) => {
                        await page.keyboard.press('Backspace');
                        await expect(inputMonth.input).toHaveValue(
                            cleanerEnabled ? '' : 'September 2020',
                        );
                    });

                    test('Delete', async ({page}) => {
                        await page.keyboard.press('ControlOrMeta+A');
                        await page.keyboard.press('Delete');
                        await expect(inputMonth.input).toHaveValue(
                            cleanerEnabled ? '' : 'September 2020',
                        );
                    });
                });
            });

            describe('updates form control value', () => {
                (['Home', 'End'] as const).forEach((caret) => {
                    ['Backspace', 'Delete'].forEach((key) => {
                        test(`caret at ${caret} + ${key} => form control value is null`, async ({
                            page,
                        }) => {
                            await tuiGoto(
                                page,
                                `${DemoRoute.InputMonth}/API?sandboxExpanded=true&tuiTextfieldCleaner=true`,
                            );

                            const documentationPage = new TuiDocumentationPagePO(page);

                            await inputMonth.selectMonth(8);
                            await expect(inputMonth.input).toHaveValue('September 2020');
                            await expect(documentationPage.value).toContainText(
                                '2020-09',
                            );

                            await inputMonth.click();
                            await page.keyboard.press(caret);
                            await page.keyboard.press(key);

                            await expect(inputMonth.input).toHaveValue('');
                            await expect(documentationPage.value).toContainText(
                                '"value": null',
                            );
                        });
                    });
                });
            });
        });
    });

    describe('Examples', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.InputMonth);
        });

        describe('Dropdown customization', () => {
            let dropdown!: Locator;

            beforeEach(({page}) => {
                example = new TuiDocumentationPagePO(page).getExample(
                    '#dropdown-customization',
                );
                inputMonth = new TuiInputMonthEO(page, example);
                dropdown = page.locator('tui-dropdown');
            });

            test('displays custom option on dropdown', async () => {
                await inputMonth.click();

                await expect
                    .soft(dropdown)
                    .toHaveScreenshot('input-month-with-dropdown-customization.png');
            });

            test('closes dropdown after click on custom option', async () => {
                await inputMonth.click();
                await expect(inputMonth.calendar.host).toBeAttached();

                await dropdown.locator('button', {hasText: "My wife's birthday"}).click();
                await expect(inputMonth.calendar.host).not.toBeAttached();
                await expect(inputMonth.input).toHaveValue('March 1998');
            });
        });

        describe('Month range', () => {
            beforeEach(({page}) => {
                example = new TuiDocumentationPagePO(page).getExample('#range-mode');
                inputMonth = new TuiInputMonthEO(page, example);
            });

            test('range select', async ({page}) => {
                await inputMonth.click();

                const calendarMonth = new TuiCalendarMonthEO(page);

                await calendarMonth.selectMonth(1);
                await calendarMonth.selectMonth(4);

                await expect(inputMonth.input).toHaveValue('February 2020 – May 2020');
                await expect(inputMonth.calendar.host).not.toBeAttached();
            });

            test('disabled items', async ({page}) => {
                await inputMonth.click();

                const calendarMonth = new TuiCalendarMonthEO(page);

                await calendarMonth.selectMonth(1);
                await expect(async () => {
                    await calendarMonth.selectMonth(3);
                }).rejects.toThrow();

                await expect(inputMonth.input).toHaveValue('');
                await expect(example).toHaveScreenshot(
                    'input-month-range-disabled-items.png',
                );
            });
        });

        describe('Native picker', () => {
            test.use(TUI_PLAYWRIGHT_MOBILE);

            beforeEach(async ({page}) => {
                await tuiGoto(page, DemoRoute.InputMonth);
                example = new TuiDocumentationPagePO(page).getExample('#native-picker');
                inputMonth = new TuiInputMonthEO(page, example);
            });

            test('is clickable', async () => {
                await inputMonth.nativePicker.click();
                await expect(inputMonth.nativePicker).toBeFocused();
            });
        });
    });
});
