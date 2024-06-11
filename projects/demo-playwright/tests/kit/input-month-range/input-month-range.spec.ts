import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputMonthRangePO,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('InputMonthRange', () => {
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
            await expect(page).toHaveScreenshot('input-month-range-maximum-month.png');
        });

        test('Minimum month more than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputMonthRange}/API?min$=3`);
            await inputMonthRange.textfield.click();

            await documentationPage.prepareBeforeScreenshot();
            await expect(page).toHaveScreenshot('input-month-range-minimum-month.png');
        });
    });
});
