import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Routable', () => {
    test('should open lazy loaded dialog by click and then close by outside click', async ({
        page,
    }) => {
        await tuiGoto(page, DemoRoute.DialogRoutable);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#lazy-loading-dialog');

        await example.locator('button').click();

        await expect(page).toHaveURL('/dialog/routable/path/to/lazy');

        await documentationPagePO.prepareBeforeScreenshot();

        await expect.soft(page).toHaveScreenshot('01-routable-dialog.png');
    });

    test('should open lazy loaded dialog by direct link and then close by outside click', async ({
        page,
    }) => {
        await tuiGoto(page, `${DemoRoute.DialogRoutable}/path/to/lazy`);

        await expect(page).toHaveURL('/dialog/routable/path/to/lazy');

        await page.locator('tui-dialog').getByRole('button').nth(1).click();

        await expect(page).toHaveURL(/\/dialog\/routable$/);
    });

    test('should open dialog in named outlet example', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.DialogRoutable}`);

        const documentationPagePO = new TuiDocumentationPagePO(page);
        const example = documentationPagePO.getExample('#named-outlet');

        await example.locator('button').click();

        await expect(page).toHaveURL('/dialog/routable/(myOutlet:path/to/named-outlet)');

        await page.locator('tui-dialog button').first().click();

        await expect(page).toHaveURL(/\/dialog\/routable$/);
    });
});
