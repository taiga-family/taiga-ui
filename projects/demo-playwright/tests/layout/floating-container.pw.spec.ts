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

    test('compact example does not produce horizontal scroll', async ({page}) => {
        await tuiGoto(page, DemoRoute.FloatingContainer);

        const example = new TuiDocumentationPagePO(page).getExample('#compact');

        await example.scrollIntoViewIfNeeded();

        const content = example.locator('.content');

        await expect(content).toBeVisible();

        // Retry until the lazily-rendered example settles: on the production build its
        // component styles stream in after the DOM, briefly leaving the footer full-width.
        await expect(async () => {
            const {scrollWidth, clientWidth} = await content.evaluate((el) => ({
                scrollWidth: el.scrollWidth,
                clientWidth: el.clientWidth,
            }));

            expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
        }).toPass({timeout: 15_000});
    });
});
