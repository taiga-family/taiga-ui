import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('FloatingContainer', () => {
    test('stretches secondary action nested in tui-expand to full width', async ({
        page,
    }) => {
        await tuiGoto(page, DemoRoute.FloatingContainer);

        const example = new TuiDocumentationPagePO(page).getExample('#basic');

        await example.scrollIntoViewIfNeeded();
        await example.getByLabel('Floating visibility').check();
        await example.getByLabel('Second action visibility').check();

        await expect
            .soft(example.locator('[tuiFloatingContainer]'))
            .toHaveScreenshot('01-floating-container.png');
    });

    test('full-width footer does not produce horizontal scroll', async ({page}) => {
        await tuiGoto(page, DemoRoute.FloatingContainer);

        const example = new TuiDocumentationPagePO(page).getExample('#compact');

        await example.scrollIntoViewIfNeeded();

        const content = example.locator('.content');
        const footer = content.locator('[tuiFloatingContainer]');

        await expect(footer).toHaveCSS('position', 'sticky');

        // Retry until the lazily-rendered example settles: on the production build its
        // component styles can stream in after the DOM.
        await expect(async () => {
            const {scrollWidth, clientWidth, footerWidth} = await content.evaluate(
                (el) => ({
                    scrollWidth: el.scrollWidth,
                    clientWidth: el.clientWidth,
                    footerWidth: el.querySelector('[tuiFloatingContainer]')?.clientWidth,
                }),
            );

            expect(footerWidth).toBe(clientWidth);
            expect(scrollWidth).toBe(clientWidth);
        }).toPass({timeout: 15_000});
    });
});
