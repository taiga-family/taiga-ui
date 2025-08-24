import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputMonthRangePO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

test.describe('InputMonthRange', () => {
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

    test.describe('API', () => {
        let documentationPage: TuiDocumentationPagePO;
        let example: Locator;
        let inputMonthRange: TuiInputMonthRangePO;

        test.use({
            viewport: {width: 360, height: 500},
        });

        test.beforeEach(({page}) => {
            documentationPage = new TuiDocumentationPagePO(page);
            example = documentationPage.apiPageExample;
            inputMonthRange = new TuiInputMonthRangePO(
                example.locator('tui-input-month-range'),
            );
        });

        test('Maximum month less than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputMonthRange}/API?max$=1`);
            await inputMonthRange.textfield.click();

            await documentationPage.prepareBeforeScreenshot();

            await expect
                .soft(page)
                .toHaveScreenshot('input-month-range-maximum-month.png');
        });

        test('Minimum month more than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputMonthRange}/API?min$=3`);
            await inputMonthRange.textfield.click();

            await documentationPage.prepareBeforeScreenshot();

            await expect
                .soft(page)
                .toHaveScreenshot('input-month-range-minimum-month.png');
        });
    });
});
