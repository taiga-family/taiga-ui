import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Page, test} from '@playwright/test';
import {type BoundingBox} from 'playwright-core';

test.describe('LineChart', () => {
    test('should not show hint', async ({page}) => {
        await tuiGoto(page, DemoRoute.LineChart);
        const example = new TuiDocumentationPagePO(page).getExample('#line');
        const chartColumn = example.locator('tui-line-chart .t-column').first();

        await chartColumn.hover();

        await expect.soft(example).toHaveScreenshot('01-line-chart.png');
    });

    test("shouldn't re-render when it goes out of the viewport", async ({page}) => {
        await tuiGoto(page, `${DemoRoute.LineChart}#line`);
        const documentationPage = new TuiDocumentationPagePO(page);
        const example = documentationPage.getExample('#line');
        const tabs = page.locator('#line tui-segmented button');

        await expect.soft(example).toHaveScreenshot('02-line-chart.png');

        await tabs.filter({hasText: 'HTML'}).click();
        await page.waitForTimeout(1000);
        await tabs.filter({hasText: 'Preview'}).click();

        await expect.soft(example).toHaveScreenshot('03-line-chart.png');
    });

    test.describe('respects [tuiHintDirection]', () => {
        // indexes of TUI_HINT_DIRECTIONS
        const directionIndex = {start: 7, end: 10, top: 4, bottom: 1} as const;

        const openHint = async (
            page: Page,
            direction: keyof typeof directionIndex,
        ): Promise<{hint: BoundingBox; point: BoundingBox}> => {
            await tuiGoto(
                page,
                `${DemoRoute.LineChart}/API?tuiLineChartHint$=0&tuiHintDirection$=${directionIndex[direction]}`,
            );

            const {demo} = new TuiDocumentationPagePO(page);
            const hint = page.locator('tui-hint');

            await demo.locator('tui-line-chart .t-column').nth(3).hover();
            await expect(hint).toBeVisible();

            return {
                hint: (await hint.boundingBox())!,
                point: (await demo
                    .locator('tui-line-chart .t-host')
                    .nth(3)
                    .boundingBox())!,
            };
        };

        test('start', async ({page}) => {
            const {hint, point} = await openHint(page, 'start');

            expect(hint.x + hint.width).toBeLessThanOrEqual(point.x);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '04-line-chart-hint-start.png',
            );
        });

        test('end', async ({page}) => {
            const {hint, point} = await openHint(page, 'end');

            expect(hint.x).toBeGreaterThanOrEqual(point.x + point.width);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '05-line-chart-hint-end.png',
            );
        });

        test('top', async ({page}) => {
            const {hint, point} = await openHint(page, 'top');

            expect(hint.y + hint.height).toBeLessThanOrEqual(point.y);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '06-line-chart-hint-top.png',
            );
        });

        test('bottom', async ({page}) => {
            const {hint, point} = await openHint(page, 'bottom');

            expect(hint.y).toBeGreaterThanOrEqual(point.y + point.height);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '07-line-chart-hint-bottom.png',
            );
        });
    });
});
