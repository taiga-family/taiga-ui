import {DemoRoute} from '@demo/routes';
import {TuiDocumentationApiPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Textfield content', () => {
    test('does not overflow icons in LTR and RTL', async ({page}) => {
        await tuiGoto(
            page,
            `${DemoRoute.Select}/API?content$=2&sandboxWidth=250&tuiTextfieldCleaner=true`,
        );

        const example = new TuiDocumentationApiPagePO(page).apiPageExample;
        const textfield = example.locator('tui-textfield');

        await textfield.locator('input').click();
        await page
            .locator('button[tuiOption]', {hasText: 'Federated States of Micronesia'})
            .first()
            .click();

        await expect.soft(textfield).toHaveScreenshot('textfield-content-ltr.png');

        await example.evaluate((node) => node.setAttribute('dir', 'rtl'));

        await expect.soft(textfield).toHaveScreenshot('textfield-content-rtl.png');
    });
});
