import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Textarea', () => {
    test.use({viewport: {width: 400, height: 500}});

    test('line break text', async ({page, browserName}) => {
        test.skip(browserName !== 'chromium', 'Font flaky');

        await tuiGoto(page, `${DemoRoute.Textarea}/API`);
        const {demo} = new TuiDocumentationPagePO(page);
        const textarea = demo.locator('textarea[tuiTextarea]');

        await textarea.fill('1\n2\n3\n4');

        await expect.soft(textarea).toHaveScreenshot('textarea-line-break.png');

        await page.getByRole('row', {name: 'disabled'}).locator('input').click();

        await expect.soft(textarea).toHaveScreenshot('textarea-line-break-disabled.png');
    });

    test('required textarea is not invalid before touched', async ({page}) => {
        await tuiGoto(page, DemoRoute.Textarea);
        const example = new TuiDocumentationPagePO(page).getExample('#icons');
        const textarea = example.locator('[tuiTextarea]');

        await expect.soft(example).toHaveScreenshot('required-textarea-untouched.png');
        await textarea.click({button: 'middle'});
        await textarea.fill('123');
        await textarea.clear();
        await textarea.blur();
        await expect.soft(example).toHaveScreenshot('required-textarea-touched.png');
    });

    ['m', 'l'].forEach((size) => {
        test(`size of ${size}`, async ({page}) => {
            await tuiGoto(page, `${DemoRoute.Textarea}/API?tuiTextfieldSize=${size}`);
            const {demo} = new TuiDocumentationPagePO(page);

            await expect
                .soft(demo)
                .toHaveScreenshot(`textarea-tuiTextfieldSize-${size}.png`);
        });
    });
});
