import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Table', () => {
    test('Dynamic column', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);
        const example = new TuiDocumentationPagePO(page).getExample('#columns');
        const addColumnButton = example.locator('button').first();

        await addColumnButton.click();

        await expect.soft(example).toHaveScreenshot();
    });

    test('Virtual scroll sorting example', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);
        const example = new TuiDocumentationPagePO(page).getExample('#virtual-scroll');
        const age = example.locator('th').filter({hasText: 'Age'});

        await expect.soft(example).toHaveScreenshot();

        await age.click();
        await expect.soft(example).toHaveScreenshot();

        await age.click();
        await expect.soft(example).toHaveScreenshot();

        await age.click();
        await expect.soft(example).toHaveScreenshot();

        await age.click();
        await expect.soft(example).toHaveScreenshot();
    });

    test('Editable sorting example', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);
        const example = new TuiDocumentationPagePO(page).getExample('#editable');
        const total = example.locator('th').filter({hasText: 'Total'});

        await expect.soft(example).toHaveScreenshot();

        await total.click();
        await expect.soft(example).toHaveScreenshot();

        await total.click();
        await expect.soft(example).toHaveScreenshot();

        await total.click();
        await expect.soft(example).toHaveScreenshot();

        await total.click();
        await expect.soft(example).toHaveScreenshot();
    });

    test('tuiSort directive', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);
        const example = new TuiDocumentationPagePO(page).getExample('#sorting');

        const name = example.locator('th').filter({hasText: 'Name'});
        const dateOfBirth = example.locator('th').filter({hasText: 'Date of Birth'});
        const age = example.locator('th').filter({hasText: 'Age'});

        await example.scrollIntoViewIfNeeded();
        await example.locator('[tuiCheckbox]').click();

        await expect.soft(example).toHaveScreenshot();

        for (let i = 1; i <= 3; i++) {
            await name.click();
            await expect.soft(example).toHaveScreenshot();
        }

        for (let i = 1; i <= 3; i++) {
            await age.click();
            await expect.soft(example).toHaveScreenshot();
        }

        for (let i = 1; i <= 3; i++) {
            await dateOfBirth.click();
            await expect.soft(example).toHaveScreenshot();
        }
    });

    test('Checkboxes', async ({page}) => {
        await tuiGoto(page, DemoRoute.Table);
        const example = new TuiDocumentationPagePO(page).getExample('#custom');
        const checkboxes = await example.locator('input[type="checkbox"]').all();

        checkboxes[1]?.click();

        await page.waitForTimeout(100);
        await expect.soft(example).toHaveScreenshot();

        checkboxes[2]?.click();

        await page.waitForTimeout(100);
        await expect.soft(example).toHaveScreenshot();

        checkboxes[3]?.click();

        await page.waitForTimeout(100);
        await expect.soft(example).toHaveScreenshot();

        checkboxes[3]?.click();

        await page.waitForTimeout(100);
        await expect.soft(example).toHaveScreenshot();

        checkboxes[0]?.click();

        await page.waitForTimeout(100);
        await expect.soft(example).toHaveScreenshot();

        checkboxes[0]?.click();

        await page.waitForTimeout(100);
        await expect.soft(example).toHaveScreenshot();
    });
});
