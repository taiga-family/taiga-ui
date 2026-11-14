import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test('Segmented preserves the selection indicator with tuiHint', async ({page}) => {
    await tuiGoto(page, DemoRoute.Segmented);

    test.skip(
        !(await page.evaluate(() => CSS.supports('anchor-name', '--test'))),
        'CSS anchor positioning is required',
    );

    const example = new TuiDocumentationPagePO(page).getExample('#sizes');
    const segmented = example.locator('tui-segmented').first();
    const button = segmented.locator('button[tuiHint]');

    await expect(button).toHaveAttribute('data-tui-anchor', /^--/);
    await button.click();

    const {names, selectedAnchor, hintAnchor} = await button.evaluate((element) => ({
        names: getComputedStyle(element)
            .getPropertyValue('anchor-name')
            .split(',')
            .map((name) => name.trim()),
        selectedAnchor: getComputedStyle(element.parentElement!)
            .getPropertyValue('--t-anchor')
            .trim(),
        hintAnchor: element.getAttribute('data-tui-anchor'),
    }));

    expect(names).toContain(selectedAnchor);
    expect(names).toContain(hintAnchor);

    await segmented.evaluate((element) =>
        element.style.setProperty('--tui-anchor', '--inherited-anchor'),
    );
    const plainButton = segmented.getByRole('button', {name: 'Outgoing'});

    await plainButton.click();

    const plainNames = await plainButton.evaluate((element) =>
        getComputedStyle(element).getPropertyValue('anchor-name'),
    );

    expect(plainNames).toContain(selectedAnchor);
    expect(plainNames).not.toContain('--inherited-anchor');

    await button.hover();

    await expect(page.locator('tui-hint')).toBeVisible();
});
