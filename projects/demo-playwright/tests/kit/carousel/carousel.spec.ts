import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`Carousel`, () => {
    test(`default padding`, async ({page}) => {
        await tuiGoto(page, `components/carousel/API`);
        const documentationPage = new TuiDocumentationPagePO(page);
        const example = documentationPage.apiPageExample;

        await expect(example).toBeVisible();
        await expect(example).toHaveScreenshot(`carousel-padding-default.png`);
    });

    test(`padding has zero value`, async ({page}) => {
        await tuiGoto(page, `components/carousel/API?style.--tui-carousel-padding=0`);
        const documentationPage = new TuiDocumentationPagePO(page);
        const example = documentationPage.apiPageExample;

        await expect(example).toBeVisible();
        await expect(example).toHaveScreenshot(`carousel-padding-0.png`);
    });

    test(`should show next item after drag`, async ({page}) => {
        await tuiGoto(page, `components/carousel/API?draggable=true`);
        const documentationPage = new TuiDocumentationPagePO(page);
        const example = documentationPage.apiPageExample;
        const itemExample = example.locator(`.t-item`).first();

        await itemExample.dispatchEvent(`mousedown`);
        await itemExample.dispatchEvent(`mousedown`, {x: 600, y: 100});
        await itemExample.dispatchEvent(`mousedown`, {x: -0, y: 100});
        await itemExample.dispatchEvent(`mouseup`);

        await expect(example).toHaveScreenshot(`carousel-draggable.png`);
    });
});
