import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Textarea', () => {
    test.use({viewport: {width: 400, height: 500}});

    test('line break text', async ({page, browserName}) => {
        test.skip(browserName !== 'chromium', 'Font flaky');

        await tuiGoto(page, `${DemoRoute.Textarea}/API`);
        const {apiPageExample} = new TuiDocumentationPagePO(page);
        const textarea = apiPageExample.locator('textarea[tuiTextarea]');

        await textarea.fill('1\n2\n3\n4');

        await expect.soft(textarea).toHaveScreenshot('textarea-line-break.png');

        await page.getByRole('row', {name: 'disabled'}).locator('input').click();

        await expect.soft(textarea).toHaveScreenshot('textarea-line-break-disabled.png');
    });

    ['m', 'l'].forEach((size) => {
        test(`size of ${size}`, async ({page}) => {
            await tuiGoto(page, `${DemoRoute.Textarea}/API?tuiTextfieldSize=${size}`);
            const {apiPageExample} = new TuiDocumentationPagePO(page);

            await expect
                .soft(apiPageExample)
                .toHaveScreenshot(`textarea-tuiTextfieldSize-${size}.png`);
        });
    });
});
