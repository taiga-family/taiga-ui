import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('FloatingContainer', () => {
    test('max width example limits content while background stays full width', async ({
        page,
    }) => {
        await tuiGoto(page, DemoRoute.FloatingContainer);

        const example = new TuiDocumentationPagePO(page).getExample('#max-width');
        const content = example.locator('.content');
        const container = example.locator('[tuiFloatingContainer]');
        const action = container.getByRole('button', {name: 'Main action'});

        await example.scrollIntoViewIfNeeded();

        await expect(async () => {
            const containerBox = (await container.boundingBox())!;
            const actionBox = (await action.boundingBox())!;
            const startGap = actionBox.x - containerBox.x;
            const endGap =
                containerBox.x + containerBox.width - actionBox.x - actionBox.width;

            const contentWidth = await content.evaluate((el) => el.clientWidth);
            const backgroundWidth = await container.evaluate((el) =>
                Number.parseFloat(getComputedStyle(el, '::before').width),
            );

            expect(actionBox.width).toBe(320);
            expect(startGap).toBeCloseTo(endGap, 0);
            expect(backgroundWidth).toBeCloseTo(contentWidth, 0);
        }).toPass({timeout: 15_000});
    });

    test('max width example does not exceed narrow container', async ({page}) => {
        await page.setViewportSize({width: 360, height: 740});
        await tuiGoto(page, DemoRoute.FloatingContainer);

        const example = new TuiDocumentationPagePO(page).getExample('#max-width');
        const content = example.locator('.content');
        const container = example.locator('[tuiFloatingContainer]');
        const action = container.getByRole('button', {name: 'Main action'});

        await example.scrollIntoViewIfNeeded();

        await expect(async () => {
            const containerBox = (await container.boundingBox())!;
            const actionBox = (await action.boundingBox())!;
            const {scrollWidth, clientWidth} = await content.evaluate((el) => ({
                scrollWidth: el.scrollWidth,
                clientWidth: el.clientWidth,
            }));

            expect(containerBox.width).toBeLessThan(320);
            expect(actionBox.width).toBeCloseTo(containerBox.width, 0);
            expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
        }).toPass({timeout: 15_000});
    });
});
