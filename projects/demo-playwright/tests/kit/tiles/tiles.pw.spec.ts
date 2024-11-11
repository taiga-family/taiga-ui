import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Tiles', () => {
    test('correctly loose box shadow after dragged', async ({page}) => {
        await tuiGoto(page, '/components/tiles#vertical');

        const example = new TuiDocumentationPagePO(page).getExample('#vertical');
        const first = example.locator('tui-tile').first();
        const last = example.locator('tui-tile').last();

        await expect(example).toHaveScreenshot('01-tiles-drag-and-drop.png');

        await first.dragTo(last);

        await expect(example).toHaveScreenshot('02-tiles-drag-and-drop.png');
    });
});
