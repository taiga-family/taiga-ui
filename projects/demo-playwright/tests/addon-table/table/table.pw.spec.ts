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

    test('Virtual scroll sorting example', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);
        const example = new TuiDocumentationPagePO(page).getExample('#virtual-scroll');
        const age = example.locator('th').filter({hasText: 'Age'});

        await expect.soft(example).toHaveScreenshot('02-table-age-no-sort.png');

        await age.click();
        await expect.soft(example).toHaveScreenshot('02-table-age-asc.png');

        await age.click();
        await expect.soft(example).toHaveScreenshot('02-table-age-desc.png');

        await age.click();
        await expect.soft(example).toHaveScreenshot('02-table-age-cleared.png');

        await age.click();
        await expect.soft(example).toHaveScreenshot('02-table-age-asc-again.png');
    });

    test('Editable sorting example', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);
        const example = new TuiDocumentationPagePO(page).getExample('#editable');
        const total = example.locator('th').filter({hasText: 'Total'});

        await expect.soft(example).toHaveScreenshot('03-table-total-no-sort.png');

        await total.click();
        await expect.soft(example).toHaveScreenshot('03-table-total-asc.png');

        await total.click();
        await expect.soft(example).toHaveScreenshot('03-table-total-desc.png');

        await total.click();
        await expect.soft(example).toHaveScreenshot('03-total-cleared.png');

        await total.click();
        await expect.soft(example).toHaveScreenshot('03-total-asc-again.png');
    });

    test('tuiSort directive', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);
        const example = new TuiDocumentationPagePO(page).getExample(
            '#with-tui-sort-by-directive-to-work-with-column-titles-instead-of-sorters',
        );

        const name = example.locator('th').filter({hasText: 'Name'});
        const dateOfBirth = example.locator('th').filter({hasText: 'Date of Birth'});
        const age = example.locator('th').filter({hasText: 'Age'});

        await example.scrollIntoViewIfNeeded();
        await example.locator('[tuiCheckbox]').click();

        await expect
            .soft(example)
            .toHaveScreenshot('04-table-with-tui-sort-by-1-default.png');

        for (let i = 1; i <= 3; i++) {
            await name.click();
            await expect
                .soft(example)
                .toHaveScreenshot(`04-table-with-tui-sort-by-2-${i}-name.png`);
        }

        for (let i = 1; i <= 3; i++) {
            await age.click();
            await expect
                .soft(example)
                .toHaveScreenshot(`04-table-with-tui-sort-by-3-${i}-age.png`);
        }

        for (let i = 1; i <= 3; i++) {
            await dateOfBirth.click();
            await expect
                .soft(example)
                .toHaveScreenshot(`04-table-with-tui-sort-by-4-${i}-dob.png`);
        }
    });
});
