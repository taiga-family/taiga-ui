import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

const {describe} = test;

describe('TuiFieldError', () => {
    test('Errors of invalid control are shown correctly', async ({page}) => {
        await tuiGoto(page, '/pipes/field-error');

        const errorPipeInput = page
            .locator('tui-field-error-pipe-example-1 input')
            .first();

        await errorPipeInput.focus();

        await page.waitForTimeout(50);

        await errorPipeInput.blur();

        const example = page
            .locator('tui-doc-example [automation-id="tui-doc-example"]')
            .first();

        await expect(example).toHaveScreenshot('shows-error-under-field.png', {
            animations: 'allow',
        });
    });
});
