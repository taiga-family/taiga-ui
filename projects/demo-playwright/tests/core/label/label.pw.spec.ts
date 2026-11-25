import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test('TuiLabel keeps the switch spacing when reversed', async ({page}) => {
    await tuiGoto(page, DemoRoute.Label);

    const labels = new TuiDocumentationPagePO(page)
        .getExample('#switch')
        .locator('label');

    const regular = labels.first();
    const small = labels.last();

    for (const [label, margin] of [
        [regular, '8px'],
        [small, '4px'],
    ] as const) {
        await label.evaluate((element) => {
            element.setAttribute('tuiLabel', 'reverse');
        });

        const control = label.locator('input');

        await expect(control).toHaveCSS('order', '1');
        await expect(control).toHaveCSS('margin-inline-start', margin);
        await expect(control).toHaveCSS('margin-inline-end', '0px');
    }
});

test('TuiLabel keeps the gap between text and a link in a regular label', async ({
    page,
}) => {
    await tuiGoto(page, DemoRoute.Label);

    const label = new TuiDocumentationPagePO(page)
        .getExample('#basic')
        .locator('label')
        .first();

    const gap = await label.evaluate((element) => {
        const control = element.querySelector('input')!;
        const text = document.createTextNode('Accept');
        const link = document.createElement('a');

        link.href = '#terms';
        link.textContent = 'terms';
        element.replaceChildren(control, text, link);

        const range = document.createRange();

        range.selectNode(text);

        return link.getBoundingClientRect().left - range.getBoundingClientRect().right;
    });

    expect(gap).toBe(4);
});
