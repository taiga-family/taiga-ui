import {DemoRoute} from '@demo/routes';
import {TuiDocumentationApiPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

test.describe('ActionBar', () => {
    test.use(TUI_PLAYWRIGHT_MOBILE);

    test('works', async ({page}) => {
        await tuiGoto(page, DemoRoute.ActionBar);

        const api = new TuiDocumentationApiPagePO(page);
        const example = page.locator('#size--m');
        const showActionBarButton = example.locator('label').first();

        await showActionBarButton.click();
        const actionBarExample = page.locator('tui-action-bar');

        await api.hideContent();
        await api.prepareBeforeScreenshot();

        await expect(actionBarExample).toHaveScreenshot('01-actions-bar-mobile.png');

        const more = actionBarExample.locator('button:has-text("More")');

        await more.click();

        await api.hideContent();
        await api.prepareBeforeScreenshot();

        await expect(actionBarExample).toHaveScreenshot(
            '01-action-bar-mobile-expanded.png',
        );
    });
});
