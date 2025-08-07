import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Table', () => {
    test('Dynamic column', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);
        const example = new TuiDocumentationPagePO(page).getExample('#dynamic-columns');
        const addColumnButton = example.locator('button').first();

        await addColumnButton.click();

        await expect.soft(example).toHaveScreenshot('01-table-dynamic.png');
    });

    test('Virtual scroll sorting cycle', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);
        const example = new TuiDocumentationPagePO(page).getExample('#virtual-scroll');
        const ageColumnHeader = example.locator('th').filter({hasText: 'Age'});

        // Take initial screenshot - no sort state
        await expect
            .soft(example)
            .toHaveScreenshot('02-table-virtual-scroll-no-sort.png');

        // First click: should sort ASC (up chevron)
        await ageColumnHeader.click();
        await expect.soft(example).toHaveScreenshot('02-table-virtual-scroll-asc.png');

        // Second click: should sort DESC (down chevron)
        await ageColumnHeader.click();
        await expect.soft(example).toHaveScreenshot('02-table-virtual-scroll-desc.png');

        // Third click: should clear sort (no chevron/two chevrons)
        await ageColumnHeader.click();
        await expect
            .soft(example)
            .toHaveScreenshot('02-table-virtual-scroll-cleared.png');

        // Fourth click: should sort ASC again (cycle repeats)
        await ageColumnHeader.click();
        await expect
            .soft(example)
            .toHaveScreenshot('02-table-virtual-scroll-asc-again.png');
    });
});
