import {join} from 'node:path';

import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationApiPagePO,
    TuiDocumentationPagePO,
    tuiGoto,
    waitIcons,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('InputFiles with no-extension file', () => {
    const stubPath = join(__dirname, '../../../stubs/no-extension-file');

    test('Displays name without leading dot and no type', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.InputFiles}/API`);

        const example = new TuiDocumentationApiPagePO(page).apiPageExample;

        await example.locator('input[tuiInputFiles]').setInputFiles(stubPath);

        await waitIcons({
            page,
            icons: await example.locator('tui-icon >> visible=true').all(),
        });

        await expect(example.locator('.t-name')).toHaveText('no-extension-file');
        await expect(example.locator('.t-type')).toHaveText('');

        await expect.soft(example).toHaveScreenshot('04-no-extension-file.png');
    });
});

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

            await waitIcons({
                page,
                icons: await example.locator('tui-icon >> visible=true').all(),
            });

            await expect.soft(example).toHaveScreenshot(`01-${language}-input-files.png`);
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

            await waitIcons({
                page,
                icons: await example.locator('tui-icon >> visible=true').all(),
            });

            await expect.soft(example).toHaveScreenshot(`02-${language}-input-files.png`);
        }),
    );

    test('With button', async ({page}) => {
        await tuiGoto(page, DemoRoute.InputFiles);
        const example = new TuiDocumentationPagePO(page).getExample('#with-button');

        await example.locator('button').first().click();

        await expect.soft(example).toHaveScreenshot('03-with-button.png');
    });
});
