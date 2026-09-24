import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test('ScrollWheel keeps the initial value after render', async ({page}) => {
    await tuiGoto(page, DemoRoute.ScrollWheel);

    const example = page.locator('[automation-id="tui-doc-example"]').nth(1);
    const output = example.locator('output');

    await expect(output).toHaveText('Selected: 00:00');
    await page.waitForTimeout(1_000);
    await expect(output).toHaveText('Selected: 00:00');
});
