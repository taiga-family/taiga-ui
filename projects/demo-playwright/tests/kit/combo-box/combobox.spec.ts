import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, Locator, Page, test} from '@playwright/test';

import {TuiComboBoxPO} from '../../../utils/page-objects/tui-combo-box.po';

const {describe} = test;

describe(`ComboBox`, () => {
    test(`Don't allow disabled options to be selected by typing them`, async ({page}) => {
        await tuiGoto(page, `components/combo-box`);

        const documentationPage = new TuiDocumentationPagePO(page);
        const example = documentationPage.getExample(`#ignore-disabled`);
        const input = example.locator(`tui-combo-box input[tuiTextfield]`);

        await example.scrollIntoViewIfNeeded();
        await input.click();
        await expect(page).toHaveScreenshot(`01-combobox-dont-allow-disabled-01.png`);

        await input.fill(`Graham Chapman`);
        await expect(page).toHaveScreenshot(`01-combobox-dont-allow-disabled-02.png`);

        await page.click(`body`);
        await expect(page).toHaveScreenshot(`01-combobox-dont-allow-disabled-03.png`);

        await input.click();
        await expect(page).toHaveScreenshot(`01-combobox-dont-allow-disabled-04.png`);
    });

    describe(`API`, () => {
        [true, false].forEach(strict => {
            test(`search shouldn't be reset if an exact match is entered when strict is ${strict}`, async ({
                page,
            }) => {
                const {apiPageExample} = new TuiDocumentationPagePO(page);

                const {comboboxTextfield} = new TuiComboBoxPO(apiPageExample);

                await visitBy(page, strict);
                await openFormValue(apiPageExample);
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-${strict}.png`,
                );

                await comboboxTextfield.click();
                await page.keyboard.type(`Rubles (500)`);
                await waitCheckmark(page);
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-waited-mark-${strict}.png`,
                );

                await clickFirstOption(page);
                await focusWrapper(apiPageExample);
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-focused-${strict}.png`,
                );

                await comboboxTextfield.click();
                await page.keyboard.press(`Backspace`);
                await focusWrapper(apiPageExample);
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-backspaced-${strict}.png`,
                );

                await comboboxTextfield.click();
                await page.keyboard.press(`Control+A`);
                await page.keyboard.press(`Backspace`);
                await focusWrapper(apiPageExample);
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-remove-all-${strict}.png`,
                );
            });

            test(`correct word match when strict is ${strict}`, async ({page}) => {
                const {apiPageExample} = new TuiDocumentationPagePO(page);
                const {comboboxTextfield} = new TuiComboBoxPO(apiPageExample);

                await visitBy(page, strict);
                await openFormValue(apiPageExample);

                await comboboxTextfield.click();
                await page.keyboard.type(`dOlLaRs (237)`);
                await waitCheckmark(page);
                await expect(page).toHaveScreenshot(
                    `correct-word-match-when-strict-${strict}.png`,
                );

                await comboboxTextfield.click();
                await page.keyboard.press(`Backspace`);

                await page.waitForTimeout(200);

                await comboboxTextfield.click();
                await page.keyboard.press(`Backspace`);

                await page.waitForTimeout(200);

                await comboboxTextfield.click();
                await page.keyboard.press(`Backspace`);

                await page.waitForTimeout(200);

                await comboboxTextfield.click();
                await page.keyboard.press(`Backspace`);

                await expect(page).toHaveScreenshot(
                    `correct-word-match-when-strict-backspaced-${strict}.png`,
                );

                await focusWrapper(apiPageExample);

                await expect(page).toHaveScreenshot(
                    `correct-word-match-when-strict-focused-${strict}.png`,
                );

                await comboboxTextfield.click();
                await page.keyboard.press(`Control+A`);
                await page.keyboard.press(`Backspace`);

                await expect(page).toHaveScreenshot(
                    `correct-word-match-when-strict-remove-all-${strict}.png`,
                );

                await comboboxTextfield.click();

                await expect(page).toHaveScreenshot(
                    `correct-word-match-when-strict-focused-2-${strict}.png`,
                );
            });
        });
    });
});

async function visitBy(page: Page, strict: boolean): Promise<void> {
    await tuiGoto(page, `components/combo-box/API?tuiMode=null&strict=${strict}`);
}

async function openFormValue(locator: Locator): Promise<void> {
    await locator.locator(`button span`).getByText(`Form value`).click();
}

async function focusWrapper(locator: Locator): Promise<void> {
    await locator.click({force: true});
}

async function waitCheckmark(page: Page): Promise<void> {
    await expect(page.getByTestId(`tui-select-option__checkmark`)).toBeVisible();
}

async function clickFirstOption(page: Page): Promise<void> {
    await expect(page.getByTestId(`tui-data-list-wrapper__option`).first()).toBeVisible();
    await page.getByTestId(`tui-data-list-wrapper__option`).first().click({force: true});
}
