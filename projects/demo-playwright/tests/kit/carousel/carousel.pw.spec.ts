import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Carousel', () => {
    test.use({viewport: {width: 500, height: 400}});

    test('buttons work', async ({page}) => {
        await tuiGoto(page, DemoRoute.Carousel);

        const example = new TuiDocumentationPagePO(page).getExample('#basic');
        const prev = example.locator('button').first();
        const next = example.locator('button').last();

        await next.click();
        await expect.soft(example).toHaveScreenshot('01-carousel-next.png');

        await prev.click();
        await expect.soft(example).toHaveScreenshot('01-carousel-prev.png');
    });
});
