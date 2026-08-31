import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiInputChipPO} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';
import {TUI_DROPDOWN_LOCATORS} from '@taiga-ui/testing/locators';

const {beforeEach, describe} = test;

describe('InputChip with Datalist (a.k.a MultiSelect) + FilterByInput pipe', () => {
    let example: Locator;
    let inputChip: TuiInputChipPO;

    beforeEach(async ({page}) => {
        await tuiGoto(page, DemoRoute.FilterByInput);

        example = new TuiDocumentationPagePO(page).getExample('#multiselect');
        inputChip = new TuiInputChipPO(example);
    });

    test('all items are visible for empty textfield', async () => {
        await inputChip.input.click();

        await expect(inputChip.dropdown).toBeVisible();
        await expect(
            inputChip.dropdown.locator(TUI_DROPDOWN_LOCATORS.OPTION),
        ).toHaveCount(6);
    });

    test('filter works', async () => {
        await inputChip.input.click();
        await inputChip.input.fill('solo');

        await expect(inputChip.dropdown).toBeVisible();
        await expect(
            inputChip.dropdown.locator(TUI_DROPDOWN_LOCATORS.OPTION),
        ).toHaveCount(2);
        await expect(inputChip.dropdown).toContainText('Leia Organa Solo');
        await expect(inputChip.dropdown).toContainText('Han Solo');
    });

    test('keeps filtering even on exact item match', async () => {
        await inputChip.input.click();
        await inputChip.input.fill('Yoda');

        await expect(inputChip.dropdown).toBeVisible();
        await expect(
            inputChip.dropdown.locator(TUI_DROPDOWN_LOCATORS.OPTION),
        ).toHaveCount(1);
        await expect(inputChip.dropdown).toHaveText('Yoda');
    });
});
