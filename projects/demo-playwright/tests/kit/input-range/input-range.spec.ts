import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationApiPagePO,
    tuiGoto,
    TuiInputRangePO,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE_USER_AGENT} from '../../../playwright.options';
import {CHAR_MINUS} from '../../../utils/common';

test.describe('InputRange', () => {
    let example: Locator;
    let inputRange: TuiInputRangePO;

    test.use({viewport: {width: 1280, height: 800}});

    test.describe('Keyboard interactions', () => {
        test.beforeEach(async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputRange}/API?min=-100&max=100&quantum=5`);
            example = new TuiDocumentationApiPagePO(page).apiPageExample;
            inputRange = new TuiInputRangePO(example.locator('tui-input-range'));
        });

        test('pressing Arrow Down decreases LEFT value when LEFT text input is focused', async ({
            page,
        }) => {
            await inputRange.leftTextfield.focus();
            await page.keyboard.down('ArrowDown');
            await expect(example).toHaveScreenshot('01-input-range.png');
            await page.keyboard.down('ArrowDown');
            await expect(example).toHaveScreenshot('02-input-range.png');
        });

        test('pressing Arrow Down decreases RIGHT value when RIGHT text input is focused', async ({
            page,
        }) => {
            await inputRange.rightTextfield.focus();
            await page.keyboard.down('ArrowDown');
            await expect(example).toHaveScreenshot('03-input-range.png');
            await page.keyboard.down('ArrowDown');
            await expect(example).toHaveScreenshot('04-input-range.png');
        });

        test('pressing Arrow Up increases LEFT value when LEFT text input is focused', async ({
            page,
        }) => {
            await inputRange.leftTextfield.focus();
            await page.keyboard.down('ArrowUp');
            await expect(example).toHaveScreenshot('05-input-range.png');
            await page.keyboard.down('ArrowUp');
            await expect(example).toHaveScreenshot('06-input-range.png');
        });

        test('pressing Arrow Up increases RIGHT value when RIGHT text input is focused', async ({
            page,
        }) => {
            await inputRange.rightTextfield.focus();
            await page.keyboard.down('ArrowUp');
            await expect(example).toHaveScreenshot('07-input-range.png');
            await page.keyboard.down('ArrowUp');
            await expect(example).toHaveScreenshot('08-input-range.png');
        });

        test('cannot set right value less than left value via ArrowDown', async ({
            page,
        }) => {
            await inputRange.rightTextfield.focus();
            await page.keyboard.down('ArrowDown');
            await page.keyboard.down('ArrowDown');
            await page.keyboard.down('ArrowDown');
            await page.keyboard.down('ArrowDown');
            await page.keyboard.down('ArrowDown');
            await page.keyboard.down('ArrowDown');
            await expect(example).toHaveScreenshot('09-input-range.png');
        });

        test('cannot set left value more than right value via ArrowUp', async ({
            page,
        }) => {
            await inputRange.leftTextfield.focus();
            await page.keyboard.down('ArrowUp');
            await page.keyboard.down('ArrowUp');
            await page.keyboard.down('ArrowUp');
            await page.keyboard.down('ArrowUp');
            await page.keyboard.down('ArrowUp');
            await page.keyboard.down('ArrowUp');
            await expect(example).toHaveScreenshot('10-input-range.png');
        });

        test('pressing ArrowRight does not change any value (this key is for caret navigation only)', async ({
            page,
        }) => {
            await inputRange.leftTextfield.focus();
            await page.keyboard.down('ArrowRight');
            await page.keyboard.down('ArrowRight');
            await inputRange.rightTextfield.focus();
            await page.keyboard.down('ArrowRight');
            await page.keyboard.down('ArrowRight');
            await expect(example).toHaveScreenshot('11-input-range.png');
        });

        test('pressing ArrowLeft does not change any value (this key is for caret navigation only)', async ({
            page,
        }) => {
            await inputRange.leftTextfield.focus();
            await page.keyboard.down('ArrowLeft');
            await page.keyboard.down('ArrowLeft');
            await inputRange.rightTextfield.focus();
            await page.keyboard.down('ArrowLeft');
            await page.keyboard.down('ArrowLeft');
            await expect(example).toHaveScreenshot('12-input-range.png');
        });
    });

    test.describe('Rounding numbers (to the nearest step which satisfies quantum) (min=0 | max=10 | quantum=2.5)', () => {
        test.beforeEach(async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputRange}/API?min=0&max=10&quantum=2.5`);
            example = new TuiDocumentationApiPagePO(page).apiPageExample;
            inputRange = new TuiInputRangePO(example.locator('tui-input-range'));
        });

        const testsConditions = [
            {typedValue: '9', expectedRoundedValue: '10'},
            {typedValue: '8', expectedRoundedValue: '7,5'},
            {typedValue: '7,6', expectedRoundedValue: '7,5'},
            {typedValue: '7.4', expectedRoundedValue: '7,5'},
            {typedValue: '7', expectedRoundedValue: '7,5'},
            {typedValue: '6', expectedRoundedValue: '5'},
            {typedValue: '3.2', expectedRoundedValue: '2,5'},
            {typedValue: '1', expectedRoundedValue: '0'},
            {typedValue: '0.1', expectedRoundedValue: '0'},
        ] as const;

        testsConditions.forEach(({typedValue, expectedRoundedValue}) => {
            test(`${typedValue} => ${expectedRoundedValue}`, async () => {
                await inputRange.rightTextfield.focus();
                await inputRange.rightTextfield.clear();
                await inputRange.rightTextfield.fill(typedValue);
                await inputRange.rightTextfield.blur();
                await expect(inputRange.rightTextfield).toHaveValue(expectedRoundedValue);
            });
        });
    });

    test.describe('Range interactions', () => {
        test.describe("click on the sliders' track", () => {
            test.beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    '/components/input-range/API?min=-100&max=100&quantum=10',
                );
                example = new TuiDocumentationApiPagePO(page).apiPageExample;
                inputRange = new TuiInputRangePO(example.locator('tui-input-range'));
            });

            test('clicking on the RIGHT side changes only the RIGHT value (+ focuses the RIGHT text input)', async ({
                page,
            }) => {
                const box = await inputRange.range.right.boundingBox();

                await page.mouse.click(
                    (box?.width ?? 0) + (box?.x ?? 0),
                    (box?.height ?? 0) / 2 + (box?.y ?? 0),
                );
                await expect(inputRange.leftTextfield).toHaveValue('0');
                await expect(inputRange.rightTextfield).toHaveValue('100');
                await expect(example).toHaveScreenshot('13-input-range.png');
            });

            test('clicking on the LEFT side changes only the LEFT value (+ focuses the LEFT text input)', async ({
                page,
            }) => {
                const box = await inputRange.range.left.boundingBox();

                await page.mouse.click(
                    box?.x ?? 0,
                    (box?.height ?? 0) / 2 + (box?.y ?? 0),
                );

                await expect(inputRange.leftTextfield).toHaveValue(`${CHAR_MINUS}100`);
                await expect(inputRange.rightTextfield).toHaveValue('10');
                await expect(example).toHaveScreenshot('14-input-range.png');
            });
        });

        test.describe('click on a thumb', () => {
            test.beforeEach(async ({page}) => {
                await tuiGoto(page, `${DemoRoute.InputRange}/API?min=0&max=10&quantum=1`);
                example = new TuiDocumentationApiPagePO(page).apiPageExample;
                inputRange = new TuiInputRangePO(example.locator('tui-input-range'));
            });

            test('click on the LEFT thumb (with NO value changes) => focuses the LEFT text input', async ({
                page,
            }) => {
                const box = await inputRange.range.left.boundingBox();

                await page.mouse.click(
                    box?.x ?? 0,
                    (box?.height ?? 0) / 2 + (box?.y ?? 0),
                );
                await expect(example).toHaveScreenshot('15-input-range.png');
            });

            test('click on the RIGHT thumb (with NO value changes) => focuses the RIGHT text input', async ({
                page,
            }) => {
                const box = await inputRange.range.right.boundingBox();

                await page.mouse.click(
                    (box?.width ?? 0) + (box?.x ?? 0),
                    (box?.height ?? 0) / 2 + (box?.y ?? 0),
                );
                await expect(example).toHaveScreenshot('16-input-range.png');
            });
        });
    });

    test.describe('Very long placeholder', () => {
        test('basic case', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputRange}/API`);
            example = new TuiDocumentationApiPagePO(page).apiPageExample;

            await expect(example).toHaveScreenshot('17-input-range.png');
        });

        test('with `leftValueContent` and `rightValueContent', async ({page}) => {
            await tuiGoto(
                page,
                '/components/input-range/API?rightValueContent=TOP%20SECRET&leftValueContent=I%20am%20a%20leftValueContent',
            );
            example = new TuiDocumentationApiPagePO(page).apiPageExample;

            await expect(example).toHaveScreenshot('18-input-range.png');
        });

        test('with `pluralize`', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputRange}/API?pluralize$=1`);
            example = new TuiDocumentationApiPagePO(page).apiPageExample;

            await expect(example).toHaveScreenshot('19-input-range.png');
        });
    });

    test.describe('Mobile version', () => {
        test.use({
            viewport: {width: 375, height: 800},
            userAgent: TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
        });

        test.beforeEach(async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputRange}/API?min=-20&max=20&quantum=5`);
            example = new TuiDocumentationApiPagePO(page).apiPageExample;
            inputRange = new TuiInputRangePO(example.locator('tui-input-range'));
        });

        test.describe('After Range interactions', () => {
            test('keeps focus if the RIGHT text input was focused before', async ({
                page,
            }) => {
                await inputRange.rightTextfield.focus();
                await expect(inputRange.leftTextfield).toHaveValue('0');
                await expect(inputRange.rightTextfield).toHaveValue('10');
                await expect(example).toHaveScreenshot('20-input-range.png');

                const box = await inputRange.range.right.boundingBox();

                await page.mouse.click(
                    (box?.width ?? 0) + (box?.x ?? 0),
                    (box?.height ?? 0) / 2 + (box?.y ?? 0),
                );

                await expect(inputRange.leftTextfield).toHaveValue('0');
                await expect(inputRange.rightTextfield).toHaveValue('20');
                await expect(example).toHaveScreenshot('21-input-range.png');
            });

            test('keeps focus if the LEFT text input was focused before', async ({
                page,
            }) => {
                await inputRange.leftTextfield.focus();
                await expect(inputRange.leftTextfield).toHaveValue('0');
                await expect(inputRange.rightTextfield).toHaveValue('10');
                await expect(example).toHaveScreenshot('22-input-range.png');

                const box = await inputRange.range.left.boundingBox();

                await page.mouse.click(
                    box?.x ?? 0,
                    (box?.height ?? 0) / 2 + (box?.y ?? 0),
                );

                await expect(inputRange.leftTextfield).toHaveValue(`${CHAR_MINUS}20`);
                await expect(inputRange.rightTextfield).toHaveValue('10');
                await expect(example).toHaveScreenshot('23-input-range.png');
            });

            test('does not focus anything if no text input was focused before', async ({
                page,
            }) => {
                await expect(example).toHaveScreenshot('24-input-range.png');

                const leftBox = await inputRange.range.left.boundingBox();

                await page.mouse.click(
                    leftBox?.x ?? 0,
                    (leftBox?.height ?? 0) / 2 + (leftBox?.y ?? 0),
                );

                const rightBox = await inputRange.range.right.boundingBox();

                await page.mouse.click(
                    (rightBox?.width ?? 0) + (rightBox?.x ?? 0),
                    (rightBox?.height ?? 0) / 2 + (rightBox?.y ?? 0),
                );

                await expect(example).toHaveScreenshot('25-input-range.png');
            });
        });
    });
});
