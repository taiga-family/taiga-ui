import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Pagination', () => {
    test('disables both arrows when disabled', async ({page}) => {
        await tuiGoto(page, DemoRoute.Pagination + '/API?disabled=true&index=1&length=3');

        const pagination = new TuiDocumentationPagePO(page).demo.locator('tui-pagination');
        const arrows = pagination.locator('button[tuiIconButton]');

        await expect(arrows).toHaveCount(2);
        await expect(arrows.first()).toBeDisabled();
        await expect(arrows.last()).toBeDisabled();
        await expect(
            pagination.locator('[automation-id="tui-pagination__element"][tabindex="0"]'),
        ).toHaveText('2');
    });

    test('disables both arrows when length is zero', async ({page}) => {
        await tuiGoto(page, DemoRoute.Pagination + '/API?length=0');

        const pagination = new TuiDocumentationPagePO(page).demo.locator('tui-pagination');
        const arrows = pagination.locator('button[tuiIconButton]');

        await expect(arrows).toHaveCount(2);
        await expect(arrows.first()).toBeDisabled();
        await expect(arrows.last()).toBeDisabled();
        await expect(pagination.locator('[automation-id="tui-pagination__element"]')).toHaveCount(0);
    });
});
