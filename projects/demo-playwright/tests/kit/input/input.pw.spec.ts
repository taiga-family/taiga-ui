import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiTextfieldWithDataListEO,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';
import {TUI_HINT_LOCATORS, TUI_INPUT_LOCATORS} from '@taiga-ui/testing/locators';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

test.describe('Input', () => {
    test('custom content', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Input}/API?content=TOP%20SECRET`);

        const document = new TuiDocumentationPagePO(page);

        await document.waitTuiIcons();
        const example = document.demo;
        const input = example
            .locator(TUI_INPUT_LOCATORS.HOST)
            .locator(TUI_INPUT_LOCATORS.INPUT);

        await input.fill('123');
        await input.blur();

        await expect.soft(document.demo).toHaveScreenshot('input-custom-content.png');
    });

    test('can be horizontally scrolled', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Input}/API?sandboxWidth=300`);

        const document = new TuiDocumentationPagePO(page);

        await document.waitTuiIcons();

        const example = document.demo;
        const input = example
            .locator(TUI_INPUT_LOCATORS.HOST)
            .locator(TUI_INPUT_LOCATORS.INPUT);

        await input.fill(
            "You should not set 'text-overflow: ellipsis' for input because it can be horizontally scrolled",
        );
        await input.blur();

        await expect.soft(example).toHaveScreenshot('1-horizontally-scrolled.png');

        await input.focus();

        await expect.soft(example).toHaveScreenshot('2-horizontally-scrolled.png');

        await page.evaluate(() => {
            const input = window.document.querySelector('input[tuiInput]');

            if (input) {
                input.scrollLeft = input.clientWidth / 2;
            }
        });

        await expect.soft(example).toHaveScreenshot('3-horizontally-scrolled.png');
    });

    test('external mask works', async ({page}) => {
        await tuiGoto(page, DemoRoute.Input);

        const example = new TuiDocumentationPagePO(page).getExample('#mask');
        const inputs = example
            .locator(TUI_INPUT_LOCATORS.HOST)
            .locator(TUI_INPUT_LOCATORS.INPUT);

        await example.scrollIntoViewIfNeeded();
        await inputs.first().fill('111111111111');
        await inputs.last().fill('111111111111');
        await inputs.last().blur();

        await expect(inputs.first()).toHaveValue('111 111 111 111 rad');
        await expect.soft(example).toHaveScreenshot('11-mask.png');
    });

    test.describe('check tuiTextfieldCleaner', () => {
        ['s', 'm', 'l'].forEach((size) => {
            test(`size=${size}`, async ({page}) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.Input}/API?iconEnd=@tui.calendar&ngModel=val&tuiTextfieldSize=${size}`,
                );

                const document = new TuiDocumentationPagePO(page);

                await document.waitTuiIcons();

                await expect
                    .soft(document.demo)
                    .toHaveScreenshot(
                        `input-tuiTextfieldIcon-tuiTextfieldCleaner-tuiTextfieldSize-${size}.png`,
                    );
            });
        });
    });

    test.describe('ArrowUp/ArrowDown keyboard navigation', () => {
        test('input without datalist', async ({page}) => {
            await tuiGoto(page, DemoRoute.Input);

            const example = new TuiDocumentationPagePO(page).getExample('#basic');
            const input = example
                .locator(TUI_INPUT_LOCATORS.HOST)
                .locator(TUI_INPUT_LOCATORS.INPUT)
                .first();

            const value = '123';

            await input.scrollIntoViewIfNeeded();
            await input.focus();
            await input.fill(value);

            await expect(input).toHaveValue(value);
            await expect(input).toHaveJSProperty('selectionStart', value.length);
            await expect(input).toHaveJSProperty('selectionEnd', value.length);

            await page.keyboard.press('ArrowUp');

            await expect(input).toHaveJSProperty('selectionStart', 0);
            await expect(input).toHaveJSProperty('selectionEnd', 0);

            await page.keyboard.press('ArrowDown');

            await expect(input).toHaveJSProperty('selectionStart', value.length);
            await expect(input).toHaveJSProperty('selectionEnd', value.length);
        });

        test('input with datalist', async ({page}) => {
            await tuiGoto(page, DemoRoute.Input);

            const example = new TuiDocumentationPagePO(page).getExample('#dropdown');
            const {input, dropdown} = new TuiTextfieldWithDataListEO(page, example);

            await input.scrollIntoViewIfNeeded();
            await input.focus();
            await input.fill('a');
            await input.blur();

            await expect(dropdown).not.toBeAttached();

            await input.focus();

            await expect(input).toHaveJSProperty('selectionStart', 1);
            await expect(input).toHaveJSProperty('selectionEnd', 1);
            await expect(dropdown).not.toBeAttached();

            await page.keyboard.press('ArrowUp');

            await expect(input).toHaveJSProperty('selectionStart', 1);
            await expect(input).toHaveJSProperty('selectionEnd', 1);
            await expect(dropdown).toBeAttached();
        });
    });

    test('Tooltip in input works', async ({page}) => {
        await tuiGoto(page, DemoRoute.Input);

        const example = new TuiDocumentationPagePO(page).getExample('#basic');

        await example.scrollIntoViewIfNeeded();
        await example.locator(TUI_INPUT_LOCATORS.TOOLTIP).first().hover();

        await expect(page.locator(TUI_HINT_LOCATORS.HOST)).toBeAttached();
        await expect.soft(example).toHaveScreenshot('input-hint.png');
    });

    test.describe('Mobile', () => {
        test.use(TUI_PLAYWRIGHT_MOBILE);

        test('clicking on tooltip does not focus input', async ({page}) => {
            await tuiGoto(page, DemoRoute.Input);

            const example = new TuiDocumentationPagePO(page).getExample('#basic');
            const tooltip = example.locator(TUI_INPUT_LOCATORS.TOOLTIP).first();
            const input = example.locator(TUI_INPUT_LOCATORS.HOST).first();

            await tooltip.scrollIntoViewIfNeeded();
            await tooltip.click();

            await expect(page.locator(TUI_HINT_LOCATORS.HOST)).toBeAttached();
            await expect(input).not.toBeFocused();
        });
    });
});
