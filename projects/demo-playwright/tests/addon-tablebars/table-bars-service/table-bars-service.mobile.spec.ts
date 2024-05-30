import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {
    TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
    TUI_PLAYWRIGHT_MOBILE_VIEWPORT_HEIGHT,
    TUI_PLAYWRIGHT_MOBILE_VIEWPORT_WIDTH,
} from '../../../playwright.options';

test.describe('TableBars', () => {
    test.use({
        viewport: {
            width: TUI_PLAYWRIGHT_MOBILE_VIEWPORT_WIDTH,
            height: TUI_PLAYWRIGHT_MOBILE_VIEWPORT_HEIGHT,
        },
        userAgent: TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
    });

    test('works', async ({page}) => {
        await tuiGoto(page, '/components/table-bar');
        const example = page.locator('#base');
        const showTableBarButton = example.locator('input').first();

        await showTableBarButton.click();
        const tableBarExample = page.locator('tui-table-bar');

        await expect(tableBarExample).toHaveScreenshot('01-table-bars-mobile.png');

        const more = tableBarExample.locator('button:has-text("More")');

        await more.click();
        await expect(tableBarExample).toHaveScreenshot(
            '02-table-bars-mobile-expanded.png',
        );
    });
});
