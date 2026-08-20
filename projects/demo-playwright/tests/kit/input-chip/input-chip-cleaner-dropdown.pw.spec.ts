import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiMultiSelectPO,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('MultiSelect cleaner dropdown (#13572)', () => {
    test('keeps the dropdown open after clearing selected values', async ({page}) => {
        await tuiGoto(page, DemoRoute.InputChip);

        const documentation = new TuiDocumentationPagePO(page);
        const example = documentation.getExample('#multi-select');
        const multiselect = new TuiMultiSelectPO(example);

        await example.scrollIntoViewIfNeeded();
        await multiselect.input.fill('eric');
        await expect(multiselect.dropdown).toBeAttached();
        await multiselect.input.blur();
        await expect(multiselect.chips).toHaveCount(1);

        await multiselect.input.click();
        await expect(multiselect.dropdown).toBeAttached();

        await multiselect.cleaner.click();

        await expect(multiselect.chips).toHaveCount(0);
        await expect(multiselect.dropdown).toBeAttached();
    });
});
