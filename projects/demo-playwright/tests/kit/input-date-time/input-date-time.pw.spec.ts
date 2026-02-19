import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputDateTimePO,
    TuiSelectPO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

test.describe('InputDateTime', () => {
    test.describe('API page', () => {
        let documentationPage: TuiDocumentationPagePO;
        let example: Locator;
        let inputDateTime: TuiInputDateTimePO;

        test.use({viewport: {width: 360, height: 500}});

        test.beforeEach(({page}) => {
            documentationPage = new TuiDocumentationPagePO(page);
            example = documentationPage.demo;
            inputDateTime = new TuiInputDateTimePO(
                example.locator('tui-textfield:has([tuiInputDateTime])'),
            );
        });

        test('Maximum month less than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateTime}/API?max$=0`);
            await inputDateTime.textfield.click();

            await documentationPage.prepareBeforeScreenshot();

            await expect(page).toHaveScreenshot('01-maximum-month.png');
        });

        test('Minimum month more than current month', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateTime}/API?min$=1`);
            await inputDateTime.textfield.click();

            await documentationPage.prepareBeforeScreenshot();

            await expect.soft(page).toHaveScreenshot('02-minimum-month.png');
        });

        test('[max] property cannot be bypassed via selection', async ({page}) => {
            // max = [tomorrow, {hours: 16, minutes: 20, seconds: 0, ms: 0}]
            await tuiGoto(page, `${DemoRoute.InputDateTime}/API?max$=4`, {
                date: new Date(2025, 11, 1),
            });

            const maxValue = '02.12.2025, 12:34';

            await inputDateTime.textfield.fill(maxValue);

            await expect(inputDateTime.textfield).toHaveValue(maxValue);

            await inputDateTime.textfield.press('Shift+ArrowLeft'); // 02.12.2025, 12:3|4|
            await inputDateTime.textfield.pressSequentially('5');

            await expect(inputDateTime.textfield).toHaveValue(maxValue);

            // valid case
            await inputDateTime.textfield.press('ArrowLeft+ArrowLeft+ArrowLeft'); // 02.11.2025, 12|:34
            await inputDateTime.textfield.press('Shift+ArrowLeft');
            await inputDateTime.textfield.pressSequentially('1');

            await expect(inputDateTime.textfield).toHaveValue('02.12.2025, 11:34');
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionStart',
                '02.11.2018, 11:'.length,
            );
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionEnd',
                '02.11.2018, 11:'.length,
            );

            // invalid case
            await inputDateTime.textfield.press('Shift+ArrowLeft+ArrowLeft'); // 02.11.2025, 1|2:|34
            await inputDateTime.textfield.pressSequentially('9');

            await expect(inputDateTime.textfield).toHaveValue(maxValue);
        });

        test('[min] property cannot be bypassed via selection', async ({page}) => {
            // min = [yesterday, {hours: 12, minutes: 20, seconds: 0, ms: 0}]
            await tuiGoto(page, `${DemoRoute.InputDateTime}/API?min$=4`, {
                date: new Date(2018, 10, 1),
            });

            const minValue = '02.11.2018, 12:34';

            await inputDateTime.textfield.focus();
            await inputDateTime.textfield.fill(minValue);

            await expect(inputDateTime.textfield).toHaveValue(minValue);

            await inputDateTime.textfield.press('ArrowLeft+Shift+ArrowLeft'); // 02.11.2018, 12:|3|4
            await inputDateTime.textfield.press('1');

            await expect(inputDateTime.textfield).toHaveValue(minValue);
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionStart',
                '02.11.2018, 12:3'.length,
            );
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionEnd',
                '02.11.2018, 12:3'.length,
            );

            // valid case
            await inputDateTime.textfield.press('ArrowLeft+ArrowLeft'); // 02.11.2018, 12|:34
            await inputDateTime.textfield.press('Shift+ArrowLeft'); // 02.11.2018, 1|2|:34
            await inputDateTime.textfield.press('5');

            await expect(inputDateTime.textfield).toHaveValue('02.11.2018, 15:34');
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionStart',
                '02.11.2018, 15:'.length,
            );
            await expect(inputDateTime.textfield).toHaveJSProperty(
                'selectionEnd',
                '02.11.2018, 15:'.length,
            );

            // invalid case
            await inputDateTime.textfield.press('Shift+ArrowLeft+ArrowLeft'); // 02.11.2018, 1|5:|34
            await inputDateTime.textfield.press('1');

            await expect(inputDateTime.textfield).toHaveValue(minValue);
        });

        test('should place caret before time after selection of a new date via calendar', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.InputDateTime}/API`);

            await inputDateTime.textfield.pressSequentially('191120181235');

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

        test('change filler on dynamic change of [timeMode] prop', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateTime}/API?timeMode=HH:MM`);
            await inputDateTime.textfield.focus();

            await expect
                .soft(inputDateTime.host)
                .toHaveScreenshot('03-timeMode=HH:MM.png');

            const timeModeRow = documentationPage.getRow('[timeMode]');
            const timeModeSelect = new TuiSelectPO(
                (await documentationPage.getSelect(timeModeRow))!,
            );

            await timeModeRow.locator('tui-textfield').click();
            await timeModeSelect.selectOptions([2]);

            await expect(
                timeModeRow.locator('tui-textfield').getByRole('combobox'),
            ).toHaveValue('HH:MM:SS');

            await inputDateTime.textfield.focus();

            await expect
                .soft(inputDateTime.host)
                .toHaveScreenshot('03-timeMode=HH:MM.SS.png');

            await timeModeRow.locator('tui-textfield').click();
            await timeModeSelect.selectOptions([4]);

            await expect(
                timeModeRow.locator('tui-textfield').getByRole('combobox'),
            ).toHaveValue('HH:MM:SS.MSS');

            await inputDateTime.textfield.focus();

            await expect
                .soft(inputDateTime.host)
                .toHaveScreenshot('03-timeMode=HH:MM:SS.MSS.png');
        });

        // TODO: remove skip after https://github.com/taiga-family/taiga-ui/issues/12707
        test.skip('should time to pre-fill with zeros on blur', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputDateTime}/API?timeMode=HH:MM:SS.MSS`);

            await inputDateTime.textfield.fill('07.06.2024, 23:59:59.');
            await inputDateTime.textfield.blur();

            await expect(inputDateTime.textfield).toHaveValue('07.06.2024, 23:59:00.000');
        });

        test.describe('AM / PM', () => {
            test.beforeEach(async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputDateTime}/API?timeMode=HH:MM%20AA`);
                await inputDateTime.textfield.pressSequentially('2092020');

                await expect(inputDateTime.textfield).toHaveValue('20.09.2020');
            });

            test('330a => 03:30 AM', async () => {
                await inputDateTime.textfield.pressSequentially('330a');

                await expect(inputDateTime.textfield).toHaveValue('20.09.2020, 03:30 AM');
            });

            test('330p => 03:30 PM', async () => {
                await inputDateTime.textfield.pressSequentially('330p');

                await expect(inputDateTime.textfield).toHaveValue('20.09.2020, 03:30 PM');
            });
        });

        test.describe('zero padding on blur', () => {
            const check = (typedCharacters: string, expectedFinalValue: string): void => {
                test(`Type ${typedCharacters} => Blur => ${expectedFinalValue}`, async () => {
                    await expect(inputDateTime.textfield).toHaveValue('');

                    await inputDateTime.textfield.pressSequentially(
                        `20.09.2020, ${typedCharacters}`,
                    );
                    await inputDateTime.textfield.blur();

                    await expect(inputDateTime.textfield).toHaveValue(
                        `20.09.2020, ${expectedFinalValue}`,
                    );
                });
            };

            test.describe('HH:MM', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputDateTime}/API?timeMode=HH:MM`);
                });

                check('1', '01:00');
                check('12', '12:00');
                check('12:', '12:00');
                check('123', '12:03');
                check('12:3', '12:03');
                check('12:34', '12:34');
            });

            test.describe('HH:MM AA', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputDateTime}/API?timeMode=HH:MM%20AA`,
                    );
                });

                check('0', '12:00 AM');
                check('01', '01:00 AM');
                check('012', '01:02 AM');
                check('0123', '01:23 AM');
            });

            test.describe('HH:MM:SS', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputDateTime}/API?timeMode=HH:MM:SS`,
                    );
                });

                check('1', '01:00:00');
                check('12', '12:00:00');
                check('12:', '12:00:00');
                check('123', '12:03:00');
                check('12:3', '12:03:00');
                check('12:34', '12:34:00');
                check('12:34:', '12:34:00');
                check('12:34:5', '12:34:05');
                check('12:34:56', '12:34:56');
            });

            test.describe('HH:MM:SS.MSS', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputDateTime}/API?timeMode=HH:MM:SS.MSS`,
                    );
                });

                check('1', '01:00:00.000');
                check('12', '12:00:00.000');
                check('12:', '12:00:00.000');
                check('123', '12:03:00.000');
                check('12:3', '12:03:00.000');
                check('12:34', '12:34:00.000');
                check('12:34:', '12:34:00.000');
                check('12:34:5', '12:34:05.000');
                check('12:34:56', '12:34:56.000');
                check('12:34:56.', '12:34:56.000');
                check('12:34:56.7', '12:34:56.007');
                check('12:34:56.78', '12:34:56.078');
                check('12:34:56.789', '12:34:56.789');
            });
        });
    });

    test.describe('invalid date', () => {
        test.describe('DMY mode', () => {
            let inputDateTime!: TuiInputDateTimePO;

            test.beforeEach(async ({page}) => {
                const {demo} = new TuiDocumentationPagePO(page);

                inputDateTime = new TuiInputDateTimePO(
                    demo.locator('tui-textfield:has([tuiInputDateTime])'),
                );

                await tuiGoto(page, `${DemoRoute.InputDateTime}/API`);
            });

            test('does not accept day > 31', async () => {
                await inputDateTime.textfield.pressSequentially('32');

                await expect(inputDateTime.textfield).toHaveValue('03.02');
                await expect(inputDateTime.textfield).toHaveJSProperty(
                    'selectionStart',
                    '03.02'.length,
                );
                await expect(inputDateTime.textfield).toHaveJSProperty(
                    'selectionEnd',
                    '03.02'.length,
                );
            });

            test('does not accept month > 12', async () => {
                await inputDateTime.textfield.pressSequentially('2413');

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

        test.describe('YMD mode', () => {
            let inputDateTime!: TuiInputDateTimePO;

            test.beforeEach(async ({page}) => {
                const example = new TuiDocumentationPagePO(page).getExample(
                    '#date-format',
                );

                inputDateTime = new TuiInputDateTimePO(
                    example.locator('tui-textfield:has(input[tuiInputDateTime])'),
                );

                await tuiGoto(page, DemoRoute.InputDateTime);
                await inputDateTime.textfield.clear();
            });

            test('does not accept day > 31', async () => {
                await inputDateTime.textfield.pressSequentially('2023/05/35');

                await expect(inputDateTime.textfield).toHaveValue('2023-05-3');
                await expect(inputDateTime.textfield).toHaveJSProperty(
                    'selectionStart',
                    '2023-05-3'.length,
                );
                await expect(inputDateTime.textfield).toHaveJSProperty(
                    'selectionEnd',
                    '2023-05-3'.length,
                );
            });

            test('does not accept month > 12', async () => {
                await inputDateTime.textfield.pressSequentially('2023-13');

                await expect(inputDateTime.textfield).toHaveValue('2023-01-3');
                await expect(inputDateTime.textfield).toHaveJSProperty(
                    'selectionStart',
                    '2023-01-3'.length,
                );
                await expect(inputDateTime.textfield).toHaveJSProperty(
                    'selectionEnd',
                    '2023-01-3'.length,
                );
            });
        });
    });

    test.describe('Examples', () => {
        let documentationPage!: TuiDocumentationPagePO;

        test.beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.InputDateTime);

            documentationPage = new TuiDocumentationPagePO(page);
        });

        test('With validator: enter incomplete date -> validator error', async () => {
            const example = documentationPage.getExample('#validation');
            const inputDateTime = new TuiInputDateTimePO(
                example.locator('tui-textfield:has(input[tuiInputDateTime])').first(),
            );

            await inputDateTime.textfield.clear();
            await inputDateTime.textfield.fill('11');
            await inputDateTime.textfield.blur();

            // allow animations to capture tui-error validation message on screenshot
            await expect
                .soft(example)
                .toHaveScreenshot('04-input-data-time-with-validator.png', {
                    animations: 'allow',
                });
        });

        test('Calendar customization', async () => {
            const example = documentationPage.getExample('#calendar-customization');
            const inputDateTime = new TuiInputDateTimePO(
                example.locator('tui-textfield:has(input[tuiInputDateTime])'),
            );

            await inputDateTime.textfield.click();

            await expect
                .soft(inputDateTime.calendar)
                .toHaveScreenshot(
                    '06-input-date-time-calendar-calendar-customization.png',
                );
        });
    });
});
