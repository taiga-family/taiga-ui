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

    test('Checkboxes', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);
        const example = new TuiDocumentationPagePO(page).getExample('#custom');
        const checkboxes = await example.locator('input[type="checkbox"]').all();

        checkboxes[1]?.click();

        await page.waitForTimeout(100);
        await expect.soft(example).toHaveScreenshot('02-checkboxes-1.png');

        checkboxes[2]?.click();

        await page.waitForTimeout(100);
        await expect.soft(example).toHaveScreenshot('02-checkboxes-2.png');

        checkboxes[3]?.click();

        await page.waitForTimeout(100);
        await expect.soft(example).toHaveScreenshot('02-checkboxes-3.png');

        checkboxes[3]?.click();

        await page.waitForTimeout(100);
        await expect.soft(example).toHaveScreenshot('02-checkboxes-4.png');

        checkboxes[0]?.click();

        await page.waitForTimeout(100);
        await expect.soft(example).toHaveScreenshot('02-checkboxes-5.png');

        checkboxes[0]?.click();

        await page.waitForTimeout(100);
        await expect.soft(example).toHaveScreenshot('02-checkboxes-6.png');
    });

    test('manual sorting', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);

        const example = new TuiDocumentationPagePO(page).getExample('#manual-sorting');
        const name = example.locator('th').filter({hasText: 'Name'}).locator('button');
        const color = example.locator('th').filter({hasText: 'Color'}).locator('button');

        await example.scrollIntoViewIfNeeded();
        await expect.soft(example).toHaveScreenshot('table-manual-sorting-01.png');

        await color.click();
        await expect.soft(example).toHaveScreenshot('table-manual-sorting-02.png');

        await color.click();
        await expect.soft(example).toHaveScreenshot('table-manual-sorting-03.png');

        await color.click();
        await expect.soft(example).toHaveScreenshot('table-manual-sorting-04.png');

        await name.click();
        await expect.soft(example).toHaveScreenshot('table-manual-sorting-05.png');

        await name.click();
        await expect.soft(example).toHaveScreenshot('table-manual-sorting-06.png');

        await name.click();
        await expect.soft(example).toHaveScreenshot('table-manual-sorting-07.png');
    });
});
