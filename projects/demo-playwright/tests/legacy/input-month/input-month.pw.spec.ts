import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiInputMonthPO} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('InputMonth', () => {
    test.describe('API', () => {
        let documentationPage: TuiDocumentationPagePO;
        let example: Locator;
        let inputMonth: TuiInputMonthPO;

        test.use({
            viewport: {width: 360, height: 410},
        });

        test.beforeEach(({page}) => {
            documentationPage = new TuiDocumentationPagePO(page);
            example = documentationPage.apiPageExample;
            inputMonth = new TuiInputMonthPO(
                example.locator('tui-textfield:has([tuiInputMonth])'),
            );
        });

        test('Maximum month less than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputMonth}/API?max$=1`);
            await inputMonth.textfield.click();

            await documentationPage.prepareBeforeScreenshot();

            await expect.soft(page).toHaveScreenshot('input-month-maximum-month.png');
        });

        test('Minimum month more than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputMonth}/API?min$=6`);
            await inputMonth.textfield.click();

            await documentationPage.prepareBeforeScreenshot();

            await expect.soft(page).toHaveScreenshot('input-month-minimum-month.png');
        });
    });
});
