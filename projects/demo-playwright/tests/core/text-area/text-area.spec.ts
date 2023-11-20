import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`Textarea`, () => {
    [`m`, `l`].forEach(size => {
        test(`size of ${size}`, async ({page}) => {
            await tuiGoto(
                page,
                `components/textarea/API?tuiMode=null&tuiTextfieldSize=${size}`,
            );
            const example = page.locator(`#demo-content`);

            await expect(example).toHaveScreenshot(
                `textarea-tuiTextfieldSize-${size}.png`,
            );
        });
    });

    test(`line break text`, async ({page}) => {
        await tuiGoto(page, `components/textarea/API`);

        const example = page.locator(`#demo-content tui-textarea textarea`).nth(1);

        await example.pressSequentially(`1\n2\n3\n4`);

        await expect(example).toHaveScreenshot(`textarea-line-break.png`);

        await page.locator(`.t-row tui-toggle`).first().click();

        await expect(example).toHaveScreenshot(`textarea-line-break-disabled.png`);
    });
});
