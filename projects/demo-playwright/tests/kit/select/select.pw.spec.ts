import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiSelectPO,
    waitIcons,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Select', () => {
    let documentationPage: TuiDocumentationPagePO;

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, DemoRoute.Select);
        documentationPage = new TuiDocumentationPagePO(page);
    });

    test('checkmark size', async ({page}) => {
        const example = documentationPage.getExample('#content-customization');
        const host = example.locator('tui-textfield').first();
        const select = new TuiSelectPO(host);

        await host.scrollIntoViewIfNeeded();

        await select.textfield.click();

        await expect(select.dropdown).toBeVisible();

        await waitIcons({
            page,
            icons: await example.locator('tui-icon >> visible=true').all(),
        });

        await expect.soft(example).toHaveScreenshot('01-checkmark-size.png');
    });

    test('opens dropdown by click on icon', async ({page}) => {
        const example = documentationPage.getExample('#items-handlers');
        const host = example.locator('tui-textfield').first();
        const select = new TuiSelectPO(host);

        await host.scrollIntoViewIfNeeded();
        await select.textfield.click({position: {x: 200, y: 30}});

        await expect(select.dropdown).toBeVisible();

        await waitIcons({
            page,
            icons: await example.locator('tui-icon >> visible=true').all(),
        });

        await expect.soft(select.dropdown).toHaveScreenshot('01-click-arrow.png');
    });
});
