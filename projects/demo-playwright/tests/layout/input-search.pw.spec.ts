import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('InputSearch', () => {
    test('opens', async ({page}) => {
        await tuiGoto(page, DemoRoute.InputSearch);

        const example = page.locator('#basic');
        const input = example.locator('input').first();

        await input.focus();

        await expect(example).toHaveScreenshot('01-input-search.png');
    });

    test('closes', async ({page}) => {
        await tuiGoto(page, DemoRoute.InputSearch);

        const example = page.locator('#basic');
        const input = example.locator('input').first();

        await input.focus();
        await page.locator('[tuiTheme="dark"].t-container').click();

        await expect(example).toHaveScreenshot('02-input-search.png');
    });
});
