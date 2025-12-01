import {DemoRoute} from '@demo/routes';
import {
    TuiCalendarPO,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputDatePO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE_USER_AGENT} from '../../../playwright.options';

test.describe('InputDate', () => {
    test.describe('Examples', () => {
        let documentationPage!: TuiDocumentationPagePO;

        test.use({
            viewport: {
                width: 450,
                height: 650,
            },
        });

        test.beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.InputDate);

            documentationPage = new TuiDocumentationPagePO(page);
        });

        test('Actual min/max in calendar', async () => {
            const example = documentationPage.getExample('#basic');

            const inputDate = new TuiInputDatePO(
                example.locator('tui-textfield:has(input[tuiInputDate])'),
            );

            await inputDate.textfield.click();

            await expect
                .soft(inputDate.textfield)
                .toHaveScreenshot('05-input-actual-min-max.png');
            await expect
                .soft(inputDate.calendar)
                .toHaveScreenshot('05-calendar-actual-min-max.png');
        });
    });

    test.describe('API', () => {
        let documentationPage: TuiDocumentationPagePO;
        let example: Locator;

        let inputDate!: TuiInputDatePO;
        let calendar!: TuiCalendarPO;

        test.use({
            viewport: {
                width: 400,
                height: 500,
            },
        });

        test.beforeEach(({page}) => {
            documentationPage = new TuiDocumentationPagePO(page);
            example = documentationPage.apiPageExample;

            inputDate = new TuiInputDatePO(
                example.locator('tui-textfield:has(input[tuiInputDate])'),
            );

            calendar = new TuiCalendarPO(inputDate.calendar);
        });

        ['s', 'm', 'l'].forEach((size) => {
            test(`correct filler display for size=${size}`, async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputDate}/API?tuiTextfieldSize=${size}`,
                );

                await inputDate.textfield.click();
                await documentationPage.prepareBeforeScreenshot();

                await expect.soft(page).toHaveScreenshot(`02-01-input-date-${size}.png`);

                await page.keyboard.type('01.');

                await expect.soft(page).toHaveScreenshot(`02-02-input-date-${size}.png`);

                await page.keyboard.type('06.1994');

                await expect.soft(page).toHaveScreenshot(`02-03-input-date-${size}.png`);
            });
        });

        test('maximum month less than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDate}/API?max$=1`);

            await inputDate.textfield.scrollIntoViewIfNeeded();
            await inputDate.textfield.click();
            await documentationPage.prepareBeforeScreenshot();

            await expect.soft(page).toHaveScreenshot('03-input-date.png');
        });

        test('minimum month more than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDate}/API?min$=3`);

            await inputDate.textfield.scrollIntoViewIfNeeded();
            await inputDate.textfield.click();
            await documentationPage.prepareBeforeScreenshot();

            await expect.soft(page).toHaveScreenshot('04-input-date.png');
        });

        test.describe('Invalid date cases', () => {
            test('does not accept day > 31', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputDate}/API`);
                await inputDate.textfield.scrollIntoViewIfNeeded();
                await inputDate.textfield.focus();
                await page.keyboard.type('35');

                await expect(inputDate.textfield).toHaveValue('03.05');
                await expect(inputDate.textfield).toHaveJSProperty(
                    'selectionStart',
                    '03.05'.length,
                );
                await expect(inputDate.textfield).toHaveJSProperty(
                    'selectionEnd',
                    '03.05'.length,
                );
                await expect
                    .soft(inputDate.textfield)
                    .toHaveScreenshot('05-input-date.png');
            });

            test('does not accept month > 12', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputDate}/API`);
                await inputDate.textfield.scrollIntoViewIfNeeded();
                await inputDate.textfield.focus();
                await page.keyboard.type('1715');

                await expect(inputDate.textfield).toHaveJSProperty(
                    'selectionStart',
                    '17.1'.length,
                );
                await expect(inputDate.textfield).toHaveJSProperty(
                    'selectionEnd',
                    '17.1'.length,
                );
                await expect
                    .soft(inputDate.textfield)
                    .toHaveScreenshot('06-input-date.png');
            });

            test('Type 999999 => 09.09.9999', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputDate}/API`);
                await inputDate.textfield.scrollIntoViewIfNeeded();
                await inputDate.textfield.focus();
                await page.keyboard.type('999999');

                await expect(inputDate.textfield).toHaveJSProperty(
                    'selectionStart',
                    '09.09.9999'.length,
                );
                await expect(inputDate.textfield).toHaveJSProperty(
                    'selectionEnd',
                    '09.09.9999'.length,
                );
                await expect
                    .soft(inputDate.textfield)
                    .toHaveScreenshot('07-input-date.png');
            });
        });
    });
});
