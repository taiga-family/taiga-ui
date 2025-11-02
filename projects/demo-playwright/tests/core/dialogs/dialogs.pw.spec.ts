import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Dialog', () => {
    test('String', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dialog);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#string');

        await example.locator('button').first().click();
        await expect.soft(page).toHaveScreenshot('01-dialog-1.png');
        await page.locator('tui-dialog button').last().click();
        await example.locator('button').last().click();
        await expect.soft(page).toHaveScreenshot('01-dialog-2.png');
    });

    test('Directive', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dialog);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#directive');

        await example.locator('button').first().click();
        await expect.soft(page).toHaveScreenshot('02-dialog-1.png');
        await page.locator('tui-dialog button[type="submit"]').last().click();
        await expect.soft(page).toHaveScreenshot('02-dialog-2.png');
    });

    test('Component', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dialog);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#component');

        await example.locator('button').first().click();
        await expect.soft(page).toHaveScreenshot('03-dialog-1.png');
        await page.locator('tui-dialog button[type="submit"]').last().click();
        await expect.soft(page).toHaveScreenshot('03-dialog-2.png');
    });

    test('Confirmation', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dialog);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#confirmation');

        await example.locator('button').first().click();
        await expect.soft(page).toHaveScreenshot('04-dialog-1.png');
        await page.locator('tui-dialog input').fill('John');
        await page.locator('tui-dialog button').first().click();
        await expect.soft(page).toHaveScreenshot('04-dialog-2.png');
    });

    test('Closing', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dialog);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#closing');

        await example.locator('button').first().click();
        await expect.soft(page).toHaveScreenshot('05-dialog-1.png');
        await page.locator('tui-dialog button').last().click();
        await expect.soft(page).toHaveScreenshot('05-dialog-2.png');
    });

    test('Customization', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dialog);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#customization');

        await example.locator('button').first().click();
        await expect.soft(page).toHaveScreenshot('06-dialog-1.png');
        await page.locator('tui-dialog button').last().click();
        await example.locator('button').last().click();
        await expect.soft(page).toHaveScreenshot('06-dialog-2.png');
    });
});
