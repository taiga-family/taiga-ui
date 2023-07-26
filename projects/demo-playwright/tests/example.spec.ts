import {expect, test} from '@playwright/test';

test(`has title`, async ({page}) => {
    await page.goto(`/getting-started`);

    await expect(page).toHaveTitle(`Taiga UI: Getting started`);
});

test(`debug screenshot`, async ({page}) => {
    await page.goto(`/components/mobile-calendar`);

    await page.locator(`tui-mobile-calendar-example-1 button`).click();

    await expect(page.locator(`tui-dialog tui-mobile-calendar`)).toHaveScreenshot(
        `test-playwright-screenshot.png`,
    );
});
