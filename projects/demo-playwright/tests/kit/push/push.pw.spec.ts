import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Push', () => {
    test.use({viewport: {width: 720, height: 720}});

    test('Service — shows push alert on button click', async ({page}) => {
        await tuiGoto(page, DemoRoute.Push);

        const example = new TuiDocumentationPagePO(page).getExample('#service');

        await example.locator('button:has-text("Show push")').click();

        await expect
            .soft(page.locator('tui-push-alert'))
            .toHaveScreenshot('01-push-service.png');
    });

    test('Directive — shows push alert on button click', async ({page}) => {
        await tuiGoto(page, DemoRoute.Push);

        const example = new TuiDocumentationPagePO(page).getExample('#directive');

        await example.locator('button:has-text("Show push")').click();

        await expect
            .soft(page.locator('tui-push-alert'))
            .toHaveScreenshot('02-push-directive.png');
    });
});
