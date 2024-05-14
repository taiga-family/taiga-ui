import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {
    TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
    TUI_PLAYWRIGHT_MOBILE_VIEWPORT_HEIGHT,
    TUI_PLAYWRIGHT_MOBILE_VIEWPORT_WIDTH,
} from '../../../playwright.options';

test.describe('TableBarsService', () => {
    test.use({
        viewport: {
            width: TUI_PLAYWRIGHT_MOBILE_VIEWPORT_WIDTH,
            height: TUI_PLAYWRIGHT_MOBILE_VIEWPORT_HEIGHT,
        },
        userAgent: TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
    });

    test('works', async ({page}) => {
        await tuiGoto(page, '/services/table-bars-service');
        const example = page.locator('#base');
        const showTableBarButton = example.locator('button:has-text("Show TableBar")');

        await showTableBarButton.click();
        const tableBarExample = page.getByTestId('tui-table-bar__bar');

        await expect(tableBarExample).toHaveScreenshot(
            '01-table-bars-mobile-service.png',
        );
    });
});
