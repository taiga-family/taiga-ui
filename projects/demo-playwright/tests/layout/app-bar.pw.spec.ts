import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('AppBar', () => {
    test.use({viewport: {width: 1000, height: 720}});

    test('desktop appbar inside dialog', async ({page}) => {
        await tuiGoto(page, DemoRoute.AppBar);

        const example = page.locator('#dialog');
        const button = example.locator('button[tuiButton]').last();

        await button.click();

        await expect.soft(page).toHaveScreenshot('01-app-bar.png');
    });

    test.describe('iOS', () => {
        test.use({viewport: {width: 375, height: 720}});

        test('mobile appbar inside dialog', async ({page}) => {
            await page.addInitScript(() =>
                globalThis.localStorage.setItem('tuiPlatform', 'ios'),
            );

            await tuiGoto(page, DemoRoute.AppBar);

            const example = page.locator('#dialog');
            const button = example.locator('button[tuiButton]').last();

            await button.click();

            await expect.soft(page).toHaveScreenshot('02-app-bar-ios.png');
        });
    });
});
