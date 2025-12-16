import {DemoRoute} from '@demo/routes';
import {
    CHAR_MINUS,
    InputNumberPO,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('InputNumber | BigInt', () => {
    let example: Locator;
    let inputNumber: InputNumberPO;
    let controlValue: Locator;

    async function expectControlValue(
        value: 'null' | {significand: string; exp: number},
    ): Promise<void> {
        await expect(controlValue).toHaveText(JSON.stringify(value, null, 2));
    }

    describe('Examples', () => {
        describe('BigInt as form control value', () => {
            beforeEach(async ({page}) => {
                await tuiGoto(page, DemoRoute.InputNumber);

                example = new TuiDocumentationPagePO(page).getExample(
                    '#bigint-type-control-value',
                );
                inputNumber = new InputNumberPO(
                    example.locator('tui-textfield:has([tuiInputNumber])'),
                );
                controlValue = example.locator('code');
            });

            describe('initial state', () => {
                test('textfield value', async () => {
                    await expect(inputNumber.textfield).toHaveValue(
                        '777 900 719 925 474 099 100',
                    );
                });

                test('control value', async () => {
                    await expect(controlValue).toHaveText('777900719925474099100n');
                });
            });

            describe('rejects decimal separators', () => {
                ['.', ','].forEach((separator) => {
                    test(`${separator}`, async () => {
                        await inputNumber.textfield.focus();
                        await inputNumber.textfield.clear();
                        await inputNumber.textfield.pressSequentially(
                            `123${separator}456`,
                        );

                        await expect(inputNumber.textfield).toHaveValue('123 456');
                    });
                });
            });

            test('removes leading zeros', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('007');
                await expect(inputNumber.textfield).toHaveValue('007');

                await inputNumber.textfield.blur();
                await expect(inputNumber.textfield).toHaveValue('7');
                await expect(controlValue).toHaveText('7n');
            });

            test('handles negative values', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('-123456');

                await expect(inputNumber.textfield).toHaveValue(`${CHAR_MINUS}123 456`);
                await expect(controlValue).toHaveText('-123456n');
            });

            test('formats thousands while typing', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('1000000');

                await expect(inputNumber.textfield).toHaveValue('1 000 000');
                await expect(controlValue).toHaveText('1000000n');
            });

            test('does not mutate already valid too large number on blur', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('123456789012345678');

                await expect(inputNumber.textfield).toHaveValue(
                    '123 456 789 012 345 678',
                );

                await inputNumber.textfield.blur();

                await expect(inputNumber.textfield).toHaveValue(
                    '123 456 789 012 345 678',
                );
            });

            test('clearing resets control value to null', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.blur();

                await expect(inputNumber.textfield).toHaveValue('');
                await expect(controlValue).toHaveText('null');
            });

            test('handles zero', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('0');
                await expect(inputNumber.textfield).toHaveValue('0');
                await expect(controlValue).toHaveText('0n');
            });

            test('handles negative zero', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('-0');
                await expect(inputNumber.textfield).toHaveValue(`${CHAR_MINUS}0`);
                await expect(controlValue).toHaveText('0n');

                await inputNumber.textfield.blur();
                await expect(inputNumber.textfield).toHaveValue('0');
            });

            test('ignores invalid characters', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('12a34');
                await expect(inputNumber.textfield).toHaveValue('1 234');
                await expect(controlValue).toHaveText('1234n');
            });
        });

        describe('BigInt integer + BigInt decimal as form control value', () => {
            beforeEach(async ({page}) => {
                await tuiGoto(page, DemoRoute.InputNumber);

                example = new TuiDocumentationPagePO(page).getExample(
                    '#large-int-decimal-parts',
                );
                inputNumber = new InputNumberPO(
                    example.locator('tui-textfield:has([tuiInputNumber])'),
                );
                controlValue = example.locator('code');
            });

            test('initial state', async () => {
                await expect(inputNumber.textfield).toHaveValue(
                    '$1 234 567.00042 per day',
                );
                await expectControlValue({significand: '123456700042n', exp: -5});
            });

            test('handles extremely large integer and decimal parts without precision loss', async () => {
                await inputNumber.textfield.focus();
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially(
                    '9999999999999999.8888888888888888',
                );

                await expect(inputNumber.textfield).toHaveValue(
                    '$9 999 999 999 999 999.8888888888888888 per day',
                );
                await expectControlValue({
                    significand: '99999999999999998888888888888888n',
                    exp: -16,
                });
            });

            test('integer-only input sets decimal part to 0', async () => {
                await inputNumber.textfield.focus();
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('424242');

                await expect(inputNumber.textfield).toHaveValue('$424 242 per day');
                await expectControlValue({significand: '424242n', exp: 0});
            });

            test('ignores negative sign', async () => {
                await inputNumber.textfield.focus();
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('-123');

                await expect(inputNumber.textfield).toHaveValue('$123 per day');
                await expectControlValue({significand: '123n', exp: 0});
            });

            test('clearing resets both integer and decimal parts to null', async () => {
                await inputNumber.textfield.focus();
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('10.5');

                await expectControlValue({significand: '105n', exp: -1});

                await inputNumber.textfield.clear();
                await inputNumber.textfield.blur();

                await expect(inputNumber.textfield).toHaveValue('');
                await expect(controlValue).toHaveText('null');
            });

            test('rejects second decimal separator and keeps existing digits', async () => {
                await inputNumber.textfield.focus();
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('12.34.56');

                await expect(inputNumber.textfield).toHaveValue('$12.3456 per day');
                await expectControlValue({significand: '123456n', exp: -4});
            });

            test('preserves long decimal part without rounding', async () => {
                await inputNumber.textfield.focus();
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('1.12345678901234567890');

                await expect(inputNumber.textfield).toHaveValue(
                    '$1.12345678901234567890 per day',
                );
                await expectControlValue({
                    significand: '112345678901234567890n',
                    exp: -20,
                });
            });

            test('pads integer part with zero if starting with decimal separator', async () => {
                await inputNumber.textfield.focus();
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('.123');

                await expect(inputNumber.textfield).toHaveValue('$0.123 per day');
                await expectControlValue({significand: '123n', exp: -3});
            });

            test('handles leading zeros in decimal part', async () => {
                await inputNumber.textfield.focus();
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('1.005');
                await expect(inputNumber.textfield).toHaveValue('$1.005 per day');
                await expectControlValue({significand: '1005n', exp: -3});
                await inputNumber.textfield.blur();
                await expect(inputNumber.textfield).toHaveValue('$1.005 per day');
            });

            test('keeps trailing zeros in decimal part', async () => {
                await inputNumber.textfield.focus();
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('1.500');
                await expect(inputNumber.textfield).toHaveValue('$1.500 per day');
                await expectControlValue({significand: '1500n', exp: -3});
            });
        });
    });
});
