import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Table', () => {
    test('Dynamic column', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);
        const example = new TuiDocumentationPagePO(page).getExample('#dynamic-columns');
        const addColumnButton = example.locator('button').first();

        await addColumnButton.click();

        await expect.soft(example).toHaveScreenshot('01-table-dynamic.png');
    });

    test('Checkboxes', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);
        const example = new TuiDocumentationPagePO(page).getExample('#custom');
        const checkboxes = await example.locator('input[type="checkbox]').all();

        checkboxes[1]?.click();

        await expect.soft(example).toHaveScreenshot('02-checkboxes-1.png');

        checkboxes[2]?.click();

        await expect.soft(example).toHaveScreenshot('02-checkboxes-2.png');

        checkboxes[3]?.click();

        await expect.soft(example).toHaveScreenshot('02-checkboxes-3.png');

        checkboxes[3]?.click();

        await expect.soft(example).toHaveScreenshot('02-checkboxes-4.png');

        checkboxes[0]?.click();

        await expect.soft(example).toHaveScreenshot('02-checkboxes-5.png');

        checkboxes[0]?.click();

        await expect.soft(example).toHaveScreenshot('02-checkboxes-6.png');
    });
});
