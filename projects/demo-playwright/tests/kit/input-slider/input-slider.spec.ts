import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiInputSliderPO} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {CHAR_MINUS} from '../../../utils/common';

test.describe('InputSlider', () => {
    test.use({viewport: {width: 400, height: 500}});

    test.describe('examples page', () => {
        let documentationPage!: TuiDocumentationPagePO;

        test.beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.InputSlider);
            documentationPage = new TuiDocumentationPagePO(page);
        });

        test('typing new value inside text input also change slider position', async () => {
            const example = documentationPage.getExample('#base');
            const inputSlider = new TuiInputSliderPO(example.locator('tui-input-slider'));

            const valueToSliderStep = [
                {value: 5, step: 0},
                {value: 9, step: 4},
                {value: 12, step: 7},
                {value: 18, step: 13},
                {value: 20, step: 15},
            ];

            for (const {value, step} of valueToSliderStep) {
                await inputSlider.textfield.clear();
                await inputSlider.textfield.fill(`${value}`);

                await expect(inputSlider.slider).toHaveValue(`${step}`);
                await expect(example).toHaveScreenshot(
                    `1-slider-check-${value}-${step}.png`,
                );
            }
        });

        test('pressing ArrowUp/ArrowDown change textInput value and slider position', async () => {
            const example = documentationPage.getExample('#right-label');
            const inputSlider = new TuiInputSliderPO(example.locator('tui-input-slider'));

            await inputSlider.textfield.clear();
            await inputSlider.textfield.fill('0');

            for (let i = 1; i <= 10; i++) {
                await inputSlider.textfield.focus();
                await inputSlider.textfield.press('ArrowUp');
                await inputSlider.textfield.blur();

                await expect(inputSlider.textfield).toHaveValue(`${i}`);
                await expect(inputSlider.slider).toHaveValue(`${i}`);
                await expect(example).toHaveScreenshot(`2-0-arrow-up-checks-${i}.png`);
            }

            for (let i = 9; i >= 0; i--) {
                await inputSlider.textfield.focus();
                await inputSlider.textfield.press('ArrowDown');
                await inputSlider.textfield.blur();

                await expect(inputSlider.textfield).toHaveValue(`${i}`);
                await expect(inputSlider.slider).toHaveValue(`${i}`);
                await expect(example).toHaveScreenshot(`2-1-arrow-down-checks-${i}.png`);
            }
        });
    });

    test.describe('[valueContent] prop', () => {
        test('hide [valueContent] when input is focused', async ({page}) => {
            await tuiGoto(
                page,
                'components/input-slider/API?valueContent=TOP-SECRET&tuiTextfieldPostfix=things&tuiTextfieldPrefix=$',
            );

            const {apiPageExample} = new TuiDocumentationPagePO(page);
            const inputSlider = new TuiInputSliderPO(
                apiPageExample.locator('tui-input-slider'),
            );

            await inputSlider.textfield.focus();
            await expect(apiPageExample).toHaveScreenshot(
                '3-value-content-hide-on-focus.png',
            );
        });

        test('[valueContent] is not overlapped by [tuiTextfieldPrefix]/[tuiTextfieldPostfix] (input is NOT focused)', async ({
            page,
        }) => {
            await tuiGoto(
                page,
                'components/input-slider/API?valueContent=TOP-SECRET&tuiTextfieldPostfix=things&tuiTextfieldPrefix=$',
            );

            const {apiPageExample} = new TuiDocumentationPagePO(page);

            await expect(apiPageExample).toHaveScreenshot(
                '4-value-content-not-overlapped.png',
            );
        });
    });

    test.describe('[min] prop', () => {
        test.describe('positive numbers', () => {
            let inputSlider!: TuiInputSliderPO;

            test.beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    'components/input-slider/API?min=10&max=100&quantum=0.001&steps=90',
                );
                const {apiPageExample} = new TuiDocumentationPagePO(page);

                inputSlider = new TuiInputSliderPO(apiPageExample);

                await inputSlider.textfield.clear();
            });

            test('cannot type number less than [min] property', async () => {
                await inputSlider.textfield.fill('9.999');
                await inputSlider.textfield.blur();
                await expect(inputSlider.textfield).toHaveValue('10');
            });

            test('cannot even type minus if [min] is positive', async () => {
                await inputSlider.textfield.type('-11');
                await expect(inputSlider.textfield).toHaveValue('11');
            });

            test('cannot set value less than min using ArrowDown', async () => {
                await inputSlider.textfield.fill('11');

                await inputSlider.textfield.press('ArrowDown');
                await expect(inputSlider.textfield).toHaveValue('10');

                await inputSlider.textfield.press('ArrowDown');
                await expect(inputSlider.textfield).toHaveValue('10');
            });
        });

        test.describe('negative numbers', () => {
            let inputSlider!: TuiInputSliderPO;

            test.beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    'components/input-slider/API?min=-10&max=100&quantum=0.001&steps=90',
                );

                const {apiPageExample} = new TuiDocumentationPagePO(page);

                inputSlider = new TuiInputSliderPO(apiPageExample);

                await inputSlider.textfield.clear();
            });

            test('can type negative number more than [min]', async () => {
                await inputSlider.textfield.type('-5');
                await expect(inputSlider.textfield).toHaveValue(`${CHAR_MINUS}5`);
            });

            test('cannot type negative number less than [min]', async () => {
                await inputSlider.textfield.type('-11');
                await expect(inputSlider.textfield).toHaveValue(`${CHAR_MINUS}10`);
            });
        });

        test.describe('if [min]-property equals to [max]-property', () => {
            let inputSlider!: TuiInputSliderPO;

            test.beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    'components/input-slider/API?min=25&max=25&quantum=1',
                );

                const {apiPageExample} = new TuiDocumentationPagePO(page);

                inputSlider = new TuiInputSliderPO(apiPageExample);

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

    test('disables both text field and slider when host component has disabled state', async ({
        page,
    }) => {
        await tuiGoto(page, `${DemoRoute.InputSlider}/API?min=-10&max=10&disabled=true`);

        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await expect(apiPageExample).toHaveScreenshot('5-disabled-state.png');
    });
});
