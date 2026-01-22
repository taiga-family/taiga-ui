import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiTextfieldWithDataListPO,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Input', () => {
    test('custom content', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Input}/API?content=TOP%20SECRET`);

        const document = new TuiDocumentationPagePO(page);

        await document.waitTuiIcons();
        const example = document.demo;
        const input = example.locator('input[tuiInput]');

        await input.fill('123');
        await input.blur();

        await expect.soft(document.demo).toHaveScreenshot('input-custom-content.png');
    });

    test('can be horizontally scrolled', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Input}/API?sandboxWidth=300`);

        const document = new TuiDocumentationPagePO(page);

        await document.waitTuiIcons();

        const example = document.demo;
        const input = example.locator('input[tuiInput]');

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
        const inputs = example.locator('tui-textfield input[tuiInput]');

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
        test('textfield without datalist', async ({page}) => {
            await tuiGoto(page, DemoRoute.Input);

            const example = new TuiDocumentationPagePO(page).getExample('#basic');
            const textfield = example.locator('input[tuiInput]').first();

            const value = '123';

            await textfield.scrollIntoViewIfNeeded();
            await textfield.focus();
            await textfield.fill(value);

            await expect(textfield).toHaveValue(value);
            await expect(textfield).toHaveJSProperty('selectionStart', value.length);
            await expect(textfield).toHaveJSProperty('selectionEnd', value.length);

            await page.keyboard.press('ArrowUp');

            await expect(textfield).toHaveJSProperty('selectionStart', 0);
            await expect(textfield).toHaveJSProperty('selectionEnd', 0);

            await page.keyboard.press('ArrowDown');

            await expect(textfield).toHaveJSProperty('selectionStart', value.length);
            await expect(textfield).toHaveJSProperty('selectionEnd', value.length);
        });

        test('textfield with datalist', async ({page}) => {
            await tuiGoto(page, DemoRoute.Input);

            const example = new TuiDocumentationPagePO(page).getExample('#dropdown');
            const {textfield, dropdown} = new TuiTextfieldWithDataListPO(
                example.locator('tui-textfield').first(),
            );

            await textfield.scrollIntoViewIfNeeded();
            await textfield.focus();
            await textfield.fill('a');
            await textfield.blur();

            await expect(dropdown).not.toBeAttached();

            await textfield.focus();

            await expect(textfield).toHaveJSProperty('selectionStart', 1);
            await expect(textfield).toHaveJSProperty('selectionEnd', 1);
            await expect(dropdown).not.toBeAttached();

            await page.keyboard.press('ArrowUp');

            await expect(textfield).toHaveJSProperty('selectionStart', 1);
            await expect(textfield).toHaveJSProperty('selectionEnd', 1);
            await expect(dropdown).toBeAttached();
        });
    });

    test('Tooltip in input works', async ({page}) => {
        await tuiGoto(page, DemoRoute.Input);

        const example = new TuiDocumentationPagePO(page).getExample('#basic');

        await example.scrollIntoViewIfNeeded();
        await example.locator('tui-icon[tuiTooltip]').first().hover();

        await expect(page.locator('tui-hint')).toBeAttached();
        await expect.soft(example).toHaveScreenshot('input-hint.png');
    });
});
