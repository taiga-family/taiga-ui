import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Pagination', () => {
    test('skips pagination when focusable is false', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Pagination}/API?focusable=false`);

        const demo = new TuiDocumentationPagePO(page).demo;
        const pagination = demo.locator('tui-pagination');

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

    test('disables both arrows when disabled', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Pagination}/API?disabled=true&index=1&length=3`);

        const {demo} = new TuiDocumentationPagePO(page);
        const pagination = demo.locator('tui-pagination');
        const arrows = pagination.locator('button[tuiIconButton]');

        await expect(arrows).toHaveCount(2);
        await expect(arrows.first()).toBeDisabled();
        await expect(arrows.last()).toBeDisabled();
        await expect(
            pagination.locator('[automation-id="tui-pagination__element"][tabindex="0"]'),
        ).toHaveText('2');
    });

    test('disables both arrows when length is zero', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Pagination}/API?length=0`);

        const {demo} = new TuiDocumentationPagePO(page);
        const pagination = demo.locator('tui-pagination');
        const arrows = pagination.locator('button[tuiIconButton]');

        await expect(arrows).toHaveCount(2);
        await expect(arrows.first()).toBeDisabled();
        await expect(arrows.last()).toBeDisabled();
        await expect(
            pagination.locator('[automation-id="tui-pagination__element"]'),
        ).toHaveCount(0);
    });
});
