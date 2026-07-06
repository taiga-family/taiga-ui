import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('ActionBar', () => {
    test.use({viewport: {width: 1000, height: 720}});

    test('works', async ({page}) => {
        await tuiGoto(page, DemoRoute.ActionBar);

        const api = new TuiDocumentationPagePO(page);
        const example = api.getExample('#size--m');
        const showActionBarButton = example.locator('label').first();

        await showActionBarButton.click();
        const actionBarExample = page.locator('tui-action-bar');

        await api.hideContent();
        await api.prepareBeforeScreenshot();

        await expect.soft(actionBarExample).toHaveScreenshot('01-actions-bar.png');
    });

    test('should show on top', async ({page}) => {
        await tuiGoto(page, DemoRoute.ActionBar);

        const api = new TuiDocumentationPagePO(page);
        const example = api.getExample('#top-position');
        const showActionBarButton = example.locator('button').first();

        await showActionBarButton.click();
        const actionBarExample = page.locator('tui-action-bar');

        await api.hideContent();
        await api.prepareBeforeScreenshot();

        await expect.soft(actionBarExample).toHaveScreenshot('02-actions-bar.png');
    });

    test('opens and closes without', async ({page}) => {
        await tuiGoto(page, DemoRoute.ActionBar);

        const api = new TuiDocumentationPagePO(page);
        const example = api.getExample('#size--s');
        const showActionBarButton = example.locator('button').first();

        await showActionBarButton.click();
        const actionBarExample = page.locator('tui-action-bar');

        await api.hideContent();
        await api.prepareBeforeScreenshot();

        await expect.soft(actionBarExample).toHaveScreenshot('03-actions-bar.png');

        await actionBarExample.locator('button').first().click();

        await expect(actionBarExample).toBeHidden();
    });
});
