import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Table', () => {
    test('Dynamic column', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);
        const example = new TuiDocumentationPagePO(page).getExample('#dynamic-columns');
        const addColumnButton = example.locator('button').first();

        await addColumnButton.click();
        await expect(example).toHaveScreenshot('01-table-dynamic.png');
    });
});
