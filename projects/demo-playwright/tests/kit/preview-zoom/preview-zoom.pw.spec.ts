import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('PreviewZoom', () => {
    test('zoom hint shows percentage when clicking zoom in', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Preview}#full-preview`);

        const pagePO = new TuiDocumentationPagePO(page);
        const example = pagePO.getExample('#full-preview');

        await example.getByRole('button', {name: 'Show preview'}).click();

        const preview = page.locator('tui-preview');

        await expect(preview).toBeVisible();

        await preview.locator('.t-sign_plus').click();

        await expect
            .poll(async () => page.locator('tui-hint').last().innerText())
            .toContain('%');
    });
});
