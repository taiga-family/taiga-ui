import {DemoRoute} from '@demo/routes';
import {TuiDocumentationApiPagePO, tuiGoto, TuiInputChipPO} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('InputChip cleaner dropdown', () => {
    test('keeps the dropdown open after clearing all chips', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.InputChip}/API`);

        const example = new TuiDocumentationApiPagePO(page).demo;
        const inputChip = new TuiInputChipPO(example);

        await inputChip.input.fill('123,456,789');
        await inputChip.input.blur();
        await inputChip.input.click();
        await expect(inputChip.dropdown).toBeVisible();

        await inputChip.cleaner.click();

        await expect(inputChip.chips).toHaveCount(0);
        await expect(inputChip.dropdown).toBeVisible();
    });
});
