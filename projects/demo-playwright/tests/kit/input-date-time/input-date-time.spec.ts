import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputDateTimePO,
} from '@demo-playwright/utils';
import {expect, Locator, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('InputDateTime', () => {
    describe('API page', () => {
        let documentationPage: TuiDocumentationPagePO;
        let example: Locator;
        let inputDateTime: TuiInputDateTimePO;

        test.use({
            viewport: {width: 360, height: 500},
        });

        beforeEach(({page}) => {
            documentationPage = new TuiDocumentationPagePO(page);
            example = documentationPage.apiPageExample;
            inputDateTime = new TuiInputDateTimePO(
                example.locator('tui-input-date-time'),
            );
        });

        test('Maximum month less than current month', async ({page}) => {
            await tuiGoto(page, 'components/input-date-time/API?max$=1');
            await inputDateTime.textfield.click();

            await documentationPage.prepareApiPageBeforeScreenshot();
            await expect(page).toHaveScreenshot('01-maximum-month.png');
        });

        test('Minimum month more than current month', async ({page}) => {
            await tuiGoto(page, 'components/input-date-time/API?min$=3');
            await inputDateTime.textfield.click();

            await documentationPage.prepareApiPageBeforeScreenshot();
            await expect(page).toHaveScreenshot('02-minimum-month.png');
        });

        test('[max] property cannot be bypassed via selection', async ({page}) => {
            // max = [tomorrow, {hours: 16, minutes: 20, seconds: 0, ms: 0}]
            await tuiGoto(page, 'components/input-date-time/API?max$=4', {
                date: new Date(2018, 10, 1),
            });

            const maxValue = '02.11.2018, 16:20';

            await inputDateTime.textfield.fill(maxValue);
            await expect(inputDateTime.textfield).toHaveValue(maxValue);

            await inputDateTime.textfield.press('Shift+ArrowLeft'); // 02.11.2018, 16:2|0|
            await inputDateTime.textfield.type('5');
            await expect(inputDateTime.textfield).toHaveValue(maxValue);

            // valid case
            await inputDateTime.textfield.press('ArrowLeft+ArrowLeft+ArrowLeft'); // 02.11.2018, 16|:20
            await inputDateTime.textfield.press('Shift+ArrowLeft');
            await inputDateTime.textfield.type('2');
            await expect(inputDateTime.textfield).toHaveValue('02.11.2018, 12:20');
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionStart',
                '02.11.2018, 12:'.length,
            );
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionEnd',
                '02.11.2018, 12:'.length,
            );

            // invalid case
            await inputDateTime.textfield.press('Shift+ArrowLeft+ArrowLeft'); // 02.11.2018, 1|2:|20
            await inputDateTime.textfield.type('9');
            await expect(inputDateTime.textfield).toHaveValue(maxValue);
        });

        test('[min] property cannot be bypassed via selection', async ({page}) => {
            // min = [yesterday, {hours: 12, minutes: 20, seconds: 0, ms: 0}]
            await tuiGoto(page, 'components/input-date-time/API?min$=4', {
                date: new Date(2018, 10, 1),
            });

            const minValue = '31.10.2018, 12:20';

            await inputDateTime.textfield.focus();
            await inputDateTime.textfield.fill(minValue);
            await expect(inputDateTime.textfield).toHaveValue(minValue);

            await inputDateTime.textfield.press('ArrowLeft+Shift+ArrowLeft'); // 31.10.2018, 12:|2|0
            await inputDateTime.textfield.press('1');
            await expect(inputDateTime.textfield).toHaveValue(minValue);
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionStart',
                '31.10.2018, 12:2'.length,
            );
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionEnd',
                '31.10.2018, 12:2'.length,
            );

            // valid case
            await inputDateTime.textfield.press('ArrowLeft+ArrowLeft'); // 31.10.2018, 12|:20
            await inputDateTime.textfield.press('Shift+ArrowLeft'); // 31.10.2018, 1|2|:20
            await inputDateTime.textfield.press('5');
            await expect(inputDateTime.textfield).toHaveValue('31.10.2018, 15:20');
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionStart',
                '31.10.2018, 15:'.length,
            );
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionEnd',
                '31.10.2018, 15:'.length,
            );

            // invalid case
            await inputDateTime.textfield.press('Shift+ArrowLeft+ArrowLeft'); // 31.10.2018, 1|5:|20
            await inputDateTime.textfield.press('1');
            await expect(inputDateTime.textfield).toHaveValue(minValue);
        });

        test('should place caret before time after selection of a new date via calendar', async ({
            page,
        }) => {
            await tuiGoto(page, 'components/input-date-time/API');

            await inputDateTime.textfield.type('191120181235');
            await expect(inputDateTime.textfield).toHaveValue('19.11.2018, 12:35');
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionStart',
                '19.11.2018, 12:35'.length,
            );
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionEnd',
                '19.11.2018, 12:35'.length,
            );

            await inputDateTime.textfield.click();
            await inputDateTime.selectDayViaCalendar(15);

            await expect(inputDateTime.textfield).toHaveValue('15.11.2018, 12:35');
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionStart',
                '15.11.2018, '.length,
            );
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionEnd',
                '15.11.2018, '.length,
            );
        });

        test('should time to pre-fill with zeros on blur', async ({page}) => {
            await tuiGoto(page, '/components/input-date-time/API?timeMode=HH:MM:SS.MSS');

            await inputDateTime.textfield.fill('07.06.2024, 23:59');
            await inputDateTime.textfield.blur();

            await expect(inputDateTime.textfield).toHaveValue('07.06.2024, 23:59:00.000');
        });
    });

    describe('invalid date', () => {
        describe('DMY mode', () => {
            let inputDateTime!: TuiInputDateTimePO;

            beforeEach(async ({page}) => {
                const {apiPageExample} = new TuiDocumentationPagePO(page);

                inputDateTime = new TuiInputDateTimePO(
                    apiPageExample.locator('tui-input-date-time'),
                );

                await tuiGoto(page, 'components/input-date-time/API');
            });

            test('does not accept day > 31', async () => {
                await inputDateTime.textfield.type('32');
                await expect(inputDateTime.textfield).toHaveValue('3');
                await expect(inputDateTime.textfield).toHaveJSProperty(
                    'selectionStart',
                    1,
                );
                await expect(inputDateTime.textfield).toHaveJSProperty('selectionEnd', 1);
            });

            test('does not accept month > 12', async () => {
                await inputDateTime.textfield.type('2413');
                await expect(inputDateTime.textfield).toHaveValue('24.1');
                await expect(inputDateTime.textfield).toHaveJSProperty(
                    'selectionStart',
                    '24.1'.length,
                );
                await expect(inputDateTime.textfield).toHaveJSProperty(
                    'selectionEnd',
                    '24.1'.length,
                );
            });
        });

        describe('YMD mode', () => {
            let inputDateTime!: TuiInputDateTimePO;

            beforeEach(async ({page}) => {
                const example = new TuiDocumentationPagePO(page).getExample(
                    '#date-localization',
                );

                inputDateTime = new TuiInputDateTimePO(
                    example.locator('tui-input-date-time'),
                );

                await tuiGoto(page, 'components/input-date-time');
                await inputDateTime.textfield.clear();
            });

            test('does not accept day > 31', async () => {
                await inputDateTime.textfield.type('2023/05/35');
                await expect(inputDateTime.textfield).toHaveValue('2023/05/3');
                await expect(inputDateTime.textfield).toHaveJSProperty(
                    'selectionStart',
                    '2023/05/3'.length,
                );
                await expect(inputDateTime.textfield).toHaveJSProperty(
                    'selectionEnd',
                    '2023/05/3'.length,
                );
            });

            test('does not accept month > 12', async () => {
                await inputDateTime.textfield.type('2023/13');
                await expect(inputDateTime.textfield).toHaveValue('2023/1');
                await expect(inputDateTime.textfield).toHaveJSProperty(
                    'selectionStart',
                    '2023/1'.length,
                );
                await expect(inputDateTime.textfield).toHaveJSProperty(
                    'selectionEnd',
                    '2023/1'.length,
                );
            });
        });
    });

    test.describe('Examples', () => {
        let example!: Locator;
        let documentationPage!: TuiDocumentationPagePO;
        let inputDateTime!: TuiInputDateTimePO;

        test.beforeEach(async ({page}) => {
            await tuiGoto(page, 'components/input-date-time');

            documentationPage = new TuiDocumentationPagePO(page);
            example = documentationPage.apiPageExample;

            inputDateTime = new TuiInputDateTimePO(
                example.locator('tui-input-date-time'),
            );
        });

        test('With validator: enter incomplete date -> validator error', async () => {
            example = documentationPage.getExample('#with-validator');
            inputDateTime = new TuiInputDateTimePO(
                example.locator('tui-input-date-time'),
            );

            await inputDateTime.textfield.clear();
            await inputDateTime.textfield.fill('11');
            await inputDateTime.textfield.blur();

            // allow animations to capture tui-error validation message on screenshot
            await expect(example).toHaveScreenshot(
                '04-input-data-time-with-validator.png',
                {animations: 'allow'},
            );
        });

        test('Actual min/max in calendar', async () => {
            example = documentationPage.getExample('#base');
            inputDateTime = new TuiInputDateTimePO(
                example.locator('tui-input-date-time'),
            );

            await inputDateTime.textfield.click();

            await expect(inputDateTime.textfield).toHaveScreenshot(
                '05-input-date-time-actual-min-max.png',
            );
            await expect(inputDateTime.calendar).toHaveScreenshot(
                '05-input-date-time-calendar-actual-min-max.png',
            );
        });
    });
});
