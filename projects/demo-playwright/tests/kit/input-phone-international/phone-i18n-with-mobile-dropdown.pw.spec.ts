import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputPhoneInternationalPO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

const {describe, beforeEach} = test;

describe('InputPhoneInternational | With [tuiDropdownMobile]', () => {
    let example: Locator;
    let inputPhoneInternational: TuiInputPhoneInternationalPO;

    test.beforeEach(async ({page}, testInfo) => {
        await PerformanceCollector.startTestCollection(
            page,
            testInfo.titlePath.join(' › '),
            testInfo.file,
        );
    });

    test.afterEach(async ({page}, testInfo) => {
        await PerformanceCollector.stopTestCollection(
            page,
            testInfo.titlePath.join(' › '),
        );
    });

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

    test('textfield inside dropdown is focused on dropdown open', async () => {
        await inputPhoneInternational.select.click();

        await expect(
            inputPhoneInternational.dropdown.locator('tui-textfield input[tuiTextfield]'),
        ).toBeFocused();
    });

    test('items is filtered by textfield inside dropdown', async () => {
        await inputPhoneInternational.select.click();
        await inputPhoneInternational.dropdown
            .locator('tui-textfield input[tuiTextfield]')
            .fill('aust');

        const options = await inputPhoneInternational.getOptions();

        expect(options).toHaveLength(2);
        await expect(options[0]!).toContainText('Australia');
        await expect(options[1]!).toContainText('Austria');
    });
});
