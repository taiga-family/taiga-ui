import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

import {TuiCalendarPO, TuiInputDatePO} from '../../../utils';

test.describe('InputDate', () => {
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

    test.describe('API', () => {
        test('Click any day after `Until today` was selected', async ({page}) => {
            await tuiGoto(page, 'components/input-date/API?items$=1');

            await inputDate.textfield.click();
            await calendar.itemButton.click();

            await inputDate.textfield.click();

            const [calendarSheet] = await calendar.getCalendarSheets();

            await calendarSheet?.clickOnDay(1);

            await expect(inputDate.textfield).toHaveScreenshot('01-input-date.png');
        });

        test('Click `Until today`, calendar not switched to large date', async ({
            page,
        }) => {
            await tuiGoto(page, 'components/input-date/API?items$=1');

            await inputDate.textfield.click();
            await calendar.itemButton.click();

            await inputDate.textfield.click();

            await expect(inputDate.textfield).toHaveValue('Until today');
            await expect(inputDate.calendar).toHaveScreenshot(
                '02-input-date-calendar.png',
            );
        });

        test('Press backspace to remove `Until today`, textfield is empty', async ({
            page,
        }) => {
            await tuiGoto(page, 'components/input-date/API?items$=1');

            await inputDate.textfield.click();
            await calendar.itemButton.click();

            await inputDate.textfield.focus();
            await inputDate.textfield.press('Backspace');

            await expect(inputDate.textfield).toHaveValue('');
            await expect(inputDate.textfield).toHaveScreenshot(
                '03-input-date-textfield-empty.png',
            );
        });

        test('Enter item date, it converts to item date name', async ({page}) => {
            await tuiGoto(page, 'components/input-date/API?items$=1');

            await inputDate.textfield.focus();
            await inputDate.textfield.fill('31.12.9998');

            await expect(inputDate.textfield).toHaveValue('Until today');
            await expect(inputDate.textfield).toHaveScreenshot(
                '04-input-date-item-name.png',
            );
        });
    });

    test.describe('Examples', () => {
        test('Actual min/max in calendar', async ({page}) => {
            await tuiGoto(page, 'components/input-date');

            const example = documentationPage.getExample('#base');

            const inputDate = new TuiInputDatePO(example.locator('tui-input-date'));

            await inputDate.textfield.click();

            await expect(inputDate.textfield).toHaveScreenshot(
                '05-input-actual-min-max.png',
            );
            await expect(inputDate.calendar).toHaveScreenshot(
                '05-calendar-actual-min-max.png',
            );
        });
    });
});
