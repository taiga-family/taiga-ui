import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('AlertService', () => {
    test.use({
        viewport: {width: 720, height: 720},
    });

    test('is shown correctly', async ({page}) => {
        await tuiGoto(page, DemoRoute.Alert);
        const example = page.locator('#text');
        const showAlertButton = example.locator('button:has-text("Show")').first();

        await showAlertButton.click();

        await expect(page.locator('tui-alert')).toHaveScreenshot('01-alert.png');
    });
});
