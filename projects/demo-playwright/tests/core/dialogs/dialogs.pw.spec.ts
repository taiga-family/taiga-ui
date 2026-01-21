import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Dialog', () => {
    test('String', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dialog);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#string');

        await example.locator('button').first().click();
        await expect.soft(page).toHaveScreenshot();
        await page.locator('tui-dialog button').last().click();
        await example.locator('button').last().click();
        await expect.soft(page).toHaveScreenshot();
    });

    test('Directive', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dialog);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#directive');

        await example.locator('button').first().click();
        await expect.soft(page).toHaveScreenshot();
        await page.locator('tui-dialog button[type="submit"]').last().click();
        await expect.soft(page).toHaveScreenshot();
    });

    test('Component', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dialog);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#component');

        await example.locator('button').first().click();
        await expect.soft(page).toHaveScreenshot();
        await page.locator('tui-dialog button[type="submit"]').last().click();
        await expect.soft(page).toHaveScreenshot();
    });

    test('Confirmation', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dialog);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#confirmation');

        await example.locator('button').first().click();
        await expect.soft(page).toHaveScreenshot();
        await page.locator('tui-dialog input').fill('John');
        await page.locator('tui-dialog button').first().click();
        await expect.soft(page).toHaveScreenshot();
    });

    test('Closing', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dialog);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#closing');

        await example.locator('button').first().click();
        await expect.soft(page).toHaveScreenshot();
        await page.locator('tui-dialog button').last().click();
        await expect.soft(page).toHaveScreenshot();
    });

    test('Customization', async ({page}) => {
        await tuiGoto(page, DemoRoute.Dialog);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#customization');

        await example.locator('button').first().click();
        await expect.soft(page).toHaveScreenshot();
        await page.locator('tui-dialog button').last().click();
        await example.locator('button').last().click();
        await expect.soft(page).toHaveScreenshot();
    });
});
