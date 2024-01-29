import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('FieldError', () => {
    test('Errors of invalid control are shown correctly', async ({page}) => {
        const example = new TuiDocumentationPagePO(page).getExample('#base');

        await tuiGoto(page, '/pipes/field-error');

        const input = example.locator('input').first();

        await input.focus();
        await input.blur();

        await page.waitForTimeout(500);

        await expect(example).toHaveScreenshot('01-field-error.png', {
            animations: 'allow',
        });
    });

    test('Submit invalid form', async ({page}) => {
        const example = new TuiDocumentationPagePO(page).getExample('#patterns');

        await tuiGoto(page, '/pipes/field-error');
        await example.locator('button').click();

        await page.waitForTimeout(500);

        await expect(example).toHaveScreenshot('02-field-error.png', {
            animations: 'allow',
        });
    });
});
