import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Carousel', () => {
    test.use({
        viewport: {width: 500, height: 400},
    });

    test('default padding', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Carousel}/API`);
        const document = new TuiDocumentationPagePO(page);

        await document.waitTuiIcons();

        await expect(document.apiPageExample).toBeVisible();
        await expect(document.apiPageExample).toHaveScreenshot(
            'carousel-padding-default.png',
        );
    });

    test('padding has zero value', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Carousel}/API?style.--tui-carousel-padding=0`);
        const document = new TuiDocumentationPagePO(page);

        await document.waitTuiIcons();

        await expect(document.apiPageExample).toBeVisible();
        await expect(document.apiPageExample).toHaveScreenshot('carousel-padding-0.png');
    });

    test('should show next item after drag', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Carousel}/API?draggable=true`);
        const document = new TuiDocumentationPagePO(page);

        await document.waitTuiIcons();
        await page.mouse.move(375, 300);
        await page.mouse.down();
        await page.mouse.move(125, 300, {steps: 10});
        await page.mouse.up();

        await page.waitForTimeout(1000);

        await expect(document.apiPageExample).toHaveScreenshot('carousel-draggable.png');
    });
});
