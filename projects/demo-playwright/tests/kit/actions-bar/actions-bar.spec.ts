import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('ActionsBar', () => {
    test.use({
        viewport: {width: 1000, height: 720},
    });

    test('works', async ({page}) => {
        await tuiGoto(page, '/components/actions-bar');
        const example = page.locator('#base');
        const showActionsBarButton = example.locator('input').first();

        await showActionsBarButton.click();
        const actionsBarExample = page.locator('tui-actions-bar');

        await expect(actionsBarExample).toHaveScreenshot('01-actions-bar.png');
    });
});
