import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Tree', () => {
    test('Programmatic control', async ({page}) => {
        await tuiGoto(page, DemoRoute.Tree);

        const example = new TuiDocumentationPagePO(page).getExample(
            '#programmatic-control',
        );

        await example.locator('button.programmatic').nth(0).click();
        await example.locator('button.programmatic').nth(1).click();
        await example.locator('button.programmatic').nth(2).click();

        // (flaky) clear focus from programmatic button
        await page.locator('body').click({position: {x: 0, y: 0}});

        await expect.soft(example).toHaveScreenshot('01-programmatic-control.png');
    });
});
