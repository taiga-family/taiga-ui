import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';
import {TUI_DROPDOWN_LOCATORS, TUI_TEXTFIELD_LOCATORS} from '@taiga-ui/testing/locators';

import {tuiGetPseudoElement} from '../../../utils/get-pseudo-element';

test.describe('Textfield', () => {
    test.describe('interactivity on hover', () => {
        let example!: Locator;

        test.beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.Textfield);
            example = new TuiDocumentationPagePO(page).getExample('#states');
        });

        test('disable state', async () => {
            const textfield = example.locator(
                `${TUI_TEXTFIELD_LOCATORS.HOST}:has(input:disabled)`,
            );

            // Special check hover state
            // eslint-disable-next-line playwright/no-force-option
            await textfield.hover({force: true});

            await expect.soft(example).toHaveScreenshot('textfield-disabled-hover.png');
        });

        test('readonly state', async () => {
            const textfield = example.locator(
                `${TUI_TEXTFIELD_LOCATORS.HOST}:has(input:read-only)`,
                {
                    hasText: 'Read-only',
                },
            );

            await textfield.hover();

            await expect.soft(example).toHaveScreenshot('textfield-readonly-hover.png');
        });

        test('invalid state', async () => {
            const textfield = example.locator(TUI_TEXTFIELD_LOCATORS.HOST, {
                hasText: 'Invalid',
            });

            await textfield.hover();

            await expect.soft(example).toHaveScreenshot('textfield-invalid-hover.png');
        });
    });

    test('open dropdown by click on chevron icon in Textfield page', async ({page}) => {
        await tuiGoto(page, DemoRoute.Textfield);
        await page.locator('#dropdown').scrollIntoViewIfNeeded();

        const pseudo = await tuiGetPseudoElement(
            page,
            `#dropdown ${TUI_TEXTFIELD_LOCATORS.HOST}[tuiChevron]`,
        );

        await page.mouse.click(pseudo.clickX, pseudo.clickY);
        await expect.soft(page.locator(TUI_DROPDOWN_LOCATORS.HOST)).toHaveCount(1);
    });

    test('open dropdowns by click on chevron icon in InputChip page', async ({page}) => {
        await tuiGoto(page, DemoRoute.InputChip);
        await page.locator('#mobile').scrollIntoViewIfNeeded();

        for (const i of [1, 2, 3]) {
            const pseudo = await tuiGetPseudoElement(
                page,
                `#mobile [data-orientation]:nth-child(${i}) [tuiChevron]`,
            );

            await page.mouse.click(pseudo.clickX, pseudo.clickY);
            await expect.soft(page.locator(TUI_DROPDOWN_LOCATORS.HOST)).toHaveCount(1);
        }
    });
});
