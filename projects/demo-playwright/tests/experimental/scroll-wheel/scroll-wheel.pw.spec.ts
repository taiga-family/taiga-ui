import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test('ScrollWheel keeps the initial value after render and resize', async ({page}) => {
    await tuiGoto(page, DemoRoute.ScrollWheel);

    const example = page.locator('[automation-id="tui-doc-example"]').nth(1);
    const wheel = example.locator('tui-scroll-wheel').first();
    const output = example.locator('output');

    await expect(output).toHaveText('Selected: 00:00');
    await page.waitForTimeout(1_000);
    await expect(output).toHaveText('Selected: 00:00');

    await page.setViewportSize({width: 1024, height: 768});

    await expect(wheel).not.toHaveClass(/_snapping/);
    await expect(output).toHaveText('Selected: 00:00');

    await wheel.dispatchEvent('wheel', {ctrlKey: true, deltaY: 100});

    await expect(wheel).not.toHaveClass(/_snapping/);

    await wheel.dispatchEvent('wheel', {deltaY: 100});

    await expect(wheel).toHaveClass(/_snapping/);
});

test('ScrollWheel stays stable after switching between API and Examples', async ({page}) => {
    await tuiGoto(page, DemoRoute.ScrollWheel);

    const navigation = page.locator('tui-doc-page tui-segmented');
    const api = navigation.getByRole('link', {name: 'API', exact: true});
    const examples = navigation.getByRole('link', {name: 'Examples', exact: true});
    const example = page.locator('[automation-id="tui-doc-example"]').nth(1);
    const wheel = example.locator('tui-scroll-wheel').first();
    const output = example.locator('output');

    for (let i = 0; i < 3; i++) {
        await api.click();
        await expect(example).toHaveCount(0);

        await examples.click();

        await expect(output).toHaveText('Selected: 00:00');
        await expect(wheel).not.toHaveClass(/_snapping/);
    }
});
