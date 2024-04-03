import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('DropdownSelection', () => {
    test.use({viewport: {width: 400, height: 400}});

    test.beforeEach(async ({page}) => tuiGoto(page, '/directives/dropdown-selection'));

    test('current range must be a text node only', async ({page}) => {
        const api = new TuiDocumentationPagePO(page);
        const example = api.getExample('#textarea');

        await example.scrollIntoViewIfNeeded();
        await example.locator('textarea').focus();
        await page.keyboard.press('Control+ArrowLeft');
        await api.waitStableState();
        await expect(page).toHaveScreenshot('01-dropdown-selection.png');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await page.keyboard.press('ArrowRight');
        await api.waitStableState();
        await expect(page).toHaveScreenshot('02-dropdown-selection.png');
        await example.locator('textarea').fill('');
        await example.locator('textarea').fill('@');
        await api.waitStableState();
        await expect(page).toHaveScreenshot('03-dropdown-selection.png');
        await page.locator('button[tuiOption]').first().click();
        await api.waitStableState();
        await expect(page).toHaveScreenshot('04-dropdown-selection.png');
    });
});
