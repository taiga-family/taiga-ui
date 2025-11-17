import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

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
        const tabs = page.locator('#line button[tuiTab]');

        await expect.soft(example).toHaveScreenshot('02-line-chart.png');

        await tabs.filter({hasText: 'HTML'}).click();
        await page.waitForTimeout(1000);
        await tabs.filter({hasText: 'Preview'}).click();

        await expect.soft(example).toHaveScreenshot('03-line-chart.png');
    });
});
