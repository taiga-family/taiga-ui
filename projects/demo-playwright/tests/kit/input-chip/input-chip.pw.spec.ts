import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiInputChipPO} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

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
    });
});
