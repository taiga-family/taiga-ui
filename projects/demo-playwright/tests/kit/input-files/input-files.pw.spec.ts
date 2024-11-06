import {join} from 'node:path';

import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationApiPagePO,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('InputFiles', () => {
    let example: Locator;

    test.beforeEach(({page}) => {
        example = new TuiDocumentationApiPagePO(page).apiPageExample;
    });

    ['english', 'dutch', 'russian'].forEach((language) =>
        test(`Wrong file type (i18n: ${language})`, async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputFiles}/API?accept=application/pdf`, {
                language,
            });

            await example
                .locator('input[tuiInputFiles]')
                .setInputFiles(join(__dirname, '../../../stubs/web-api.svg'));

            await expect(example).toHaveScreenshot(`01-${language}-input-files.png`);
        }),
    );

    ['english', 'dutch', 'russian'].forEach((language) =>
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

    test('With button', async ({page}) => {
        await tuiGoto(page, DemoRoute.InputFiles);
        const example = new TuiDocumentationPagePO(page).getExample('#with-button');

        await example.locator('button').first().click();

        await expect(example).toHaveScreenshot('03-with-button.png');
    });
});
