import {expect, test} from '@playwright/test';

test(`screen inside nested folder`, async ({page}) => {
    await page.goto(`/components/mobile-calendar`);

    await expect(page.locator(`tui-mobile-calendar-example-1`)).toHaveScreenshot(
        `button-screen.png`,
    );
});
