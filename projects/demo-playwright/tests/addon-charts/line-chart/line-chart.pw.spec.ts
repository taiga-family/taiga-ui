import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('LineChart', () => {
    test.beforeEach(async ({page}, testInfo) => {
        await PerformanceCollector.startTestCollection(
            page,
            testInfo.titlePath.join(' › '),
            testInfo.file,
        );
    });

    test.afterEach(async ({page}, testInfo) => {
        await PerformanceCollector.stopTestCollection(
            page,
            testInfo.titlePath.join(' › '),
        );
    });

    test('should not show hint', async ({page}) => {
        await tuiGoto(page, DemoRoute.LineChart);
        const example = new TuiDocumentationPagePO(page).getExample('#line');
        const chartColumn = example.locator('tui-line-chart .t-column').first();

        await chartColumn.hover();

        await expect.soft(example).toHaveScreenshot('01-line-chart.png');
    });
});
