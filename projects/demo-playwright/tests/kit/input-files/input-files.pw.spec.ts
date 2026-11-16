import {join} from 'node:path';

import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationApiPagePO,
    TuiDocumentationPagePO,
    tuiGoto,
    waitIcons,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

test.describe('InputFiles with no-extension file', () => {
    const stubPath = join(__dirname, '../../../stubs/no-extension-file');

    test('Displays name without leading dot and no type', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.InputFiles}/API`);

        const example = new TuiDocumentationApiPagePO(page).demo;

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
        example = new TuiDocumentationApiPagePO(page).demo;
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

    test('ignores a real text drop without files', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.InputFiles}/API`);

        const label = example.locator('label[tuiInputFiles]');
        const input = label.locator('input[tuiInputFiles]');

        await expect(input).toHaveClass(/ng-pristine/);

        await label.evaluate((element) => {
            const source = document.createElement('div');

            source.textContent = 'Drag plain text';
            source.draggable = true;
            source.style.padding = '12px';
            source.addEventListener('dragstart', (event) => {
                event.dataTransfer?.setData('text/plain', 'not a file');
            });

            element.addEventListener('drop', (event) => {
                element.setAttribute(
                    'data-drop-file-count',
                    String(event.dataTransfer?.files.length),
                );
            });

            element.parentElement?.append(source);
        });

        await example.getByText('Drag plain text').dragTo(label);

        await expect(label).toHaveAttribute('data-drop-file-count', '0');
        await expect(input).toHaveClass(/ng-pristine/);
    });

    test('With button', async ({page}) => {
        await tuiGoto(page, DemoRoute.InputFiles);
        const example = new TuiDocumentationPagePO(page).getExample('#with-button');

        await example.locator('button').first().click();

        await expect.soft(example).toHaveScreenshot('03-with-button.png');
    });
});
