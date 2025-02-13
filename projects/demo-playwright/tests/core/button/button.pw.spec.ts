import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';
import {checkA11y, injectAxe} from 'axe-playwright';

test.describe('Button', () => {
    test('darkMode=true + appearance=icon + hovered state', async ({page}) => {
        await tuiGoto(
            page,
            '/components/button/API?darkMode=true&appearance=icon&iconStart=@tui.eye-off',
        );
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await expect(apiPageExample).toBeVisible();

        const button = apiPageExample.locator('[tuiButton]');

        await button.hover();

        await expect(button).toHaveScreenshot(
            '01-[darkMode=true]-[appearance=icon]-[data-state=hovered].png',
        );
    });

    test('a11y', async ({page}) => {
        await tuiGoto(page, DemoRoute.Button);

        await page.locator('tui-doc-example').all();

        await injectAxe(page);

        await checkA11y(page, 'tui-doc-example');
    });
});
