import {DemoRoute} from '@demo/routes';
import {
    CHAR_ZERO_WIDTH_SPACE,
    TuiDocumentationApiPagePO,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputRangePO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';
import {CHAR_MINUS} from '../../../utils/common';

const {describe, beforeEach} = test;

describe('InputRange', () => {
    let example: Locator;
    let inputRange: TuiInputRangePO;

    test.use({viewport: {width: 400, height: 800}});

    describe('Keyboard interactions', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.InputRange}/API?min=-100&max=100&step=5&sandboxExpanded=true`,
            );
            example = new TuiDocumentationApiPagePO(page).apiPageExample;
            inputRange = new TuiInputRangePO(example.locator('tui-input-range'));
        });

        test('pressing Arrow Down decreases START value when START textfield is focused', async ({
            page,
        }) => {
            await inputRange.textfieldStart.focus();
            await page.keyboard.down('ArrowDown');

            await expect(inputRange.textfieldStart).toHaveValue(`${CHAR_MINUS}5`);
            await expect
                .soft(example)
                .toHaveScreenshot('01-input-range-start-5-end10.png');

            await page.keyboard.down('ArrowDown');

            await expect(inputRange.textfieldStart).toHaveValue(`${CHAR_MINUS}10`);
            await expect
                .soft(example)
                .toHaveScreenshot('02-input-range-start-10-end10.png');
        });

        test('pressing Arrow Down decreases END value when END textfield is focused', async ({
            page,
        }) => {
            await inputRange.textfieldEnd.focus();
            await page.keyboard.down('ArrowDown');

            await expect(inputRange.textfieldEnd).toHaveValue('5');
            await expect.soft(example).toHaveScreenshot('03-input-range-start0-end5.png');

            await page.keyboard.down('ArrowDown');

            await expect(inputRange.textfieldEnd).toHaveValue('0');
            await expect.soft(example).toHaveScreenshot('04-input-range-start0-end0.png');
        });

        test('pressing Arrow Up increases START value when START textfield is focused', async ({
            page,
        }) => {
            await inputRange.textfieldStart.focus();
            await page.keyboard.down('ArrowUp');

            await expect(inputRange.textfieldStart).toHaveValue('5');
            await expect
                .soft(example)
                .toHaveScreenshot('05-input-range-start5-end10.png');

            await page.keyboard.down('ArrowUp');

            await expect(inputRange.textfieldStart).toHaveValue('10');
            await expect
                .soft(example)
                .toHaveScreenshot('06-input-range-start10-end10.png');
        });

        test('pressing Arrow Up increases END value when END textfield is focused', async ({
            page,
        }) => {
            await inputRange.textfieldEnd.focus();
            await page.keyboard.down('ArrowUp');

            await expect(inputRange.textfieldEnd).toHaveValue('15');
            await expect
                .soft(example)
                .toHaveScreenshot('07-input-range-start0-end15.png');

            await page.keyboard.down('ArrowUp');

            await expect(inputRange.textfieldEnd).toHaveValue('20');
            await expect
                .soft(example)
                .toHaveScreenshot('08-input-range-start0-end20.png');
        });

        test('cannot set END value less than START value via ArrowDown', async ({
            page,
        }) => {
            await inputRange.textfieldEnd.focus();
            await page.keyboard.down('ArrowDown');
            await page.keyboard.down('ArrowDown');
            await page.keyboard.down('ArrowDown');
            await page.keyboard.down('ArrowDown');
            await page.keyboard.down('ArrowDown');
            await page.keyboard.down('ArrowDown');

            await expect(inputRange.textfieldEnd).toHaveValue('0');
            await expect.soft(example).toHaveScreenshot('09-input-range-start0-end0.png');
        });

        test('cannot set START value more than END value via ArrowUp', async ({page}) => {
            await inputRange.textfieldStart.focus();
            await page.keyboard.down('ArrowUp');
            await page.keyboard.down('ArrowUp');
            await page.keyboard.down('ArrowUp');
            await page.keyboard.down('ArrowUp');
            await page.keyboard.down('ArrowUp');
            await page.keyboard.down('ArrowUp');

            await expect(inputRange.textfieldStart).toHaveValue('10');
            await expect
                .soft(example)
                .toHaveScreenshot('10-input-range-start10-end10.png');
        });

        test('pressing ArrowRight does not change any value (this key is for caret navigation only)', async ({
            page,
        }) => {
            await inputRange.textfieldStart.focus();
            await page.keyboard.down('ArrowRight');
            await page.keyboard.down('ArrowRight');
            await expect(inputRange.textfieldStart).toHaveValue('0');

            await inputRange.textfieldEnd.focus();
            await page.keyboard.down('ArrowRight');
            await page.keyboard.down('ArrowRight');
            await expect(inputRange.textfieldEnd).toHaveValue('10');

            await expect
                .soft(example)
                .toHaveScreenshot('11-input-range-start0-end10.png');
        });

        test('pressing ArrowLeft does not change any value (this key is for caret navigation only)', async ({
            page,
        }) => {
            await inputRange.textfieldStart.focus();
            await page.keyboard.down('ArrowLeft');
            await page.keyboard.down('ArrowLeft');
            await expect(inputRange.textfieldStart).toHaveValue('0');

            await inputRange.textfieldEnd.focus();
            await page.keyboard.down('ArrowLeft');
            await page.keyboard.down('ArrowLeft');
            await expect(inputRange.textfieldEnd).toHaveValue('10');

            await expect
                .soft(example)
                .toHaveScreenshot('12-input-range-start0-end10.png');
        });
    });

    describe('Rounding numbers (to the nearest step which satisfies quantum) (min=0 | max=10 | quantum=2.5)', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.InputRange}/API?min=0&max=10&quantum=2.5&precision=1`,
            );
            example = new TuiDocumentationApiPagePO(page).apiPageExample;
            inputRange = new TuiInputRangePO(example.locator('tui-input-range'));
        });

        const testsConditions = [
            {typedValue: '9', expectedRoundedValue: '10'},
            {typedValue: '8', expectedRoundedValue: '7.5'},
            {typedValue: '7,6', expectedRoundedValue: '7.5'},
            {typedValue: '7.4', expectedRoundedValue: '7.5'},
            {typedValue: '7', expectedRoundedValue: '7.5'},
            {typedValue: '6', expectedRoundedValue: '5'},
            {typedValue: '3.2', expectedRoundedValue: '2.5'},
            {typedValue: '1', expectedRoundedValue: '0'},
            {typedValue: '0.1', expectedRoundedValue: '0'},
        ] as const;

        testsConditions.forEach(({typedValue, expectedRoundedValue}) => {
            test(`${typedValue} => ${expectedRoundedValue}`, async () => {
                await inputRange.textfieldEnd.focus();
                await inputRange.textfieldEnd.clear();
                await inputRange.textfieldEnd.fill(typedValue);
                await inputRange.textfieldEnd.blur();

                await expect(inputRange.textfieldEnd).toHaveValue(expectedRoundedValue);
            });
        });
    });

    describe('Range interactions', () => {
        describe("click on the sliders' track", () => {
            beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputRange}/API?min=-100&max=100&step=10&sandboxExpanded=true`,
                );
                example = new TuiDocumentationApiPagePO(page).apiPageExample;
                inputRange = new TuiInputRangePO(example.locator('tui-input-range'));
            });

            test('clicking on the END side changes only the END value (+ focuses the END textfield)', async ({
                page,
            }) => {
                const box = await inputRange.range.end.boundingBox().then((x) => x!);

                await page.mouse.click(box.width + box.x, box.height / 2 + box.y);

                await expect(inputRange.textfieldStart).toHaveValue('0');
                await expect(inputRange.textfieldEnd).toHaveValue('100');
                await expect(inputRange.textfieldEnd).toBeFocused();
                await expect
                    .soft(example)
                    .toHaveScreenshot('13-input-range-start0-end100.png');
            });

            test('clicking on the START side changes only the START value (+ focuses the START textfield)', async ({
                page,
            }) => {
                const box = await inputRange.range.start.boundingBox().then((x) => x!);

                await page.mouse.click(box.x, box.height / 2 + box.y);

                await expect(inputRange.textfieldStart).toHaveValue(`${CHAR_MINUS}100`);
                await expect(inputRange.textfieldEnd).toHaveValue('10');
                await expect(inputRange.textfieldStart).toBeFocused();
                await expect
                    .soft(example)
                    .toHaveScreenshot('14-input-range-start-100-end10.png');
            });
        });

        describe('click on a thumb', () => {
            beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.InputRange}/API?min=0&max=10&step=1&sandboxExpanded=true`,
                );
                example = new TuiDocumentationApiPagePO(page).apiPageExample;
                inputRange = new TuiInputRangePO(example.locator('tui-input-range'));
            });

            test('click on the START thumb (with NO value changes) => focuses the START textfield', async ({
                page,
            }) => {
                const box = await inputRange.range.start.boundingBox().then((x) => x!);

                await page.mouse.click(box.x, box.height / 2 + box.y);

                await expect(inputRange.textfieldStart).toHaveValue('0');
                await expect(inputRange.textfieldStart).toBeFocused();

                await expect
                    .soft(example)
                    .toHaveScreenshot('15-input-range-start0-end10.png');
            });

            test('click on the END thumb (with NO value changes) => focuses the END textfield', async ({
                page,
            }) => {
                const box = await inputRange.range.end.boundingBox().then((x) => x!);

                await page.mouse.click(box.width + box.x, box.height / 2 + box.y);

                await expect(inputRange.textfieldEnd).toHaveValue('10');
                await expect(inputRange.textfieldEnd).toBeFocused();

                await expect
                    .soft(example)
                    .toHaveScreenshot('16-input-range-start0-end10.png');
            });
        });
    });

    describe('Mobile version', () => {
        test.use(TUI_PLAYWRIGHT_MOBILE);

        beforeEach(async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.InputRange}/API?min=-20&max=20&step=5&sandboxExpanded=true`,
            );
            example = new TuiDocumentationApiPagePO(page).apiPageExample;
            inputRange = new TuiInputRangePO(example.locator('tui-input-range'));
        });

        describe('After Range interactions', () => {
            test('keeps focus if the END textfield was focused before', async ({
                page,
            }) => {
                await inputRange.textfieldEnd.focus();

                await expect(inputRange.textfieldStart).toHaveValue('0');
                await expect(inputRange.textfieldEnd).toHaveValue('10');

                const box = await inputRange.range.end.boundingBox().then((x) => x!);

                await page.mouse.click(box.width + box.x, box.height / 2 + box.y);

                await expect(inputRange.textfieldStart).toHaveValue('0');
                await expect(inputRange.textfieldEnd).toHaveValue('20');
                await expect(inputRange.textfieldEnd).toBeFocused();
                await expect
                    .soft(example)
                    .toHaveScreenshot('21-input-range-start0-end20.png');
            });

            test('keeps focus if the START textfield was focused before', async ({
                page,
            }) => {
                await inputRange.textfieldStart.focus();

                await expect(inputRange.textfieldStart).toHaveValue('0');
                await expect(inputRange.textfieldEnd).toHaveValue('10');
                await expect
                    .soft(example)
                    .toHaveScreenshot('22-input-range-start0-end10.png');

                const box = await inputRange.range.start.boundingBox().then((x) => x!);

                await page.mouse.click(box.x, box.height / 2 + box.y);

                await expect(inputRange.textfieldStart).toHaveValue(`${CHAR_MINUS}20`);
                await expect(inputRange.textfieldStart).toBeFocused();
                await expect(inputRange.textfieldEnd).toHaveValue('10');
                await expect
                    .soft(example)
                    .toHaveScreenshot('23-input-range-start-20-end10.png');
            });

            test('does not focus anything if no textfield was focused before', async ({
                page,
            }) => {
                const leftBox = await inputRange.range.start
                    .boundingBox()
                    .then((x) => x!);

                await page.mouse.click(leftBox.x, leftBox.height / 2 + leftBox.y);

                await expect(inputRange.textfieldStart).not.toBeFocused();
                await expect(inputRange.textfieldEnd).not.toBeFocused();

                const rightBox = await inputRange.range.end.boundingBox().then((x) => x!);

                await page.mouse.click(
                    rightBox.width + rightBox.x,
                    rightBox.height / 2 + rightBox.y,
                );

                await expect(inputRange.textfieldStart).toHaveValue(`${CHAR_MINUS}20`);
                await expect(inputRange.textfieldStart).not.toBeFocused();
                await expect(inputRange.textfieldEnd).toHaveValue('20');
                await expect(inputRange.textfieldEnd).not.toBeFocused();

                await expect
                    .soft(example)
                    .toHaveScreenshot('25-input-range-start-20-end20.png');
            });
        });
    });

    describe('[content] property', () => {
        beforeEach(({page}) => {
            example = new TuiDocumentationApiPagePO(page).apiPageExample;
            inputRange = new TuiInputRangePO(example.locator('tui-input-range'));
        });

        test('START textfield without content + END textfield has content', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.InputRange}/API?content$=2&max=100`);
            await inputRange.textfieldEnd.fill('100');

            await inputRange.textfieldEnd.blur();

            await expect(inputRange.textfieldStart).toHaveValue('0');
            await expect(inputRange.textfieldEnd).toHaveValue('100');
            await expect
                .soft(example)
                .toHaveScreenshot('26-input-range-start-no-content--end-has-content.png');
        });

        test('START textfield has content + END textfield has content', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.InputRange}/API?content$=2&max=100`);
            await inputRange.textfieldEnd.fill('100');
            await inputRange.textfieldStart.fill('100');

            await inputRange.textfieldStart.blur();

            await expect(inputRange.textfieldStart).toHaveValue('100');
            await expect(inputRange.textfieldEnd).toHaveValue('100');
            await expect
                .soft(example)
                .toHaveScreenshot(
                    '27-input-range-start-has-content--end-has-content.png',
                );
        });

        test('START textfield has content + END textfield without content', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.InputRange}/API?content$=3&min=0`);
            await expect(inputRange.textfieldStart).toHaveValue('0');
            await expect(inputRange.textfieldEnd).toHaveValue('10');
            await expect
                .soft(example)
                .toHaveScreenshot('28-input-range-start-has-content--end-no-content.png');
        });

        ['readOnly', 'disabled'].forEach((nonInteractiveProp) => {
            describe(`${nonInteractiveProp}=true`, () => {
                test('START & END textfields both have no content', async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputRange}/API?content$=2&${nonInteractiveProp}=true`,
                    );
                    await expect(inputRange.textfieldStart).toHaveValue('0');
                    await expect(inputRange.textfieldEnd).toHaveValue('10');
                    await expect(example).toHaveScreenshot(
                        `29-input-range-${nonInteractiveProp}-start-no-content--end-no-content.png`,
                    );
                });

                test('START & END textfields both have content', async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputRange}/API?content$=1&${nonInteractiveProp}=true`,
                    );
                    await expect(example.locator('tui-input-range')).toContainText(
                        'START – END',
                    );
                    await expect(example).toHaveScreenshot(
                        `30-input-range-${nonInteractiveProp}-start-has-content--end-has-content.png`,
                    );
                });

                test('START textfield without content + END textfield has content', async ({
                    page,
                }) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputRange}/API?content$=2&${nonInteractiveProp}=true&max=10`,
                    );
                    await expect(example.locator('tui-input-range')).toContainText(
                        '0 – MAX',
                    );
                    await expect(example).toHaveScreenshot(
                        `31-input-range-${nonInteractiveProp}-start-no-content--end-has-content.png`,
                    );
                });

                test('START textfield has content + END textfield without content', async ({
                    page,
                }) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputRange}/API?content$=3&${nonInteractiveProp}=true`,
                    );
                    await expect(example.locator('tui-input-range')).toContainText(
                        'MIN – 10',
                    );
                    await expect(example).toHaveScreenshot(
                        `32-input-range-${nonInteractiveProp}-start-has-content--end-no-content.png`,
                    );
                });

                test('START textfield without content + END textfield has non-primitive content', async ({
                    page,
                }) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.InputRange}/API?content$=5&${nonInteractiveProp}=true`,
                    );
                    await expect(example).toHaveScreenshot(
                        `33-input-range-${nonInteractiveProp}-start-no-content--end-non-primitive-content.png`,
                    );
                });
            });
        });
    });

    describe('Using negative values with hidden minus sign', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.InputRange);

            example = new TuiDocumentationPagePO(page).getExample('#hidden-minus-sign');
            inputRange = new TuiInputRangePO(example.locator('tui-input-range'));
        });

        function control([start, end]: [number, number]): RegExp {
            return new RegExp(String.raw`Control value:\[\s+${start},\s+${end}\s+\]`);
        }

        describe('still keeps last control value when all digits are erased', () => {
            test('for start textfield', async () => {
                await inputRange.textfieldStart.focus();
                await inputRange.textfieldStart.clear();

                await expect(inputRange.textfieldStart).toHaveValue(
                    `${CHAR_ZERO_WIDTH_SPACE} days ago`,
                );
                await expect(example).toContainText(control([-30, 0]));
            });

            test('for end textfield', async () => {
                await inputRange.textfieldEnd.focus();
                await inputRange.textfieldEnd.press('Backspace');

                await expect(inputRange.textfieldEnd).toHaveValue(
                    `${CHAR_ZERO_WIDTH_SPACE} days ago`,
                );
                await expect(example).toContainText(control([-30, 0]));
            });

            test('fill empty textfield with control value on blur', async () => {
                await inputRange.textfieldStart.focus();
                await inputRange.textfieldStart.clear();
                await expect(inputRange.textfieldStart).toHaveValue(
                    `${CHAR_ZERO_WIDTH_SPACE} days ago`,
                );

                await inputRange.textfieldStart.blur();
                await expect(inputRange.textfieldStart).toHaveValue(
                    `${CHAR_ZERO_WIDTH_SPACE}30 days ago`,
                );
            });
        });

        describe('allows to enter new valid value after erasing all', () => {
            test('for start textfield', async () => {
                await inputRange.textfieldStart.focus();
                await inputRange.textfieldStart.clear();

                await inputRange.textfieldStart.pressSequentially('5');
                await expect(inputRange.textfieldStart).toHaveValue(
                    `${CHAR_ZERO_WIDTH_SPACE}5 days ago`,
                );
                await expect(example).toContainText(control([-5, 0]));
            });

            test('for end textfield', async () => {
                await inputRange.textfieldEnd.focus();
                await inputRange.textfieldEnd.press('Backspace');
                await expect(inputRange.textfieldEnd).toHaveValue(
                    `${CHAR_ZERO_WIDTH_SPACE} days ago`,
                );

                await inputRange.textfieldEnd.pressSequentially('1');
                await expect(inputRange.textfieldEnd).toHaveValue(
                    `${CHAR_ZERO_WIDTH_SPACE}1 day ago`,
                );
                await expect(example).toContainText(control([-30, -1]));
            });
        });

        describe('keyboard arrows', () => {
            test('Arrow up increase negative number (even if minus is hidden)', async ({
                page,
            }) => {
                await inputRange.textfieldStart.focus();

                await expect(inputRange.textfieldStart).toHaveValue(
                    `${CHAR_ZERO_WIDTH_SPACE}30 days ago`,
                );
                await page.keyboard.down('ArrowUp');
                await expect(inputRange.textfieldStart).toHaveValue(
                    `${CHAR_ZERO_WIDTH_SPACE}29 days ago`,
                );
                await expect(example).toContainText(control([-29, 0]));
            });

            test('Arrow down decreases negative number (even if minus is hidden)', async ({
                page,
            }) => {
                await inputRange.textfieldEnd.focus();

                await expect(inputRange.textfieldEnd).toHaveValue('0 days ago');
                await page.keyboard.down('ArrowDown');
                await expect(inputRange.textfieldEnd).toHaveValue(
                    `${CHAR_ZERO_WIDTH_SPACE}1 day ago`,
                );
                await expect(example).toContainText(control([-30, -1]));
            });
        });

        test('interaction with slider changes control value', async () => {
            const {width} = await inputRange.range.host.boundingBox().then((x) => x!);

            await inputRange.range.host.click({position: {x: width * 0.4, y: 0}});

            await expect(inputRange.textfieldStart).toHaveValue(
                `${CHAR_ZERO_WIDTH_SPACE}18 days ago`,
            );
            await expect(example).toContainText(control([-18, 0]));
        });
    });
});
