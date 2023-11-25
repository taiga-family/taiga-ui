import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, Locator, test} from '@playwright/test';

import {TuiInputMonthRangePO} from '../../../utils/page-objects/input-month-range.po';

const {describe, beforeEach} = test;

describe(`InputMonthRange`, () => {
    describe(`API`, () => {
        let documentationPage: TuiDocumentationPagePO;
        let example: Locator;
        let inputMonthRange: TuiInputMonthRangePO;

        test.use({
            viewport: {width: 360, height: 500},
        });

        beforeEach(({page}) => {
            documentationPage = new TuiDocumentationPagePO(page);
            example = documentationPage.apiPageExample;
            inputMonthRange = new TuiInputMonthRangePO(
                example.locator(`tui-input-month-range`),
            );
        });

        test(`Maximum month less than current month`, async ({page}) => {
            await tuiGoto(page, `components/input-month-range/API?tuiMode=null&max$=1`);
            await inputMonthRange.textfield.click();

            await documentationPage.prepareApiPageBeforeScreenshot();
            await expect(page).toHaveScreenshot(`input-month-range-maximum-month.png`);
        });

        test(`Minimum month more than current month`, async ({page}) => {
            await tuiGoto(page, `components/input-month-range/API?tuiMode=null&min$=3`);
            await inputMonthRange.textfield.click();

            await documentationPage.prepareApiPageBeforeScreenshot();
            await expect(page).toHaveScreenshot(`input-month-range-minimum-month.png`);
        });
    });
});
