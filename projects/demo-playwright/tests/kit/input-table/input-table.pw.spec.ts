import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('InputTable', () => {
    test('editing fields inside a table', async ({page}) => {
        await tuiGoto(page, DemoRoute.Input);

        const example = new TuiDocumentationPagePO(page).getExample('#table');

        await example.scrollIntoViewIfNeeded();

        for (const index of [0, 1, 2, 3, 4]) {
            await example
                .locator('tbody tr td')
                .nth(index)
                .locator('tui-primitive-textfield,tui-textfield')
                .locator('input,select')
                .first()
                .focus();

            await page.waitForTimeout(300);

            await expect(example).toHaveScreenshot(
                `01-input-table-step-1--index-${index}.png`,
            );

            await example.locator('th').nth(index).click();

            await expect(example).toHaveScreenshot(
                `01-input-table-step-2--index-${index}.png`,
            );

            // eslint-disable-next-line playwright/no-conditional-in-test
            if (index > 0) {
                await example
                    .locator('tbody tr td')
                    .nth(index)
                    .locator('tui-primitive-textfield,tui-textfield')
                    .locator('input,select')
                    .first()
                    .focus();

                await page.waitForTimeout(300);

                // eslint-disable-next-line playwright/no-conditional-expect
                await expect(example).toHaveScreenshot(
                    `01-input-table-step-3--index-${index}.png`,
                );
            }
        }
    });
});
