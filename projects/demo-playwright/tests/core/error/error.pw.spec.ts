import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('TuiError', () => {
    test('No extra space between content', async ({page}) => {
        await tuiGoto(page, DemoRoute.Error);

        const example = new TuiDocumentationPagePO(page).getExample('#basic');
        const checkbox = example.locator('input[tuiSwitch]');
        const error = example.locator('tui-error').first();

        await expect(error).toBeHidden();
        await checkbox.click();
        await expect(checkbox).toBeChecked();
        await expect(error).toBeVisible();
        await expect(error).toHaveText('An error');
        await expect
            .soft(example)
            .toHaveScreenshot('01-error.png', {animations: 'allow'});
    });

    test('Errors of invalid control are shown correctly', async ({page}) => {
        await tuiGoto(page, DemoRoute.Error);

        const example = new TuiDocumentationPagePO(page).getExample('#basic');
        const input = example.locator('input').first();

        await input.focus();
        await input.blur();
        await page.waitForTimeout(500);
        await expect
            .soft(example)
            .toHaveScreenshot('02-error.png', {animations: 'allow'});
    });

    test('Submit invalid form', async ({page}) => {
        await tuiGoto(page, DemoRoute.Error);

        const example = new TuiDocumentationPagePO(page).getExample('#template');

        await example.locator('button').last().click();
        await page.waitForTimeout(500);
        await expect
            .soft(example)
            .toHaveScreenshot('03-error.png', {animations: 'allow'});
    });
});
