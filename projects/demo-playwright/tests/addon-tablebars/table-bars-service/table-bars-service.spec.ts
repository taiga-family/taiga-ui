import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('TableBarsService', () => {
    test.use({
        viewport: {width: 1000, height: 720},
    });

    test('works', async ({page}) => {
        await tuiGoto(page, '/services/table-bars-service');
        const example = page.locator('#base');
        const showTableBarButton = example.locator('button:has-text("Show TableBar")');

        await showTableBarButton.click();
        const tableBarExample = page.getByTestId('tui-table-bar__bar');

        await expect(tableBarExample).toHaveScreenshot('01-table-bars-service.png');
    });
});
