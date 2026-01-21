import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('DropdownContext', () => {
    test.beforeEach(async ({page}) => tuiGoto(page, DemoRoute.DropdownContext));

    test('opens dropdown on right click', async ({page}) => {
        const api = new TuiDocumentationPagePO(page);
        const example = api.getExample('#context-menu');
        const tr = example.locator('tr');

        await example.scrollIntoViewIfNeeded();
        await tr.last().click({button: 'right', position: {x: 1, y: 1}});
        await api.waitStableState();

        await expect.soft(example).toHaveScreenshot();
    });

    test('closes previous dropdown after new one is opened', async ({page}) => {
        const api = new TuiDocumentationPagePO(page);
        const example = api.getExample('#context-menu');
        const tr = example.locator('tr');

        await example.scrollIntoViewIfNeeded();
        await tr.nth(1).click({button: 'right', position: {x: 1, y: 1}});
        await api.waitStableState();

        await expect.soft(example).toHaveScreenshot();

        await api.focusOnBody();
        await tr.nth(2).click({button: 'right', position: {x: 1, y: 1}});
        await api.waitStableState();

        await expect.soft(example).toHaveScreenshot();
    });

    test('does not close dropdown when nested dropdown is clicked', async ({page}) => {
        const api = new TuiDocumentationPagePO(page);
        const example = api.getExample('#context-menu');
        const tr = example.locator('tr');

        await example.scrollIntoViewIfNeeded();
        await tr.nth(1).click({button: 'right', position: {x: 1, y: 1}});
        await page.locator('[tuiOption]').last().click();
        await api.waitStableState();

        await expect.soft(example).toHaveScreenshot();

        await page.locator('[tuiOption]').last().click();
        await api.waitStableState();

        await expect.soft(example).toHaveScreenshot();
    });
});
