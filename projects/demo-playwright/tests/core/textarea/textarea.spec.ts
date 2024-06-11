import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Textarea', () => {
    test.beforeEach(async ({page}) => {
        await page.setViewportSize({width: 400, height: 600});
    });

    ['m', 'l'].forEach(size => {
        test(`size of ${size}`, async ({page}) => {
            await tuiGoto(page, `components/textarea/API?tuiTextfieldSize=${size}`);
            const {apiPageExample} = new TuiDocumentationPagePO(page);

            await expect(apiPageExample).toHaveScreenshot(
                `textarea-tuiTextfieldSize-${size}.png`,
            );
        });
    });

    test('line break text', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Textarea}/API`);
        const {apiPageExample} = new TuiDocumentationPagePO(page);
        const textAreaComponent = apiPageExample.locator('tui-textarea');
        const textarea = apiPageExample.getByRole('textbox').first();

        await textarea.fill('1\n2\n3\n4');

        await expect(textAreaComponent).toHaveScreenshot('textarea-line-break.png');

        await page.locator('.t-row input[tuiSwitch]').first().click();

        await expect(textAreaComponent).toHaveScreenshot(
            'textarea-line-break-disabled.png',
        );
    });
});
