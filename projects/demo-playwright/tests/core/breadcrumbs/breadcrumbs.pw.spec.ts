import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('breadcrumbs', () => {
    test('open collapsed list', async ({page}) => {
        await tuiGoto(page, DemoRoute.Breadcrumbs);
        const example = new TuiDocumentationPagePO(page).getExample('#overflow');
        const more = example.locator('.t-more').first();

        await example.scrollIntoViewIfNeeded();
        await more.click();

        await expect(page.locator('tui-dropdown')).toHaveScreenshot('01-breadcrumbs.png');
    });
});
