import {DemoRoute} from '@demo/routes';
import {TuiDocumentationApiPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('InputChip', () => {
    test('remove chips by backspace', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.InputChip}/API`);

        const example = new TuiDocumentationApiPagePO(page).apiPageExample;
        const input = example.locator('[tuiInputChip]');

        await input.focus();
        await input.fill('1');
        await page.keyboard.press('Enter');
        await input.fill('2');
        await page.keyboard.press('Enter');
        await input.fill('3');
        await page.keyboard.press('Enter');
        await expect.soft(example).toHaveScreenshot();

        await page.keyboard.press('Backspace');
        await expect.soft(example).toHaveScreenshot();

        await page.keyboard.press('Backspace');
        await expect.soft(example).toHaveScreenshot();

        await page.keyboard.press('Backspace');
        await expect.soft(example).toHaveScreenshot();

        await page.keyboard.press('Backspace');
        await expect.soft(example).toHaveScreenshot();

        await page.keyboard.press('Backspace');
        await expect.soft(example).toHaveScreenshot();

        await page.keyboard.press('Backspace');
        await expect.soft(example).toHaveScreenshot();

        await input.fill('1');
        await page.keyboard.press('Enter');

        await input.fill('123');
        await page.keyboard.press('Backspace');
        await expect.soft(example).toHaveScreenshot();
    });
});
