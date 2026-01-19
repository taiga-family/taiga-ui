import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiInputTimePO} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

test.describe('InputTime', () => {
    test.describe('API', () => {
        let example: Locator;
        let inputTime: TuiInputTimePO;

        test.beforeEach(({page}) => {
            example = new TuiDocumentationPagePO(page).apiPageExample;
            inputTime = new TuiInputTimePO(
                example.locator('tui-textfield:has([tuiInputTime])'),
            );
        });

        test.describe('Basic typing from keyboard', () => {
            test.describe('HH:MM', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputTime}/API?mode=HH:MM`);
                    await inputTime.textfield.clear();

                    await expect(inputTime.textfield).toHaveValue('');
                });

                test('3 => 03', async () => {
                    await inputTime.textfield.pressSequentially('3');

                    await expect(inputTime.textfield).toHaveValue('03');
                    await expect(inputTime.textfield).toHaveJSProperty(
                        'selectionStart',
                        2,
                    );
                    await expect(inputTime.textfield).toHaveJSProperty('selectionEnd', 2);
                });

                test('1111 => 11:11', async () => {
                    await inputTime.textfield.pressSequentially('1111');

                    await expect(inputTime.textfield).toHaveValue('11:11');
                    await expect(inputTime.textfield).toHaveJSProperty(
                        'selectionStart',
                        '11:11'.length,
                    );
                    await expect(inputTime.textfield).toHaveJSProperty(
                        'selectionEnd',
                        '11:11'.length,
                    );
                });

                test('0130 => 01:30', async () => {
                    await inputTime.textfield.pressSequentially('0130');

                    await expect(inputTime.textfield).toHaveValue('01:30');
                    await expect(inputTime.textfield).toHaveJSProperty(
                        'selectionStart',
                        '01:30'.length,
                    );
                    await expect(inputTime.textfield).toHaveJSProperty(
                        'selectionEnd',
                        '01:30'.length,
                    );
                });

                test('99 => 09:09', async () => {
                    await inputTime.textfield.pressSequentially('99');

                    await expect(inputTime.textfield).toHaveValue('09:09');
                    await expect(inputTime.textfield).toHaveJSProperty(
                        'selectionStart',
                        '09:09'.length,
                    );
                    await expect(inputTime.textfield).toHaveJSProperty(
                        'selectionEnd',
                        '09:09'.length,
                    );
                });
            });

            test.describe('HH:MM AA', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputTime}/API?mode=HH:MM%20AA`);
                    await inputTime.textfield.clear();

                    await expect(inputTime.textfield).toHaveValue('');
                });

                test('2 => 02', async () => {
                    await inputTime.textfield.pressSequentially('2');

                    await expect(inputTime.textfield).toHaveValue('02');
                    await expect(inputTime.textfield).toHaveJSProperty(
                        'selectionStart',
                        2,
                    );
                    await expect(inputTime.textfield).toHaveJSProperty('selectionEnd', 2);
                });

                test('333a => 03:33 AM', async () => {
                    await inputTime.textfield.pressSequentially('333a');

                    await expect(inputTime.textfield).toHaveValue('03:33 AM');
                    await expect(inputTime.textfield).toHaveJSProperty(
                        'selectionStart',
                        '03:33 AM'.length,
                    );
                    await expect(inputTime.textfield).toHaveJSProperty(
                        'selectionEnd',
                        '03:33 AM'.length,
                    );
                });

                test('00 => 0', async () => {
                    await inputTime.textfield.pressSequentially('00');

                    await expect(inputTime.textfield).toHaveValue('0');
                    await expect(inputTime.textfield).toHaveJSProperty(
                        'selectionStart',
                        1,
                    );
                    await expect(inputTime.textfield).toHaveJSProperty('selectionEnd', 1);
                });

                test('1234p => 12:34 PM', async () => {
                    await inputTime.textfield.pressSequentially('1234p');

                    await expect(inputTime.textfield).toHaveValue('12:34 PM');
                    await expect(inputTime.textfield).toHaveJSProperty(
                        'selectionStart',
                        '12:34 PM'.length,
                    );
                    await expect(inputTime.textfield).toHaveJSProperty(
                        'selectionEnd',
                        '12:34 PM'.length,
                    );
                });
            });

            test('strict forces to select the closest value from items', async ({
                page,
            }) => {
                await tuiGoto(page, DemoRoute.InputTime);
                const example = new TuiDocumentationPagePO(page).getExample(
                    '#strict-mode',
                );

                const inputTime = new TuiInputTimePO(example.locator('tui-textfield'));

                await inputTime.textfield.click();
                await inputTime.textfield.clear();
                await inputTime.textfield.fill('07:55');

                await expect(inputTime.textfield).toHaveValue('10:00');
            });
        });

        test.describe('zero padding on blur', () => {
            const check = (typedCharacters: string, expectedFinalValue: string): void => {
                test(`Type ${typedCharacters} => Blur => ${expectedFinalValue}`, async () => {
                    await expect(inputTime.textfield).toHaveValue('');

                    await inputTime.textfield.pressSequentially(typedCharacters);
                    await inputTime.textfield.blur();

                    await expect(inputTime.textfield).toHaveValue(expectedFinalValue);
                });
            };

            test.describe('HH:MM', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputTime}/API?mode=HH:MM`);
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
                    await tuiGoto(page, `${DemoRoute.InputTime}/API?mode=HH:MM%20AA`);
                });

                check('0', '12:00 AM');
                check('01', '01:00 AM');
                check('012', '01:02 AM');
                check('0123', '01:23 AM');
            });

            test.describe('HH:MM:SS', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputTime}/API?mode=HH:MM:SS`);
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
                    await tuiGoto(page, `${DemoRoute.InputTime}/API?mode=HH:MM:SS.MSS`);
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

    test.describe('Dropdown', () => {
        let inputTime: Locator;
        let example: Locator;

        test.beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.InputTime);

            example = new TuiDocumentationPagePO(page).getExample('#dropdown-datalist');

            await example.scrollIntoViewIfNeeded();

            inputTime = example.locator('input[tuiInputTime]');
        });

        test('Do not match value until user is writing value', async ({page}) => {
            await inputTime.fill('16:45');
            await expect
                .soft(example)
                .toHaveScreenshot('input-time-option-hh-mm__01.png');

            await page.keyboard.press('Backspace');
            await page.keyboard.press('Backspace');
            await expect
                .soft(example)
                .toHaveScreenshot('input-time-option-hh-mm__02.png');

            await page.keyboard.type('45');
            await expect
                .soft(example)
                .toHaveScreenshot('input-time-option-hh-mm__03.png');
        });
    });
});
