import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('FieldError', () => {
    test.beforeEach(async ({page}, testInfo) => {
        await PerformanceCollector.startTestCollection(
            page,
            testInfo.titlePath.join(' › '),
            testInfo.file,
        );
    });

    test.afterEach(async ({page}, testInfo) => {
        await PerformanceCollector.stopTestCollection(
            page,
            testInfo.titlePath.join(' › '),
        );
    });

    test('Errors of invalid control are shown correctly', async ({page}) => {
        const example = new TuiDocumentationPagePO(page).getExample('#base');

        await tuiGoto(page, DemoRoute.FieldError);

        const input = example.locator('input').first();

        await input.focus();
        await input.blur();

        await page.waitForTimeout(500);

        await expect.soft(example).toHaveScreenshot('01-field-error.png', {
            animations: 'allow',
        });
    });

    test('Submit invalid form', async ({page}) => {
        const example = new TuiDocumentationPagePO(page).getExample('#patterns');

        await tuiGoto(page, DemoRoute.FieldError);
        await example.locator('button').click();

        await page.waitForTimeout(500);

        await expect.soft(example).toHaveScreenshot('02-field-error.png', {
            animations: 'allow',
        });
    });
});
