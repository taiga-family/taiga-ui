import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Dialogs + browser back navigation', () => {
    test.use({viewport: {width: 1024, height: 500}});

    test('closes dialog on browser back navigation', async ({page}) => {
        await tuiGoto(page, '/components/dialog');
        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#data');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').click();
        await page.locator('tui-dialog button').nth(1).click();
        await documentationPagePO.prepareBeforeScreenshot();
        await expect(page).toHaveScreenshot('01-dialog-browser-back.png');
        await page.goBack();
        await page.goForward();
        await expect(page).toHaveScreenshot('02-dialog-browser-back.png');
        await expect(page).toHaveURL('components/dialog');
    });

    test("doesn't break browser back navigation after closing dialog in the usual way (without back button)", async ({
        page,
    }) => {
        await tuiGoto(page, '/components/dialog');
        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#string');

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').nth(0).click();
        await documentationPagePO.prepareBeforeScreenshot();
        await page.locator('tui-dialog button').nth(0).click();
        await expect(page).toHaveURL('components/dialog');
    });
});
