import {DemoRoute} from '@demo/routes';
import {
    TuiCalendarPO,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputDatePO,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

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

        test('correct filler display for size', async ({page}) => {
            const example = documentationPage.getExample('#sizes');

            await documentationPage.prepareBeforeScreenshot();

            for (const size of ['s', 'm', 'l']) {
                const input = example
                    .locator(`[tuiTextFieldSize="${size}"]`)
                    .getByTestId('tui-primitive-textfield__native-input');

                await input.scrollIntoViewIfNeeded();
                await input.click();

                await expect(page).toHaveScreenshot(`01-01-input-date-${size}.png`);

                await input.clear();

                await expect(page).toHaveScreenshot(`01-02-input-date-${size}.png`);

                await input.focus();
                await page.keyboard.type('01.');

                await expect(page).toHaveScreenshot(`01-03-input-date-${size}.png`);

                await input.focus();
                await page.keyboard.type('06.1994');

                await expect(page).toHaveScreenshot(`01-04-input-date-${size}.png`);
            }
        });

        test.describe('with `input[tuiTextfieldLegacy]` inside', () => {
            test('filler has no change detection problems', async () => {
                const example = documentationPage.getExample('#date-localization');
                const inputDate = new TuiInputDatePO(example.locator('tui-input-date'));

                /**
                 * To ensure that example is not changed and
                 * still contains InputDate with projected <input tuiTextfieldLegacy>
                 */
                await expect(
                    inputDate.host.locator('input[tuiTextfieldLegacy]'),
                ).toBeAttached();

                await inputDate.textfield.focus();

                await expect(inputDate.host).toHaveScreenshot(
                    '14-backspace-pressed-0-times.png',
                );

                for (let i = 1; i <= 8; i++) {
                    await inputDate.textfield.press('Backspace');

                    await expect(inputDate.host).toHaveScreenshot(
                        `14-backspace-pressed-${i}-times.png`,
                    );
                }

                await expect(inputDate.textfield).toHaveValue('');
            });
        });

        test('Actual min/max in calendar', async () => {
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

            inputDate = new TuiInputDatePO(example.locator('tui-input-date'));

            calendar = new TuiCalendarPO(inputDate.calendar);
        });

        ['s', 'm', 'l'].forEach((size) => {
            test(`correct filler display for size=${size}`, async ({page}) => {
                await tuiGoto(
                    page,
                    `/components/input-date/API?tuiTextfieldSize=${size}`,
                );

                await inputDate.textfield.click();
                await documentationPage.prepareBeforeScreenshot();

                await expect(page).toHaveScreenshot(`02-01-input-date-${size}.png`);

                await page.keyboard.type('01.');

                await expect(page).toHaveScreenshot(`02-02-input-date-${size}.png`);

                await page.keyboard.type('06.1994');

                await expect(page).toHaveScreenshot(`02-03-input-date-${size}.png`);
            });
        });

        test('maximum month less than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDate}/API?max$=1`);

            await inputDate.textfield.scrollIntoViewIfNeeded();
            await inputDate.textfield.click();
            await documentationPage.prepareBeforeScreenshot();

            await expect(page).toHaveScreenshot('03-input-date.png');
        });

        test('minimum month more than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDate}/API?min$=3`);

            await inputDate.textfield.scrollIntoViewIfNeeded();
            await inputDate.textfield.click();
            await documentationPage.prepareBeforeScreenshot();

            await expect(page).toHaveScreenshot('04-input-date.png');
        });

        test.describe('Invalid date cases', () => {
            test('does not accept day > 31', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputDate}/API`);
                await inputDate.textfield.scrollIntoViewIfNeeded();
                await inputDate.textfield.focus();
                await page.keyboard.type('35');

                await expect(inputDate.textfield).toHaveJSProperty('selectionStart', 1);
                await expect(inputDate.textfield).toHaveJSProperty('selectionEnd', 1);
                await expect(inputDate.textfield).toHaveScreenshot('05-input-date.png');
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
                await expect(inputDate.textfield).toHaveScreenshot('06-input-date.png');
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
                await expect(inputDate.textfield).toHaveScreenshot('07-input-date.png');
            });
        });

        test('Click any day after `Until today` was selected', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDate}/API?items$=1`);

            await inputDate.textfield.click();
            await calendar.itemButton.click();

            await inputDate.textfield.click();

            const [calendarSheet] = await calendar.getCalendarSheets();

            await calendarSheet?.clickOnDay(1);

            await expect(inputDate.textfield).toHaveScreenshot('10-input-date.png');
        });

        test('Click `Until today`, calendar not switched to large date', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.InputDate}/API?items$=1`);

            await inputDate.textfield.click();
            await calendar.itemButton.click();

            await inputDate.textfield.click();

            await expect(inputDate.calendar).toHaveScreenshot('11-input-date.png');
        });

        test('Press backspace to remove `Until today`, textfield is empty', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.InputDate}/API?items$=1`);

            await inputDate.textfield.click();
            await calendar.itemButton.click();

            await inputDate.textfield.focus();
            await inputDate.textfield.press('Backspace');

            await expect(inputDate.textfield).toHaveValue('');
            await expect(inputDate.textfield).toHaveScreenshot('12-input-date.png');
        });

        test('Enter item date, it converts to item name', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDate}/API?items$=1`);

            await inputDate.textfield.focus();
            await inputDate.textfield.fill('31.12.9998');

            await expect(inputDate.textfield).toHaveValue('Until today');
            await expect(inputDate.textfield).toHaveScreenshot('13-input-date.png');
        });
    });

    test.describe('Mobile', () => {
        test.use({
            viewport: {
                width: 414,
                height: 896,
            }, // Iphone XR
            userAgent: TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
        });

        ['russian', 'english', 'spanish'].forEach((language) => {
            test(`mobile calendar - ${language}`, async ({page}) => {
                await tuiGoto(page, DemoRoute.InputDate, {language});
                const api = new TuiDocumentationPagePO(page);
                const example = api.getExample('#base');

                await example.scrollIntoViewIfNeeded();
                await api.prepareBeforeScreenshot();
                await example.locator('tui-input-date .t-icon tui-icon').click();

                await expect(page).toHaveScreenshot(`08-input-date-${language}.png`);
            });
        });

        test('native data picker', async ({page}) => {
            await tuiGoto(page, DemoRoute.InputDate);
            const example = new TuiDocumentationPagePO(page).getExample(
                '#native-input-date',
            );

            await example.scrollIntoViewIfNeeded();
            await example.locator('tui-input-date input[type="date"]').fill('2010-03-14');

            await expect(example).toHaveScreenshot('09-input-date.png');
        });
    });
});
