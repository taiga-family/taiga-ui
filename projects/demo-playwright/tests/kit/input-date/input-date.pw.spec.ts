import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiInputDatePO} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

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

            await expect.soft(inputDate.textfield).toHaveScreenshot();
            await expect.soft(inputDate.calendar).toHaveScreenshot();
        });
    });

    test.describe('API', () => {
        let documentationPage: TuiDocumentationPagePO;
        let example: Locator;

        let inputDate!: TuiInputDatePO;

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
        });

        ['s', 'm', 'l'].forEach((size) => {
            test(`correct filler display for size=${size}`, async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputDate}/API?tuiTextfieldSize=${size}`,
                );

                await inputDate.textfield.click();
                await documentationPage.prepareBeforeScreenshot();

                await expect.soft(page).toHaveScreenshot();

                await page.keyboard.type('01.');

                await expect.soft(page).toHaveScreenshot();

                await page.keyboard.type('06.1994');

                await expect.soft(page).toHaveScreenshot();
            });
        });

        test('maximum month less than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDate}/API?max$=1`);

            await inputDate.textfield.scrollIntoViewIfNeeded();
            await inputDate.textfield.click();
            await documentationPage.prepareBeforeScreenshot();

            await expect.soft(page).toHaveScreenshot();
        });

        test('minimum month more than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDate}/API?min$=3`);

            await inputDate.textfield.scrollIntoViewIfNeeded();
            await inputDate.textfield.click();
            await documentationPage.prepareBeforeScreenshot();

            await expect.soft(page).toHaveScreenshot();
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
                await expect.soft(inputDate.textfield).toHaveScreenshot();
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
                await expect.soft(inputDate.textfield).toHaveScreenshot();
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
                await expect.soft(inputDate.textfield).toHaveScreenshot();
            });
        });
    });
});
