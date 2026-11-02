import {DemoRoute} from '@demo/routes';
import {
    CHAR_MINUS,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputSliderEO,
    TuiSliderEO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('InputSlider', () => {
    test.use({viewport: {width: 400, height: 500}});

    describe('[min] prop', () => {
        describe('positive numbers', () => {
            let inputSlider!: TuiInputSliderEO;

            beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputSlider}/API?min=10&max=100&precision=3&step=1`,
                );

                inputSlider = new TuiInputSliderEO(
                    page,
                    new TuiDocumentationPagePO(page).demo,
                );

                await inputSlider.input.clear();
            });

            test('cannot type number less than [min] property', async () => {
                await inputSlider.input.fill('9.999');
                await inputSlider.input.blur();

                await expect(inputSlider.input).toHaveValue('10');
            });

            test('cannot even type minus if [min] is positive', async () => {
                await inputSlider.input.pressSequentially('-11');

                await expect(inputSlider.input).toHaveValue('11');
            });

            test('cannot set value less than [min] using ArrowDown', async () => {
                await inputSlider.input.fill('11');

                await inputSlider.input.press('ArrowDown');

                await expect(inputSlider.input).toHaveValue('10');

                await inputSlider.input.press('ArrowDown');

                await expect(inputSlider.input).toHaveValue('10');
            });
        });

        describe('negative numbers', () => {
            let inputSlider!: TuiInputSliderEO;

            beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputSlider}/API?min=-10&max=100&precision=3&step=1`,
                );

                inputSlider = new TuiInputSliderEO(
                    page,
                    new TuiDocumentationPagePO(page).demo,
                );

                await inputSlider.input.clear();
            });

            test('can type negative number more than [min]', async () => {
                await inputSlider.input.pressSequentially('-5');

                await expect(inputSlider.input).toHaveValue(`${CHAR_MINUS}5`);
            });

            test('cannot type negative number less than [min]', async () => {
                await inputSlider.input.pressSequentially('-11');

                await expect(inputSlider.input).toHaveValue(`${CHAR_MINUS}10`);
            });
        });

        describe('if [min]-property equals to [max]-property', () => {
            let inputSlider!: TuiInputSliderEO;

            beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputSlider}/API?min=25&max=25&precision=0`,
                );

                inputSlider = new TuiInputSliderEO(
                    page,
                    new TuiDocumentationPagePO(page).demo,
                );

                await inputSlider.input.clear();
                await inputSlider.input.fill('25');
                await inputSlider.input.focus();
            });

            test('pressing ArrowUp does not change value', async () => {
                await inputSlider.input.press('ArrowUp');

                await expect(inputSlider.input).toHaveValue('25');
            });

            test('pressing ArrowDown does not change value', async () => {
                await inputSlider.input.press('ArrowDown');

                await expect(inputSlider.input).toHaveValue('25');
            });
        });
    });

    describe('[quantum] prop', () => {
        let inputSlider!: TuiInputSliderEO;
        let example!: Locator;
        let value!: Locator;

        describe('[quantum]="10"', () => {
            beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputSlider}/API?max=100&&quantum=10&sandboxExpanded=true`,
                );

                example = new TuiDocumentationPagePO(page).demo;
                value = new TuiDocumentationPagePO(page).value;
                inputSlider = new TuiInputSliderEO(page, example);
            });

            describe('allows to enter number which IS NOT divisible by quantum value', () => {
                ['3', '5', '7', '9', '11', '14', '19'].forEach((value) => {
                    test(value, async () => {
                        await inputSlider.input.fill(value);
                        await expect(inputSlider.input).toHaveValue(value);
                    });
                });
            });

            describe('allows to enter number which IS divisible by quantum value', () => {
                ['0', '10', '20', '30', '60', '90', '100'].forEach((value) => {
                    test(value, async () => {
                        await inputSlider.input.fill(value);
                        await expect(inputSlider.input).toHaveValue(value);
                    });
                });
            });

            describe('rounds invalid number on blur', () => {
                test('4 => 0', async () => {
                    await inputSlider.input.fill('4');
                    await inputSlider.input.blur();
                    await expect(inputSlider.input).toHaveValue('0');
                });

                test('5 => 10', async () => {
                    await inputSlider.input.fill('5');
                    await inputSlider.input.blur();
                    await expect(inputSlider.input).toHaveValue('10');
                });

                test('6 => 10', async () => {
                    await inputSlider.input.fill('6');
                    await inputSlider.input.blur();
                    await expect(inputSlider.input).toHaveValue('10');
                });

                test('19 => 20', async () => {
                    await inputSlider.input.fill('19');
                    await inputSlider.input.blur();
                    await expect(inputSlider.input).toHaveValue('20');
                });

                test('77 => 80', async () => {
                    await inputSlider.input.fill('77');
                    await inputSlider.input.blur();
                    await expect(inputSlider.input).toHaveValue('80');
                });
            });

            describe('form control always contains only number which IS divisible by quantum value', () => {
                test('4 => 0', async () => {
                    await inputSlider.input.fill('4');
                    await expect(value).toContainText('"value": 0');
                    await inputSlider.input.blur();
                    await expect(value).toContainText('"value": 0');
                });

                test('5 => 10', async () => {
                    await inputSlider.input.fill('5');
                    await expect(value).toContainText('"value": 10');
                    await inputSlider.input.blur();
                    await expect(value).toContainText('"value": 10');
                });

                test('77 => 80', async () => {
                    await inputSlider.input.fill('77');
                    await expect(value).toContainText('"value": 80');
                    await inputSlider.input.blur();
                    await expect(value).toContainText('"value": 80');
                });
            });
        });
    });

    describe('[thousandSeparatorPattern] prop', () => {
        let inputSlider!: TuiInputSliderEO;

        beforeEach(({page}) => {
            inputSlider = new TuiInputSliderEO(
                page,
                new TuiDocumentationPagePO(page).demo,
            );
        });

        describe('Japanese grouping (by four digits)', () => {
            const url = `${DemoRoute.InputSlider}/API?min=0&max=10000000&thousandSeparatorPattern$=1&thousandSeparator=_`;

            test('type 1234567 => 123_4567 & slider is synchronized', async ({page}) => {
                await tuiGoto(page, url);
                await inputSlider.input.clear();
                await inputSlider.input.pressSequentially('1234567');

                await expect(inputSlider.input).toHaveValue('123_4567');
                await expect(inputSlider.slider).toHaveValue('1234567');
            });

            test('keeps formatted value on blur', async ({page}) => {
                await tuiGoto(page, url);
                await inputSlider.input.fill('1234567');
                await inputSlider.input.blur();

                await expect(inputSlider.input).toHaveValue('123_4567');
                await expect(inputSlider.slider).toHaveValue('1234567');
            });

            test('9_9999 => ArrowUp => 10_0000', async ({page}) => {
                await tuiGoto(page, `${url}&step=1`);
                await inputSlider.input.fill('99999');
                await expect(inputSlider.input).toHaveValue('9_9999');

                await inputSlider.input.press('ArrowUp');

                await expect(inputSlider.input).toHaveValue('10_0000');
                await expect(inputSlider.slider).toHaveValue('100000');
            });

            test('click on the middle of slider => 500_0000', async ({page}) => {
                await tuiGoto(page, `${url}&step=1000000`);

                const {width, height} = (await inputSlider.slider.boundingBox())!;

                await inputSlider.slider.click({position: {x: width / 2, y: height / 2}});

                await expect(inputSlider.slider).toHaveValue('5000000');
                await expect(inputSlider.input).toHaveValue('500_0000');
            });
        });

        describe('Indian grouping (the last three digits, then by two)', () => {
            const url = `${DemoRoute.InputSlider}/API?min=0&max=10000000&thousandSeparatorPattern$=2&thousandSeparator=_`;

            test('type 1234567 => 12_34_567 & slider is synchronized', async ({page}) => {
                await tuiGoto(page, url);
                await inputSlider.input.clear();
                await inputSlider.input.pressSequentially('1234567');

                await expect(inputSlider.input).toHaveValue('12_34_567');
                await expect(inputSlider.slider).toHaveValue('1234567');
            });

            test('keeps formatted value on blur', async ({page}) => {
                await tuiGoto(page, url);
                await inputSlider.input.fill('1234567');
                await inputSlider.input.blur();

                await expect(inputSlider.input).toHaveValue('12_34_567');
            });

            test('99_999 => ArrowUp => 1_00_000', async ({page}) => {
                await tuiGoto(page, `${url}&step=1`);
                await inputSlider.input.fill('99999');
                await expect(inputSlider.input).toHaveValue('99_999');

                await inputSlider.input.press('ArrowUp');

                await expect(inputSlider.input).toHaveValue('1_00_000');
                await expect(inputSlider.slider).toHaveValue('100000');
            });

            test('click on the middle of slider => 50_00_000', async ({page}) => {
                await tuiGoto(page, `${url}&step=1000000`);

                const {width, height} = (await inputSlider.slider.boundingBox())!;

                await inputSlider.slider.click({position: {x: width / 2, y: height / 2}});

                await expect(inputSlider.slider).toHaveValue('5000000');
                await expect(inputSlider.input).toHaveValue('50_00_000');
            });
        });
    });

    describe('[disabled] prop', () => {
        test('disables both textfield and slider when host component has disabled state', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.InputSlider}/API?disabled=true`);

            const example = new TuiDocumentationPagePO(page).demo;

            const inputSlider = new TuiInputSliderEO(page, example);

            await expect(inputSlider.input).toBeDisabled();
            await expect(inputSlider.slider).toBeHidden();

            await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                'input-slider-disabled-state.png',
            );
        });
    });

    describe('[readonly] prop', () => {
        test('keyboard arrows ArrowUp/ArrowDown does not change textfield/slider value', async ({
            page,
        }) => {
            await tuiGoto(
                page,
                `${DemoRoute.InputSlider}/API?min=-10&max=10&readonly=true`,
            );

            const example = new TuiDocumentationPagePO(page).demo;

            const inputSlider = new TuiInputSliderEO(page, example);

            await inputSlider.input.press('ArrowUp');
            await page.keyboard.down('ArrowUp');

            await expect(inputSlider.input).toHaveValue('0');
            await expect(inputSlider.slider).toBeHidden();

            await inputSlider.input.press('ArrowDown');
            await page.keyboard.down('ArrowDown');

            await expect(inputSlider.input).toHaveValue('0');
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

                const {demo} = new TuiDocumentationPagePO(page);

                const inputSlider = new TuiInputSliderEO(page, demo);

                await inputSlider.input.focus();

                await expect
                    .soft(demo)
                    .toHaveScreenshot('input-slider-content-not-visible.png');
            });

            test('[content] is not overlapped by [prefix]/[postfix] (input is NOT focused)', async ({
                page,
            }) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputSlider}/API?content=TOP-SECRET&postfix=things&prefix=$`,
                );

                await expect(new TuiDocumentationPagePO(page).demo).toHaveScreenshot(
                    'input-slider-content-visible.png',
                );
            });
        });
    });

    describe('textfield => slider synchronization', () => {
        let example!: Locator;
        let inputSlider!: TuiInputSliderEO;

        beforeEach(({page}) => {
            example = new TuiDocumentationPagePO(page).demo;
            inputSlider = new TuiInputSliderEO(page, example);
        });

        test('typing new value inside text input also change slider position', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.InputSlider}/API?min=5&max=20&step=1`);

            for (const value of [5, 9, 12, 18, 20].map(String)) {
                await inputSlider.input.clear();
                await inputSlider.input.fill(value);

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

            await inputSlider.input.clear();
            await inputSlider.input.fill('0');

            for (let i = 1; i <= 10; i++) {
                await inputSlider.input.focus();
                await inputSlider.input.press('ArrowUp');
                await expect(inputSlider.input).toHaveValue(String(i));

                await inputSlider.input.blur();

                await expect(inputSlider.input).toHaveValue(String(i));
                await expect(inputSlider.slider).toHaveValue(String(i));
                await expect
                    .soft(example)
                    .toHaveScreenshot(
                        `input-slider-to-slider-keyboard-arrow-up-${i}.png`,
                    );
            }

            for (let i = 9; i >= 0; i--) {
                await inputSlider.input.focus();
                await inputSlider.input.press('ArrowDown');
                await expect(inputSlider.input).toHaveValue(String(i));

                await inputSlider.input.blur();

                await expect(inputSlider.input).toHaveValue(String(i));
                await expect(inputSlider.slider).toHaveValue(String(i));
                await expect
                    .soft(example)
                    .toHaveScreenshot(
                        `input-slider-to-slider-keyboard-arrow-down-${i}.png`,
                    );
            }
        });

        describe('min/max restraints also works for slider', () => {
            let slider!: TuiSliderEO;
            let track!: {x: number; y: number; width: number; height: number};

            beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputSlider}/API?min=5&max=10&step=1&keySteps=null`,
                );

                slider = new TuiSliderEO(page, inputSlider.host);
                track = (await inputSlider.slider.boundingBox())!;
                expect(track).toBeTruthy();
            });

            test('click on slider', async () => {
                await inputSlider.slider.click({
                    position: {x: 0.85 * track.width, y: track.height / 2},
                });

                await expect(inputSlider.slider).toHaveValue('9');
                await expect(async () => {
                    const percentage = await slider.getFilledPercentage();
                    expect(percentage).toBe(80);
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
                    const percentage = await slider.getFilledPercentage();
                    expect(percentage).toBe(80);
                }).toPass();
            });
        });
    });
});
