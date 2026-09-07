import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';
import {TUI_HINT_LOCATORS} from '@taiga-ui/testing/locators';

test.describe('PieChart', () => {
    test('should be show hints on charts', async ({page}) => {
        await tuiGoto(page, DemoRoute.PieChart);

        const example = new TuiDocumentationPagePO(page).getExample('#labels');
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
});
