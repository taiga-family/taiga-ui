import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Page, test} from '@playwright/test';
import {TUI_HINT_LOCATORS} from '@taiga-ui/testing/locators';
import {type BoundingBox} from 'playwright-core';

test.describe('PieChart', () => {
    test('should be show hints on charts', async ({page}) => {
        await tuiGoto(page, DemoRoute.PieChart);

        const example = new TuiDocumentationPagePO(page).getExample('#with-labels');

        const pieChartSegments = await example
            .getByTestId('tui-pie-chart__segment')
            .all();

        await expect
            .soft(example)
            .toHaveScreenshot('01-pie-chart-with-label-no-hover.png');

        for (const [i, segment] of pieChartSegments.entries()) {
            await segment.hover();

            await expect(page.locator(TUI_HINT_LOCATORS.HOST)).toHaveCount(1);
            await expect(page.locator(TUI_HINT_LOCATORS.HOST)).toBeAttached();

            await expect
                .soft(example)
                .toHaveScreenshot(`01-pie-chart-with-label--hover-${i + 1}.png`);
        }
    });

    test.describe('respects [tuiHintDirection]', () => {
        // indexes of TUI_HINT_DIRECTIONS
        const directionIndex = {start: 7, end: 10, top: 4, bottom: 1} as const;

        // the hint follows the cursor, so the cursor position is the anchor point
        const openHint = async (
            page: Page,
            direction?: keyof typeof directionIndex,
        ): Promise<{hint: BoundingBox; pointer: {x: number; y: number}}> => {
            await tuiGoto(
                page,
                `${DemoRoute.PieChart}/API?tuiHintContent$=1${direction ? `&tuiHintDirection$=${directionIndex[direction]}` : ''}`,
            );

            const {demo} = new TuiDocumentationPagePO(page);
            const chart = demo.locator('tui-pie-chart');
            const hint = page.locator(TUI_HINT_LOCATORS.HOST);
            const box = (await chart.boundingBox())!;
            const position = {x: box.width * 0.75, y: box.height / 2};

            await chart.hover({position});
            await expect(hint).toBeVisible();

            return {
                hint: (await hint.boundingBox())!,
                pointer: {x: box.x + position.x, y: box.y + position.y},
            };
        };

        test('start', async ({page}) => {
            const {hint, pointer} = await openHint(page, 'start');

            expect(hint.x + hint.width).toBeLessThanOrEqual(pointer.x);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '02-pie-chart-hint-start.png',
            );
        });

        test('end', async ({page}) => {
            const {hint, pointer} = await openHint(page, 'end');

            expect(hint.x).toBeGreaterThanOrEqual(pointer.x);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '03-pie-chart-hint-end.png',
            );
        });

        test('top', async ({page}) => {
            const {hint, pointer} = await openHint(page, 'top');

            expect(hint.y + hint.height).toBeLessThanOrEqual(pointer.y);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '04-pie-chart-hint-top.png',
            );
        });

        test('bottom', async ({page}) => {
            const {hint, pointer} = await openHint(page, 'bottom');

            expect(hint.y).toBeGreaterThanOrEqual(pointer.y);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '05-pie-chart-hint-bottom.png',
            );
        });

        test('default', async ({page}) => {
            const {hint, pointer} = await openHint(page);

            // top-end
            expect(hint.y + hint.height).toBeLessThanOrEqual(pointer.y);
            expect(hint.x + hint.width / 2).toBeGreaterThan(pointer.x);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '06-pie-chart-hint-default-top-end.png',
            );
        });
    });
});
