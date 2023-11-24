import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`Carousel`, () => {
    test.use({
        viewport: {width: 360, height: 500},
    });

    test(`default padding`, async ({page}) => {
        await tuiGoto(page, `components/carousel/API`);
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await expect(apiPageExample).toBeVisible();

        await expect(apiPageExample).toHaveScreenshot(`carousel-padding-default.png`);
    });

    test(`padding has zero value`, async ({page}) => {
        await tuiGoto(page, `components/carousel/API?style.--tui-carousel-padding=0`);
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await expect(apiPageExample).toBeVisible();

        await expect(apiPageExample).toHaveScreenshot(`carousel-padding-0.png`);
    });

    test(`should show next item after drag`, async ({page}) => {
        await tuiGoto(page, `components/carousel/API?draggable=true`);
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await expect(apiPageExample).toBeVisible();

        await apiPageExample.locator(`.t-item`).first().hover();

        await page.mouse.down();

        await page.mouse.move(200, 100);

        await page.mouse.move(0, 100);

        await page.mouse.up();

        await expect(apiPageExample).toHaveScreenshot(`carousel-draggable.png`);
    });
});
