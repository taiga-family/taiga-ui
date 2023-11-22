import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`Carousel`, () => {
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

        await page.mouse.move(650, 350);
        await page.mouse.down({button: `left`});
        await page.mouse.move(300, 350, {steps: 10});
        await page.mouse.up({button: `left`});

        await expect(apiPageExample).toHaveScreenshot(`carousel-draggable.png`);
    });
});
