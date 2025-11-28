import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Button', () => {
    test('darkMode=true + appearance=icon + hovered state', async ({page}) => {
        await tuiGoto(
            page,
            `${DemoRoute.Button}/API?darkMode=true&appearance=icon&iconStart=@tui.eye-off`,
        );
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await expect(apiPageExample).toBeVisible();

        const button = apiPageExample.locator('[tuiButton]');

        await button.hover();

        await expect
            .soft(button)
            .toHaveScreenshot(
                '01-[darkMode=true]-[appearance=icon]-[data-state=hovered].png',
            );
    });

    test('hover state', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Button}/API`);

        const {apiPageExample} = new TuiDocumentationPagePO(page);
        const button = apiPageExample.locator('[tuiButton]');

        await button.hover();
        await expect.soft(button).toHaveScreenshot('button-hover.png');
    });

    test('active state', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Button}/API`);

        const {apiPageExample} = new TuiDocumentationPagePO(page);
        const button = apiPageExample.locator('[tuiButton]');
        const {x, y, width, height} = (await button.boundingBox()) || {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        };

        await page.mouse.move(x + width / 2, y + height / 2);
        await page.mouse.down();

        await expect.soft(button).toHaveScreenshot('button-active.png');
    });
});
