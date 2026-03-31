import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationApiPagePO,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputChipPO,
    TuiMultiSelectPO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

test.describe('InputChip', () => {
    test.describe('Examples', () => {
        test.beforeEach(async ({page}) => tuiGoto(page, DemoRoute.InputChip));

        test('errors / overflow visual state (basic)', async ({page}) => {
            const doc = new TuiDocumentationPagePO(page);
            const basic = doc.getExample('#basic');

            const chip = new TuiInputChipPO(basic);

            await chip.addChip('Very looooooooooooooooooooooooong Text');

            await expect.soft(basic).toHaveScreenshot('01-input-chip-basic.png');

            await chip.addChip('1');
            await chip.addChip('2');

            await expect.soft(basic).toHaveScreenshot('02-input-chip-basic-multi.png');
        });

        test('forbid leading/trailing spaces normalization', async ({page}) => {
            const doc = new TuiDocumentationPagePO(page);
            const basic = doc.getExample('#basic');

            const chip = new TuiInputChipPO(basic);

            await chip.addChip(' taiga ui library ');

            await expect.soft(basic).toHaveScreenshot('05-input-chip-trimmed.png');
        });

        test('regex separator works when copying values from spreadsheet (tab)', async ({
            page,
        }) => {
            const doc = new TuiDocumentationPagePO(page);
            const basic = doc.getExample('#basic');

            const chip = new TuiInputChipPO(basic);

            await chip.cleaner.click();
            await chip.addChip('repo\ttest\tseparator');

            await expect.soft(basic).toHaveScreenshot('input-chip-basic-separator.png');
        });

        test('regex separator works when copying values with newline', async ({page}) => {
            const doc = new TuiDocumentationPagePO(page);
            const basic = doc.getExample('#basic');

            const chip = new TuiInputChipPO(basic);

            await chip.cleaner.click();
            await chip.addChip('repo\ntest\nseparator');

            await expect.soft(basic).toHaveScreenshot('input-chip-basic-separator-2.png');
        });

        test('editing disabled chip', async ({page}) => {
            const doc = new TuiDocumentationPagePO(page);
            const example = doc.getExample('#disabled-items');

            const chip = new TuiInputChipPO(example);

            await chip.chips.first().dblclick();

            await expect.soft(example).toHaveScreenshot('input-chip-disabled-2.png');
        });

        test('multiselect with *ngIf input keeps dropdown behavior after toggling mode', async ({
            page,
        }) => {
            const doc = new TuiDocumentationPagePO(page);
            const example = doc.getExample('#multi-select');
            const block = example.locator('[tuiLabel]', {
                hasText: 'Conditional input in textfield',
            });
            const input = block.locator('tui-textfield input[tuiInputChip]');
            const toggle = example.locator('input[type="checkbox"]');
            const dropdown = page.locator('tui-dropdown');

            await block.scrollIntoViewIfNeeded();

            const checkDropdown = async (): Promise<void> => {
                for (let i = 0; i < 5; i++) {
                    await input.click();
                    await expect(dropdown).toBeAttached();
                    await input.blur();
                    await expect(dropdown).toBeHidden();
                }
            };

            await checkDropdown();
            await toggle.click();
            await checkDropdown();
        });
    });

    test.describe('API', () => {
        test('custom separator', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputChip}/API?separator=-`);
            const example = new TuiDocumentationApiPagePO(page).demo;

            const inputChip = new TuiInputChipPO(example);

            await inputChip.input.fill('123-456-789');
            await inputChip.input.blur();
            const chipCount = inputChip.chips;

            await expect(chipCount).toHaveCount(3);

            await expect.soft(example).toHaveScreenshot('input-chip-separator.png');
        });

        test('unique false', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputChip}/API?unique=false`);
            const example = new TuiDocumentationApiPagePO(page).demo;

            const inputChip = new TuiInputChipPO(example);

            await inputChip.input.fill('123,123,123');
            await inputChip.input.blur();
            const chipCount = inputChip.chips;

            await expect(chipCount).toHaveCount(3);

            await expect.soft(example).toHaveScreenshot('input-chip-not-unique.png');
        });

        test('unique true', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputChip}/API?unique=true`);
            const example = new TuiDocumentationApiPagePO(page).demo;

            const inputChip = new TuiInputChipPO(example);

            await inputChip.input.fill('123,123,123');
            await inputChip.input.blur();
            const chipCount = inputChip.chips;

            await expect(chipCount).toHaveCount(1);

            await expect.soft(example).toHaveScreenshot('input-chip-unique.png');
        });

        test('disable control', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputChip}/API`);

            const api = new TuiDocumentationApiPagePO(page);
            const inputChip = new TuiInputChipPO(api.demo);
            const toggle = await api.getToggle(api.getRow('disabled'));

            await inputChip.input.fill('1,2,3');
            await inputChip.input.blur();
            await expect(inputChip.cleaner).toHaveCount(1);
            await expect.soft(api.demo).toHaveScreenshot('input-chip-writable.png');
            await toggle?.click();
            await expect(inputChip.cleaner).toHaveCount(0);
            await expect.soft(api.demo).toHaveScreenshot('input-chip-disabled.png');
        });

        test('readonly true', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputChip}/API`);
            const apiPage = new TuiDocumentationApiPagePO(page);
            const example = apiPage.demo;

            const inputChip = new TuiInputChipPO(example);

            await inputChip.input.fill('123');
            await inputChip.input.blur();

            const toggle = await apiPage.getToggle(apiPage.getRow('readOnly'));

            await toggle?.click();

            await inputChip.chips.first().hover();

            await expect.soft(example).toHaveScreenshot('input-chip-readonly-hover.png');
        });

        test('chip cleaner', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputChip}/API`);
            const example = new TuiDocumentationApiPagePO(page).demo;

            const inputChip = new TuiInputChipPO(example);

            await inputChip.input.fill('123,456,789');
            await inputChip.input.blur();
            const chips = inputChip.chips;

            await expect(chips).toHaveCount(3);

            await chips.first().locator('button', {hasText: 'Remove'}).click();

            await expect(chips).toHaveCount(2);

            await expect.soft(example).toHaveScreenshot('input-chip-cleaner.png');
        });

        test('textfield cleaner', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputChip}/API`);
            const example = new TuiDocumentationApiPagePO(page).demo;

            const inputChip = new TuiInputChipPO(example);

            await inputChip.input.fill('123,456,789');
            await inputChip.input.blur();

            await inputChip.cleaner.click();

            await expect(inputChip.chips).toHaveCount(0);

            await expect
                .soft(example)
                .toHaveScreenshot('input-chip-textfield-cleaner.png');
        });
    });

    test.describe('Multiselect', () => {
        let example: Locator;

        test.beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.InputChip);
            const doc = new TuiDocumentationPagePO(page);

            example = doc.getExample('#multi-select');
            await example.scrollIntoViewIfNeeded();
        });

        test.describe('dropdown', () => {
            test('any value', async () => {
                const multiselect = new TuiMultiSelectPO(example);

                await multiselect.input.fill('eric');
                await expect(multiselect.dropdown).toBeAttached();
                await expect.soft(example).toHaveScreenshot('multiselect-any-value.png');
                await multiselect.input.blur();

                await expect(multiselect.chips).toHaveCount(1);
            });

            test('value from list only', async () => {
                const block = example.locator('label[tuiLabel]').filter({
                    hasText:
                        'Only allowing items from the list and hiding values when not focused behind a custom content',
                });
                const multiselect = new TuiMultiSelectPO(block);

                await multiselect.input.fill('eric');
                await expect(multiselect.dropdown).toBeAttached();
                await expect
                    .soft(example)
                    .toHaveScreenshot('multiselect-value-from-list.png');
                await multiselect.input.blur();

                await expect(multiselect.chips).toHaveCount(0);
            });

            test('select value from list', async () => {
                const block = example.locator('label[tuiLabel]').filter({
                    hasText:
                        'Only allowing items from the list and hiding values when not focused behind a custom content',
                });
                const multiselect = new TuiMultiSelectPO(block);

                await multiselect.input.fill('eric');
                await expect(multiselect.dropdown).toBeAttached();
                const options = multiselect.dropdown.locator('[tuiOption]');

                await options.nth(0).click();
                await options.nth(1).click();
                await expect
                    .soft(example)
                    .toHaveScreenshot('multiselect-select-values-from-list.png');
            });

            test('checkboxes', async () => {
                const block = example.locator('label[tuiLabel]').filter({
                    hasText:
                        'Using checkboxes in the dropdown and making the textfield non-writable',
                });
                const multiselect = new TuiMultiSelectPO(block);

                await block.locator('tui-textfield').click();
                await expect(multiselect.dropdown).toBeAttached();
                const options = multiselect.dropdown.locator('[tuiOption]');

                await options.nth(0).click();
                await options.nth(1).click();
                await expect
                    .soft(example)
                    .toHaveScreenshot('multiselect-select-checkboxes.png');
            });

            test('working with objects', async () => {
                const block = example
                    .locator('label[tuiLabel]')
                    .filter({hasText: 'Working with objects'});
                const multiselect = new TuiMultiSelectPO(block);

                await example.scrollIntoViewIfNeeded();
                await block.locator('tui-textfield').click();
                await expect(multiselect.dropdown).toBeAttached();

                await multiselect.dropdown
                    .getByRole('button', {name: 'Select all'})
                    .first()
                    .click();

                await expect(multiselect.dropdown).toBeAttached();
                await expect
                    .soft(example)
                    .toHaveScreenshot('multiselect-select-objects.png');
            });
        });
    });
});
