import {TuiDocumentationApiPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, Locator, test} from '@playwright/test';
import {join} from 'path';

test.describe('InputFiles', () => {
    let example: Locator;

    test.beforeEach(({page}) => {
        example = new TuiDocumentationApiPagePO(page).apiPageExample;
    });

    ['english', 'dutch', 'russian'].forEach(language =>
        test(`Wrong file type (i18n: ${language})`, async ({page}) => {
            await tuiGoto(page, '/components/input-files/API?accept=application/pdf', {
                language,
            });

            await example
                .locator('[tuiInputFiles]')
                .setInputFiles(join(__dirname, '../../../stubs/web-api.svg'));
            await expect(example).toHaveScreenshot(`01-${language}-input-files.png`);
        }),
    );

    ['english', 'dutch', 'russian'].forEach(language =>
        test(`File is too large (i18n: ${language})`, async ({page}) => {
            await tuiGoto(
                page,
                '/components/input-files/API?accept=image/*&maxFileSize=2000',
                {language},
            );
            await example
                .locator('[tuiInputFiles]')
                .setInputFiles(join(__dirname, '../../../stubs/web-api.svg'));
            await expect(example).toHaveScreenshot(`02-${language}-input-files.png`);
        }),
    );

    test('Link text is too long', async ({page}) => {
        await page.setViewportSize({width: 550, height: 500});
        await tuiGoto(
            page,
            '/components/input-files/API?link=Select%20a%20file%20with%20a%20too%20long%20name.%20Long%20filename.%20Very%20long%20filename',
        );
        await example
            .locator('[tuiInputFiles]')
            .setInputFiles(join(__dirname, '../../../stubs/web-api.svg'));
        await expect(example).toHaveScreenshot('03-input-files.png');
    });
});
