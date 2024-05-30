import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {
    TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
    TUI_PLAYWRIGHT_MOBILE_VIEWPORT_HEIGHT,
    TUI_PLAYWRIGHT_MOBILE_VIEWPORT_WIDTH,
} from '../../../playwright.options';

test.describe('ActionsBar', () => {
    test.use({
        viewport: {
            width: TUI_PLAYWRIGHT_MOBILE_VIEWPORT_WIDTH,
            height: TUI_PLAYWRIGHT_MOBILE_VIEWPORT_HEIGHT,
        },
        userAgent: TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
    });

    test('works', async ({page}) => {
        await tuiGoto(page, '/components/actions-bar');
        const example = page.locator('#base');
        const showActionsBarButton = example.locator('input').first();

        await showActionsBarButton.click();
        const actionsBarExample = page.locator('tui-actions-bar');

        await expect(actionsBarExample).toHaveScreenshot('01-actions-bar-mobile.png');

        const more = actionsBarExample.locator('button:has-text("More")');

        await more.click();
        await expect(actionsBarExample).toHaveScreenshot(
            '02-actions-bar-mobile-expanded.png',
        );
    });
});
