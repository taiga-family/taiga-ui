import {DemoRoute} from '@demo/routes';
import {
    TuiCalendarMonthPO,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputMonthPO,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('InputMonth', () => {
    let example: Locator;
    let inputMonth: TuiInputMonthPO;

    describe('API', () => {
        beforeEach(({page}) => {
            example = new TuiDocumentationPagePO(page).apiPageExample;
            inputMonth = new TuiInputMonthPO(
                example.locator('tui-textfield:has([tuiInputMonth])'),
            );
        });

        describe('dropdown', () => {
            test('opens on click for NOT readonly input', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputMonth}/API?readOnly=false`);

                await expect(inputMonth.calendar).not.toBeAttached();
                await inputMonth.textfield.click();
                await expect(inputMonth.calendar).toBeAttached();
            });

            test('does NOT open on click for readonly input', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputMonth}/API?readOnly=true`);

                await expect(inputMonth.calendar).not.toBeAttached();
                await inputMonth.textfield.click();
                await expect(inputMonth.calendar).not.toBeAttached();
            });

            test('does NOT open on click for disabled input', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputMonth}/API?disabled=true`);

                await expect(inputMonth.calendar).not.toBeAttached();
                // eslint-disable-next-line playwright/no-force-option
                await inputMonth.textfield.click({force: true});
                await expect(inputMonth.calendar).not.toBeAttached();
            });

            test('closes dropdown on the second click on the textfield', async ({
                page,
            }) => {
                await tuiGoto(page, `${DemoRoute.InputMonth}/API`);

                await inputMonth.textfield.click();
                await expect(inputMonth.calendar).toBeAttached();
                await inputMonth.textfield.click();
                await expect(inputMonth.calendar).not.toBeAttached();
            });

            test('closes on Esc', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputMonth}/API`);

                await inputMonth.textfield.click();
                await expect(inputMonth.calendar).toBeAttached();
                await page.keyboard.press('Escape');
                await expect(inputMonth.calendar).not.toBeAttached();
            });

            test('opens dropdown after click on textfield cleaner', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputMonth}/API`);

                await inputMonth.textfield.click();

                const calendarMonth = new TuiCalendarMonthPO(inputMonth.calendar);

                await calendarMonth.month.nth(8).click();
                await expect(inputMonth.textfield).toHaveValue('September 2020');
                await expect(inputMonth.calendar).not.toBeAttached();

                await inputMonth.cleaner.click();
                await expect(inputMonth.textfield).toHaveValue('');
                await expect(inputMonth.calendar).toBeAttached();
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
                inputMonth = new TuiInputMonthPO(
                    example.locator('tui-textfield:has([tuiInputMonth])'),
                );
                dropdown = page.locator('tui-dropdown');
            });

            test('displays custom option on dropdown', async () => {
                await inputMonth.textfield.click();

                await expect
                    .soft(dropdown)
                    .toHaveScreenshot('input-month-with-dropdown-customization.png');
            });

            test('closes dropdown after click on custom option', async () => {
                await inputMonth.textfield.click();
                await expect(inputMonth.calendar).toBeAttached();

                await dropdown.locator('button', {hasText: "My wife's birthday"}).click();
                await expect(inputMonth.calendar).not.toBeAttached();
                await expect(inputMonth.textfield).toHaveValue('March 1998');
            });
        });
    });
});
