import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationApiPagePO,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputChipPO,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('InputChip', () => {
    test.describe('Examples', () => {
        test.beforeEach(async ({page}) => tuiGoto(page, DemoRoute.InputChip));

        test('forbid leading/trailing spaces normalization', async ({page}) => {
            const doc = new TuiDocumentationPagePO(page);
            const basic = doc.getExample('#basic');

            const chip = new TuiInputChipPO(basic);

            await chip.addChip(' taiga ui library ');

            await expect.soft(basic).toHaveScreenshot('05-input-chip-trimmed.png');
        });
    });

    test.describe('API', () => {
        test('custom separator', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputChip}/API?separator=-`);
            const example = new TuiDocumentationApiPagePO(page).apiPageExample;

            const inputChip = new TuiInputChipPO(example);

            await inputChip.input.fill('123-456-789');
            await inputChip.input.blur();
            const chipCount = await inputChip.chips.count();

            expect(chipCount).toEqual(3);

            await expect.soft(example).toHaveScreenshot('input-chip-separator.png');
        });

        test('unique false', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputChip}/API?unique=false`);
            const example = new TuiDocumentationApiPagePO(page).apiPageExample;

            const inputChip = new TuiInputChipPO(example);

            await inputChip.input.fill('123,123,123');
            await inputChip.input.blur();
            const chipCount = await inputChip.chips.count();

            expect(chipCount).toEqual(3);

            await expect.soft(example).toHaveScreenshot('input-chip-not-unique.png');
        });

        test('unique true', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputChip}/API?unique=true`);
            const example = new TuiDocumentationApiPagePO(page).apiPageExample;

            const inputChip = new TuiInputChipPO(example);

            await inputChip.input.fill('123,123,123');
            await inputChip.input.blur();
            const chipCount = await inputChip.chips.count();

            expect(chipCount).toEqual(1);

            await expect.soft(example).toHaveScreenshot('input-chip-unique.png');
        });

        test('readonly true', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputChip}/API`);
            const apiPage = new TuiDocumentationApiPagePO(page);
            const example = apiPage.apiPageExample;

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
            const example = new TuiDocumentationApiPagePO(page).apiPageExample;

            const inputChip = new TuiInputChipPO(example);

            await inputChip.input.fill('123,456,789');
            await inputChip.input.blur();
            const chips = inputChip.chips;

            expect(await chips.count()).toEqual(3);

            await chips.first().locator('button', {hasText: 'Remove'}).click();

            expect(await chips.count()).toEqual(2);

            await expect.soft(example).toHaveScreenshot('input-chip-cleaner.png');
        });

        test('textfield cleaner', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputChip}/API`);
            const example = new TuiDocumentationApiPagePO(page).apiPageExample;

            const inputChip = new TuiInputChipPO(example);

            await inputChip.input.fill('123,456,789');
            await inputChip.input.blur();

            await inputChip.cleaner.click();

            expect(await inputChip.chips.count()).toEqual(0);

            await expect
                .soft(example)
                .toHaveScreenshot('input-chip-textfield-cleaner.png');
        });
    });
});
