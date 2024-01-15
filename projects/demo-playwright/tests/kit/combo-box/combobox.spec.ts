import {TuiComboBoxPO, TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, Locator, Page, test} from '@playwright/test';

test.describe('ComboBox', () => {
    test.use({viewport: {width: 500, height: 500}});
    test("Don't allow disabled options to be selected by typing them", async ({page}) => {
        await tuiGoto(page, 'components/combo-box');

        const documentationPage = new TuiDocumentationPagePO(page);
        const example = documentationPage.getExample('#ignore-disabled');
        const input = example.locator('tui-combo-box input[tuiTextfield]');

        await example.scrollIntoViewIfNeeded();
        await input.click();
        await expect(page).toHaveScreenshot('01-combobox-dont-allow-disabled-01.png');

        await input.fill('Graham Chapman');
        await expect(page).toHaveScreenshot('01-combobox-dont-allow-disabled-02.png');

        await page.click('body');
        await expect(page).toHaveScreenshot('01-combobox-dont-allow-disabled-03.png');

        await input.click();
        await expect(page).toHaveScreenshot('01-combobox-dont-allow-disabled-04.png');
    });

    describe('API', () => {
        [true, false].forEach(strict => {
            test(`search shouldn't be reset if an exact match is entered when strict is ${strict}`, async ({
                page,
            }) => {
                const {apiPageExample} = new TuiDocumentationPagePO(page);

                const comboBoxPO = new TuiComboBoxPO(apiPageExample);
                const textfield = comboBoxPO.textfield.first();

                await visitBy(page, strict);
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-${strict}.png`,
                );

                await textfield.click();
                await page.keyboard.type('Rubles (500)');
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-waited-mark-${strict}.png`,
                );

                await comboBoxPO.selectOptions([0]);
                await focusWrapper(apiPageExample);
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-focused-${strict}.png`,
                );

                await textfield.click();
                await page.keyboard.press('Backspace');
                await focusWrapper(apiPageExample);
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-backspaced-${strict}.png`,
                );

                await textfield.click();
                await page.keyboard.press('Control+A');
                await page.keyboard.press('Backspace');
                await focusWrapper(apiPageExample);
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-remove-all-${strict}.png`,
                );
            });

            test(`correct word match when strict is ${strict}`, async ({page}) => {
                const {apiPageExample} = new TuiDocumentationPagePO(page);
                const comboBoxPO = new TuiComboBoxPO(apiPageExample);
                const textfield = comboBoxPO.textfield.first();

                await visitBy(page, strict);

                await textfield.click();
                await page.keyboard.type('dOlLaRs (237)');
                await expect(page).toHaveScreenshot(
                    `correct-word-match-when-strict-${strict}.png`,
                );

                await textfield.click();

                for (let i = 0; i < 4; i++) {
                    await page.keyboard.press('Backspace');
                }

                await expect(page).toHaveScreenshot(
                    `correct-word-match-when-strict-backspaced-${strict}.png`,
                );

                await focusWrapper(apiPageExample);

                await expect(page).toHaveScreenshot(
                    `correct-word-match-when-strict-focused-${strict}.png`,
                );

                await textfield.click();
                await page.keyboard.press('Control+A');
                await page.keyboard.press('Backspace');

                await expect(page).toHaveScreenshot(
                    `correct-word-match-when-strict-remove-all-${strict}.png`,
                );

                await textfield.click();

                await expect(page).toHaveScreenshot(
                    `correct-word-match-when-strict-focused-2-${strict}.png`,
                );
            });
        });
    });
});

async function visitBy(page: Page, strict: boolean): Promise<void> {
    await tuiGoto(page, `components/combo-box/API?strict=${strict}&sandboxExpanded=true`);
}

async function focusWrapper(locator: Locator): Promise<void> {
    await locator.click({force: true});
}
