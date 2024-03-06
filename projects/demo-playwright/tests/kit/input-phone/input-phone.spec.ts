import {
    CMD,
    TuiDocumentationApiPagePO,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputPhonePO,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('InputPhone', () => {
    test.describe('API page', () => {
        let example: Locator;
        let inputPhone: TuiInputPhonePO;

        test.beforeEach(({page}) => {
            example = new TuiDocumentationPagePO(page).apiPageExample;
            inputPhone = new TuiInputPhonePO(example.locator('tui-input-phone'));
        });

        test("Don't duplicate Code 52 When Inputting Digit '2' After Clearing", async ({
            page,
        }) => {
            await tuiGoto(
                page,
                'components/input-phone/API?countryCode=%2B52&tuiTextfieldCleaner=true',
            );

            await inputPhone.textfield.fill('52');
            await expect(inputPhone.textfield).toHaveValue('+52 (52');

            await inputPhone.cleaner.click();
            await expect(inputPhone.textfield).toHaveValue('+52 ');

            await inputPhone.textfield.fill('52');
            await expect(inputPhone.textfield).toHaveValue('+52 (52');
        });

        test('Remove country prefix on blur if textfield does not contain any other symbols', async ({
            page,
        }) => {
            await tuiGoto(
                page,
                'components/input-phone/API?countryCode=%2B1&tuiTextfieldCleaner=true',
            );

            await inputPhone.textfield.focus();
            await expect(inputPhone.textfield).toHaveValue('+1 ');

            await inputPhone.textfield.blur();
            await expect(inputPhone.textfield).toHaveValue('');

            await inputPhone.textfield.pressSequentially('2125552368');
            await expect(inputPhone.textfield).toHaveValue('+1 (212) 555-23-68');
            await inputPhone.textfield.blur();
            await expect(inputPhone.textfield).toHaveValue('+1 (212) 555-23-68');

            await inputPhone.textfield.focus();
            await inputPhone.cleaner.click();
            await expect(inputPhone.textfield).toHaveValue('+1 ');
            await inputPhone.textfield.blur();
            await expect(inputPhone.textfield).toHaveValue('');
        });

        test.describe("Angular form control is empty is textfield's value is just country code", () => {
            test.beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    'components/input-phone/API?countryCode=%2B1&tuiTextfieldCleaner=true&sandboxExpanded=true',
                );
            });

            test('Empty textfield => focus => textfield value is country code & form control is empty', async () => {
                await inputPhone.textfield.focus();
                await expect(inputPhone.textfield).toHaveValue('+1 ');
                await expect(example).toContainText('"testValue": ""');
            });

            test('Click on cleaner => => textfield value is country code & form control is empty', async () => {
                await inputPhone.textfield.pressSequentially('2345');
                await expect(inputPhone.textfield).toHaveValue('+1 (234) 5');
                await expect(example).toContainText('"testValue": "+12345"');

                await inputPhone.cleaner.click();
                await expect(inputPhone.textfield).toHaveValue('+1 ');
                await expect(example).toContainText('"testValue": ""');
            });
        });
    });

    test.describe('iphone-x', () => {
        let example: Locator;
        let input: Locator;

        test.use({viewport: {width: 375, height: 812}});

        test.describe('[countryCode]="+7" & [phoneMaskAfterCountryCode]="(###) ###-##-##"', () => {
            test.beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    '/components/input-phone/API?countryCode=%2B7&phoneMaskAfterCountryCode=(%23%23%23)%20%23%23%23-%23%23-%23%23',
                );

                example = new TuiDocumentationApiPagePO(page).apiPageExample;
                input = example.locator('input');
            });

            test.describe('basic typing (1 character per keydown)', () => {
                const tests = [
                    // [Typed value, Masked value]
                    ['9', '+7 (9'],
                    ['91', '+7 (91'],
                    ['912', '+7 (912'],
                    ['9123', '+7 (912) 3'],
                    ['91234', '+7 (912) 34'],
                    ['912345', '+7 (912) 345'],
                    ['9123456', '+7 (912) 345-6'],
                    ['91234567', '+7 (912) 345-67'],
                    ['912345678', '+7 (912) 345-67-8'],
                    ['9123456789', '+7 (912) 345-67-89'],
                    ['91234567890', '+7 (912) 345-67-89'],
                    ['912345678900000000', '+7 (912) 345-67-89'],
                ] as const;

                tests.forEach(([typedValue, maskedValue], i) => {
                    test(`Typing "${typedValue}" => "${maskedValue}"`, async () => {
                        await input.fill(typedValue);
                        await expect(example).toHaveScreenshot(`01-input-phone-${i}.png`);
                        await expect(input).toHaveValue(maskedValue);

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            maskedValue.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            maskedValue.length,
                        );
                    });
                });
            });

            test.describe('basic erasing (caret is placed after the last value)', () => {
                test.beforeEach(async () => input.fill('9123456789'));

                const tests = [
                    // [How many times "Backspace"-key was pressed, Masked value]
                    [1, '+7 (912) 345-67-8'],
                    [2, '+7 (912) 345-67'],
                    [3, '+7 (912) 345-6'],
                    [4, '+7 (912) 345'],
                    [5, '+7 (912) 34'],
                    [6, '+7 (912) 3'],
                    [7, '+7 (912'],
                    [8, '+7 (91'],
                    [9, '+7 (9'],
                    [10, '+7 '],
                ] as const;

                tests.forEach(([n, maskedValue], i) => {
                    test(`Backspace x${n} => "${maskedValue}"`, async ({page}) => {
                        for (let i = 0; i < n; i++) {
                            await page.keyboard.press('Backspace');
                        }

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            maskedValue.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            maskedValue.length,
                        );
                        await expect(example).toHaveScreenshot(`02-input-phone-${i}.png`);
                        await expect(input).toHaveValue(maskedValue);
                    });
                });

                test('Delete => no value change && no caret index change', async ({
                    page,
                }) => {
                    await expect(input).toHaveValue('+7 (912) 345-67-89');
                    await expect(example).toHaveScreenshot('03-input-phone-1.png');
                    await page.keyboard.press('Backspace');
                    await page.keyboard.down('5');
                    await expect(input).toHaveValue('+7 (912) 345-67-85');
                    await expect(example).toHaveScreenshot('03-input-phone-2.png');
                    await page.keyboard.press('Backspace');
                    await page.keyboard.press('Backspace');
                    await expect(example).toHaveScreenshot('03-input-phone-3.png');
                    await page.keyboard.down('9');
                    await page.keyboard.down('9');
                    await expect(input).toHaveValue('+7 (912) 345-67-99');
                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-67-99'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67-99'.length,
                    );
                    await expect(example).toHaveScreenshot('03-input-phone-4.png');
                });
            });

            test.describe('Editing somewhere in the middle of a value (NOT the last character)', () => {
                test.beforeEach(async () => input.fill('9123456789'));

                // "|"-symbol is the caret position

                test('+7 (912) 345-67-8|9 => Backspace + 0 => +7 (912) 345-67-0|9', async ({
                    page,
                }) => {
                    await page.keyboard.press('ArrowLeft');
                    await page.keyboard.press('Backspace');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-67-'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67-'.length,
                    );

                    await page.keyboard.down('0');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-67-0'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67-0'.length,
                    );

                    await expect(example).toHaveScreenshot('04-input-phone.png');
                });

                test('+7 (912) 345-67|-89 => Backspace + 0 => +7 (912) 345-60-|89', async ({
                    page,
                }) => {
                    for (let i = 0; i < 3; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await page.keyboard.press('Backspace');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-6'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-6'.length,
                    );

                    await page.keyboard.down('0');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-60-'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-60-'.length,
                    );

                    await expect(example).toHaveScreenshot('05-input-phone.png');
                });

                test('+7 (912) 345-6|7-89 => Backspace + 0 => +7 (912) 345-0|7-89', async ({
                    page,
                }) => {
                    for (let i = 0; i < 4; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await page.keyboard.press('Backspace');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-'.length,
                    );

                    await page.keyboard.down('0');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-0'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-0'.length,
                    );

                    await expect(example).toHaveScreenshot('06-input-phone.png');
                });

                test('+7 (912) 345-67-|89 => Delete + 0 => +7 (912) 345-67-0|9', async ({
                    page,
                }) => {
                    for (let i = 0; i < 2; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await page.keyboard.press('Delete');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-67-'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67-'.length,
                    );

                    await page.keyboard.down('0');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-67-0'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67-0'.length,
                    );

                    await expect(example).toHaveScreenshot('07-input-phone.png');
                });

                test('+7 (912) 345-|67-89 => Delete + 0 => +7 (912) 345-0|7-89', async ({
                    page,
                }) => {
                    for (let i = 0; i < 5; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await page.keyboard.press('Delete');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-'.length,
                    );

                    await page.keyboard.down('0');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-0'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-0'.length,
                    );

                    await expect(example).toHaveScreenshot('08-input-phone.png');
                });
            });

            test.describe('Press Backspace after fixed value => no value change => move caret to the left', () => {
                test.beforeEach(async () => input.fill('9123456789'));

                test('+7 (912) 345-67-|89 => Backspace => +7 (912) 345-67|-89', async ({
                    page,
                }) => {
                    for (let i = 0; i < 2; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-67-'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67-'.length,
                    );

                    await page.keyboard.press('Backspace');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-67'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67'.length,
                    );

                    await expect(example).toHaveScreenshot('09-input-phone.png');
                });

                test('+7 (912) 345-|67-89 => Backspace => +7 (912) 345|-67-89', async ({
                    page,
                }) => {
                    for (let i = 0; i < 5; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-'.length,
                    );

                    await page.keyboard.press('Backspace');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345'.length,
                    );

                    await expect(example).toHaveScreenshot('10-input-phone.png');
                });

                test('+7 (912) |345-67-89 => Backspace x2 => +7 (912|) 345-67-89', async ({
                    page,
                }) => {
                    for (let i = 0; i < 9; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) '.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) '.length,
                    );

                    for (let i = 0; i < 2; i++) {
                        await page.keyboard.press('Backspace');
                    }

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912'.length,
                    );

                    await expect(example).toHaveScreenshot('11-input-phone.png');
                });
            });

            test.describe('Press Delete before fixed value => no value change => move caret to the right', () => {
                test.beforeEach(async () => input.fill('9123456789'));

                test('+7 (912) 345-67|-89 => Delete => +7 (912) 345-67-|89', async ({
                    page,
                }) => {
                    for (let i = 0; i < 3; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await page.keyboard.press('Delete');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-67-'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67-'.length,
                    );

                    await expect(example).toHaveScreenshot('12-input-phone.png');
                });

                test('+7 (912) 345|-67-89 => Delete => +7 (912) 345-|67-89', async ({
                    page,
                }) => {
                    for (let i = 0; i < 6; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await page.keyboard.press('Delete');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-'.length,
                    );

                    await expect(example).toHaveScreenshot('13-input-phone.png');
                });

                test('+7 (912|) 345-67-89 => Backspace x2 => +7 (912) |345-67-89', async ({
                    page,
                }) => {
                    for (let i = 0; i < 11; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912'.length,
                    );

                    await page.keyboard.press('Delete');
                    await page.keyboard.press('Delete');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) '.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) '.length,
                    );

                    await expect(example).toHaveScreenshot('14-input-phone.png');
                });
            });

            test.describe('Text selection', () => {
                // ab|cd|e – it means that in string "abcde" characters "cd" are selected

                test.beforeEach(async () => input.fill('9123456789'));

                test.describe('Select range and press "Backspace"', () => {
                    test('+7 (912) 345-67-|89| => Backspace => +7 (912) 345-67|', async ({
                        page,
                    }) => {
                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 2; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.press('Backspace');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) 345-67'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) 345-67'.length,
                        );

                        await expect(example).toHaveScreenshot('15-input-phone.png');
                    });

                    test('+7 (912) 345-6|7-89| => Backspace => +7 (912) 345-6|', async ({
                        page,
                    }) => {
                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 4; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.press('Backspace');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) 345-6'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) 345-6'.length,
                        );

                        await expect(example).toHaveScreenshot('16-input-phone.png');
                    });

                    test('+7 (912) 345-6|7-8|9 => Backspace => +7 (912) 345-6|9', async ({
                        page,
                    }) => {
                        await page.keyboard.press('ArrowLeft');
                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 3; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.press('Backspace');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) 345-6'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) 345-6'.length,
                        );

                        await expect(example).toHaveScreenshot('17-input-phone.png');
                    });

                    test('+7 (912) 345-|67|-89 => Backspace => +7 (912) 345-|89', async ({
                        page,
                    }) => {
                        for (let i = 0; i < 3; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 2; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.press('Backspace');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) 345-'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) 345-'.length,
                        );
                        await expect(example).toHaveScreenshot('18-input-phone.png');
                    });

                    test('+7 (912) |345|-67-89 => Backspace => +7 (912) |678-9', async ({
                        page,
                    }) => {
                        for (let i = 0; i < 6; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 3; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.press('Delete');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) '.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) '.length,
                        );

                        await expect(example).toHaveScreenshot('19-input-phone.png');
                    });
                });

                test.describe('Select range and press "Delete"', () => {
                    test('+7 (912) 345-67-|89| => Delete => +7 (912) 345-67|', async ({
                        page,
                    }) => {
                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 2; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.press('Delete');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) 345-67'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) 345-67'.length,
                        );

                        await expect(example).toHaveScreenshot('20-input-phone.png');
                    });

                    test('+7 (912) 345-6|7-89| => Delete => +7 (912) 345-6|', async ({
                        page,
                    }) => {
                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 4; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) 345-6'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) 345-67-89'.length,
                        );

                        await page.keyboard.press('Delete');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) 345-6'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) 345-6'.length,
                        );

                        await expect(example).toHaveScreenshot('21-input-phone.png');
                    });

                    test('+7 (912) 345-6|7-8|9 => Delete => +7 (912) 345-6|9', async ({
                        page,
                    }) => {
                        await page.keyboard.press('ArrowLeft');
                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 3; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.press('Delete');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) 345-6'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) 345-6'.length,
                        );

                        await expect(example).toHaveScreenshot('22-input-phone.png');
                    });

                    test('+7 (912) 345-|67|-89 => Delete => +7 (912) 345-|89', async ({
                        page,
                    }) => {
                        for (let i = 0; i < 3; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 2; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.press('Delete');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) 345-'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) 345-'.length,
                        );

                        await expect(example).toHaveScreenshot('23-input-phone.png');
                    });

                    test('+7 (912) |345|-67-89 => Delete => +7 (912) |678-9', async ({
                        page,
                    }) => {
                        for (let i = 0; i < 6; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 3; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.press('Delete');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) '.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) '.length,
                        );

                        await expect(example).toHaveScreenshot('24-input-phone.png');
                    });
                });

                test.describe('Select range and press new digit', () => {
                    test('+7 (912) 345-67-|89| => Press 0 => +7 (912) 345-67-0|', async ({
                        page,
                    }) => {
                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 2; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.down('0');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) 345-67-0'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) 345-67-0'.length,
                        );

                        await expect(example).toHaveScreenshot('25-input-phone.png');
                    });

                    test('+7 (912) 345-6|7-89| => Press 0 => +7 (912) 345-60|', async ({
                        page,
                    }) => {
                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 4; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.press('0');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) 345-60'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) 345-60'.length,
                        );

                        await expect(example).toHaveScreenshot('26-input-phone.png');
                    });

                    test('+7 (912) 345-6|7-8|9 => Press 0 => +7 (912) 345-60-|9', async ({
                        page,
                    }) => {
                        await page.keyboard.press('ArrowLeft');
                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 3; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.press('0');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) 345-60-'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) 345-60-'.length,
                        );

                        await expect(example).toHaveScreenshot('27-input-phone.png');
                    });

                    test('+7 (912) 345-|67|-89 => Press 0 => +7 (912) 345-0|8-9', async ({
                        page,
                    }) => {
                        for (let i = 0; i < 3; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 2; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.press('Delete');
                        await page.keyboard.down('0');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) 345-0'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) 345-0'.length,
                        );

                        await expect(example).toHaveScreenshot('28-input-phone.png');
                    });

                    test('+7 (912) |345|-67-89 => Press "0" => +7 (912) 0|67-89', async ({
                        page,
                    }) => {
                        for (let i = 0; i < 6; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 3; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.press('Delete');
                        await page.keyboard.down('0');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912) 0'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912) 0'.length,
                        );

                        await expect(example).toHaveScreenshot('29-input-phone.png');
                    });
                });

                test.describe('Select fixed characters only', () => {
                    test('and press Backspace => no changes => move caret to the left side', async ({
                        page,
                    }) => {
                        for (let i = 0; i < 9; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.down('Shift');
                        await page.keyboard.press('ArrowLeft');
                        await page.keyboard.up('Shift');
                        await page.keyboard.press('Backspace');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912)'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912)'.length,
                        );

                        await expect(example).toHaveScreenshot('30-input-phone.png');
                    });

                    test('and press Delete => no changes => move caret to the right side', async ({
                        page,
                    }) => {
                        for (let i = 0; i < 9; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.down('Shift');

                        for (let i = 0; i < 2; i++) {
                            await page.keyboard.press('ArrowLeft');
                        }

                        await page.keyboard.up('Shift');
                        await page.keyboard.press('Backspace');

                        await expect(input).toHaveJSProperty(
                            'selectionStart',
                            '+7 (912'.length,
                        );
                        await expect(input).toHaveJSProperty(
                            'selectionEnd',
                            '+7 (912'.length,
                        );

                        await expect(example).toHaveScreenshot('31-input-phone.png');
                    });
                });
            });

            test.describe('Select all + Delete => Ctrl + Z', () => {
                test.beforeEach(async () => input.fill('9123456789'));

                test('Select all + Delete => Ctrl + Z', async ({page}) => {
                    await page.keyboard.press(`${CMD}+A`);

                    await expect(input).toHaveJSProperty('selectionStart', 0);
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67-89'.length,
                    );

                    await expect(example).toHaveScreenshot('32-input-phone.png');
                    await page.keyboard.press('Delete');

                    await expect(input).toHaveJSProperty('selectionStart', '+7 '.length);
                    await expect(input).toHaveJSProperty('selectionEnd', '+7 '.length);

                    await expect(example).toHaveScreenshot('33-input-phone.png');
                    await page.keyboard.press(`${CMD}+Z`);

                    await expect(input).toHaveJSProperty('selectionStart', 0);
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67-89'.length,
                    );

                    await expect(example).toHaveScreenshot('34-input-phone.png');
                });

                test('+7 (912) 345-67|-89 => Backspace (x2) => Ctrl + Z (x2)', async ({
                    page,
                }) => {
                    for (let i = 0; i < 3; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await page.keyboard.press('Backspace');
                    await page.keyboard.press('Backspace');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-'.length,
                    );

                    await expect(example).toHaveScreenshot('35-input-phone.png');
                    await page.keyboard.press(`${CMD}+Z`);

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-6'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-6'.length,
                    );

                    await expect(example).toHaveScreenshot('36-input-phone.png');
                    await page.keyboard.press(`${CMD}+Z`);

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-67'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67'.length,
                    );

                    await expect(example).toHaveScreenshot('37-input-phone.png');
                });

                test('+7 (912) |345-67|-89 => Delete => Cmd + Z', async ({page}) => {
                    for (let i = 0; i < 3; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await page.keyboard.down('Shift');

                    for (let i = 0; i < 6; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await page.keyboard.up('Shift');
                    await page.keyboard.press('Delete');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) '.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) '.length,
                    );

                    await expect(example).toHaveScreenshot('38-input-phone.png');
                    await page.keyboard.press(`${CMD}+Z`);

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) '.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67'.length,
                    );

                    await expect(example).toHaveScreenshot('39-input-phone.png');
                });
            });

            test.describe('Redo', () => {
                test.beforeEach(async () => input.fill('9123456789'));

                test('Select all + Delete => Cmd + Z => Cmd + Shift + Z', async ({
                    page,
                }) => {
                    await page.keyboard.press(`${CMD}+A`);
                    await page.keyboard.press('Delete');

                    await expect(input).toHaveJSProperty('selectionStart', '+7 '.length);
                    await expect(input).toHaveJSProperty('selectionEnd', '+7 '.length);

                    await expect(example).toHaveScreenshot('40-input-phone.png');
                    await page.keyboard.press(`${CMD}+Z`);

                    await expect(input).toHaveJSProperty('selectionStart', 0);
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67-89'.length,
                    );

                    await expect(example).toHaveScreenshot('41-input-phone.png');
                    await page.keyboard.press(`${CMD}+Shift+Z`);

                    await expect(input).toHaveJSProperty('selectionStart', '+7 '.length);
                    await expect(input).toHaveJSProperty('selectionEnd', '+7 '.length);

                    await expect(example).toHaveScreenshot('42-input-phone.png');
                });

                test('+7 (912) 345-67|-89 => Backspace (x2) => Ctrl + Z (x2) => Ctrl + Y (x2)', async ({
                    page,
                }) => {
                    for (let i = 0; i < 3; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    for (let i = 0; i < 2; i++) {
                        await page.keyboard.press('Backspace');
                    }

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-'.length,
                    );

                    await expect(example).toHaveScreenshot('43-input-phone.png');
                    await page.keyboard.press(`${CMD}+Z`);

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-6'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-6'.length,
                    );

                    await page.keyboard.press(`${CMD}+Z`);

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-67'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67'.length,
                    );

                    await expect(example).toHaveScreenshot('44-input-phone.png');
                    await page.keyboard.press('Control+Y');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-6'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-6'.length,
                    );

                    await page.keyboard.press('Control+Y');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-'.length,
                    );

                    await expect(example).toHaveScreenshot('45-input-phone.png');
                });

                test('+7 (912) |345-67|-89 => Delete => Cmd + Z => Cmd + Shift + Z', async ({
                    page,
                }) => {
                    for (let i = 0; i < 3; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await page.keyboard.down('Shift');

                    for (let i = 0; i < 6; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await page.keyboard.up('Shift');
                    await page.keyboard.press('Delete');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) '.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) '.length,
                    );

                    await expect(example).toHaveScreenshot('46-input-phone.png');
                    await page.keyboard.press(`${CMD}+Z`);

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) '.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67'.length,
                    );

                    await expect(example).toHaveScreenshot('47-input-phone.png');
                    await page.keyboard.press(`${CMD}+Shift+Z`);

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) '.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) '.length,
                    );

                    await expect(example).toHaveScreenshot('48-input-phone.png');
                });
            });

            test.describe('Non-removable country prefix', () => {
                test('cannot be removed via selectAll + Backspace', async ({page}) => {
                    await input.fill('9123456789');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-67-89'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67-89'.length,
                    );

                    await page.keyboard.press(`${CMD}+A`);
                    await page.keyboard.press('Backspace');

                    await expect(input).toHaveJSProperty('selectionStart', '+7 '.length);
                    await expect(input).toHaveJSProperty('selectionEnd', '+7 '.length);

                    await expect(example).toHaveScreenshot('49-input-phone.png');
                });

                test('cannot be removed via selectAll + Delete', async ({page}) => {
                    await input.fill('9123456789');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-67-89'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67-89'.length,
                    );

                    await page.keyboard.press(`${CMD}+A`);
                    await page.keyboard.press('Backspace');

                    await expect(input).toHaveJSProperty('selectionStart', '+7 '.length);
                    await expect(input).toHaveJSProperty('selectionEnd', '+7 '.length);

                    await expect(example).toHaveScreenshot('50-input-phone.png');
                });

                test('cannot be removed via Backspace', async ({page}) => {
                    await input.fill('9123456789');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-67-89'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67-89'.length,
                    );

                    await page.keyboard.press('Backspace');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (912) 345-67-8'.length,
                    );
                    await expect(input).toHaveJSProperty(
                        'selectionEnd',
                        '+7 (912) 345-67-8'.length,
                    );

                    await expect(example).toHaveScreenshot('51-input-phone.png');
                });

                test('cannot be removed via Delete', async ({page}) => {
                    await input.fill('9123456789');

                    const length = (await input.inputValue()).length;

                    for (let i = 0; i < length; i++) {
                        await page.keyboard.press('ArrowLeft');
                    }

                    await page.keyboard.press('Backspace');

                    await expect(input).toHaveJSProperty('selectionStart', '+7 '.length);
                    await expect(input).toHaveJSProperty('selectionEnd', '+7 '.length);

                    await expect(example).toHaveScreenshot('52-input-phone.png');
                });

                test('appears on focus if input is empty', async () => {
                    await input.blur();

                    await expect(input).toHaveJSProperty('selectionStart', 0);
                    await expect(input).toHaveJSProperty('selectionEnd', 0);

                    await expect(example).toHaveScreenshot('53-input-phone.png');
                    await input.focus();

                    await expect(input).toHaveJSProperty('selectionStart', '+7 '.length);
                    await expect(input).toHaveJSProperty('selectionEnd', '+7 '.length);

                    await expect(example).toHaveScreenshot('54-input-phone.png');
                });
            });

            test.describe('New typed character is equal to the previous (already existing) fixed character', () => {
                test('+7 | => Type 7 => +7 (7', async () => {
                    await input.fill('7');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (7'.length,
                    );
                    await expect(input).toHaveJSProperty('selectionEnd', '+7 (7'.length);

                    await expect(example).toHaveScreenshot('55-input-phone.png');
                });

                test('+7 (7| => Type 7 => +7 (77', async () => {
                    await input.fill('77');

                    await expect(input).toHaveJSProperty(
                        'selectionStart',
                        '+7 (77'.length,
                    );
                    await expect(input).toHaveJSProperty('selectionEnd', '+7 (77'.length);

                    await expect(example).toHaveScreenshot('56-input-phone.png');
                });
            });
        });

        test('filler', async ({page}) => {
            await tuiGoto(
                page,
                '/components/input-phone/API?tuiTextfieldCustomContent=tuiIconMastercardMono&phoneMaskAfterCountryCode=(%23%23%23)%20%23%23%23-%23%23-%23%23&tuiTextfieldCleaner=true&focusable=true&tuiTextfieldPrefix=&tuiTextfieldPostfix=&tuiTextfieldFiller=57567567&tuiTextfieldSize=l&search=q3e',
            );

            const example = new TuiDocumentationApiPagePO(page).apiPageExample;

            await example.getByTestId('tui-primitive-textfield__native-input').focus();
            await expect(example).toHaveScreenshot('57-input-phone.png');
        });
    });
});
