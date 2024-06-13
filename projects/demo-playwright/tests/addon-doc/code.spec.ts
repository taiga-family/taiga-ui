import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Code blocks', () => {
    test('API page', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.LineClamp}/Setup`);

        const locators = await page.locator('tui-doc-code').all();

        for (const [index, locator] of locators.entries()) {
            await expect(locator).toHaveScreenshot(
                `01-line-clamp-setup-block-0${index + 1}.png`,
            );
        }
    });

    test('tabs', async ({page}) => {
        await tuiGoto(page, DemoRoute.LineClamp);

        const documentation = new TuiDocumentationPagePO(page);

        for (const [index, title] of ['HTML', 'TypeScript', 'LESS'].entries()) {
            const locator = page.locator(`#basic [tuiTab]:has-text("${title}")`);

            await locator.click();
            await documentation.waitStableState();

            await expect(page.locator('tui-doc-example#basic')).toHaveScreenshot(
                `02-0${index + 1}-code-block-${title}.png`,
            );
        }
    });
});
