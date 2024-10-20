import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Navigation', () => {
    test('Show settings in aside', async ({page, browserName}) => {
        test.skip(
            browserName !== 'chromium',
            // TODO: why does this test keep failing in safari
            'This feature is only relevant in Chrome',
        );

        await tuiGoto(page, DemoRoute.Navigation);
        const example = new TuiDocumentationPagePO(page).getExample('#full');

        await example.scrollIntoViewIfNeeded();

        await expect(example).toHaveScreenshot('01-navigation.png');

        await example.locator('[automation-id="setting"]').hover();

        await expect(example).toHaveScreenshot('02-navigation.png');
    });

    test('Show hint in aside', async ({page, browserName}) => {
        test.skip(
            browserName !== 'chromium',
            // TODO: why does this test keep failing in safari
            'This feature is only relevant in Chrome',
        );

        await tuiGoto(page, DemoRoute.Navigation);
        const example = new TuiDocumentationPagePO(page).getExample('#full');

        await example.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);

        await example.locator('[automation-id="hint"]').hover();

        await expect(example).toHaveScreenshot('03-navigation.png');
    });

    test('A12y', async ({page, browserName}) => {
        test.skip(
            browserName !== 'chromium',
            // TODO: why does this test keep failing in safari
            'This feature is only relevant in Chrome',
        );

        await tuiGoto(page, DemoRoute.Navigation);
        const example = new TuiDocumentationPagePO(page).getExample('#full');

        await example.scrollIntoViewIfNeeded();
        await example.locator('aside footer button').nth(1).click();

        await expect(example).toHaveScreenshot('04-navigation.png');

        await example.locator('[automation-id="setting"]').focus();
        await page.keyboard.press('Enter');

        await expect(example).toHaveScreenshot('05-navigation.png');

        await example.locator('[automation-id="hint"]').focus();
        await page.keyboard.press('Tab');
        await page.keyboard.press('Space');

        await expect(example).toHaveScreenshot('06-navigation.png');
    });
});
