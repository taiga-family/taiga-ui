import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('Textfield', () => {
    test.describe('interactivity on hover', () => {
        let example!: Locator;

        test.beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.Textfield);
            example = new TuiDocumentationPagePO(page).getExample('#states');
        });

        test('disable state', async () => {
            const textfield = example.locator('tui-textfield:has(input:disabled)');

            await textfield.hover({force: true});

            await expect(example).toHaveScreenshot('textfield-disabled-hover.png');
        });

        test('readonly state', async () => {
            const textfield = example.locator('tui-textfield:has(input:read-only)', {
                hasText: 'Read-only',
            });

            await textfield.hover();

            await expect(example).toHaveScreenshot('textfield-readonly-hover.png');
        });

        test('invalid state', async () => {
            const textfield = example.locator('tui-textfield', {
                hasText: 'Invalid',
            });

            await textfield.hover();

            await expect(example).toHaveScreenshot('textfield-invalid-hover.png');
        });
    });
});
