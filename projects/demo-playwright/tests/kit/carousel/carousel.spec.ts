import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`Carousel`, () => {
    test(`default padding`, async ({page}) => {
        await tuiGoto(page, `components/carousel/API`);

        const example = page.locator(`#demo-content`);

        await expect(example).toHaveScreenshot(`carousel-padding-default.png`);
    });

    test(`padding has zero value`, async ({page}) => {
        await tuiGoto(page, `components/carousel/API?style.--tui-carousel-padding=0`);

        const example = page.locator(`#demo-content`);

        await expect(example).toHaveScreenshot(`carousel-padding-0.png`);
    });

    test(`should show next item after drag`, async ({page}) => {
        await tuiGoto(page, `components/carousel/API?draggable=true`);

        await page.locator(`#demo-content .t-item`).first().hover();

        await page.mouse.down();

        await page.mouse.move(600, 100);

        await page.mouse.move(-0, 100);

        await page.mouse.up();

        await expect(page.locator(`#demo-content`)).toHaveScreenshot(
            `carousel-draggable.png`,
        );
    });
});
