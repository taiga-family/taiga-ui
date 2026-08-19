import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('BlockDetails', () => {
    test.use({viewport: {width: 864, height: 768}});

    test('centers content inside responsive dialog', async ({page}) => {
        await tuiGoto(page, DemoRoute.BlockDetails);
        await page.getByRole('button', {name: 'Show dialog'}).click();

        await expect.soft(page).toHaveScreenshot('01-block-details-dialog.png');
    });
});
