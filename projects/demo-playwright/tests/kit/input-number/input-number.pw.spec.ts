import {DemoRoute} from '@demo/routes';
import {
    CHAR_EM_DASH,
    CHAR_EN_DASH,
    CHAR_HYPHEN,
    CHAR_MINUS,
    CMD,
    TuiDocumentationApiPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('InputNumber', () => {
    let example: Locator;
    let textfield: Locator;

    describe('API', () => {
        beforeEach(({page}) => {
            example = new TuiDocumentationApiPagePO(page).apiPageExample;
            textfield = example.locator('[tuiInputNumber]');
        });

        describe('[min] prop', () => {
            describe('[min] property is positive number', () => {
                test('rejects minus sign', async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?min=5`);
                    await textfield.fill(
                        `${CHAR_MINUS}${CHAR_HYPHEN}${CHAR_EN_DASH}${CHAR_EM_DASH}9`,
                    );

                    await expect(textfield).toHaveValue('9');
                    await expect(textfield).toHaveJSProperty('selectionStart', 1);
                    await expect(textfield).toHaveJSProperty('selectionEnd', 1);
                });

                test('validates positive value (less than [min]) only on blur', async ({
                    page,
                }) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?min=5`);
                    await textfield.fill('2');

                    await expect(textfield).toHaveValue('2');
                    await expect(textfield).toHaveJSProperty('selectionStart', 1);
                    await expect(textfield).toHaveJSProperty('selectionEnd', 1);

                    await textfield.blur();

                    await expect(textfield).toHaveValue('5');
                });

                test('allows to enter multi-length positive value (which is less than [min])', async ({
                    page,
                }) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?min=100`);

                    await textfield.fill('3'); // less than min

                    await expect(textfield).toHaveValue('3');

                    await textfield.pressSequentially('3'); // still less than min

                    await expect(textfield).toHaveValue('33');

                    await textfield.fill('333'); // more than min

                    await expect(textfield).toHaveValue('333');
                });
            });

            describe('[min] property is negative number', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?min=-5`);

                    await textfield.clear();
                });

                test('immediately validates negative value', async () => {
                    await textfield.fill('-10'); // less than [min]

                    await expect(textfield).toHaveJSProperty('selectionStart', 2);
                    await expect(textfield).toHaveJSProperty('selectionEnd', 2);
                    await expect(textfield).toHaveValue(`${CHAR_MINUS}5`);
                });

                test('do not touch any positive value', async ({page}) => {
                    await textfield.fill('1');

                    await expect(textfield).toHaveJSProperty('selectionStart', 1);
                    await expect(textfield).toHaveJSProperty('selectionEnd', 1);
                    await expect(textfield).toHaveValue('1');

                    await textfield.pressSequentially('0');

                    await expect(textfield).toHaveJSProperty('selectionStart', 2);
                    await expect(textfield).toHaveJSProperty('selectionEnd', 2);
                    await expect(textfield).toHaveValue('10');

                    await textfield.blur();

                    await expect(textfield).toHaveValue('10');

                    await page.waitForTimeout(100); // to be sure that value is not changed even in case of some async validation

                    await expect(textfield).toHaveValue('10');
                });
            });
        });

        describe('[max] prop', () => {
            describe('[max] property is negative number', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?max=-5`);
                });

                test('validates negative value only on blur', async ({page}) => {
                    await textfield.fill('-1'); // more than [max]
                    await page.waitForTimeout(100); // to be sure that value is not changed even in case of some async validation

                    await expect(textfield).toHaveValue(`${CHAR_MINUS}1`);
                    await expect(textfield).toHaveJSProperty('selectionStart', 2);
                    await expect(textfield).toHaveJSProperty('selectionEnd', 2);

                    await textfield.blur();

                    await expect(textfield).toHaveValue(`${CHAR_MINUS}5`);
                    await expect(textfield).toHaveJSProperty('selectionStart', 2);
                    await expect(textfield).toHaveJSProperty('selectionEnd', 2);
                });
            });

            describe('[max] property is positive number', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?max=12`);
                });

                test('immediately validates positive value', async () => {
                    await textfield.fill('19'); // more than max

                    await expect(textfield).toHaveValue('12');
                    await expect(textfield).toHaveJSProperty('selectionStart', 2);
                    await expect(textfield).toHaveJSProperty('selectionEnd', 2);
                });

                test('do not touch any negative value', async ({page}) => {
                    await textfield.fill('-1');

                    await expect(textfield).toHaveValue(`${CHAR_MINUS}1`);
                    await expect(textfield).toHaveJSProperty('selectionStart', 2);
                    await expect(textfield).toHaveJSProperty('selectionEnd', 2);

                    await page.keyboard.down('9');

                    await expect(textfield).toHaveJSProperty('selectionStart', 3);
                    await expect(textfield).toHaveJSProperty('selectionEnd', 3);
                    await expect(textfield).toHaveValue(`${CHAR_MINUS}19`);

                    await page.waitForTimeout(100); // to ensure that value is not changed even in case of some async validation

                    await expect(textfield).toHaveValue(`${CHAR_MINUS}19`);
                    await expect(textfield).toHaveJSProperty('selectionStart', 3);
                    await expect(textfield).toHaveJSProperty('selectionEnd', 3);
                });
            });
        });

        describe('[prefix] & [postfix] props', () => {
            (
                [
                    {prefix: '$', postfix: ''},
                    {prefix: '', postfix: 'kg'},
                    {prefix: '$', postfix: 'kg'},
                ] as const
            ).forEach(({prefix, postfix}) => {
                describe(`[prefix]="${prefix}" & [postfix]="${postfix}"`, () => {
                    beforeEach(async ({page}) => {
                        await tuiGoto(
                            page,
                            `${DemoRoute.InputNumber}/API?prefix=${prefix}&postfix=${postfix}`,
                        );
                    });

                    test('does not show suffixes for unfocused empty textfield', async () => {
                        await expect(textfield).toHaveValue('');
                    });

                    test('shows suffixes for empty textfield on focus', async () => {
                        await textfield.focus();

                        await expect(textfield).toHaveValue(prefix + postfix);
                    });

                    test('does not shows prefix for READONLY empty textfield on focus', async ({
                        page,
                    }) => {
                        await tuiGoto(
                            page,
                            `${DemoRoute.InputNumber}/API?prefix=${prefix}&postfix=${postfix}&readOnly=true`,
                        );
                        await textfield.focus();

                        await expect(textfield).toHaveValue('');

                        await textfield.click();

                        await expect(textfield).toHaveValue('');
                    });

                    describe('forbids to erase prefix', () => {
                        test('using Backspace many times', async () => {
                            await textfield.focus();
                            await textfield.press('Backspace');
                            await textfield.press('Backspace');

                            await expect(textfield).toHaveValue(prefix + postfix);

                            await textfield.pressSequentially('42');

                            await expect(textfield).toHaveValue(`${prefix}42${postfix}`);

                            await textfield.press('Backspace');
                            await textfield.press('Backspace');
                            await textfield.press('Backspace');
                            await textfield.press('Backspace');
                            await textfield.press('Backspace');

                            await expect(textfield).toHaveValue(prefix + postfix);
                        });

                        test('select all + Backspace', async ({page}) => {
                            await textfield.focus();
                            await page.keyboard.press(`${CMD}+A`);
                            await page.keyboard.press('Backspace');

                            await expect(textfield).toHaveValue(prefix + postfix);

                            await textfield.pressSequentially('42');

                            await expect(textfield).toHaveValue(`${prefix}42${postfix}`);

                            await page.keyboard.press(`${CMD}+A`);
                            await page.keyboard.press('Backspace');

                            await expect(textfield).toHaveValue(prefix + postfix);
                        });

                        test('select all + Delete', async ({page}) => {
                            await textfield.focus();
                            await page.keyboard.press(`${CMD}+A`);
                            await page.keyboard.press('Delete');

                            await expect(textfield).toHaveValue(prefix + postfix);

                            await textfield.pressSequentially('42');

                            await expect(textfield).toHaveValue(`${prefix}42${postfix}`);

                            await page.keyboard.press(`${CMD}+A`);
                            await page.keyboard.press('Delete');

                            await expect(textfield).toHaveValue(prefix + postfix);
                        });
                    });

                    test('textfield does not contain any digit (only suffixes) => clear textfield value on blur', async ({
                        browserName,
                    }) => {
                        // TODO
                        test.skip(
                            browserName !== 'chromium',
                            'Investigate why it fails in Safari',
                        );

                        await textfield.focus();

                        await expect(textfield).toHaveValue(prefix + postfix);
                        await expect(textfield).toHaveJSProperty(
                            'selectionStart',
                            prefix.length,
                        );
                        await expect(textfield).toHaveJSProperty(
                            'selectionEnd',
                            prefix.length,
                        );

                        await textfield.blur();

                        await expect(textfield).toHaveValue('');
                    });
                });
            });
        });

        describe('[precision] prop', () => {
            test('[precision]=0', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputNumber}/API?precision=0`);
                await textfield.focus();
                await textfield.pressSequentially(',.');

                await expect(textfield).toHaveValue('');

                await textfield.pressSequentially('0,.');

                await expect(textfield).toHaveValue('0');
            });

            test('[precision]=2', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputNumber}/API?precision=2`);
                await textfield.focus();
                await textfield.pressSequentially(',.');

                await expect(textfield).toHaveValue('0.');

                await textfield.pressSequentially('12345');

                await expect(textfield).toHaveValue('0.12');
            });
        });

        describe('[thousandSeparator] prop', () => {
            test('_', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputNumber}/API?thousandSeparator=_`);
                await textfield.focus();
                await textfield.pressSequentially('1234567890');

                await expect(textfield).toHaveValue('1_234_567_890');
            });

            test('.', async ({page}) => {
                await tuiGoto(
                    page,
                    /**
                     * TODO: drop `&decimalSeparator=,` after fixing this issue
                     * https://github.com/taiga-family/maskito/issues/1907
                     */
                    `${DemoRoute.InputNumber}/API?precision=0&thousandSeparator=.&decimalSeparator=,`,
                );
                await textfield.focus();
                await textfield.pressSequentially('1234567890');

                await expect(textfield).toHaveValue('1.234.567.890');
            });
        });

        describe('[decimalSeparator] prop', () => {
            test('.', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumber}/API?precision=4&decimalSeparator=.`,
                );
                await textfield.focus();
                await textfield.pressSequentially('.1234567890');

                await expect(textfield).toHaveValue('0.1234');

                await textfield.clear();

                await textfield.pressSequentially(',42');

                await expect(textfield).toHaveValue('0.42');
            });
        });

        describe('[decimalMode] prop', () => {
            test('decimalMode=not-zero | 42 => Blur => 42', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumber}/API?precision=2&decimalMode=not-zero`,
                );

                await textfield.fill('42');

                await expect(textfield).toHaveValue('42');
                await expect(textfield).toHaveJSProperty('selectionStart', 2);
                await expect(textfield).toHaveJSProperty('selectionEnd', 2);
                await expect(textfield).toHaveValue('42');
            });

            test('decimalMode=not-zero | 42.1 => Blur => 42.1', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumber}/API?precision=2&decimalMode=not-zero`,
                );

                await textfield.fill('42.1');

                await expect(textfield).toHaveValue('42.1');
                await expect(textfield).toHaveJSProperty('selectionStart', 4);
                await expect(textfield).toHaveJSProperty('selectionEnd', 4);

                await textfield.blur();

                await expect(textfield).toHaveValue('42.1');
            });

            test('decimalMode=not-zero | 42.00 => Blur => 42', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumber}/API?precision=2&decimalMode=not-zero`,
                );

                await textfield.fill('42.00');

                await expect(textfield).toHaveJSProperty(
                    'selectionStart',
                    '42.00'.length,
                );
                await expect(textfield).toHaveJSProperty('selectionEnd', '42.00'.length);

                await textfield.blur();

                await expect(textfield).toHaveValue('42');
            });

            test('decimalMode=pad | 42.1 => Blur => 42.10', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumber}/API?precision=2&decimalMode=pad`,
                );

                await textfield.fill('42.1');

                await expect(textfield).toHaveValue('42.1');
                await expect(textfield).toHaveJSProperty('selectionStart', '42.1'.length);
                await expect(textfield).toHaveJSProperty('selectionEnd', '42.1'.length);

                await textfield.blur();

                await expect(textfield).toHaveValue('42.10');
            });

            test('decimalMode=always | Enter 42 => 42.00', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumber}/API?precision=2&decimalMode=always`,
                );
                await textfield.fill('42');

                await expect(textfield).toHaveValue('42.00');
                await expect(textfield).toHaveJSProperty('selectionStart', 2);
                await expect(textfield).toHaveJSProperty('selectionEnd', 2);
            });
        });

        describe('Caret navigation', () => {
            describe('if user tries to erase padded decimal zeroes (decimalMode="always"), mask triggers caret navigation', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputNumber}/API?decimalMode=always&precision=2`,
                    );

                    await textfield.clear();
                    await textfield.fill('105.00');
                });

                test('105.00| => Backspace => 105.0|0', async ({page}) => {
                    await page.keyboard.press('Backspace');

                    await expect(textfield).toHaveJSProperty(
                        'selectionStart',
                        '105.0'.length,
                    );
                    await expect(textfield).toHaveJSProperty(
                        'selectionEnd',
                        '105.0'.length,
                    );
                    await expect(textfield).toHaveValue('105.00');
                });

                test('105.0|0 => Backspace => 105.|00', async ({page}) => {
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('Backspace');

                    await expect(textfield).toHaveJSProperty(
                        'selectionStart',
                        '105.'.length,
                    );
                    await expect(textfield).toHaveJSProperty(
                        'selectionEnd',
                        '105.'.length,
                    );
                    await expect(textfield).toHaveValue('105.00');
                });

                test('105.|00 => Backspace => 105|.00', async ({page}) => {
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('Backspace');

                    await expect(textfield).toHaveJSProperty(
                        'selectionStart',
                        '105'.length,
                    );
                    await expect(textfield).toHaveJSProperty(
                        'selectionEnd',
                        '105'.length,
                    );
                    await expect(textfield).toHaveValue('105.00');
                });

                test('105.|00 => Delete => 105.0|0', async ({page}) => {
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('Delete');

                    await expect(textfield).toHaveJSProperty(
                        'selectionStart',
                        '105.0'.length,
                    );
                    await expect(textfield).toHaveJSProperty(
                        'selectionEnd',
                        '105.0'.length,
                    );
                    await expect(textfield).toHaveValue('105.00');
                });
            });

            describe('if user tries to erase thousand separator, mask triggers caret navigation', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputNumber}/API?decimalMode=not-zero`,
                    );

                    await textfield.fill('1000');
                });

                test('1| 000 => Delete => 1 |000', async ({page}) => {
                    const length = (await textfield.inputValue()).length;

                    for (let i = 0; i < length; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await expect(textfield).toHaveJSProperty('selectionStart', 0);
                    await expect(textfield).toHaveJSProperty('selectionEnd', 0);

                    await page.keyboard.press('ArrowRight');
                    await page.keyboard.press('Delete');

                    await expect(textfield).toHaveJSProperty(
                        'selectionStart',
                        '1 '.length,
                    );
                    await expect(textfield).toHaveJSProperty('selectionEnd', '1 '.length);
                    await expect(textfield).toHaveValue('1 000');
                });

                test('1 |000 => Backspace => 1| 000', async ({page}) => {
                    const length = (await textfield.inputValue()).length;

                    for (let i = 0; i < length; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await expect(textfield).toHaveJSProperty('selectionStart', 0);
                    await expect(textfield).toHaveJSProperty('selectionEnd', 0);

                    await page.keyboard.press('ArrowRight');
                    await page.keyboard.press('ArrowRight');
                    await page.keyboard.press('Backspace');

                    await expect(textfield).toHaveJSProperty(
                        'selectionStart',
                        '1'.length,
                    );
                    await expect(textfield).toHaveJSProperty('selectionEnd', '1'.length);
                    await expect(textfield).toHaveValue('1 000');
                });
            });
        });

        describe('[tuiTextfieldSize] prop', () => {
            test.use({viewport: {width: 300, height: 500}});

            ['s', 'm', 'l'].forEach((size) => {
                test(`Empty textfield | ${size}`, async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputNumber}/API?tuiTextfieldSize=${size}`,
                    );

                    await expect(textfield).toHaveValue('');
                    await expect(example).toHaveScreenshot(
                        `input-number-unfocused-empty-size-${size}.png`,
                    );

                    await textfield.focus();

                    await expect(example).toHaveScreenshot(
                        `input-number-focused-empty-size-${size}.png`,
                    );
                });

                test(`Textfield has value | ${size}`, async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputNumber}/API?precision=2&tuiTextfieldSize=${size}`,
                    );

                    await textfield.fill('12.34');

                    await expect(textfield).toHaveValue('12.34');
                    await expect(example).toHaveScreenshot(
                        `input-number-focused-with-value-size-${size}.png`,
                    );

                    await textfield.blur();

                    await expect(example).toHaveScreenshot(
                        `input-number-unfocused-with-value-size-${size}.png`,
                    );
                });
            });
        });

        test('does not mutate already valid too large number on blur', async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.InputNumber}/API?thousandSeparator=_&precision=2`,
            );
            await textfield.focus();
            await textfield.clear();
            await textfield.pressSequentially('123456789012345.6789');

            await expect(textfield).toHaveValue('123_456_789_012_345.67');

            await textfield.blur();

            await expect(textfield).toHaveValue('123_456_789_012_345.67');
        });
    });
});
