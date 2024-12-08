import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, waitIcons} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Dialogs', () => {
    [
        {width: 320, height: 480},
        {width: 720, height: 900},
        {width: 1024, height: 900},
        {width: 1620, height: 1024},
    ].forEach(({width, height}) => {
        test(`Prompt - ${width}x${height}`, async ({page, browserName}) => {
            test.skip(
                browserName !== 'chromium',
                // TODO: why does this test keep failing in safari
                'This feature is only relevant in Chrome',
            );

            await page.setViewportSize({width, height});
            await tuiGoto(
                page,
                'components/confirm/API?no=Very%20Long%20long%20long%20text&yes=Long%20long%20text',
            );

            const documentationPagePO = new TuiDocumentationPagePO(page);

            await documentationPagePO.apiPageExample.locator('button').click();
            await documentationPagePO.prepareBeforeScreenshot();

            await expect(page).toHaveScreenshot(`01-prompt_${width}x${height}.png`);
        });

        test.describe(`${width}x${height}`, () => {
            test.beforeEach(async ({page, browserName}) => {
                await page.setViewportSize({width, height});
                await tuiGoto(page, DemoRoute.Dialog);

                test.skip(
                    browserName !== 'chromium',
                    // TODO: why does this test keep failing in safari
                    'This feature is only relevant in Chrome',
                );
            });

            test('A dialog and a nested dialog are open correctly', async ({page}) => {
                const documentationPagePO = new TuiDocumentationPagePO(page);
                const example = documentationPagePO.getExample('#data');

                await example.scrollIntoViewIfNeeded();
                await example.locator('button').click();
                await documentationPagePO.prepareBeforeScreenshot();

                await expect(page).toHaveScreenshot(
                    `02-dialogs-level-1_${width}x${height}.png`,
                );

                await page.locator('tui-dialog button').nth(1).click();

                await expect(page).toHaveScreenshot(
                    `02-dialogs-level-2_${width}x${height}.png`,
                );
            });

            test('Mobile dialog works', async ({page}) => {
                const documentationPagePO = new TuiDocumentationPagePO(page);
                const example = documentationPagePO.getExample('#mobile');

                await example.scrollIntoViewIfNeeded();
                await example.locator('button').click();
                await documentationPagePO.prepareBeforeScreenshot();

                await expect(page).toHaveScreenshot(
                    `03-mobile-dialog_${width}x${height}.png`,
                );
            });

            test('Dialog with directive works', async ({page}) => {
                const documentationPagePO = new TuiDocumentationPagePO(page);
                const example = documentationPagePO.getExample('#directive');

                await example.scrollIntoViewIfNeeded();
                await example.locator('button').click();
                await documentationPagePO.prepareBeforeScreenshot();

                await expect(page).toHaveScreenshot(
                    `04-dialogs-dialog-directive_${width}x${height}.png`,
                );
            });

            test('Show simple', async ({page}) => {
                const documentationPagePO = new TuiDocumentationPagePO(page);
                const example = documentationPagePO.getExample('#string');

                await example.scrollIntoViewIfNeeded();
                await example.locator('button').nth(0).click();
                await documentationPagePO.prepareBeforeScreenshot();

                await expect(page).toHaveScreenshot(
                    `05-default-button_${width}x${height}.png`,
                );
            });

            test('Show simple + custom button', async ({page}) => {
                const documentationPagePO = new TuiDocumentationPagePO(page);
                const example = documentationPagePO.getExample('#string');

                await example.scrollIntoViewIfNeeded();
                await example.locator('button').nth(1).click();
                await documentationPagePO.prepareBeforeScreenshot();

                await expect(page).toHaveScreenshot(
                    `06-custom-button_${width}x${height}.png`,
                );
            });

            test.describe('Dialog with confirmation works', () => {
                test.beforeEach(async ({page, browserName}) => {
                    test.skip(
                        browserName !== 'chromium',
                        // TODO: why does this test keep failing in safari
                        'This feature is only relevant in Chrome',
                    );

                    const documentationPagePO = new TuiDocumentationPagePO(page);
                    const example = documentationPagePO.getExample('#confirm');

                    await example.scrollIntoViewIfNeeded();
                    await example.locator('button').click();
                    await documentationPagePO.prepareBeforeScreenshot();
                });

                test('Prompt', async ({page}) => {
                    await expect(page).toHaveScreenshot(
                        `07-prompt_${width}x${height}.png`,
                    );
                });

                test('Pristine form does not show confirmation', async ({page}) => {
                    await page.locator('tui-dialog .t-close').click();

                    await expect(page.locator('tui-dialog')).toHaveCount(0);
                });

                test('Dirty form shows confirmation', async ({page}) => {
                    await page.locator('tui-dialog input').fill('Test');
                    await page.locator('tui-dialog .t-close').click();

                    await expect(page).toHaveScreenshot(
                        `08-prompt-confirm_${width}x${height}.png`,
                    );
                });

                test('Form is reset to pristine', async ({page}) => {
                    await page.locator('tui-dialog input').fill('Test');
                    await page.locator('tui-dialog .t-close').click();
                    await page.locator('tui-confirm button').nth(1).click();

                    await expect(page.locator('tui-dialog')).toHaveCount(0);
                });
            });
        });
    });

    test.describe('dismissible & closeable', () => {
        test('closeable = true, dismissible = false', async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.Dialog}/API?closeable=true&dismissible=false`,
            );

            await page.locator('tui-doc-page button[data-appearance="primary"]').click();
            await page.mouse.click(100, 100);

            const dialog = page.locator('tui-dialog');

            await expect(dialog).toHaveCount(1);

            await waitIcons({
                page,
                icons: await dialog.locator('tui-icon >> visible=true').all(),
            });
        });

        test('closeable = false, dismissible = true', async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.Dialog}/API?closeable=false&dismissible=true`,
            );

            await page.locator('tui-doc-page button[data-appearance="primary"]').click();
            await page.mouse.click(100, 100);

            await expect(page.locator('tui-dialog')).toHaveCount(0);
        });

        test('closeable = true, dismissible = false and force close', async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.Dialog}/API?closeable=true&dismissible=false`,
            );

            await page.locator('tui-doc-page button[data-appearance="primary"]').click();
            await page.mouse.click(100, 100);

            await expect(page.locator('tui-dialog')).toHaveCount(1);

            await page.locator('[automation-id="tui-dialog__close"]').click();

            await expect(page.locator('tui-dialog')).toHaveCount(0);
        });

        test('dismissible = true, fullscreen', async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.Dialog}/API?size=fullscreen&dismissible=true`,
            );

            await page.locator('tui-doc-page button[data-appearance="primary"]').click({
                // eslint-disable-next-line playwright/no-force-option
                force: true, // click outside dialog
            });

            await page.mouse.click(100, 100);

            const dialog = page.locator('tui-dialog');

            await expect(dialog).toHaveCount(1);

            await waitIcons({
                page,
                icons: await dialog.locator('tui-icon >> visible=true').all(),
            });

            await expect(page).toHaveScreenshot('09-dialog.png');
        });

        test('dismissible = true, fullscreen, desktop', async ({page}) => {
            await page.setViewportSize({width: 1024, height: 900});
            await tuiGoto(
                page,
                `${DemoRoute.Dialog}/API?size=fullscreen&dismissible=true`,
            );

            await page.locator('tui-doc-page button[data-appearance="primary"]').click();
            await page.mouse.click(100, 100);

            const dialog = page.locator('tui-dialog');

            await expect(dialog).toHaveCount(1);

            await waitIcons({
                page,
                icons: await dialog.locator('tui-icon >> visible=true').all(),
            });

            await expect(page).toHaveScreenshot('10-dialog.png');
        });
    });
});
