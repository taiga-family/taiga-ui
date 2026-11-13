import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('FloatingContainer', () => {
    test('max width example fits narrow screen', async ({page}) => {
        await page.setViewportSize({width: 360, height: 740});
        await tuiGoto(page, DemoRoute.FloatingContainer);

        const example = new TuiDocumentationPagePO(page).getExample('#max-width');

        await example.scrollIntoViewIfNeeded();

        await expect
            .soft(example.locator('[tuiFloatingContainer]'))
            .toHaveScreenshot('01-floating-container-max-width-mobile.png');
    });
});
