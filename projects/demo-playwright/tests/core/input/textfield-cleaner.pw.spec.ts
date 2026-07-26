import {DemoRoute} from '@demo/routes';
import {
    TuiCalendarMonthPO,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputMonthPO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

const {beforeEach, describe} = test;

describe('Textfield cleaner', () => {
    test.describe('clears textfield value on click', () => {
        let example!: Locator;
        let input!: Locator;
        let cleaner!: Locator;

        beforeEach(({page}) => {
            example = new TuiDocumentationPagePO(page).demo;
            input = example.locator('tui-textfield input,textarea').first();
            cleaner = example.locator('tui-textfield [tuiButtonX]');
        });

        test('ComboBox', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.ComboBox}/API?tuiTextfieldCleaner=true`);

            await input.fill('auStRia');
            await expect(input).toHaveValue('Austria');
            await cleaner.click();
            await expect(input).toHaveValue('');
        });

        test('Select', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.Select}/API?tuiTextfieldCleaner=true`);

            await expect(input).toHaveValue('USA');
            await cleaner.click();
            await expect(input).toHaveValue('');
        });

        test('InputCard', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputCard}/API?tuiTextfieldCleaner=true`);

            await input.pressSequentially('12345');
            await expect(input).toHaveValue('1234 5');
            await cleaner.click();
            await expect(input).toHaveValue('');
        });

        test('InputChip', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputChip}/API?tuiTextfieldCleaner=true`);

            await input.pressSequentially('one');
            await page.keyboard.press('Enter');
            await input.pressSequentially('two');
            await page.keyboard.press('Enter');

            await expect(example.locator('tui-input-chip')).toHaveCount(2);

            await cleaner.click();
            await expect(example.locator('tui-input-chip')).toHaveCount(0);
        });

        test('InputColor', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputColor}/API?tuiTextfieldCleaner=true`);

            await input.pressSequentially('123');
            await expect(input).toHaveValue('#123');
            await cleaner.click();
            await expect(input).toHaveValue('');
        });

        test('InputDate', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDate}/API?tuiTextfieldCleaner=true`);

            await input.pressSequentially('992025');
            await expect(input).toHaveValue('09.09.2025');
            await cleaner.click();
            await expect(input).toHaveValue('');
        });

        test('InputDateRange', async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.InputDateRange}/API?tuiTextfieldCleaner=true`,
            );

            await input.pressSequentially('992025'.repeat(2));
            await expect(input).toHaveValue('09.09.2025 – 09.09.2025');
            await cleaner.click();
            await expect(input).toHaveValue('');
        });

        test('InputMonth', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputMonth}/API?tuiTextfieldCleaner=true`);

            const inputMonth = new TuiInputMonthPO(example.locator('tui-textfield'));
            const calendarMonth = new TuiCalendarMonthPO(inputMonth.calendar);

            await inputMonth.textfield.click();

            await calendarMonth.month.nth(8).click();
            await expect(inputMonth.textfield).toHaveValue('September 2020');

            await cleaner.click();
            await expect(input).toHaveValue('');
        });

        test('InputNumber', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputNumber}/API?tuiTextfieldCleaner=true`);

            await input.pressSequentially(',42');
            await expect(input).toHaveValue('0.42');
            await cleaner.click();
            await expect(input).toHaveValue('');
        });

        test('InputYear', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputYear}/API?tuiTextfieldCleaner=true`);

            await input.pressSequentially('1234');
            await expect(input).toHaveValue('1234');
            await cleaner.click();
            await expect(input).toHaveValue('');
        });

        test('InputPhoneInternational', async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.InputPhoneInternational}/API?tuiTextfieldCleaner=true`,
            );

            await input.focus();
            await input.pressSequentially('9123456789');
            await expect(input).toHaveValue('+7 912 345-67-89');
            await cleaner.click();
            await expect(input).toHaveValue('');
        });

        test('InputTime', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputTime}/API?tuiTextfieldCleaner=true`);

            await input.pressSequentially('99');
            await expect(input).toHaveValue('09:09');
            await cleaner.click();
            await expect(input).toHaveValue('');
        });

        test('InputPhone', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputPhone}/API?tuiTextfieldCleaner=true`);

            await input.pressSequentially('123456');
            await expect(input).toHaveValue('+7 (123) 456');
            await cleaner.click();
            await expect(input).toHaveValue('+7 ');
        });

        test('Textarea', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.Textarea}/API?tuiTextfieldCleaner=true`);

            await input.pressSequentially('abc');
            await expect(input).toHaveValue('abc');
            await cleaner.click();
            await expect(input).toHaveValue('');
        });

        test('Input', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.Input}/API?tuiTextfieldCleaner=true`);

            await input.pressSequentially('qwerty');
            await expect(input).toHaveValue('qwerty');
            await cleaner.click();
            await expect(input).toHaveValue('');
        });
    });
});
