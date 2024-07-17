import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {
    TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
    TUI_PLAYWRIGHT_MOBILE_VIEWPORT_HEIGHT,
    TUI_PLAYWRIGHT_MOBILE_VIEWPORT_WIDTH,
} from '../../../playwright.options';

test.describe('ActionBar', () => {
    test.use({
        viewport: {
            width: TUI_PLAYWRIGHT_MOBILE_VIEWPORT_WIDTH,
            height: TUI_PLAYWRIGHT_MOBILE_VIEWPORT_HEIGHT,
        },
        userAgent: TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
    });

    test('works', async ({page}) => {
        await tuiGoto(page, DemoRoute.ActionBar);
        const example = page.locator('#base');
        const showActionBarButton = example.locator('label').first();

        await showActionBarButton.click();
        const actionBarExample = page.locator('tui-action-bar');

        await expect(actionBarExample).toHaveScreenshot('01-actions-bar-mobile.png');

        const more = actionBarExample.locator('button:has-text("More")');

        await more.click();
        await expect(actionBarExample).toHaveScreenshot(
            '01-action-bar-mobile-expanded.png',
        );
    });
});
