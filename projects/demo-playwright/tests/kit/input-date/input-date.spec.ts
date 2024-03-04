import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE_USER_AGENT} from '../../../playwright.options';

test.describe('InputDate', () => {
    test.describe('Examples', () => {
        test.use({
            viewport: {
                width: 450,
                height: 650,
            },
        });

        test('correct filler display for size', async ({page}) => {
            await tuiGoto(page, '/components/input-date');

            const api = new TuiDocumentationPagePO(page);
            const example = api.getExample('#sizes');

            await api.prepareBeforeScreenshot(':not(#sizes)');

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
    });

    test.describe('API', () => {
        let api: TuiDocumentationPagePO;
        let input: Locator;

        test.use({
            viewport: {
                width: 400,
                height: 500,
            },
        });

        test.beforeEach(({page}) => {
            api = new TuiDocumentationPagePO(page);
            input = api.apiPageExample.getByTestId(
                'tui-primitive-textfield__native-input',
            );
        });

        ['s', 'm', 'l'].forEach(size => {
            test(`correct filler display for size=${size}`, async ({page}) => {
                await tuiGoto(
                    page,
                    `/components/input-date/API?tuiTextfieldSize=${size}`,
                );

                await input.click();
                await api.prepareBeforeScreenshot();
                await expect(page).toHaveScreenshot(`02-01-input-date-${size}.png`);
                await page.keyboard.type('01.');
                await expect(page).toHaveScreenshot(`02-02-input-date-${size}.png`);
                await page.keyboard.type('06.1994');
                await expect(page).toHaveScreenshot(`02-03-input-date-${size}.png`);
            });
        });

        test('maximum month less than current month', async ({page}) => {
            await tuiGoto(page, '/components/input-date/API?max$=1');

            await input.scrollIntoViewIfNeeded();
            await input.click();
            await api.prepareBeforeScreenshot();
            await expect(page).toHaveScreenshot('03-input-date.png');
        });

        test('minimum month more than current month', async ({page}) => {
            await tuiGoto(page, '/components/input-date/API?min$=3');

            await input.scrollIntoViewIfNeeded();
            await input.click();
            await api.prepareBeforeScreenshot();
            await expect(page).toHaveScreenshot('04-input-date.png');
        });

        test.describe('Invalid date cases', () => {
            test('does not accept day > 31', async ({page}) => {
                await tuiGoto(page, '/components/input-date/API');
                await input.scrollIntoViewIfNeeded();
                await input.focus();
                await page.keyboard.type('35');
                await expect(input).toHaveJSProperty('selectionStart', 1);
                await expect(input).toHaveJSProperty('selectionEnd', 1);
                await expect(input).toHaveScreenshot('05-input-date.png');
            });

            test('does not accept month > 12', async ({page}) => {
                await tuiGoto(page, '/components/input-date/API');
                await input.scrollIntoViewIfNeeded();
                await input.focus();
                await page.keyboard.type('1715');
                await expect(input).toHaveJSProperty('selectionStart', '17.1'.length);
                await expect(input).toHaveJSProperty('selectionEnd', '17.1'.length);
                await expect(input).toHaveScreenshot('06-input-date.png');
            });

            test('Type 999999 => 09.09.9999', async ({page}) => {
                await tuiGoto(page, '/components/input-date/API');
                await input.scrollIntoViewIfNeeded();
                await input.focus();
                await page.keyboard.type('999999');
                await expect(input).toHaveJSProperty(
                    'selectionStart',
                    '09.09.9999'.length,
                );
                await expect(input).toHaveJSProperty('selectionEnd', '09.09.9999'.length);
                await expect(input).toHaveScreenshot('07-input-date.png');
            });
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

        ['russian', 'english', 'spanish'].forEach(language => {
            test(`mobile calendar - ${language}`, async ({page}) => {
                await tuiGoto(page, '/components/input-date', {language});
                const api = new TuiDocumentationPagePO(page);
                const example = api.getExample('#base');

                await example.scrollIntoViewIfNeeded();
                await api.prepareBeforeScreenshot(':not(#base)');
                await example.locator('tui-input-date .t-icon tui-svg').click();
                await expect(page).toHaveScreenshot(`08-input-date-${language}.png`);
            });
        });

        test('native data picker', async ({page}) => {
            await tuiGoto(page, '/components/input-date');
            const example = new TuiDocumentationPagePO(page).getExample(
                '#native-input-date',
            );

            await example.scrollIntoViewIfNeeded();
            await example.locator('tui-input-date input[type="date"]').fill('2010-03-14');

            await expect(example).toHaveScreenshot('09-input-date.png');
        });
    });
});
