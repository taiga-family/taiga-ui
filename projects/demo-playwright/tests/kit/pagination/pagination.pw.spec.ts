import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Pagination', () => {
    test('skips page buttons on Tab when focusable is false', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Pagination}/API?focusable=false`);

        const pagination = new TuiDocumentationPagePO(page).demo.locator('tui-pagination');

        await pagination.evaluate((element) => {
            const before = document.createElement('button');
            const after = document.createElement('button');

            before.id = 'before-pagination';
            before.textContent = 'Before pagination';
            after.id = 'after-pagination';
            after.textContent = 'After pagination';

            element.before(before);
            element.after(after);
        });

        await page.locator('#before-pagination').focus();
        await page.keyboard.press('Tab');

        await expect(page.locator('#after-pagination')).toBeFocused();
    });
});
