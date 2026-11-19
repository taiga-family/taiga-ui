import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';
import {
    TUI_DATA_LIST_LOCATORS,
    TUI_DROPDOWN_MOBILE_LOCATORS,
    TUI_MULTI_SELECT_LOCATORS,
    TUI_SELECT_LOCATORS,
    TUI_TEXTFIELD_LOCATORS,
} from '@taiga-ui/testing/locators';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

const {describe} = test;

describe('DropdownMobile for textfields', () => {
    test.use(TUI_PLAYWRIGHT_MOBILE);

    test('with select', async ({page}) => {
        await page.goto(DemoRoute.Dropdown);

        const documentation = new TuiDocumentationPagePO(page);
        const example = documentation.getExample('#mobile');

        await example.locator(TUI_SELECT_LOCATORS.INPUT).click();
        await page
            .locator(TUI_DROPDOWN_MOBILE_LOCATORS.HOST)
            .locator(TUI_DATA_LIST_LOCATORS.OPTION)
            .first()
            .hover();

        await documentation.hideContent();
        await expect.soft(page).toHaveScreenshot('dropdown-mobile-with-select.png');
    });

    test('with legacy multi-select', async ({page}) => {
        await page.goto(DemoRoute.Dropdown);

        const documentation = new TuiDocumentationPagePO(page);
        const example = documentation.getExample('#mobile');

        await example.locator(TUI_MULTI_SELECT_LOCATORS.HOST).click();
        await page
            .locator(TUI_DROPDOWN_MOBILE_LOCATORS.HOST)
            .locator(TUI_DATA_LIST_LOCATORS.OPTION)
            .first()
            .click();

        await expect
            .soft(page)
            .toHaveScreenshot('dropdown-mobile-with-legacy-multi-select.png');
    });

    test('with floating container and bottom safe area', async ({page, browserName}) => {
        test.skip(browserName !== 'chromium', 'Safe area is emulated through CDP');

        const cdp = await page.context().newCDPSession(page);

        await cdp.send('Emulation.setSafeAreaInsetsOverride', {
            insets: {top: 0, bottom: 34, left: 0, right: 0},
        });
        await page.goto(DemoRoute.Dropdown);

        const example = new TuiDocumentationPagePO(page).getExample('#mobile');

        await example.locator('tui-multi-select').click();
        await page.locator('tui-dropdown-mobile [tuiOption]').first().click();

        await expect
            .soft(page)
            .toHaveScreenshot('dropdown-mobile-with-floating-container-safe-area.png');
    });

    test('with floating container does not scroll sideways', async ({page}) => {
        await page.goto(DemoRoute.Dropdown);

        const example = new TuiDocumentationPagePO(page).getExample('#mobile');
        const container = page.locator('tui-dropdown-mobile .t-container');

        await example.locator('tui-multi-select').click();
        await expect(
            page.locator('tui-dropdown-mobile [tuiFloatingContainer]'),
        ).toBeVisible();

        expect(await container.evaluate((el) => el.scrollWidth - el.clientWidth)).toBe(0);
    });

    test('with multi-select (full screen mode)', async ({page}) => {
        await page.goto(DemoRoute.InputChip);

        const example = new TuiDocumentationPagePO(page).getExample('#mobile');

        await example
            .locator(`${TUI_TEXTFIELD_LOCATORS.HOST}[multi][tuiDropdownMobile=""]`)
            .click();
        await page
            .locator(TUI_DROPDOWN_MOBILE_LOCATORS.HOST)
            .locator(TUI_DATA_LIST_LOCATORS.OPTION)
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

        await example
            .locator(
                `${TUI_TEXTFIELD_LOCATORS.HOST}[multi][tuiDropdownMobile="Select Pythons"]`,
            )
            .click();
        await page
            .locator(TUI_DROPDOWN_MOBILE_LOCATORS.HOST)
            .locator(TUI_DATA_LIST_LOCATORS.OPTION)
            .last()
            .click();

        await documentation.hideContent();
        await expect
            .soft(page)
            .toHaveScreenshot('dropdown-mobile-with-multi-select-sheet.png');
    });
});

describe('DropdownMobile on desktop', () => {
    test('hides floating container in legacy multi-select', async ({page}) => {
        await page.goto(DemoRoute.Dropdown);

        const example = new TuiDocumentationPagePO(page).getExample('#mobile');
        const footer = page.locator('tui-dropdown [tuiFloatingContainer]');

        await example.locator('tui-multi-select').click();

        await expect(page.locator('tui-dropdown [tuiOption]').first()).toBeVisible();
        await expect(footer).toBeAttached();
        await expect(footer).toBeHidden();
    });

    test('hides floating container in textfield', async ({page}) => {
        await page.goto(DemoRoute.InputChip);

        const example = new TuiDocumentationPagePO(page).getExample('#mobile');
        const footer = page.locator('tui-dropdown [tuiFloatingContainer]');

        await example.locator('tui-textfield[multi][tuiDropdownMobile=""]').click();

        await expect(page.locator('tui-dropdown [tuiOption]').first()).toBeVisible();
        await expect(footer).toBeAttached();
        await expect(footer).toBeHidden();
    });
});
