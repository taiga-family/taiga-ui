import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

const {describe} = test;

describe('ComboBox', () => {
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
});
