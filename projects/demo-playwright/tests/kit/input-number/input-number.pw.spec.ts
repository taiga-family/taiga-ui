import {DemoRoute} from '@demo/routes';
import {
    CHAR_EM_DASH,
    CHAR_EN_DASH,
    CHAR_HYPHEN,
    CHAR_MINUS,
    CMD,
    InputNumberPO,
    TuiDocumentationApiPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('InputNumber', () => {
    let example: Locator;
    let inputNumber: InputNumberPO;

    describe('API', () => {
        beforeEach(({page}) => {
            example = new TuiDocumentationApiPagePO(page).apiPageExample;
            inputNumber = new InputNumberPO(
                example.locator('tui-textfield:has([tuiInputNumber])'),
            );
        });

        describe('[min] prop', () => {
            describe('[min] property is positive number', () => {
                test('rejects minus sign', async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?min=5`);
                    await inputNumber.textfield.fill(
                        `${CHAR_MINUS}${CHAR_HYPHEN}${CHAR_EN_DASH}${CHAR_EM_DASH}9`,
                    );

                    await expect(inputNumber.textfield).toHaveValue('9');
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        1,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        1,
                    );
                });

                test('validates positive value (less than [min]) only on blur', async ({
                    page,
                }) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?min=5`);
                    await inputNumber.textfield.fill('2');

                    await expect(inputNumber.textfield).toHaveValue('2');
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        1,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        1,
                    );

                    await inputNumber.textfield.blur();

                    await expect(inputNumber.textfield).toHaveValue('5');
                });

                test('allows to enter multi-length positive value (which is less than [min])', async ({
                    page,
                }) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?min=100`);

                    await inputNumber.textfield.fill('3'); // less than min

                    await expect(inputNumber.textfield).toHaveValue('3');

                    await inputNumber.textfield.pressSequentially('3'); // still less than min

                    await expect(inputNumber.textfield).toHaveValue('33');

                    await inputNumber.textfield.fill('333'); // more than min

                    await expect(inputNumber.textfield).toHaveValue('333');
                });
            });

            describe('[min] property is negative number', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?min=-5`);

                    await inputNumber.textfield.clear();
                });

                test('immediately validates negative value', async () => {
                    await inputNumber.textfield.fill('-10'); // less than [min]

                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        2,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        2,
                    );
                    await expect(inputNumber.textfield).toHaveValue(`${CHAR_MINUS}5`);
                });

                test('do not touch any positive value', async ({page}) => {
                    await inputNumber.textfield.fill('1');

                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        1,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        1,
                    );
                    await expect(inputNumber.textfield).toHaveValue('1');

                    await inputNumber.textfield.pressSequentially('0');

                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        2,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        2,
                    );
                    await expect(inputNumber.textfield).toHaveValue('10');

                    await inputNumber.textfield.blur();

                    await expect(inputNumber.textfield).toHaveValue('10');

                    await page.waitForTimeout(100); // to be sure that value is not changed even in case of some async validation

                    await expect(inputNumber.textfield).toHaveValue('10');
                });
            });
        });

        describe('[max] prop', () => {
            describe('[max] property is negative number', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?max=-5`);
                });

                test('validates negative value only on blur', async ({page}) => {
                    await inputNumber.textfield.fill('-1'); // more than [max]
                    await page.waitForTimeout(100); // to be sure that value is not changed even in case of some async validation

                    await expect(inputNumber.textfield).toHaveValue(`${CHAR_MINUS}1`);
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        2,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        2,
                    );

                    await inputNumber.textfield.blur();

                    await expect(inputNumber.textfield).toHaveValue(`${CHAR_MINUS}5`);
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        2,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        2,
                    );
                });
            });

            describe('[max] property is positive number', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?max=12`);
                });

                test('immediately validates positive value', async () => {
                    await inputNumber.textfield.fill('19'); // more than max

                    await expect(inputNumber.textfield).toHaveValue('12');
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        2,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        2,
                    );
                });

                test('do not touch any negative value', async ({page}) => {
                    await inputNumber.textfield.fill('-1');

                    await expect(inputNumber.textfield).toHaveValue(`${CHAR_MINUS}1`);
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        2,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        2,
                    );

                    await page.keyboard.down('9');

                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        3,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        3,
                    );
                    await expect(inputNumber.textfield).toHaveValue(`${CHAR_MINUS}19`);

                    await page.waitForTimeout(100); // to ensure that value is not changed even in case of some async validation

                    await expect(inputNumber.textfield).toHaveValue(`${CHAR_MINUS}19`);
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        3,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        3,
                    );
                });
            });
        });

        describe('[step] prop', () => {
            test.use({viewport: {width: 350, height: 500}});

            describe('[step]=1 & initially empty textfield', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?step=1`);

                    await expect(inputNumber.textfield).toHaveValue('');
                });

                test('sets 1 on increase button click', async () => {
                    await inputNumber.stepUp.click();

                    await expect(inputNumber.textfield).toHaveValue('1');
                });

                test('sets 1 on keyboard ArrowUp press', async () => {
                    await inputNumber.textfield.press('ArrowUp');

                    await expect(inputNumber.textfield).toHaveValue('1');
                });

                test('sets -1 on decrease button click', async () => {
                    await inputNumber.stepDown.click();

                    await expect(inputNumber.textfield).toHaveValue(`${CHAR_MINUS}1`);
                });

                test('sets -1 on keyboard ArrowDown press', async () => {
                    await inputNumber.textfield.press('ArrowDown');

                    await expect(inputNumber.textfield).toHaveValue(`${CHAR_MINUS}1`);
                });

                test('sets 2 on pointer press and hold', async ({page}) => {
                    const stepUpBox = await inputNumber.stepUp.boundingBox();

                    expect(stepUpBox).not.toBeNull();

                    await page.mouse.move(
                        stepUpBox!.x + stepUpBox!.width / 2,
                        stepUpBox!.y + stepUpBox!.height / 2,
                    );

                    await page.mouse.down();

                    await page.waitForTimeout(350);

                    await page.mouse.up();

                    await expect(inputNumber.textfield).toHaveValue('2');
                });

                test('sets 0 from 2 on pointer press and hold', async ({page}) => {
                    await inputNumber.textfield.fill('2');
                    await expect(inputNumber.textfield).toHaveValue('2');

                    const stepDownBox = await inputNumber.stepDown.boundingBox();

                    expect(stepDownBox).not.toBeNull();

                    await page.mouse.move(
                        stepDownBox!.x + stepDownBox!.width / 2,
                        stepDownBox!.y + stepDownBox!.height / 2,
                    );

                    await page.mouse.down();

                    await page.waitForTimeout(350);

                    await page.mouse.up();

                    await expect(inputNumber.textfield).toHaveValue('0');
                });
            });

            describe('[step]=3', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?step=3`);
                });

                test('Click on increase button x3 times => value is 9', async () => {
                    await inputNumber.stepUp.click();
                    await inputNumber.stepUp.click();
                    await inputNumber.stepUp.click();

                    await expect(inputNumber.textfield).toHaveValue('9');
                });

                test('Click on decrease button x6 times => value is -18', async () => {
                    for (let i = 0; i < 6; i++) {
                        await inputNumber.stepDown.click();
                    }

                    await expect(inputNumber.textfield).toHaveValue(`${CHAR_MINUS}18`);
                });

                test('Click on decrease button x1 & click increase x2 time  => value is 3', async () => {
                    await inputNumber.stepDown.click();
                    await inputNumber.stepUp.click();
                    await inputNumber.stepUp.click();

                    await expect(inputNumber.textfield).toHaveValue('3');
                });
            });

            describe('[min=0] & [max=0] & [step]=4', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputNumber}/API?min=0&max=10&step=4`,
                    );
                });

                test('Maximum limit cannot be violated via steps', async () => {
                    await inputNumber.stepUp.click();
                    await inputNumber.textfield.press('ArrowUp');

                    await expect(inputNumber.textfield).toHaveValue('8');

                    await inputNumber.stepUp.click();

                    await expect(inputNumber.textfield).toHaveValue('10');

                    await expect(inputNumber.stepUp).toBeDisabled();

                    // eslint-disable-next-line playwright/no-force-option
                    await inputNumber.stepUp.click({force: true});
                    await inputNumber.stepUp.press('ArrowUp');

                    await expect(inputNumber.textfield).toHaveValue('10');
                    await expect
                        .soft(inputNumber.host)
                        .toHaveScreenshot('input-number-with-disabled-step-up.png');
                });

                test('Minimum limit cannot be violated via steps', async () => {
                    await inputNumber.stepDown.click();
                    await inputNumber.textfield.press('ArrowDown');

                    await expect(inputNumber.textfield).toHaveValue('0');
                    await expect
                        .soft(inputNumber.host)
                        .toHaveScreenshot('input-number-with-disabled-step-down.png');

                    await inputNumber.textfield.fill('2');
                    await inputNumber.stepDown.click();

                    await expect(inputNumber.textfield).toHaveValue('0');
                    await expect(inputNumber.stepDown).toBeDisabled();
                });
            });

            describe('different size of the textfield has different size of the step buttons', () => {
                describe('empty textfield', () => {
                    ['s', 'm', 'l'].forEach((size) => {
                        test(`[size]=${size} & empty textfield`, async ({page}) => {
                            await tuiGoto(
                                page,
                                `${DemoRoute.InputNumber}/API?step=1&tuiTextfieldSize=${size}`,
                            );

                            await expect
                                .soft(inputNumber.host)
                                .toHaveScreenshot(
                                    `input-number-with-step-no-value-tuiTextfieldSize=${size}.png`,
                                );
                        });
                    });
                });

                describe('textfield has value', () => {
                    ['s', 'm', 'l'].forEach((size) => {
                        test(`[size]=${size} & empty textfield`, async ({page}) => {
                            await tuiGoto(
                                page,
                                `${DemoRoute.InputNumber}/API?step=1&tuiTextfieldSize=${size}`,
                            );
                            await inputNumber.textfield.fill('42');

                            await expect
                                .soft(inputNumber.host)
                                .toHaveScreenshot(
                                    `input-number-with-step-with-value-tuiTextfieldSize=${size}.png`,
                                );
                        });
                    });
                });
            });

            describe('caret position on step action', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(page, `${DemoRoute.InputNumber}/API?step=1&postfix=kg`);

                    await expect(inputNumber.textfield).toHaveValue('');
                    await expect(inputNumber.textfield).not.toBeFocused();
                });

                test('Empty unfocused textfield => Click + => Textfield is focused & Caret is placed before postfix', async () => {
                    await inputNumber.stepUp.click();

                    await expect(inputNumber.textfield).toHaveValue('1kg');
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        1,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        1,
                    );
                });

                test('Focused textfield with postfix only => Press ArrowDown => Caret is placed before postfix', async () => {
                    await inputNumber.textfield.focus();
                    await expect(inputNumber.textfield).toHaveValue('kg');
                    await inputNumber.textfield.press('ArrowDown');

                    await expect(inputNumber.textfield).toHaveValue(`${CHAR_MINUS}1kg`);
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        2,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        2,
                    );
                });

                describe('Keeps caret position on step', () => {
                    beforeEach(async () => {
                        await inputNumber.textfield.fill('42');

                        await expect(inputNumber.textfield).toHaveValue('42kg');
                        await expect(inputNumber.textfield).toHaveJSProperty(
                            'selectionStart',
                            2,
                        );
                        await expect(inputNumber.textfield).toHaveJSProperty(
                            'selectionEnd',
                            2,
                        );
                        await inputNumber.textfield.press('ArrowLeft');
                        await expect(inputNumber.textfield).toHaveJSProperty(
                            'selectionStart',
                            1,
                        );
                        await expect(inputNumber.textfield).toHaveJSProperty(
                            'selectionEnd',
                            1,
                        );
                    });

                    test('via button', async () => {
                        await inputNumber.stepUp.click();
                        await expect(inputNumber.textfield).toHaveValue('43kg');
                        // Caret should be at the end of value but before postfix ("kg")
                        await expect(inputNumber.textfield).toHaveJSProperty(
                            'selectionStart',
                            2,
                        );
                        await expect(inputNumber.textfield).toHaveJSProperty(
                            'selectionEnd',
                            2,
                        );
                    });

                    test('via keyboard arrow', async () => {
                        await inputNumber.textfield.press('ArrowUp');
                        await expect(inputNumber.textfield).toHaveValue('43kg');
                        // Caret should be at the end of value but before postfix ("kg")
                        await expect(inputNumber.textfield).toHaveJSProperty(
                            'selectionStart',
                            2,
                        );
                        await expect(inputNumber.textfield).toHaveJSProperty(
                            'selectionEnd',
                            2,
                        );
                    });
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
                        await expect(inputNumber.textfield).toHaveValue('');
                    });

                    test('shows suffixes for empty textfield on focus', async () => {
                        await inputNumber.textfield.focus();

                        await expect(inputNumber.textfield).toHaveValue(prefix + postfix);
                    });

                    test('does not shows prefix for READONLY empty textfield on focus', async ({
                        page,
                    }) => {
                        await tuiGoto(
                            page,
                            `${DemoRoute.InputNumber}/API?prefix=${prefix}&postfix=${postfix}&readOnly=true`,
                        );
                        await inputNumber.textfield.focus();

                        await expect(inputNumber.textfield).toHaveValue('');

                        await inputNumber.textfield.click();

                        await expect(inputNumber.textfield).toHaveValue('');
                    });

                    describe('forbids to erase prefix', () => {
                        test('using Backspace many times', async () => {
                            await inputNumber.textfield.focus();
                            await inputNumber.textfield.press('Backspace');
                            await inputNumber.textfield.press('Backspace');

                            await expect(inputNumber.textfield).toHaveValue(
                                prefix + postfix,
                            );

                            await inputNumber.textfield.pressSequentially('42');

                            await expect(inputNumber.textfield).toHaveValue(
                                `${prefix}42${postfix}`,
                            );

                            await inputNumber.textfield.press('Backspace');
                            await inputNumber.textfield.press('Backspace');
                            await inputNumber.textfield.press('Backspace');
                            await inputNumber.textfield.press('Backspace');
                            await inputNumber.textfield.press('Backspace');

                            await expect(inputNumber.textfield).toHaveValue(
                                prefix + postfix,
                            );
                        });

                        test('select all + Backspace', async ({page}) => {
                            await inputNumber.textfield.focus();
                            await page.keyboard.press(`${CMD}+A`);
                            await page.keyboard.press('Backspace');

                            await expect(inputNumber.textfield).toHaveValue(
                                prefix + postfix,
                            );

                            await inputNumber.textfield.pressSequentially('42');

                            await expect(inputNumber.textfield).toHaveValue(
                                `${prefix}42${postfix}`,
                            );

                            await page.keyboard.press(`${CMD}+A`);
                            await page.keyboard.press('Backspace');

                            await expect(inputNumber.textfield).toHaveValue(
                                prefix + postfix,
                            );
                        });

                        test('select all + Delete', async ({page}) => {
                            await inputNumber.textfield.focus();
                            await page.keyboard.press(`${CMD}+A`);
                            await page.keyboard.press('Delete');

                            await expect(inputNumber.textfield).toHaveValue(
                                prefix + postfix,
                            );

                            await inputNumber.textfield.pressSequentially('42');

                            await expect(inputNumber.textfield).toHaveValue(
                                `${prefix}42${postfix}`,
                            );

                            await page.keyboard.press(`${CMD}+A`);
                            await page.keyboard.press('Delete');

                            await expect(inputNumber.textfield).toHaveValue(
                                prefix + postfix,
                            );
                        });
                    });

                    test('textfield does not contain any digit (only suffixes) => clear inputNumber.textfield value on blur', async ({
                        browserName,
                    }) => {
                        // TODO
                        // eslint-disable-next-line playwright/no-skipped-test
                        test.skip(
                            browserName !== 'chromium',
                            'Investigate why it fails in Safari',
                        );

                        await inputNumber.textfield.focus();

                        await expect(inputNumber.textfield).toHaveValue(prefix + postfix);
                        await expect(inputNumber.textfield).toHaveJSProperty(
                            'selectionStart',
                            prefix.length,
                        );
                        await expect(inputNumber.textfield).toHaveJSProperty(
                            'selectionEnd',
                            prefix.length,
                        );

                        await inputNumber.textfield.blur();

                        await expect(inputNumber.textfield).toHaveValue('');
                    });
                });
            });

            describe('non-erasable minus (as [prefix]) for [max] <= 0', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputNumber}/API?prefix=${CHAR_MINUS}&max=0`,
                    );
                    await expect(inputNumber.textfield).toHaveValue('');
                });

                test('shows minus sign on focus', async () => {
                    await inputNumber.textfield.focus();
                    await expect(inputNumber.textfield).toHaveValue(CHAR_MINUS);
                });

                test('hides minus sign on blur', async () => {
                    await inputNumber.textfield.focus();
                    await expect(inputNumber.textfield).toHaveValue(CHAR_MINUS);
                    await inputNumber.textfield.blur();
                    await expect(inputNumber.textfield).toHaveValue('');
                });

                // TODO: Remove .skip after release of https://github.com/taiga-family/maskito/pull/2087
                // eslint-disable-next-line playwright/no-skipped-test
                test.skip('forbids to enter more minuses', async () => {
                    await inputNumber.textfield.focus();
                    await inputNumber.textfield.pressSequentially(
                        CHAR_HYPHEN + CHAR_MINUS + CHAR_EN_DASH + CHAR_EM_DASH,
                    );
                    await expect(inputNumber.textfield).toHaveValue(CHAR_MINUS);
                });

                test('allows to enter 123 => Textfield value is -123', async () => {
                    await inputNumber.textfield.focus();
                    await inputNumber.textfield.pressSequentially('123');
                    await expect(inputNumber.textfield).toHaveValue(`${CHAR_MINUS}123`);
                });

                test('Enter 123 and blur', async () => {
                    await inputNumber.textfield.focus();
                    await inputNumber.textfield.pressSequentially('123');
                    await inputNumber.textfield.blur();
                    await expect(inputNumber.textfield).toHaveValue(`${CHAR_MINUS}123`);
                });
            });
        });

        describe('[precision] prop', () => {
            test('[precision]=0', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputNumber}/API?precision=0`);
                await inputNumber.textfield.focus();
                await inputNumber.textfield.pressSequentially(',.');

                await expect(inputNumber.textfield).toHaveValue('');

                await inputNumber.textfield.pressSequentially('0,.');

                await expect(inputNumber.textfield).toHaveValue('0');
            });

            test('[precision]=2', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputNumber}/API?precision=2`);
                await inputNumber.textfield.focus();
                await inputNumber.textfield.pressSequentially(',.');

                await expect(inputNumber.textfield).toHaveValue('0.');

                await inputNumber.textfield.pressSequentially('12345');

                await expect(inputNumber.textfield).toHaveValue('0.12');
            });
        });

        describe('[thousandSeparator] prop', () => {
            test('_', async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputNumber}/API?thousandSeparator=_`);
                await inputNumber.textfield.focus();
                await inputNumber.textfield.pressSequentially('1234567890');

                await expect(inputNumber.textfield).toHaveValue('1_234_567_890');
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
                await inputNumber.textfield.focus();
                await inputNumber.textfield.pressSequentially('1234567890');

                await expect(inputNumber.textfield).toHaveValue('1.234.567.890');
            });
        });

        describe('[decimalSeparator] prop', () => {
            test('.', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumber}/API?precision=4&decimalSeparator=.`,
                );
                await inputNumber.textfield.focus();
                await inputNumber.textfield.pressSequentially('.1234567890');

                await expect(inputNumber.textfield).toHaveValue('0.1234');

                await inputNumber.textfield.clear();

                await inputNumber.textfield.pressSequentially(',42');

                await expect(inputNumber.textfield).toHaveValue('0.42');
            });
        });

        describe('[decimalMode] prop', () => {
            test('decimalMode=not-zero | 42 => Blur => 42', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumber}/API?precision=2&decimalMode=not-zero`,
                );

                await inputNumber.textfield.fill('42');

                await expect(inputNumber.textfield).toHaveValue('42');
                await expect(inputNumber.textfield).toHaveJSProperty('selectionStart', 2);
                await expect(inputNumber.textfield).toHaveJSProperty('selectionEnd', 2);
                await expect(inputNumber.textfield).toHaveValue('42');
            });

            test('decimalMode=not-zero | 42.1 => Blur => 42.1', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumber}/API?precision=2&decimalMode=not-zero`,
                );

                await inputNumber.textfield.fill('42.1');

                await expect(inputNumber.textfield).toHaveValue('42.1');
                await expect(inputNumber.textfield).toHaveJSProperty('selectionStart', 4);
                await expect(inputNumber.textfield).toHaveJSProperty('selectionEnd', 4);

                await inputNumber.textfield.blur();

                await expect(inputNumber.textfield).toHaveValue('42.1');
            });

            test('decimalMode=not-zero | 42.00 => Blur => 42', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumber}/API?precision=2&decimalMode=not-zero`,
                );

                await inputNumber.textfield.fill('42.00');

                await expect(inputNumber.textfield).toHaveJSProperty(
                    'selectionStart',
                    '42.00'.length,
                );
                await expect(inputNumber.textfield).toHaveJSProperty(
                    'selectionEnd',
                    '42.00'.length,
                );

                await inputNumber.textfield.blur();

                await expect(inputNumber.textfield).toHaveValue('42');
            });

            test('decimalMode=pad | 42.1 => Blur => 42.10', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumber}/API?precision=2&decimalMode=pad`,
                );

                await inputNumber.textfield.fill('42.1');

                await expect(inputNumber.textfield).toHaveValue('42.1');
                await expect(inputNumber.textfield).toHaveJSProperty(
                    'selectionStart',
                    '42.1'.length,
                );
                await expect(inputNumber.textfield).toHaveJSProperty(
                    'selectionEnd',
                    '42.1'.length,
                );

                await inputNumber.textfield.blur();

                await expect(inputNumber.textfield).toHaveValue('42.10');
            });

            test('decimalMode=always | Enter 42 => 42.00', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputNumber}/API?precision=2&decimalMode=always`,
                );
                await inputNumber.textfield.fill('42');

                await expect(inputNumber.textfield).toHaveValue('42.00');
                await expect(inputNumber.textfield).toHaveJSProperty('selectionStart', 2);
                await expect(inputNumber.textfield).toHaveJSProperty('selectionEnd', 2);
            });
        });

        describe('Caret navigation', () => {
            describe('if user tries to erase padded decimal zeroes (decimalMode="always"), mask triggers caret navigation', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputNumber}/API?decimalMode=always&precision=2`,
                    );

                    await inputNumber.textfield.clear();
                    await inputNumber.textfield.fill('105.00');
                });

                test('105.00| => Backspace => 105.0|0', async ({page}) => {
                    await page.keyboard.press('Backspace');

                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        '105.0'.length,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        '105.0'.length,
                    );
                    await expect(inputNumber.textfield).toHaveValue('105.00');
                });

                test('105.0|0 => Backspace => 105.|00', async ({page}) => {
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('Backspace');

                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        '105.'.length,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        '105.'.length,
                    );
                    await expect(inputNumber.textfield).toHaveValue('105.00');
                });

                test('105.|00 => Backspace => 105|.00', async ({page}) => {
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('Backspace');

                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        '105'.length,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        '105'.length,
                    );
                    await expect(inputNumber.textfield).toHaveValue('105.00');
                });

                test('105.|00 => Delete => 105.0|0', async ({page}) => {
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('Delete');

                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        '105.0'.length,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        '105.0'.length,
                    );
                    await expect(inputNumber.textfield).toHaveValue('105.00');
                });
            });

            describe('if user tries to erase thousand separator, mask triggers caret navigation', () => {
                beforeEach(async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputNumber}/API?decimalMode=not-zero`,
                    );

                    await inputNumber.textfield.fill('1000');
                });

                test('1| 000 => Delete => 1 |000', async ({page}) => {
                    const {length} = await inputNumber.textfield.inputValue();

                    for (let i = 0; i < length; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        0,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        0,
                    );

                    await page.keyboard.press('ArrowRight');
                    await page.keyboard.press('Delete');

                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        '1 '.length,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        '1 '.length,
                    );
                    await expect(inputNumber.textfield).toHaveValue('1 000');
                });

                test('1 |000 => Backspace => 1| 000', async ({page}) => {
                    const {length} = await inputNumber.textfield.inputValue();

                    for (let i = 0; i < length; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        0,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        0,
                    );

                    await page.keyboard.press('ArrowRight');
                    await page.keyboard.press('ArrowRight');
                    await page.keyboard.press('Backspace');

                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionStart',
                        '1'.length,
                    );
                    await expect(inputNumber.textfield).toHaveJSProperty(
                        'selectionEnd',
                        '1'.length,
                    );
                    await expect(inputNumber.textfield).toHaveValue('1 000');
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

                    await expect(inputNumber.textfield).toHaveValue('');
                    await expect
                        .soft(example)
                        .toHaveScreenshot(
                            `input-number-unfocused-empty-size-${size}.png`,
                        );

                    await inputNumber.textfield.focus();

                    await expect
                        .soft(example)
                        .toHaveScreenshot(`input-number-focused-empty-size-${size}.png`);
                });

                test(`Textfield has value | ${size}`, async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputNumber}/API?precision=2&tuiTextfieldSize=${size}`,
                    );

                    await inputNumber.textfield.fill('12.34');

                    await expect(inputNumber.textfield).toHaveValue('12.34');
                    await expect
                        .soft(example)
                        .toHaveScreenshot(
                            `input-number-focused-with-value-size-${size}.png`,
                        );

                    await inputNumber.textfield.blur();

                    await expect
                        .soft(example)
                        .toHaveScreenshot(
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
            await inputNumber.textfield.focus();
            await inputNumber.textfield.clear();
            await inputNumber.textfield.pressSequentially('123456789012345.6789');

            await expect(inputNumber.textfield).toHaveValue('123_456_789_012_345.67');

            await inputNumber.textfield.blur();

            await expect(inputNumber.textfield).toHaveValue('123_456_789_012_345.67');
        });
    });
});
