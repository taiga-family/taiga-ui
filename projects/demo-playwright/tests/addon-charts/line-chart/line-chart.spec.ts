import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`LineChart`, () => {
    test(`should not show hint`, async ({page}) => {
        await tuiGoto(page, `charts/line-chart`);
        const example = new TuiDocumentationPagePO(page).getExample(`#line`);
        const lineChart = example
            .locator(`tui-line-chart-example-1 tui-line-chart .t-column`)
            .first();

        await lineChart.hover();
        await expect(lineChart).toHaveScreenshot(`01-line-chart.png`);
    });
});
