import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`PieChart`, () => {
    test(`should be show hints on charts`, async ({page}) => {
        await tuiGoto(page, `charts/pie-chart`);

        const example = new TuiDocumentationPagePO(page).getExample(`#labels`);
        const pieChartSegments = await example
            .locator(`[automation-id="tui-pie-chart__segment"]`)
            .all();

        await expect(example).toHaveScreenshot(`01-pie-chart-with-label-no-hover.png`);

        await Promise.all(
            Array.from(pieChartSegments.entries()).map(async ([i, segment]) => {
                await segment.hover();

                await expect(page.locator(`tui-hint`)).toHaveCount(1);
                await expect(page.locator(`tui-hint`)).toBeAttached();

                await expect(example).toHaveScreenshot(
                    `01-pie-chart-with-label--hover-${i + 1}.png`,
                );
            }),
        );
    });
});
