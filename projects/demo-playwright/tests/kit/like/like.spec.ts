import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('TuiLike', () => {
    test.describe('Examples', () => {
        test('Basic like', async ({page}) => {
            await tuiGoto(page, DemoRoute.Like);
            const example = new TuiDocumentationPagePO(page).getExample('#basic');

            await example.locator('[tuiLike]').first().click();

            await expect(example).toHaveScreenshot('01-basic-like.png');
        });

        test('External icon loads', async ({page}) => {
            await tuiGoto(page, DemoRoute.Like);
            const example = new TuiDocumentationPagePO(page).getExample(
                '#external-icons',
            );

            await example.locator('[tuiLike]').first().click();

            await expect(example).toHaveScreenshot('02-external-icon-like.png');
        });

        test('Other appearances hover', async ({page}) => {
            await tuiGoto(page, DemoRoute.Like);
            const example = new TuiDocumentationPagePO(page).getExample(
                '#other-appearances',
            );

            await example.locator('[tuiLike]').nth(1).hover();

            await expect(example).toHaveScreenshot('03-other-appearances-hover-like.png');
        });

        test('Other appearances click', async ({page}) => {
            await tuiGoto(page, DemoRoute.Like);
            const example = new TuiDocumentationPagePO(page).getExample(
                '#other-appearances',
            );

            await example.locator('[tuiLike]').nth(1).click();

            await expect(example).toHaveScreenshot('04-other-appearances-click-like.png');
        });

        test('With forms click', async ({page}) => {
            await tuiGoto(page, DemoRoute.Like);
            const example = new TuiDocumentationPagePO(page).getExample('#with-forms');

            await example.locator('[tuiLike]').nth(0).click();

            await expect(example).toHaveScreenshot(
                '05-with-forms-ngModel-click-like.png',
            );

            await example.locator('[tuiLike]').nth(1).click();

            await expect(example).toHaveScreenshot(
                '06-with-forms-reactive-forms-click-like.png',
            );

            await example.locator('[tuiButton]').click();

            await expect(example).toHaveScreenshot('07-with-forms-click-toggle.png');
        });
    });
});
