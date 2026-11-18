import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Reorder', () => {
    test('hides the action after mouse click but keeps it visible for keyboard focus', async ({
        page,
    }) => {
        await tuiGoto(page, DemoRoute.ReorderColumns);

        const button = page.locator('tui-doc-example tui-reorder .t-button').first();

        await button.click(); // Hide the item
        await button.click(); // Show it again
        await page.mouse.move(0, 0);

        await expect(button).toBeFocused();
        await expect(button).toHaveCSS('opacity', '0');

        await page.keyboard.press('Tab');
        await page.keyboard.press('Shift+Tab');

        await expect(button).toBeFocused();
        await expect(button).toHaveCSS('opacity', '1');
    });
});
