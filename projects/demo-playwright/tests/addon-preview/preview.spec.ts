import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Preview', () => {
    test.describe('Examples', () => {
        test.use({
            viewport: {width: 500, height: 500},
        });

        let documentationPage!: TuiDocumentationPagePO;

        test.beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.Preview);
            documentationPage = new TuiDocumentationPagePO(page);
        });

        test('Preview can be zoomed via wheel scroll', async ({page}) => {
            const example = documentationPage.getExample('#full-preview');
            const preview = page.locator('tui-preview');

            await example.getByRole('button').click();
            await expect(preview).toBeAttached();
            await page.waitForLoadState('networkidle');

            await preview.click(); // requires for mouse wheel
            await page.mouse.wheel(0, -50);

            await expect(preview).toHaveScreenshot('01-preview-zoom-by-wheel.png');
        });

        test('No preview available', async ({page}) => {
            const example = documentationPage.getExample(
                '#with-loading-and-unavailable-image',
            );

            const preview = page.locator('tui-preview');

            await example.getByRole('button').click();
            await expect(preview).toBeAttached();

            await documentationPage.hideContent();
            await expect(preview).toHaveScreenshot('02-preview-unavailable.png');
        });
    });
});
