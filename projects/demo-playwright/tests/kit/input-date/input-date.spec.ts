import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

import {TuiCalendarPO, TuiInputDatePO} from '../../../utils';

test.describe('InputDate', () => {
    test.describe('API', () => {
        let documentationPage: TuiDocumentationPagePO;
        let example: Locator;
        let inputDate!: TuiInputDatePO;
        let calendar!: TuiCalendarPO;

        test.use({
            viewport: {
                width: 600,
                height: 800,
            },
        });

        test.beforeEach(({page}) => {
            documentationPage = new TuiDocumentationPagePO(page);
            example = documentationPage.apiPageExample;

            inputDate = new TuiInputDatePO(example.locator('tui-input-date'));
            calendar = new TuiCalendarPO(inputDate.calendar);
        });

        test('Click any day after `Until today` was selected', async ({page}) => {
            await tuiGoto(page, 'components/input-date/API?items$=1');

            await inputDate.textfield.click();
            await inputDate.clickItemButton();

            await inputDate.textfield.click();
            await calendar.clickOnCalendarDay(1);

            await expect(inputDate.textfield).toHaveScreenshot('01-input-date.png');
        });
    });
});
