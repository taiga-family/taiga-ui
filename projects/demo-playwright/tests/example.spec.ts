import {expect, test} from '@playwright/test';

import {tuiGoto} from '../utils';

test(`has title`, async ({page}) => {
    await tuiGoto(page, `/getting-started`);

    await expect(page).toHaveTitle(/Taiga UI.*Getting started/);
});

test(`debug screenshot`, async ({page}) => {
    await tuiGoto(page, `/components/mobile-calendar`);

    await page.locator(`tui-mobile-calendar-example-1 button`).click();

    await expect(page.locator(`tui-dialog tui-mobile-calendar`)).toHaveScreenshot(
        `test-playwright-screenshot.png`,
    );
});
