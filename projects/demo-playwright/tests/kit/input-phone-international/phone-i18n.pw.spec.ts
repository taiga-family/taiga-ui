import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputPhoneInternationalEO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';
import {TUI_DROPDOWN_LOCATORS, TUI_TEXTFIELD_LOCATORS} from '@taiga-ui/testing/locators';

import {
    TUI_PLAYWRIGHT_IOS_USER_AGENT,
    TUI_PLAYWRIGHT_MOBILE,
} from '../../../playwright.options';

const {describe, beforeEach} = test;

describe('InputPhoneInternational | With [tuiDropdownMobile]', () => {
    test.describe('iOS', () => {
        let example: Locator;
        let inputPhoneInternational: TuiInputPhoneInternationalEO;

        test.use({
            ...TUI_PLAYWRIGHT_MOBILE,
            userAgent: TUI_PLAYWRIGHT_IOS_USER_AGENT,
        });

        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.InputPhoneInternational);

            example = new TuiDocumentationPagePO(page).getExample('#mobile-dropdown');
            inputPhoneInternational = new TuiInputPhoneInternationalEO(page, example);
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
                inputPhoneInternational.dropdown
                    .locator(TUI_TEXTFIELD_LOCATORS.HOST)
                    .locator(TUI_TEXTFIELD_LOCATORS.INPUT),
            ).not.toBeFocused();
        });

        test('items is filtered by textfield inside dropdown', async () => {
            await inputPhoneInternational.select.click();
            await inputPhoneInternational.dropdown
                .locator(TUI_TEXTFIELD_LOCATORS.HOST)
                .locator(TUI_TEXTFIELD_LOCATORS.INPUT)
                .fill('aust');

            await expect(inputPhoneInternational.options).toHaveCount(2);
            await expect(inputPhoneInternational.options.nth(0)).toContainText(
                'Australia',
            );
            await expect(inputPhoneInternational.options.nth(1)).toContainText('Austria');
        });
    });

    test.describe('Android', () => {
        let example: Locator;
        let inputPhoneInternational: TuiInputPhoneInternationalEO;

        test.use(TUI_PLAYWRIGHT_MOBILE);

        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.InputPhoneInternational);
            example = new TuiDocumentationPagePO(page).getExample('#mobile-dropdown');
            inputPhoneInternational = new TuiInputPhoneInternationalEO(page, example);
        });

        test('textfield inside dropdown IS focused on dropdown open', async () => {
            await inputPhoneInternational.select.click();
            await expect(
                inputPhoneInternational.dropdown.locator('tui-textfield input'),
            ).toBeFocused(); // on android [tuiAutoFocus]="!ios" === true
        });
    });

    test.describe('API', () => {
        test('basic', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputPhoneInternational}/API`);
            const example = new TuiDocumentationPagePO(page).demo;

            const inputPhoneInternational = new TuiInputPhoneInternationalEO(
                page,
                example,
            );

            await inputPhoneInternational.input.focus();
            await inputPhoneInternational.input.fill('9991122333');

            await expect(inputPhoneInternational.input).toHaveValue('+7 999 112-23-33');
        });

        test('readonly', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputPhoneInternational}/API?readonly=true`);
            const example = new TuiDocumentationPagePO(page).demo;

            const inputPhoneInternational = new TuiInputPhoneInternationalEO(
                page,
                example,
            );

            await expect(async () => {
                await inputPhoneInternational.select.click();
            }).rejects.toThrow();

            await expect(page.locator(TUI_DROPDOWN_LOCATORS.HOST)).not.toBeAttached();
        });
    });
});
