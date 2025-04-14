import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Textarea', () => {
    test.use({viewport: {width: 400, height: 500}});

    test('correctly shows character with descenders inside placeholder', async ({
        page,
    }) => {
        const placeholder = 'qwertypgj_';

        await tuiGoto(page, `${DemoRoute.TextareaLegacy}/API?placeholder=${placeholder}`);

        const {apiPageExample} = new TuiDocumentationPagePO(page);
        const textarea = apiPageExample.getByPlaceholder(placeholder);

        await textarea.click();

        await expect
            .soft(apiPageExample)
            .toHaveScreenshot('01-character-with-descenders-inside-placeholder.png');
    });

    ['m', 'l'].forEach((size) => {
        test(`size of ${size}`, async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.TextareaLegacy}/API?tuiTextfieldSize=${size}`,
            );
            const {apiPageExample} = new TuiDocumentationPagePO(page);

            await expect
                .soft(apiPageExample)
                .toHaveScreenshot(`textarea-tuiTextfieldSize-${size}.png`);
        });
    });

    test('line break text', async ({page, browserName}) => {
        // eslint-disable-next-line playwright/no-skipped-test
        test.skip(browserName !== 'chromium', 'Font flaky');

        await tuiGoto(page, `${DemoRoute.TextareaLegacy}/API`);
        const {apiPageExample} = new TuiDocumentationPagePO(page);
        const textAreaComponent = apiPageExample.locator('tui-textarea');
        const textarea = apiPageExample.getByRole('textbox').first();

        await textarea.fill('1\n2\n3\n4');

        await expect.soft(textAreaComponent).toHaveScreenshot('textarea-line-break.png');

        await page.locator('.t-row input[tuiSwitch]').first().click();

        await expect
            .soft(textAreaComponent)
            .toHaveScreenshot('textarea-line-break-disabled.png');
    });
});
