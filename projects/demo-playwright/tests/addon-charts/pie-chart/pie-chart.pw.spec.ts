import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('PieChart', () => {
    test('should be show hints on charts', async ({page}) => {
        await tuiGoto(page, DemoRoute.PieChart);

        const example = new TuiDocumentationPagePO(page).getExample('#labels');
        const pieChartSegments = await example
            .getByTestId('tui-pie-chart__segment')
            .all();

        await expect(example).toHaveScreenshot('01-pie-chart-with-label-no-hover.png');

        for (const [i, segment] of pieChartSegments.entries()) {
            await segment.hover();

            await expect(page.locator('tui-hint')).toHaveCount(1);
            await expect(page.locator('tui-hint')).toBeAttached();

            await expect(example).toHaveScreenshot(
                `01-pie-chart-with-label--hover-${i + 1}.png`,
            );
        }
    });
});
