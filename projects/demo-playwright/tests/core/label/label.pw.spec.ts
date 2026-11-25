import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test('TuiLabel keeps the switch spacing when the row is reversed', async ({page}) => {
    await tuiGoto(page, DemoRoute.Label);

    const labels = new TuiDocumentationPagePO(page)
        .getExample('#switch')
        .locator('label');

    const regular = labels.first();
    const small = labels.last();

    for (const label of [regular, small]) {
        await label.evaluate((element) => {
            element.style.flexDirection = 'row-reverse';
        });

        await expect(label.locator('input')).toHaveCSS('margin-inline-end', '0px');
    }

    await expect(regular).toHaveCSS('column-gap', '12px');
    await expect(small).toHaveCSS('column-gap', '8px');
});
