import {DemoRoute} from '@demo/routes';
import {
    CHAR_MINUS,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputSliderPO,
    TuiSliderPO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('InputSlider', () => {
    test.use({viewport: {width: 400, height: 500}});

    describe('[min] prop', () => {
        describe('positive numbers', () => {
            let inputSlider!: TuiInputSliderPO;

            beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputSlider}/API?min=10&max=100&precision=3&step=1`,
                );

                inputSlider = new TuiInputSliderPO(
                    new TuiDocumentationPagePO(page).apiPageExample.locator(
                        'tui-textfield:has([tuiInputSlider])',
                    ),
                );

                await inputSlider.textfield.clear();
            });

            test('cannot type number less than [min] property', async () => {
                await inputSlider.textfield.fill('9.999');
                await inputSlider.textfield.blur();

                await expect(inputSlider.textfield).toHaveValue('10');
            });

            test('cannot even type minus if [min] is positive', async () => {
                await inputSlider.textfield.pressSequentially('-11');

                await expect(inputSlider.textfield).toHaveValue('11');
            });

            test('cannot set value less than [min] using ArrowDown', async () => {
                await inputSlider.textfield.fill('11');

                await inputSlider.textfield.press('ArrowDown');

                await expect(inputSlider.textfield).toHaveValue('10');

                await inputSlider.textfield.press('ArrowDown');

                await expect(inputSlider.textfield).toHaveValue('10');
            });
        });

        describe('negative numbers', () => {
            let inputSlider!: TuiInputSliderPO;

            beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputSlider}/API?min=-10&max=100&precision=3&step=1`,
                );

                inputSlider = new TuiInputSliderPO(
                    new TuiDocumentationPagePO(page).apiPageExample.locator(
                        'tui-textfield:has([tuiInputSlider])',
                    ),
                );

                await inputSlider.textfield.clear();
            });

            test('can type negative number more than [min]', async () => {
                await inputSlider.textfield.pressSequentially('-5');

                await expect(inputSlider.textfield).toHaveValue(`${CHAR_MINUS}5`);
            });

            test('cannot type negative number less than [min]', async () => {
                await inputSlider.textfield.pressSequentially('-11');

                await expect(inputSlider.textfield).toHaveValue(`${CHAR_MINUS}10`);
            });
        });

        describe('if [min]-property equals to [max]-property', () => {
            let inputSlider!: TuiInputSliderPO;

            beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputSlider}/API?min=25&max=25&precision=0`,
                );

                inputSlider = new TuiInputSliderPO(
                    new TuiDocumentationPagePO(page).apiPageExample.locator(
                        'tui-textfield:has([tuiInputSlider])',
                    ),
                );

                await inputSlider.textfield.clear();
                await inputSlider.textfield.fill('25');
                await inputSlider.textfield.focus();
            });

            test('pressing ArrowUp does not change value', async () => {
                await inputSlider.textfield.press('ArrowUp');

                await expect(inputSlider.textfield).toHaveValue('25');
            });

            test('pressing ArrowDown does not change value', async () => {
                await inputSlider.textfield.press('ArrowDown');

                await expect(inputSlider.textfield).toHaveValue('25');
            });
        });
    });

    describe('[quantum] prop', () => {
        let inputSlider!: TuiInputSliderPO;
        let example!: Locator;

        describe('[quantum]="10"', () => {
            beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputSlider}/API?max=100&&quantum=10&sandboxExpanded=true`,
                );

                example = new TuiDocumentationPagePO(page).apiPageExample;
                inputSlider = new TuiInputSliderPO(
                    example.locator('tui-textfield:has([tuiInputSlider])'),
                );
            });

            describe('allows to enter number which IS NOT divisible by quantum value', () => {
                ['3', '5', '7', '9', '11', '14', '19'].forEach((value) => {
                    test(`${value}`, async () => {
                        await inputSlider.textfield.fill(value);
                        await expect(inputSlider.textfield).toHaveValue(value);
                    });
                });
            });

            describe('allows to enter number which IS divisible by quantum value', () => {
                ['0', '10', '20', '30', '60', '90', '100'].forEach((value) => {
                    test(`${value}`, async () => {
                        await inputSlider.textfield.fill(value);
                        await expect(inputSlider.textfield).toHaveValue(value);
                    });
                });
            });

            describe('rounds invalid number on blur', () => {
                test('4 => 0', async () => {
                    await inputSlider.textfield.fill('4');
                    await inputSlider.textfield.blur();
                    await expect(inputSlider.textfield).toHaveValue('0');
                });

                test('5 => 10', async () => {
                    await inputSlider.textfield.fill('5');
                    await inputSlider.textfield.blur();
                    await expect(inputSlider.textfield).toHaveValue('10');
                });

                test('6 => 10', async () => {
                    await inputSlider.textfield.fill('6');
                    await inputSlider.textfield.blur();
                    await expect(inputSlider.textfield).toHaveValue('10');
                });

                test('19 => 20', async () => {
                    await inputSlider.textfield.fill('19');
                    await inputSlider.textfield.blur();
                    await expect(inputSlider.textfield).toHaveValue('20');
                });

                test('77 => 80', async () => {
                    await inputSlider.textfield.fill('77');
                    await inputSlider.textfield.blur();
                    await expect(inputSlider.textfield).toHaveValue('80');
                });
            });

            describe('form control always contains only number which IS divisible by quantum value', () => {
                test('4 => 0', async () => {
                    await inputSlider.textfield.fill('4');
                    await expect(example).toContainText('"testValue": 0');
                    await inputSlider.textfield.blur();
                    await expect(example).toContainText('"testValue": 0');
                });

                test('5 => 10', async () => {
                    await inputSlider.textfield.fill('5');
                    await expect(example).toContainText('"testValue": 10');
                    await inputSlider.textfield.blur();
                    await expect(example).toContainText('"testValue": 10');
                });

                test('77 => 80', async () => {
                    await inputSlider.textfield.fill('77');
                    await expect(example).toContainText('"testValue": 80');
                    await inputSlider.textfield.blur();
                    await expect(example).toContainText('"testValue": 80');
                });
            });
        });
    });

    describe('[disabled] prop', () => {
        test('disables both textfield and slider when host component has disabled state', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.InputSlider}/API?disabled=true`);

            const example = new TuiDocumentationPagePO(page).apiPageExample;
            const inputSlider = new TuiInputSliderPO(
                example.locator('tui-textfield:has([tuiInputSlider])'),
            );

            await expect(inputSlider.textfield).toBeDisabled();
            await expect(inputSlider.slider).toBeHidden();

            await expect(
                new TuiDocumentationPagePO(page).apiPageExample,
            ).toHaveScreenshot('input-slider-disabled-state.png');
        });
    });

    describe('[readonly] prop', () => {
        test('keyboard arrows ArrowUp/ArrowDown does not change textfield/slider value', async ({
            page,
        }) => {
            await tuiGoto(
                page,
                `${DemoRoute.InputSlider}/API?min=-10&max=10&readOnly=true`,
            );

            const example = new TuiDocumentationPagePO(page).apiPageExample;
            const inputSlider = new TuiInputSliderPO(
                example.locator('tui-textfield:has([tuiInputSlider])'),
            );

            await inputSlider.textfield.press('ArrowUp');
            await page.keyboard.down('ArrowUp');

            await expect(inputSlider.textfield).toHaveValue('0');
            await expect(inputSlider.slider).toBeHidden();

            await inputSlider.textfield.press('ArrowDown');
            await page.keyboard.down('ArrowDown');

            await expect(inputSlider.textfield).toHaveValue('0');
            await expect(inputSlider.slider).toBeHidden();
        });
    });

    describe('<tui-textfield /> props', () => {
        describe('[content] prop', () => {
            test('hide [content] when input is focused', async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputSlider}/API?content=TOP-SECRET&postfix=things&prefix=$`,
                );

                const {apiPageExample} = new TuiDocumentationPagePO(page);
                const inputSlider = new TuiInputSliderPO(
                    apiPageExample.locator('tui-textfield:has([tuiInputSlider])'),
                );

                await inputSlider.textfield.focus();

                await expect
                    .soft(apiPageExample)
                    .toHaveScreenshot('input-slider-content-not-visible.png');
            });

            test('[content] is not overlapped by [prefix]/[postfix] (input is NOT focused)', async ({
                page,
            }) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputSlider}/API?content=TOP-SECRET&postfix=things&prefix=$`,
                );

                await expect(
                    new TuiDocumentationPagePO(page).apiPageExample,
                ).toHaveScreenshot('input-slider-content-visible.png');
            });
        });
    });

    describe('textfield => slider synchronization', () => {
        let example!: Locator;
        let inputSlider!: TuiInputSliderPO;

        beforeEach(({page}) => {
            example = new TuiDocumentationPagePO(page).apiPageExample;
            inputSlider = new TuiInputSliderPO(
                example.locator('tui-textfield:has([tuiInputSlider])'),
            );
        });

        test('typing new value inside text input also change slider position', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.InputSlider}/API?min=5&max=20&step=1`);

            for (const value of [5, 9, 12, 18, 20].map(String)) {
                await inputSlider.textfield.clear();
                await inputSlider.textfield.fill(value);

                await expect(inputSlider.slider).toHaveValue(value);
                await expect
                    .soft(example)
                    .toHaveScreenshot(`input-slider-to-slider-typing-${value}.png`);
            }
        });

        test('pressing ArrowUp/ArrowDown change textfield value and slider position', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.InputSlider}/API?min=0&max=10&step=1`);

            await inputSlider.textfield.clear();
            await inputSlider.textfield.fill('0');

            for (let i = 1; i <= 10; i++) {
                await inputSlider.textfield.focus();
                await inputSlider.textfield.press('ArrowUp');
                await inputSlider.textfield.blur();

                await expect(inputSlider.textfield).toHaveValue(String(i));
                await expect(inputSlider.slider).toHaveValue(String(i));
                await expect
                    .soft(example)
                    .toHaveScreenshot(
                        `input-slider-to-slider-keyboard-arrow-up-${i}.png`,
                    );
            }

            for (let i = 9; i >= 0; i--) {
                await inputSlider.textfield.focus();
                await inputSlider.textfield.press('ArrowDown');
                await inputSlider.textfield.blur();

                await expect(inputSlider.textfield).toHaveValue(String(i));
                await expect(inputSlider.slider).toHaveValue(String(i));
                await expect
                    .soft(example)
                    .toHaveScreenshot(
                        `input-slider-to-slider-keyboard-arrow-down-${i}.png`,
                    );
            }
        });

        describe('min/max restraints also works for slider', () => {
            let slider!: TuiSliderPO;
            let track!: {x: number; y: number; width: number; height: number};

            beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputSlider}/API?min=5&max=10&step=1&keySteps=null`,
                );

                slider = new TuiSliderPO(inputSlider.slider);
                track = (await inputSlider.slider.boundingBox())!;
                expect(track).toBeTruthy();
            });

            test('click on slider', async () => {
                await inputSlider.slider.click({
                    position: {x: 0.85 * track.width, y: track.height / 2},
                });

                await expect(inputSlider.slider).toHaveValue('9');
                await expect(async () => {
                    expect(await slider.fillPercentage).toBe(80);
                }).toPass();
            });

            test('move thumb', async ({page}) => {
                await page.mouse.move(track.x, track.y + track.height / 2);
                await page.mouse.down();
                await page.mouse.move(
                    track.x + track.width * 0.85,
                    track.y + track.height / 2,
                );
                await page.mouse.up();

                await expect(inputSlider.slider).toHaveValue('9');
                await expect(async () => {
                    expect(await slider.fillPercentage).toBe(80);
                }).toPass();
            });
        });
    });
});
