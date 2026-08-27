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

    test.describe('desktop large size', () => {
        test.beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.AppBar);
        });

        test('leading icon is 16x16', async ({page}) => {
            const button = page
                .locator('#desktop-—-large-size tui-app-bar button[tuiButton]')
                .first();

            await expect
                .poll(async () =>
                    button.evaluate(
                        (element) => getComputedStyle(element, '::before').fontSize,
                    ),
                )
                .toBe('16px');
        });

        test('trailing icon keeps its size', async ({page}) => {
            const button = page.locator(
                '#desktop-—-large-size button[tuiIconButton][iconStart="@tui.x"]',
            );

            await expect
                .poll(async () =>
                    button.evaluate(
                        (element) => getComputedStyle(element, '::before').fontSize,
                    ),
                )
                .toBe('24px');
        });

        test('small leading icon button is flush with the app bar', async ({page}) => {
            const example = page.locator('#desktop-—-large-size');
            const button = example.locator('button[tuiIconButton][data-size="s"]');
            const appBar = example.locator(
                'tui-app-bar:has(button[tuiIconButton][data-size="s"])',
            );

            const appBarBox = (await appBar.boundingBox())!;
            const buttonBox = (await button.boundingBox())!;
            const iconSize = await button.evaluate((element) =>
                Number.parseFloat(getComputedStyle(element, '::before').fontSize),
            );

            expect(buttonBox.x + (buttonBox.width - iconSize) / 2).toBeCloseTo(
                appBarBox.x,
                0,
            );
        });
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
