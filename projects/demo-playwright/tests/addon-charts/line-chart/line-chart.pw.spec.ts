import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, type Page, test} from '@playwright/test';
import {TUI_PLAYWRIGHT_MOBILE} from 'projects/demo-playwright/playwright.options';

type BoundingBox = NonNullable<Awaited<ReturnType<Locator['boundingBox']>>>;

test.describe('LineChart', () => {
    test.describe('Keyboard navigation', () => {
        test.beforeEach(async ({page}) => {
            await tuiGoto(page, `${DemoRoute.LineChart}#hint`);
            await page.mouse.move(0, 0);
            await page
                .locator('#hint')
                .getByRole('button', {name: 'Fullscreen', exact: true})
                .focus();
            await page.keyboard.press('Tab');
            await expect(page.locator('tui-hint')).toContainText('Vertical: 50');
            await expect(page.locator('tui-hint')).toContainText('Horizontal: 50');
        });

        test('Tab shows the next point', async ({page}) => {
            await page.keyboard.press('Tab');
            await expect(page.locator('tui-hint')).toContainText('Vertical: 75');
            await expect(page.locator('tui-hint')).toContainText('Horizontal: 100');
        });

        test('Shift+Tab shows the previous point', async ({page}) => {
            await page.keyboard.press('Tab');
            await expect(page.locator('tui-hint')).toContainText('Vertical: 75');
            await page.keyboard.press('Shift+Tab');
            await expect(page.locator('tui-hint')).toContainText('Vertical: 50');
        });

        test('Escape closes the hint', async ({page}) => {
            await page.keyboard.press('Escape');
            await expect(page.locator('tui-hint')).toBeHidden();
        });

        test('leaving the chart closes the hint', async ({page}) => {
            await page.keyboard.press('Shift+Tab');
            await expect(page.locator('tui-hint')).toBeHidden();
        });
    });

    test('keeps the hint open when the mouse enters it', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.LineChart}#hint`);
        await page
            .locator('#hint tui-axes')
            .first()
            .hover({position: {x: 300, y: 100}});

        const hint = page.locator('tui-hint');

        await expect(hint).toContainText('Vertical: 190');
        await hint.hover();
        await expect(page.locator('#hint')).toHaveScreenshot('hovering-hint.png');
        await expect(hint).toContainText('Vertical: 190');
    });

    test.describe('Touch', () => {
        test.use({
            ...TUI_PLAYWRIGHT_MOBILE,
            isMobile: true,
            hasTouch: true,
        });

        test('a second tap closes the hint', async ({page, browserName}) => {
            test.skip(browserName !== 'chromium', 'Chrome touch emulation');
            await tuiGoto(page, `${DemoRoute.LineChart}#hint`);

            const chart = page.locator('#hint tui-axes').first();

            await chart.hover({position: {x: 200, y: 100}});
            await chart.tap({position: {x: 200, y: 100}});
            await expect(page.locator('tui-hint')).toContainText('Vertical: 150');
            await chart.tap({position: {x: 200, y: 100}});
            await expect(page.locator('tui-hint')).toBeHidden();
        });
    });

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

        await tabs.filter({hasText: 'Layout'}).click();
        await page.waitForTimeout(1000);
        await tabs.filter({hasText: 'Preview'}).click();

        await expect.soft(example).toHaveScreenshot('03-line-chart.png');
    });

    test.describe('respects [tuiHintDirection]', () => {
        // indexes of TUI_HINT_DIRECTIONS
        const directionIndex = {start: 7, end: 10, top: 4, bottom: 1} as const;

        const openHint = async (
            page: Page,
            direction?: keyof typeof directionIndex,
        ): Promise<{hint: BoundingBox; point: BoundingBox}> => {
            await tuiGoto(
                page,
                `${DemoRoute.LineChart}/API?tuiLineChartHint$=0${direction ? `&tuiHintDirection$=${directionIndex[direction]}` : ''}`,
            );

            const {demo} = new TuiDocumentationPagePO(page);
            const hint = page.locator('tui-hint');

            await demo.locator('tui-line-chart .t-column').nth(3).hover();
            await expect(hint).toBeVisible();

            return {
                hint: (await hint.boundingBox())!,
                point: (await demo
                    .locator('tui-line-chart .t-host')
                    .first()
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

        test('default === top', async ({page}) => {
            const {hint, point} = await openHint(page);

            expect(hint.y + hint.height).toBeLessThanOrEqual(point.y);
            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                '08-line-chart-hint-default-top.png',
            );
        });
    });
});
