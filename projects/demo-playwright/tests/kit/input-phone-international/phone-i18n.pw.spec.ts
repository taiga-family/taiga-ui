import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputPhoneInternationalPO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

const {describe, beforeEach} = test;

describe('InputPhoneInternational | With [tuiDropdownMobile]', () => {
    test.describe('mobile', () => {
        let example: Locator;
        let inputPhoneInternational: TuiInputPhoneInternationalPO;

        test.use(TUI_PLAYWRIGHT_MOBILE);

        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.InputPhoneInternational);

            example = new TuiDocumentationPagePO(page).getExample('#mobile-dropdown');
            inputPhoneInternational = new TuiInputPhoneInternationalPO(
                example.locator('tui-textfield:has([tuiInputPhoneInternational])'),
            );
        });

        test('opens mobile dropdown on select click', async ({page}) => {
            await inputPhoneInternational.select.click();

            await expect
                .soft(page)
                .toHaveScreenshot('input-phone-international-with-mobile-dropdown.png');
        });

        test('textfield inside dropdown is not focused on dropdown open', async () => {
            await inputPhoneInternational.select.click();

            await expect(
                inputPhoneInternational.dropdown.locator('tui-textfield input'),
            ).not.toBeFocused();
        });

        test('items is filtered by textfield inside dropdown', async () => {
            await inputPhoneInternational.select.click();
            await inputPhoneInternational.dropdown
                .locator('tui-textfield input')
                .fill('aust');

            const options = await inputPhoneInternational.getOptions();

            expect(options).toHaveLength(2);
            await expect(options[0]!).toContainText('Australia');
            await expect(options[1]!).toContainText('Austria');
        });
    });

    test.describe('API', () => {
        test('basic', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputPhoneInternational}/API`);
            const example = new TuiDocumentationPagePO(page).apiPageExample;
            const inputPhoneInternational = new TuiInputPhoneInternationalPO(
                example.locator('tui-textfield'),
            );

            await inputPhoneInternational.textfield.focus();
            await inputPhoneInternational.textfield.fill('9991122333');

            await expect(inputPhoneInternational.textfield).toHaveValue(
                '+7 999 112-23-33',
            );
        });

        test('readonly', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputPhoneInternational}/API?readOnly=true`);
            const example = new TuiDocumentationPagePO(page).apiPageExample;
            const inputPhoneInternational = new TuiInputPhoneInternationalPO(
                example.locator('input[tuiInputPhoneInternational]'),
            );

            await expect(async () => {
                await inputPhoneInternational.select.click();
            }).rejects.toThrow();

            await expect(page.locator('tui-dropdown')).not.toBeAttached();
        });
    });
});
