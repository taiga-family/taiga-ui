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
                        '7 779 007 199 254 740 991 000',
                    );
                });

                test('control value', async () => {
                    await expect(controlValue).toHaveText('7779007199254740991000n');
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
                    '#bigint-decimal-type-control-value',
                );
                inputNumber = new InputNumberPO(
                    example.locator('tui-textfield:has([tuiInputNumber])'),
                );
                controlValue = example.locator('code');
            });

            test('initial state', async () => {
                await expect(inputNumber.textfield).toHaveValue(
                    '1_234_567_890.9876543210',
                );
                await expect(controlValue).toHaveText(
                    '{"integer":"1234567890n","decimal":"9876543210n"}',
                );
            });

            test('handles extremely large integer and decimal parts without precision loss', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially(
                    '9999999999999999.8888888888888888',
                );

                await expect(inputNumber.textfield).toHaveValue(
                    '9_999_999_999_999_999.8888888888888888',
                );
                await expect(controlValue).toHaveText(
                    '{"integer":"9999999999999999n","decimal":"8888888888888888n"}',
                );
            });

            test('integer-only input sets decimal part to null', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('424242');

                await expect(inputNumber.textfield).toHaveValue('424_242');
                await expect(controlValue).toHaveText(
                    '{"integer":"424242n","decimal":null}',
                );
            });

            test('negative value keeps integer sign and decimal magnitude', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('-123456789.321');

                await expect(inputNumber.textfield).toHaveValue(
                    `${CHAR_MINUS}123_456_789.321`,
                );
                await expect(controlValue).toHaveText(
                    '{"integer":"-123456789n","decimal":"321n"}',
                );
            });

            test('clearing resets both integer and decimal parts to null', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('10.5');

                await expect(controlValue).toHaveText('{"integer":"10n","decimal":"5n"}');

                await inputNumber.textfield.clear();
                await inputNumber.textfield.blur();

                await expect(inputNumber.textfield).toHaveValue('');
                await expect(controlValue).toHaveText('null');
            });

            test('rejects second decimal separator and keeps existing digits', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('12.34.56');

                await expect(inputNumber.textfield).toHaveValue('12.3456');
                await expect(controlValue).toHaveText(
                    '{"integer":"12n","decimal":"3456n"}',
                );
            });

            test('preserves long decimal part without rounding', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('1.12345678901234567890');

                await expect(inputNumber.textfield).toHaveValue('1.12345678901234567890');
                await expect(controlValue).toHaveText(
                    '{"integer":"1n","decimal":"12345678901234567890n"}',
                );
            });

            test('pads integer part with zero if starting with decimal separator', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('.123');

                await expect(inputNumber.textfield).toHaveValue('0.123');
                await expect(controlValue).toHaveText(
                    '{"integer":"0n","decimal":"123n"}',
                );
            });

            // TODO
            test.skip('handles leading zeros in decimal part', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('1.005');
                await expect(inputNumber.textfield).toHaveValue('1.005');
                await expect(controlValue).toHaveText('{"integer":"1n","decimal":"5n"}');

                await inputNumber.textfield.blur();
                await expect(inputNumber.textfield).toHaveValue('1.5');
            });

            // TODO
            test.skip('trims trailing zeros in decimal part', async () => {
                await inputNumber.textfield.clear();
                await inputNumber.textfield.pressSequentially('1.500');
                await expect(inputNumber.textfield).toHaveValue('1.500');
                await expect(controlValue).toHaveText(
                    '{"integer":"1n","decimal":"500n"}',
                );
            });
        });
    });
});
