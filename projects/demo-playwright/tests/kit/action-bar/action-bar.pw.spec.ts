import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('ActionBar', () => {
    test.use({
        viewport: {width: 1000, height: 720},
    });

    test('works', async ({page}) => {
        await tuiGoto(page, DemoRoute.ActionBar);
        const example = page.locator('#size--m');
        const showActionBarButton = example.locator('label').first();

        await showActionBarButton.click();
        const actionBarExample = page.locator('tui-action-bar');

        await expect(actionBarExample).toHaveScreenshot('01-actions-bar.png');
    });

    test('should show on top', async ({page}) => {
        await tuiGoto(page, DemoRoute.ActionBar);
        const example = page.locator('#top-position');
        const showActionBarButton = example.getByTestId('open-table-bar-on-top').first();

        await showActionBarButton.click();
        const actionBarExample = page.locator('tui-action-bar');

        await expect(actionBarExample).toHaveScreenshot('02-actions-bar.png');
    });
});
