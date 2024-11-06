import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('DataListWrapper', () => {
    test.beforeEach(async ({page}) => tuiGoto(page, DemoRoute.DataListWrapper));

    test('show nothing found', async ({page}) => {
        const api = new TuiDocumentationPagePO(page);
        const example = api.getExample('#disable');

        await example.scrollIntoViewIfNeeded();
        await api.waitStableState();

        const input = example.locator('input');

        await input.focus();
        await input.pressSequentially('1');

        await expect(page.locator('tui-dropdown tui-data-list-wrapper')).toHaveScreenshot(
            '01-data-list-wrapper.png',
        );
    });
});
