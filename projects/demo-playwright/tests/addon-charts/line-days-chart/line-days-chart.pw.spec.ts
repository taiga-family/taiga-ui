import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

async function hoverChart(chart: Locator, fraction: number): Promise<void> {
    await chart.scrollIntoViewIfNeeded();

    const {x, y, width, height} = (await chart.boundingBox())!;

    await chart.page().mouse.move(x + width * fraction, y + height / 2);
}

test.describe('LineDaysChart', () => {
    test.use({viewport: {width: 1280, height: 800}});

    for (const hint of [false, true]) {
        test.describe(`Hint: ${hint}`, () => {
            test.beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.LineDaysChart}/API?yStringify$=0&xStringify$=0${hint ? '&hintContent$=1' : ''}`,
                );
            });

            test('highlights a day in the left half', async ({page}) => {
                const {demo} = new TuiDocumentationPagePO(page);

                await hoverChart(demo.locator('tui-axes'), 0.2);
                await expect(demo.getByText(/January, \d+/)).toBeVisible();
                await expect(page.locator('tui-hint')).toBeVisible({visible: hint});
                await expect(demo).toHaveScreenshot(`left-hint-${hint}.png`);
            });

            test('moves the highlight from the left half to the right half', async ({
                page,
            }) => {
                const {demo} = new TuiDocumentationPagePO(page);
                const chart = demo.locator('tui-axes');

                await hoverChart(chart, 0.2);
                await expect(demo.getByText(/January, \d+/)).toBeVisible();
                await expect(page.locator('tui-hint')).toBeVisible({visible: hint});
                await hoverChart(chart, 0.55);
                await expect(demo.getByText(/February, \d+/)).toBeVisible();
                await expect(page.locator('tui-hint')).toBeVisible({visible: hint});
                await expect(demo).toHaveScreenshot(`right-hint-${hint}.png`);
            });

            test('does not leave a second highlight after clicking a day', async ({
                page,
            }) => {
                const {demo} = new TuiDocumentationPagePO(page);
                const chart = demo.locator('tui-axes');

                await hoverChart(chart, 0.2);
                await expect(demo.getByText(/January, \d+/)).toBeVisible();
                await expect(page.locator('tui-hint')).toBeVisible({visible: hint});
                await page.mouse.down();
                await page.mouse.up();
                await hoverChart(chart, 0.55);
                await expect(demo.getByText(/February, \d+/)).toBeVisible();
                await expect(page.locator('tui-hint')).toBeVisible({visible: hint});
                await expect(demo).toHaveScreenshot(`right-hint-${hint}.png`);
            });

            test('clears the highlight when the mouse leaves', async ({page}) => {
                const {demo} = new TuiDocumentationPagePO(page);

                await hoverChart(demo.locator('tui-axes'), 0.2);
                await expect(demo.getByText(/January, \d+/)).toBeVisible();
                await expect(page.locator('tui-hint')).toBeVisible({visible: hint});
                await page.mouse.move(0, 0);
                await expect(page.locator('tui-hint')).toBeHidden();
                await expect(demo).toHaveScreenshot(`leave-hint-${hint}.png`);
            });
        });
    }

    test('shows values of all series in a grouped hint', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.LineDaysChart}#complex`);

        const example = new TuiDocumentationPagePO(page).getExample('#complex');

        await hoverChart(example.locator('tui-axes'), 0.2);
        await expect(page.locator('tui-hint')).toContainText('$100');
        await expect(page.locator('tui-hint')).toContainText('$75');
        await expect(page.locator('tui-hint')).toContainText('$50');
    });
});
