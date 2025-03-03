import {DemoRoute} from '@demo/routes';
import {
    CHAR_EM_DASH,
    CHAR_EN_DASH,
    CHAR_HYPHEN,
    CHAR_MINUS,
    TuiDocumentationApiPagePO,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('InputNumber', () => {
    let example: Locator;
    let input: Locator;

    test.describe('API', () => {
        test.beforeEach(({page}) => {
            example = new TuiDocumentationApiPagePO(page).apiPageExample;
            input = example.getByTestId('tui-primitive-textfield__native-input');
        });

        test('Infinite precision', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputNumberLegacy}/API?precision=Infinity`);
            await input.focus();
            await input.fill('1,2345');

            await expect(example).toHaveScreenshot('01-input-number.png');
        });

        test('does not mutate already valid too large number on blur', async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.InputNumberLegacy}/API?thousandSeparator=_&precision=2`,
            );
            await input.focus();
            await input.clear();
            await input.pressSequentially('123456789012345.6789');

            await expect(input).toHaveValue('123_456_789_012_345.67');

            await input.blur();

            await expect(input).toHaveValue('123_456_789_012_345.67');
        });

        test('prefix + value + postfix', async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.InputNumberLegacy}/API?tuiTextfieldPrefix=$&tuiTextfieldPostfix=GBP`,
            );

            await expect(example).toHaveScreenshot('02-input-number.png');

            await input.clear();

            await expect(example).toHaveScreenshot('03-input-number.png');
        });

        ['left', 'right'].forEach((align, i) => {
            test(`align=${align}`, async ({page}) => {
                const readableFormatText = 'Very long text';

                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumberLegacy}/API?style.text-align=${align}&tuiTextfieldPrefix=${readableFormatText}&tuiTextfieldPostfix=${readableFormatText}`,
                );

                await expect(example).toHaveScreenshot(`04-input-number-${i}.png`);
            });
        });

        test.describe('overflow', () => {
            ['75', '140', '158'].forEach((sandboxWidth, i) => {
                test(`sandboxWidth=${sandboxWidth}`, async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputNumberLegacy}/API?tuiTextfieldPostfix=$&tuiTextfieldPrefix=VeryLongText&sandboxWidth=${sandboxWidth}`,
                    );

                    await expect(example).toHaveScreenshot(`05-input-number-${i}.png`);
                });
            });
        });

        test.describe('Caret navigation', () => {
            test.describe('if user tries to erase padded decimal zeroes (decimalMode="always"), mask triggers caret navigation', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputNumberLegacy}/API?decimalMode=always&precision=2`,
                    );

                    await input.clear();
                    await input.fill('105,00');
                });

                test('105,00| => Backspace => 105,0|0', async ({page}) => {
                    await page.keyboard.press('Backspace');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '105,0'.length,
                    );
                    await expect(input).toHaveJSProperty('selectionEnd', '105,0'.length);
                    await expect(example).toHaveScreenshot('07-input-number.png');
                });

                test('105,0|0 => Backspace => 105,|00', async ({page}) => {
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('Backspace');

                    await expect(input).toHaveJSProperty('selectionStart', '105,'.length);
                    await expect(input).toHaveJSProperty('selectionEnd', '105,'.length);
                    await expect(example).toHaveScreenshot('08-input-number.png');
                });

                test('105,|00 => Backspace => 105|,00', async ({page}) => {
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('Backspace');

                    await expect(input).toHaveJSProperty('selectionStart', '105'.length);
                    await expect(input).toHaveJSProperty('selectionEnd', '105'.length);
                    await expect(example).toHaveScreenshot('09-input-number.png');
                });

                test('105,|00 => Delete => 105,0|0', async ({page}) => {
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('Delete');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '105,0'.length,
                    );
                    await expect(input).toHaveJSProperty('selectionEnd', '105,0'.length);
                    await expect(example).toHaveScreenshot('10-input-number.png');
                });
            });

            test.describe('if user tries to erase thousand separator, mask triggers caret navigation', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputNumberLegacy}/API?decimalMode=not-zero`,
                    );

                    await input.fill('1000');
                });

                test('1| 000 => Delete => 1 |000', async ({page}) => {
                    const length = (await input.inputValue()).length;

                    for (let i = 0; i < length; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await expect(input).toHaveJSProperty('selectionStart', 0);
                    await expect(input).toHaveJSProperty('selectionEnd', 0);

                    await page.keyboard.press('ArrowRight');
                    await page.keyboard.press('Delete');

                    await expect(input).toHaveJSProperty('selectionStart', '1 '.length);
                    await expect(input).toHaveJSProperty('selectionEnd', '1 '.length);
                    await expect(example).toHaveScreenshot('11-input-number.png');
                });

                test('1 |000 => Backspace => 1| 000', async ({page}) => {
                    const length = (await input.inputValue()).length;

                    for (let i = 0; i < length; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await expect(input).toHaveJSProperty('selectionStart', 0);
                    await expect(input).toHaveJSProperty('selectionEnd', 0);

                    await page.keyboard.press('ArrowRight');
                    await page.keyboard.press('ArrowRight');
                    await page.keyboard.press('Backspace');

                    await expect(input).toHaveJSProperty('selectionStart', '1'.length);
                    await expect(input).toHaveJSProperty('selectionEnd', '1'.length);
                    await expect(example).toHaveScreenshot('12-input-number.png');
                });
            });
        });

        test.describe('[min] prop', () => {
            test.describe('[min] property is positive number', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumberLegacy}/API?min=5`);

                    await input.clear();
                });

                test('rejects minus sign', async () => {
                    await input.fill(
                        `${CHAR_MINUS}${CHAR_HYPHEN}${CHAR_EN_DASH}${CHAR_EM_DASH}9`,
                    );

                    await expect(input).toHaveJSProperty('selectionStart', 1);
                    await expect(input).toHaveJSProperty('selectionEnd', 1);
                    await expect(example).toHaveScreenshot('13-input-number.png');
                });

                test('validates positive value only on blur', async () => {
                    await input.fill('2');

                    await expect(input).toHaveJSProperty('selectionStart', 1);
                    await expect(input).toHaveJSProperty('selectionEnd', 1);
                    await expect(example).toHaveScreenshot('14-input-number.png');

                    await input.blur();

                    await expect(example).toHaveScreenshot('15-input-number.png');
                });
            });

            test.describe('[min] property is negative number', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumberLegacy}/API?min=-5`);

                    await input.clear();
                });

                test('immediately validates negative value', async () => {
                    await input.fill('-10'); // less than [min]

                    await expect(input).toHaveJSProperty('selectionStart', 2);
                    await expect(input).toHaveJSProperty('selectionEnd', 2);
                    await expect(input).toHaveValue(`${CHAR_MINUS}5`);
                    await expect(input).toHaveJSProperty('selectionStart', 2);
                    await expect(input).toHaveJSProperty('selectionEnd', 2);
                    await expect(example).toHaveScreenshot('16-input-number.png');
                });

                test("don't touch any positive value", async ({page}) => {
                    await input.fill('1');

                    await expect(input).toHaveJSProperty('selectionStart', 1);
                    await expect(input).toHaveJSProperty('selectionEnd', 1);
                    await expect(example).toHaveScreenshot('17-input-number.png');

                    await input.fill('0');

                    await expect(input).toHaveJSProperty('selectionStart', 1);
                    await expect(input).toHaveJSProperty('selectionEnd', 1);
                    await expect(example).toHaveScreenshot('18-input-number.png');

                    await input.blur();

                    await expect(input).toHaveJSProperty('selectionStart', 1);
                    await expect(input).toHaveJSProperty('selectionEnd', 1);

                    await page.waitForTimeout(100); // to be sure that value is not changed even in case of some async validation

                    await expect(example).toHaveScreenshot('19-input-number.png');
                });
            });

            test('positive [min] property and positive value (which is less than [min])', async ({
                page,
            }) => {
                await tuiGoto(page, DemoRoute.InputNumberLegacy);

                const example = new TuiDocumentationPagePO(page).getExample('#min-max');
                const textfield = example.getByRole('textbox');

                await expect(textfield).toHaveValue('');

                textfield.fill('33'); // less than min

                await expect(example).toHaveScreenshot(
                    '20-input-number-positive-min-positive-wrong-value.png',
                );

                textfield.fill('333'); // more than min

                await expect(example).toHaveScreenshot(
                    '20-input-number-positive-min-positive-valid-value.png',
                );
            });
        });

        test.describe('[max] prop', () => {
            test.describe('[max] property is negative number', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumberLegacy}/API?max=-5`);

                    example = new TuiDocumentationApiPagePO(page).apiPageExample;
                    input = example.getByTestId('tui-primitive-textfield__native-input');

                    await input.clear();
                });

                test('validates negative value only on blur', async ({page}) => {
                    await input.fill('-1'); // more than [max]
                    await page.waitForTimeout(100); // to be sure that value is not changed even in case of some async validation

                    await expect(input).toHaveValue(`${CHAR_MINUS}1`);
                    await expect(input).toHaveJSProperty('selectionStart', 2);
                    await expect(input).toHaveJSProperty('selectionEnd', 2);
                    await expect(example).toHaveScreenshot(
                        '21-input-number-before-blur.png',
                    );

                    await input.blur();

                    await expect(input).toHaveValue(`${CHAR_MINUS}5`);
                    await expect(input).toHaveJSProperty('selectionStart', 2);
                    await expect(input).toHaveJSProperty('selectionEnd', 2);
                    await expect(example).toHaveScreenshot(
                        '21-input-number-after-blur.png',
                    );
                });
            });

            test.describe('[max] property is positive number', () => {
                test.beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumberLegacy}/API?max=12`);

                    await input.clear();
                });

                test('immediately validates positive value', async () => {
                    await input.fill('19');

                    await expect(input).toHaveValue('12');
                    await expect(input).toHaveJSProperty('selectionStart', 2);
                    await expect(input).toHaveJSProperty('selectionEnd', 2);
                    await expect(example).toHaveScreenshot('22-input-number.png');
                });

                test("don't touch any negative value", async ({page}) => {
                    await input.fill('-1');

                    await expect(input).toHaveValue(`${CHAR_MINUS}1`);
                    await expect(input).toHaveJSProperty('selectionStart', 2);
                    await expect(input).toHaveJSProperty('selectionEnd', 2);
                    await expect(example).toHaveScreenshot('23-input-number.png');

                    await page.keyboard.down('9');

                    await expect(input).toHaveJSProperty('selectionStart', 3);
                    await expect(input).toHaveJSProperty('selectionEnd', 3);
                    await expect(input).toHaveValue(`${CHAR_MINUS}19`);
                    await expect(input).toHaveJSProperty('selectionStart', 3);
                    await expect(input).toHaveJSProperty('selectionEnd', 3);
                    await expect(example).toHaveScreenshot('24-input-number.png');

                    await page.waitForTimeout(100);

                    await expect(input).toHaveValue(`${CHAR_MINUS}19`);
                    await expect(input).toHaveJSProperty('selectionStart', 3);
                    await expect(input).toHaveJSProperty('selectionEnd', 3);
                    await expect(example).toHaveScreenshot('25-input-number.png');
                });
            });
        });

        test.describe('value formatting on blur', () => {
            test('Value 42 (decimalMode=not-zero) => 42', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumberLegacy}/API?precision=2&decimalMode=not-zero`,
                );

                await input.fill('42');

                await expect(input).toHaveValue('42');
                await expect(input).toHaveJSProperty('selectionStart', 2);
                await expect(input).toHaveJSProperty('selectionEnd', 2);
                await expect(example).toHaveScreenshot('26-input-number.png');
            });

            test('Value 42,1 (decimalMode=not-zero) => 42,1', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumberLegacy}/API?precision=2&decimalMode=not-zero`,
                );

                await input.fill('42.1');

                await expect(input).toHaveValue('42.1');
                await expect(input).toHaveJSProperty('selectionStart', 4);
                await expect(input).toHaveJSProperty('selectionEnd', 4);

                await input.blur();

                await expect(input).toHaveValue('42.1');
                await expect(example).toHaveScreenshot('27-input-number.png');
            });

            test('Value 42,1 (decimalMode=pad) => 42,10', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumberLegacy}/API?precision=2&decimalMode=pad`,
                );

                await input.fill('42.1');

                await expect(input).toHaveValue('42.1');
                await expect(input).toHaveJSProperty('selectionStart', 4);
                await expect(input).toHaveJSProperty('selectionEnd', 4);

                await input.blur();

                await expect(input).toHaveValue('42.10');
                await expect(example).toHaveScreenshot('28-input-number.png');
            });

            test('Value 42,00 (decimalMode=not-zero) => 42', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumberLegacy}/API?precision=2&decimalMode=not-zero`,
                );

                await input.fill('42.00');

                await expect(input).toHaveJSProperty('selectionStart', 5);
                await expect(input).toHaveJSProperty('selectionEnd', 5);
                await expect(example).toHaveScreenshot('29-input-number.png');
            });

            test('Value 42,1 (precision=0) => 42', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputNumberLegacy}/API?precision=0`);

                await input.fill('42.1');

                await expect(input).toHaveValue('42');
                await expect(example).toHaveScreenshot('30-input-number.png');
            });

            test('Value 42 (decimalMode=always) => 42.00', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumberLegacy}/API?precision=2&decimalMode=always`,
                );
                await input.fill('42');

                await expect(input).toHaveValue('42.00');
                await expect(input).toHaveJSProperty('selectionStart', 2);
                await expect(input).toHaveJSProperty('selectionEnd', 2);
                await expect(example).toHaveScreenshot('31-input-number.png');
            });

            test("text field does not contain any digit (only prefix + postfix) => clear text field's value on blur", async ({
                page,
            }) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumberLegacy}/API?tuiTextfieldPrefix=$&tuiTextfieldPostfix=kg`,
                );
                await input.focus();
                await input.clear();

                await expect(input).toHaveValue('$ kg');
                await expect(input).toHaveJSProperty('selectionStart', 1);
                await expect(input).toHaveJSProperty('selectionEnd', 1);
                await expect(example).toHaveScreenshot('32-input-number.png');
            });
        });
    });

    test.describe('Examples', () => {
        test('cursor position', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputNumberLegacy}`);

            const example = new TuiDocumentationPagePO(page).getExample('#currency');

            await expect(example).toHaveScreenshot('06-input-number.png');

            const inputs = await example
                .getByTestId('tui-primitive-textfield__native-input')
                .all();

            for (const [i, input] of inputs.entries()) {
                await input.clear();
                await input.focus();

                await expect(example).toHaveScreenshot(`06-input-number-${i}.png`);
            }
        });
    });
});
