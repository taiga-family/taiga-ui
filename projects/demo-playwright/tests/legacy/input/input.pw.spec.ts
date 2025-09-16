import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiTextfieldWithDataListPO,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

// TODO migrate
test.skip('Input', () => {
    test("has custom content (text) + cleaner + hint which don't overlapping each others", async ({
        page,
    }) => {
        await tuiGoto(
            page,
            '/components/input/API?tuiTextfieldCustomContent=<span>LongTextContent<%2Fspan>&tuiHintContent=Some%20content',
        );

        const document = new TuiDocumentationPagePO(page);

        await document.waitTuiIcons();

        await expect
            .soft(document.apiPageExample)
            .toHaveScreenshot('01-custom-text-content-cleaner-hint.png');
    });

    test('correctly aligns single custom content (as large icon)', async ({page}) => {
        await tuiGoto(
            page,
            '/components/input/API?tuiTextfieldCustomContent=@tui.calendar',
        );

        const document = new TuiDocumentationPagePO(page);

        await document.waitTuiIcons();

        await expect
            .soft(document.apiPageExample)
            .toHaveScreenshot('02-custom-large-icon-content.png');
    });

    test("custom content (as large icon) + cleaner + hint don't overlapping each others", async ({
        page,
    }) => {
        await tuiGoto(
            page,
            '/components/input/API?tuiTextfieldCleaner=true&tuiTextfieldCustomContent=@tui.search&tuiHintContent=Some%20content',
        );

        const document = new TuiDocumentationPagePO(page);

        await document.waitTuiIcons();

        await expect
            .soft(document.apiPageExample)
            .toHaveScreenshot('03-custom-large-icon-content-cleaner-hint.png');
    });

    test("custom content (as normal-size icon) + cleaner + hint don't overlapping each others", async ({
        page,
    }) => {
        await tuiGoto(
            page,
            'components/input/API?tuiTextfieldCleaner=true&tuiTextfieldCustomContent=@tui.visa-mono&tuiHintContent=Some%20content',
        );

        const document = new TuiDocumentationPagePO(page);

        await document.waitTuiIcons();

        await expect
            .soft(document.apiPageExample)
            .toHaveScreenshot('04-custom-normal-icon-content-cleaner-hint.png');
    });

    test('input overflow due to placeholder', async ({page}) => {
        await tuiGoto(
            page,
            'components/input/API?tuiTextfieldIconLeft=@tui.search&pseudoFocus=true&placeholder=Lorem%20ipsum%20dolor%20sit%20amet,%20consectetur%20adipiscing%20elit,%20sed%20do%20eiusmod%20tempor%20incididunt%20ut%20labore',
        );

        const document = new TuiDocumentationPagePO(page);

        await document.waitTuiIcons();

        const example = document.apiPageExample;
        const input = example.locator('input[tuiTextfieldLegacy]');

        await input.focus();

        await expect
            .soft(document.apiPageExample)
            .toHaveScreenshot('05-placeholder-will-be-hidden-inside.png');

        await input.clear();
        await input.blur();

        await expect
            .soft(example)
            .toHaveScreenshot('06-placeholder-will-be-hidden-inside.png');
    });

    test('character descenders overflow the line', async ({page}) => {
        await tuiGoto(
            page,
            '/components/input/API?&pseudoFocus=true&placeholder=big, placeholder, qwerty, jackson, yellow and more',
        );

        const document = new TuiDocumentationPagePO(page);

        await document.waitTuiIcons();

        const example = document.apiPageExample;
        const input = example.locator('input[tuiTextfieldLegacy]');

        await input.clear();

        await expect.soft(example).toHaveScreenshot('07-character-descenders.png');

        await input.focus();
        await page.keyboard.type(
            "It has been the industry's standard dummy text ever since the 1500s",
        );
        await page.keyboard.press('Enter');
        await input.blur();

        await expect.soft(example).toHaveScreenshot('08-character-descenders.png');
    });

    test('can be horizontally scrolled', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Input}/API?sandboxWidth=300`);

        const document = new TuiDocumentationPagePO(page);

        await document.waitTuiIcons();

        const example = document.apiPageExample;
        const input = example.locator('input[tuiTextfieldLegacy]');

        await expect(input).toHaveCSS('text-overflow', 'clip');

        await input.fill(
            "You should not set 'text-overflow: ellipsis' for input because it can be horizontally scrolled",
        );
        await input.blur();

        await expect.soft(example).toHaveScreenshot('09-horizontally-scrolled.png');

        await input.focus();

        await expect.soft(example).toHaveScreenshot('10-horizontally-scrolled.png');

        await page.evaluate(() => {
            const input = window.document.querySelector('input[tuiTextfieldLegacy]');

            if (input) {
                input.scrollLeft = input.clientWidth / 2;
            }
        });

        await expect.soft(example).toHaveScreenshot('11-horizontally-scrolled.png');
    });

    test('external mask works', async ({page}) => {
        await tuiGoto(page, DemoRoute.Input);

        const example = new TuiDocumentationPagePO(page).getExample('#mask');
        const inputs = example.locator('tui-input input[tuiTextfieldLegacy]');

        await example.scrollIntoViewIfNeeded();
        await inputs.first().fill('111111111111');
        await inputs.last().fill('111111111111');
        await inputs.last().blur();

        await expect.soft(example).toHaveScreenshot('11-mask.png');
    });

    test.describe('check tuiTextfieldCleaner', () => {
        ['s', 'm', 'l'].forEach((size) => {
            test(`size=${size}`, async ({page}) => {
                await tuiGoto(
                    page,
                    `components/input/API?tuiTextfieldIcon=@tui.calendar&tuiTextfieldCleaner=true&tuiTextfieldSize=${size}`,
                );

                const document = new TuiDocumentationPagePO(page);

                await document.waitTuiIcons();

                await expect
                    .soft(document.apiPageExample)
                    .toHaveScreenshot(
                        `12-input-tuiTextfieldIcon-tuiTextfieldCleaner-tuiTextfieldSize-${size}.png`,
                    );
            });
        });
    });

    test.describe('ArrowUp/ArrowDown keyboard navigation', () => {
        test('textfield without datalist', async ({page}) => {
            await tuiGoto(page, DemoRoute.Input);

            const example = new TuiDocumentationPagePO(page).getExample('#success');
            const textfield = example.locator('tui-input input:not([type="email"])');

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

            const example = new TuiDocumentationPagePO(page).getExample('#datalist');
            const {textfield, dropdown} = new TuiTextfieldWithDataListPO(
                example.locator('tui-input'),
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
});
