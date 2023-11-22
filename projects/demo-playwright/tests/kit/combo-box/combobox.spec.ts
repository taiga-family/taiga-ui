import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, Locator, Page, test} from '@playwright/test';

const {describe} = test;

test.use({testIdAttribute: `automation-id`});

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

                await visitBy(page, strict);
                await openFormValue(apiPageExample);
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-${strict}.png`,
                );

                await getInput(apiPageExample).fill(`Rubles (500)`);
                await waitCheckmark(page);
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-waited-mark-${strict}.png`,
                );

                await clickFirstOption(page);
                await focusWrapper(apiPageExample);
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-focused-${strict}.png`,
                );

                await getInput(apiPageExample).fill(`{backspace}`);
                await focusWrapper(apiPageExample);
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-backspaced-${strict}.png`,
                );

                await getInput(apiPageExample).fill(`{selectall}{backspace}`);
                await focusWrapper(apiPageExample);
                await expect(page).toHaveScreenshot(
                    `search-should-not-be-reset-strict-remove-all-${strict}.png`,
                );
            });

            test(`correct word match when strict is ${strict}`, async ({page}) => {
                const {apiPageExample} = new TuiDocumentationPagePO(page);

                await visitBy(page, strict);
                await openFormValue(apiPageExample);

                await getInput(apiPageExample).fill(`dOlLaRs (237)`, {});
                await waitCheckmark(page);
                await expect(page).toHaveScreenshot(
                    `correct-word-match-when-strict-${strict}.png`,
                );

                await getInput(apiPageExample).fill(`{backspace}`, {force: true});

                await page.waitForTimeout(200);

                await getInput(apiPageExample).fill(`{backspace}`, {force: true});

                await page.waitForTimeout(200);

                await getInput(apiPageExample).fill(`{backspace}`, {force: true});

                await page.waitForTimeout(200);

                await getInput(apiPageExample).fill(`{backspace}`, {force: true});

                await expect(page).toHaveScreenshot(
                    `correct-word-match-when-strict-backspaced-${strict}.png`,
                );

                await focusWrapper(apiPageExample);

                await expect(page).toHaveScreenshot(
                    `correct-word-match-when-strict-focused-${strict}.png`,
                );

                await getInput(apiPageExample).fill(`{selectall}{backspace}`, {
                    force: true,
                });

                await expect(page).toHaveScreenshot(
                    `correct-word-match-when-strict-remove-all-${strict}.png`,
                );

                await focusWrapper(apiPageExample);

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

function getInput(locator: Locator): Locator {
    return locator
        .getByTestId(`tui-combo-box__textfield`)
        .getByTestId(`tui-primitive-textfield__native-input`);
}

async function waitCheckmark(page: Page): Promise<void> {
    await expect(page.getByTestId(`tui-select-option__checkmark`)).toBeVisible();
}

async function clickFirstOption(page: Page): Promise<void> {
    await expect(page.getByTestId(`tui-data-list-wrapper__option`)).toBeVisible();
    await page.getByTestId(`tui-data-list-wrapper__option`).click({force: true});
}
