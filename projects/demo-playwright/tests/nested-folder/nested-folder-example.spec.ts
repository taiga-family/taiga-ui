import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test('screen inside nested folder', async ({page}) => {
    await tuiGoto(page, '/components/mobile-calendar');

    await expect(
        page.locator('[heading="Custom dropdown"] .t-content').first(),
    ).toHaveScreenshot('button-screen.png');
});
