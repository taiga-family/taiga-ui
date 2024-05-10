import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test('has title', async ({page}) => {
    await tuiGoto(page, '/getting-started');

    await expect(page).toHaveTitle(/Taiga UI.*Getting started/);
});

test('debug screenshot', async ({page}) => {
    await tuiGoto(page, '/components/mobile-calendar');

    await page
        .locator('[heading="Custom dropdown"] button:has-text("Choose a date")')
        .click();

    await expect(page.locator('tui-dialog tui-mobile-calendar')).toHaveScreenshot(
        'test-playwright-screenshot.png',
    );
});
