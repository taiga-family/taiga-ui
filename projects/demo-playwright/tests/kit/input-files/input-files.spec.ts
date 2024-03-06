import {TuiDocumentationApiPagePO, tuiGoto} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';
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
                .locator('input[tuiInputFiles]')
                .setInputFiles(join(__dirname, '../../../stubs/web-api.svg'));
            await expect(example).toHaveScreenshot(`01-${language}-input-files.png`);
        }),
    );

    ['english', 'dutch', 'russian'].forEach(language =>
        test(`File is bigger than (i18n: ${language})`, async ({page}) => {
            await tuiGoto(
                page,
                '/components/input-files/API?accept=image/*&maxFileSize=2000',
                {language},
            );
            await example
                .locator('input[tuiInputFiles]')
                .setInputFiles(join(__dirname, '../../../stubs/web-api.svg'));
            await expect(example).toHaveScreenshot(`02-${language}-input-files.png`);
        }),
    );
});
