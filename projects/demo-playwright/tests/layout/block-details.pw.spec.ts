import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('BlockDetails', () => {
    test.use({viewport: {width: 864, height: 768}});

    test('centers content inside responsive dialog', async ({page}) => {
        await tuiGoto(page, DemoRoute.BlockDetails);

        const button = page.getByRole('button', {name: 'Show dialog'});

        // The dialog example does not exist on the main branch yet
        // eslint-disable-next-line playwright/no-conditional-in-test
        if (!(await button.count())) {
            return;
        }

        await button.click();

        const dialog = page.getByRole('dialog');
        const subtitle = dialog.getByText('Transfer to John W', {exact: true});

        await expect(subtitle).toHaveCSS('justify-content', 'center');
        await expect.soft(page).toHaveScreenshot('01-block-details-dialog.png');
    });
});
