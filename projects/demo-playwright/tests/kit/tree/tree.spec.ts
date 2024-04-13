import {expect, test} from '@playwright/test';

import {TuiDocumentationPagePO, tuiGoto} from '#/demo-playwright/utils';

test.describe('Tree', () => {
    test('Programmatic control', async ({page}) => {
        await tuiGoto(page, '/components/tree');

        const example = new TuiDocumentationPagePO(page).getExample('#programmatic');

        await example.locator('button.programmatic').nth(0).click();
        await example.locator('button.programmatic').nth(1).click();
        await example.locator('button.programmatic').nth(2).click();

        await expect(example).toHaveScreenshot('01-programmatic-control.png');
    });
});
