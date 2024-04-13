import {expect, test} from '@playwright/test';

import {TuiDocumentationPagePO, tuiGoto} from '#/demo-playwright/utils';

test.describe('Button', () => {
    test('darkMode=true + appearance=icon + hovered state', async ({page}) => {
        await tuiGoto(
            page,
            '/components/button/API?darkMode=true&appearance=icon&icon=tuiIconEyeOff',
        );
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await expect(apiPageExample).toBeVisible();
        const button = apiPageExample.locator('[tuiButton]');

        await button.hover();

        await expect(button).toHaveScreenshot(
            '01-[darkMode=true]-[appearance=icon]-[data-state=hovered].png',
        );
    });
});
