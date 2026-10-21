import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, type Page, test} from '@playwright/test';

type BoundingBox = NonNullable<Awaited<ReturnType<Locator['boundingBox']>>>;

test.describe('BarChart', () => {
    test.describe('respects [tuiHintDirection]', () => {
        // indexes of directions in TuiDocHint:
        // TUI_HINT_DIRECTIONS + ['bottom', 'start'] + ['bottom', 'top']
        const directionIndex = {
            start: 7,
            end: 10,
            top: 4,
            bottom: 1,
            bottomThenTop: 13,
        } as const;

        const openHint = async (
            page: Page,
            direction?: keyof typeof directionIndex,
        ): Promise<{bars: BoundingBox; hint: BoundingBox}> => {
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
            };
        };

        const getCenter = ({x, width}: BoundingBox): number => x + width / 2;

        test('start', async ({page}) => {
            const {bars, hint} = await openHint(page, 'start');

            expect(hint.x + hint.width).toBeLessThanOrEqual(getCenter(bars));
            // next to the top of the bars
            expect(hint.y).toBeLessThan(bars.y);
            expect(hint.y + hint.height).toBeGreaterThan(bars.y);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '01-bar-chart-hint-start.png',
            );
        });

        test('end', async ({page}) => {
            const {bars, hint} = await openHint(page, 'end');

            expect(hint.x).toBeGreaterThanOrEqual(getCenter(bars));
            // next to the top of the bars
            expect(hint.y).toBeLessThan(bars.y);
            expect(hint.y + hint.height).toBeGreaterThan(bars.y);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '02-bar-chart-hint-end.png',
            );
        });

        test('top', async ({page}) => {
            const {bars, hint} = await openHint(page, 'top');

            expect(hint.y + hint.height).toBeLessThanOrEqual(bars.y);
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
            const {bars, hint} = await openHint(page);

            expect(hint.y + hint.height).toBeLessThanOrEqual(bars.y);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '05-bar-chart-hint-default-top.png',
            );
        });

        test('[bottom, top] falls back to top above the bars', async ({page}) => {
            // enough space for the hint at the top of the bars, but not below them
            await page.setViewportSize({width: 750, height: 555});
            const {bars, hint} = await openHint(page, 'bottomThenTop');

            expect(hint.y + hint.height).toBeLessThanOrEqual(bars.y);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '06-bar-chart-hint-bottom-top-fallback.png',
            );
        });
    });
});
