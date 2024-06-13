import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('ActionBar', () => {
    test.use({
        viewport: {width: 1000, height: 720},
    });

    test('works', async ({page}) => {
        await tuiGoto(page, DemoRoute.ActionBar);
        const example = page.locator('#base');
        const showActionBarButton = example.locator('input').first();

        await showActionBarButton.click();
        const actionBarExample = page.locator('tui-action-bar');

        await expect(actionBarExample).toHaveScreenshot('01-actions-bar.png');
    });
});
