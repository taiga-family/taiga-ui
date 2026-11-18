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

    [
        {parent: 'ltr', local: 'rtl'},
        {parent: 'rtl', local: 'ltr'},
        {parent: 'rtl', local: null},
    ].forEach(({parent, local}) => {
        test(`buttons work with ${local ?? 'inherited'} direction inside ${parent} parent`, async ({
            page,
        }) => {
            await tuiGoto(page, DemoRoute.Carousel);

            const example = new TuiDocumentationPagePO(page).getExample('#basic');
            const carousel = example.locator('tui-carousel');
            const prev = example.locator('button').first();
            const next = example.locator('button').last();

            await carousel.evaluate(
                (element, {parent, local}) => {
                    element.parentElement?.setAttribute('dir', parent);

                    if (local) {
                        element.setAttribute('dir', local);
                    }
                },
                {parent, local},
            );

            await expect(carousel).toHaveCSS('direction', local ?? parent);
            await expect(prev).toBeDisabled();

            await next.click();
            await expect(carousel.locator('.t-item').nth(1)).toHaveText('1');

            await prev.click();
            await expect(prev).toBeDisabled();
        });
    });
});
