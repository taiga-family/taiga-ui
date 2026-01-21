import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('TuiLike', () => {
    test.describe('Examples', () => {
        test('Basic like', async ({page}) => {
            await tuiGoto(page, DemoRoute.Like);
            const example = new TuiDocumentationPagePO(page).getExample('#basic');

            await example.locator('[tuiLike]').first().click();

            await expect.soft(example).toHaveScreenshot();
        });

        test('External icon loads', async ({page}) => {
            await tuiGoto(page, DemoRoute.Like);
            const example = new TuiDocumentationPagePO(page).getExample(
                '#external-icons',
            );

            await example.locator('[tuiLike]').first().click();

            await expect.soft(example).toHaveScreenshot();
        });

        test('Other appearances hover', async ({page}) => {
            await tuiGoto(page, DemoRoute.Like);
            const example = new TuiDocumentationPagePO(page).getExample(
                '#other-appearances',
            );

            await example.locator('[tuiLike]').nth(1).hover();

            await expect.soft(example).toHaveScreenshot();
        });

        test('Other appearances click', async ({page}) => {
            await tuiGoto(page, DemoRoute.Like);
            const example = new TuiDocumentationPagePO(page).getExample(
                '#other-appearances',
            );

            await example.locator('[tuiLike]').nth(1).click();

            await expect.soft(example).toHaveScreenshot();
        });

        test('With forms click', async ({page}) => {
            await tuiGoto(page, DemoRoute.Like);
            const example = new TuiDocumentationPagePO(page).getExample('#with-forms');

            await example.locator('[tuiLike]').nth(0).click();

            await expect.soft(example).toHaveScreenshot();

            await example.locator('[tuiLike]').nth(1).click();

            await expect.soft(example).toHaveScreenshot();

            await example.locator('[tuiButton]').click();

            await expect.soft(example).toHaveScreenshot();
        });
    });
});
