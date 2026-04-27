import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE_USER_AGENT} from '../../../playwright.options';

test.describe('Toast', () => {
    test.use({
        viewport: {width: 415, height: 812},
        userAgent: TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
    });

    test('should show toast in mobile resolution', async ({page}) => {
        await tuiGoto(page, DemoRoute.Toast);

        const documentationPage = new TuiDocumentationPagePO(page);
        const example = documentationPage.getExample('#service');

        await example.locator('button:has-text("String")').click();

        const toast = page.locator('tui-toast');

        await expect(toast).toBeVisible();

        await page.waitForTimeout(500);

        await expect(page).toHaveScreenshot('toast-mobile.png');
    });
});
