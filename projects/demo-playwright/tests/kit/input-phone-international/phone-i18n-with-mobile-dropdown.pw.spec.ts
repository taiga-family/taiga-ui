import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputPhoneInternationalPO,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

const {describe, beforeEach} = test;

describe('InputPhoneInternational | With [tuiDropdownMobile]', () => {
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

        await expect(page).toHaveScreenshot(
            'input-phone-international-with-mobile-dropdown.png',
        );
    });

    test('textfield inside dropdown is focused on dropdown open', async () => {
        await inputPhoneInternational.select.click();

        await expect(
            inputPhoneInternational.dropdown.locator('tui-textfield input'),
        ).toBeFocused();
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
