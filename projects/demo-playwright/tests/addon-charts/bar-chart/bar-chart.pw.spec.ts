import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Page, test} from '@playwright/test';
import {type BoundingBox} from 'playwright-core';

test.describe('BarChart', () => {
    test.describe('respects [tuiHintDirection]', () => {
        // indexes of TUI_HINT_DIRECTIONS
        const directionIndex = {start: 7, end: 10, top: 4, bottom: 1} as const;

        const openHint = async (
            page: Page,
            direction?: keyof typeof directionIndex,
        ): Promise<{bars: BoundingBox; hint: BoundingBox; point: BoundingBox}> => {
            await tuiGoto(
                page,
                `${DemoRoute.BarChart}/API?tuiHintContent$=0${direction ? `&tuiHintDirection$=${directionIndex[direction]}` : ''}`,
            );

            const {demo} = new TuiDocumentationPagePO(page);
            const hint = page.locator('tui-hint');
            const bars = demo.locator('tui-bar-chart .t-container').nth(1);

            await bars.hover();
            await expect(hint).toBeVisible();

            return {
                bars: (await bars.boundingBox())!,
                hint: (await hint.boundingBox())!,
                point: (await demo
                    .locator('tui-bar-chart .t-host')
                    .nth(1)
                    .boundingBox())!,
            };
        };

        test('start', async ({page}) => {
            const {hint, point} = await openHint(page, 'start');

            expect(hint.x + hint.width).toBeLessThanOrEqual(point.x);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '01-bar-chart-hint-start.png',
            );
        });

        test('end', async ({page}) => {
            const {hint, point} = await openHint(page, 'end');

            expect(hint.x).toBeGreaterThanOrEqual(point.x + point.width);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '02-bar-chart-hint-end.png',
            );
        });

        test('top', async ({page}) => {
            const {hint, point} = await openHint(page, 'top');

            expect(hint.y + hint.height).toBeLessThanOrEqual(point.y);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '03-bar-chart-hint-top.png',
            );
        });

        test('bottom', async ({page}) => {
            await page.setViewportSize({width: 350, height: 310});
            const {bars, hint} = await openHint(page, 'bottom');

            expect(hint.y).toBeGreaterThanOrEqual(bars.y + bars.height);
            // the hint is below the chart, outside of the demo area
            await expect(page).toHaveScreenshot('04-bar-chart-hint-bottom.png');
        });

        test('default === top', async ({page}) => {
            const {hint, point} = await openHint(page);

            expect(hint.y + hint.height).toBeLessThanOrEqual(point.y);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '05-bar-chart-hint-default-top.png',
            );
        });
    });
});
