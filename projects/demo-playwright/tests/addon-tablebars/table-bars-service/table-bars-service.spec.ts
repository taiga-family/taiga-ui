import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('TableBars', () => {
    test.use({
        viewport: {width: 1000, height: 720},
    });

    test('works', async ({page}) => {
        await tuiGoto(page, '/components/table-bar');
        const example = page.locator('#base');
        const showTableBarButton = example.locator('input').first();

        await showTableBarButton.click();
        const tableBarExample = page.locator('tui-table-bar');

        await expect(tableBarExample).toHaveScreenshot('01-table-bar.png');
    });
});
