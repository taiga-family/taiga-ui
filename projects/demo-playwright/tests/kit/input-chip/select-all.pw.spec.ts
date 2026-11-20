import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiInputChipEO} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';
import {
    TUI_DATA_LIST_LOCATORS,
    TUI_DROPDOWN_LOCATORS,
    TUI_DROPDOWN_MOBILE_LOCATORS,
} from '@taiga-ui/testing/locators';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

const {describe, beforeEach} = test;

describe('InputChip with "Select all" option', () => {
    describe('on desktop', () => {
        testSelectAll(TUI_DROPDOWN_LOCATORS.HOST, 'desktop');
    });

    describe('on mobile', () => {
        test.use(TUI_PLAYWRIGHT_MOBILE);

        beforeEach(async ({page}) => {
            await page.addInitScript(() =>
                globalThis.localStorage.setItem('tuiPlatform', 'ios'),
            );
        });

        testSelectAll(TUI_DROPDOWN_MOBILE_LOCATORS.HOST, 'mobile');
    });
});

function testSelectAll(dropdownHost: string, device: 'desktop' | 'mobile'): void {
    let dropdown: Locator;
    let selectAll: Locator;
    let checked: Locator;

    beforeEach(async ({page}) => {
        await tuiGoto(page, DemoRoute.InputChip);

        const example = new TuiDocumentationPagePO(page).getExample('#select-all');
        const chip = new TuiInputChipEO(example);

        await chip.input.click();

        dropdown = page.locator(dropdownHost);
        selectAll = dropdown.getByRole('option', {name: 'Select all', exact: true});
        checked = dropdown.locator('input[tuiCheckbox]:checked');

        await expect(dropdown).toBeVisible();
        await expect(dropdown.locator('input[tuiCheckbox]')).toHaveCount(4);
    });

    test('shows Select all above the unchecked options', async () => {
        await expect(dropdown.locator(TUI_DATA_LIST_LOCATORS.OPTION).first()).toHaveText(
            'Select all',
        );
        await expect(checked).toHaveCount(0);
        await expect(selectAll).toHaveAttribute('aria-checked', 'false');
        await expect(dropdown).toHaveScreenshot(`select-all-${device}-initial.png`);
    });

    test('selects every option', async () => {
        await selectAll.click();

        await expect(checked).toHaveCount(4);
        await expect(selectAll).toHaveAttribute('aria-checked', 'true');
        await expect(dropdown).toHaveScreenshot(`select-all-${device}-selected.png`);
    });

    test('shows a mixed state when only some options are selected', async () => {
        await dropdown.getByRole('option', {name: 'Apple', exact: true}).click();
        await dropdown.getByRole('option', {name: 'Banana', exact: true}).click();

        await expect(checked).toHaveCount(2);
        await expect(selectAll).toHaveAttribute('aria-checked', 'mixed');
        await expect(selectAll.locator('input[tuiCheckbox]')).toHaveJSProperty(
            'indeterminate',
            true,
        );

        await expect(dropdown).toHaveScreenshot(`select-all-${device}-indeterminate.png`);

        await selectAll.click();

        await expect(checked).toHaveCount(4);
        await expect(selectAll).toHaveAttribute('aria-checked', 'true');
    });

    test('clears the group on a second click', async () => {
        await selectAll.click();
        await expect(checked).toHaveCount(4);
        await selectAll.click();

        await expect(checked).toHaveCount(0);
        await expect(selectAll).toHaveAttribute('aria-checked', 'false');
    });
}
