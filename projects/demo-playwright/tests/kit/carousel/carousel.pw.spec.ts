import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Carousel', () => {
    test.use({
        viewport: {width: 500, height: 400},
    });

    test('default padding', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Carousel}/API`);
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await expect(apiPageExample).toBeVisible();
        await expect(apiPageExample).toHaveScreenshot('carousel-padding-default.png');
    });

    test('padding has zero value', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Carousel}/API?style.--tui-carousel-padding=0`);
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await expect(apiPageExample).toBeVisible();
        await expect(apiPageExample).toHaveScreenshot('carousel-padding-0.png');
    });

    test('should show next item after drag', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Carousel}/API?draggable=true`);
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await page.mouse.move(375, 300);
        await page.mouse.down();
        await page.mouse.move(125, 300, {steps: 10});
        await page.mouse.up();

        await page.waitForTimeout(500);

        await expect(apiPageExample).toHaveScreenshot('carousel-draggable.png');
    });
});
