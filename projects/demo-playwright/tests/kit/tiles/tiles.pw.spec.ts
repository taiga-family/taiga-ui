import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Tiles', () => {
    test('correctly loose box shadow after dragged', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Tiles}#vertical`);

        const example = new TuiDocumentationPagePO(page).getExample('#vertical');
        const drag = example.locator('tui-tile').first();
        const drop = example.locator('tui-tile').last();

        await expect(example).toHaveScreenshot('01-tiles-drag-and-drop.png');

        // Dragging manually (dragTo is flaky method)
        await drag.hover();
        await page.mouse.down();
        await drop.hover();
        await page.mouse.up();

        await page.mouse.click(100, 100); // clear focus

        await expect(example).toHaveScreenshot('02-tiles-drag-and-drop.png');
    });
});
