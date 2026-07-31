import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';
import {
    TUI_DROPDOWN_MOBILE_LOCATORS,
    TUI_SELECT_LOCATORS,
    TUI_SHEET_DIALOG_LOCATORS,
} from '@taiga-ui/testing/locators';

const {describe} = test;

describe('DropdownMobile for textfields', () => {
    test.use(TUI_PLAYWRIGHT_MOBILE);

    test('with select', async ({page}) => {
        await page.goto(DemoRoute.Dropdown);

        const documentation = new TuiDocumentationPagePO(page);
        const example = documentation.getExample('#mobile');

        await example.locator(TUI_SELECT_LOCATORS.HOST).click();
        await page
            .locator(TUI_SHEET_DIALOG_LOCATORS.HOST)
            .locator(TUI_SHEET_DIALOG_LOCATORS.OPTION)
            .first()
            .hover();

        await documentation.hideContent();
        await expect.soft(page).toHaveScreenshot('dropdown-mobile-with-select.png');
    });

    test('with legacy multi-select', async ({page}) => {
        await page.goto(DemoRoute.Dropdown);

        const documentation = new TuiDocumentationPagePO(page);
        const example = documentation.getExample('#mobile');

        await example.locator('tui-textfield[multi]').click();
        await page
            .locator(TUI_DROPDOWN_MOBILE_LOCATORS.HOST)
            .locator(TUI_DROPDOWN_MOBILE_LOCATORS.OPTION)
            .first()
            .click();

        await expect
            .soft(page)
            .toHaveScreenshot('dropdown-mobile-with-legacy-multi-select.png');
    });

    test('with multi-select (full screen mode)', async ({page}) => {
        await page.goto(DemoRoute.InputChip);

        const example = new TuiDocumentationPagePO(page).getExample('#mobile');

        await example.locator('tui-textfield[multi][tuiDropdownMobile]').click();
        await page
            .locator(TUI_DROPDOWN_MOBILE_LOCATORS.HOST)
            .locator(TUI_DROPDOWN_MOBILE_LOCATORS.OPTION)
            .first()
            .click();

        await expect
            .soft(page)
            .toHaveScreenshot('dropdown-mobile-with-multi-select-fullscreen.png');
    });

    test('with multi-select (sheet mode)', async ({page}) => {
        await page.goto(DemoRoute.InputChip);

        const documentation = new TuiDocumentationPagePO(page);
        const example = documentation.getExample('#mobile');

        await example.locator('tui-textfield[multi][tuiDropdownSheet]').click();
        await page
            .locator(TUI_SHEET_DIALOG_LOCATORS.HOST)
            .locator(TUI_SHEET_DIALOG_LOCATORS.OPTION)
            .last()
            .click();

        await documentation.hideContent();
        await expect
            .soft(page)
            .toHaveScreenshot('dropdown-mobile-with-multi-select-sheet.png');
    });
});
