import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('Pincode', () => {
    describe('Examples', () => {
        test('basic', async ({page}) => {
            await tuiGoto(page, DemoRoute.Pincode);

            const example = new TuiDocumentationPagePO(page).getExample('#basic');

            await expect.soft(example).toHaveScreenshot('01-basic.png');
        });

        test('dots (password mode)', async ({page}) => {
            await tuiGoto(page, DemoRoute.Pincode);

            const example = new TuiDocumentationPagePO(page).getExample('#dots');

            await expect.soft(example).toHaveScreenshot('02-dots.png');
        });

        test('fast-loading', async ({page}) => {
            await tuiGoto(page, DemoRoute.Pincode);

            const example = new TuiDocumentationPagePO(page).getExample('#fast-loading');

            await expect.soft(example).toHaveScreenshot('03-fast-loading.png');
        });

        test('long-loading', async ({page}) => {
            await tuiGoto(page, DemoRoute.Pincode);

            const example = new TuiDocumentationPagePO(page).getExample('#long-loading');

            await expect.soft(example).toHaveScreenshot('04-long-loading.png');
        });
    });

    describe('API page', () => {
        let documentPage: TuiDocumentationPagePO;

        beforeEach(async ({page}) => {
            await tuiGoto(page, `${DemoRoute.Pincode}/API`);
            documentPage = new TuiDocumentationPagePO(page);
        });

        describe('text mode', () => {
            test('shows partial input in cells', async () => {
                const input = documentPage.demo.locator('input[tuiPincode]');

                await input.focus();
                await input.pressSequentially('12');

                await expect
                    .soft(documentPage.demo)
                    .toHaveScreenshot('05-text-partial.png');
            });

            test('reaches pending state after full input', async () => {
                const input = documentPage.demo.locator('input[tuiPincode]');

                await input.focus();
                await input.pressSequentially('1234');

                await expect(input).toHaveAttribute('data-mode', 'pending');
                await expect
                    .soft(documentPage.demo)
                    .toHaveScreenshot('06-text-pending.png');
            });

            test('blocks further input when pending', async () => {
                const input = documentPage.demo.locator('input[tuiPincode]');

                await input.focus();
                await input.pressSequentially('1234');
                await input.pressSequentially('5');

                await expect(input).toHaveValue('1234');
            });

            test('shows success state', async ({page}) => {
                const input = documentPage.demo.locator('input[tuiPincode]');

                await input.focus();
                await input.pressSequentially('1234');

                const validRow = documentPage.getRow('[valid]');
                const validSelect = validRow.locator('[tuiSelect], [tuiSelectLike]');

                await validSelect.click();
                await page
                    .locator('tui-data-list-wrapper [tuiOption]')
                    .filter({hasText: 'true'})
                    .click();

                await expect(input).toHaveAttribute('data-mode', 'success');
                await expect
                    .soft(documentPage.demo)
                    .toHaveScreenshot('07-text-success.png');
            });

            test('shows invalid state', async ({page}) => {
                const input = documentPage.demo.locator('input[tuiPincode]');

                await input.focus();
                await input.pressSequentially('1234');

                const validRow = documentPage.getRow('[valid]');
                const validSelect = validRow.locator('[tuiSelect], [tuiSelectLike]');

                await validSelect.click();
                await page
                    .locator('tui-data-list-wrapper [tuiOption]')
                    .filter({hasText: 'false'})
                    .click();

                await expect(input).toHaveAttribute('data-mode', 'invalid');
                await expect
                    .soft(documentPage.demo)
                    .toHaveScreenshot('08-text-invalid.png');
            });

            // Tests the full invalid animation lifecycle: shake → animationend → finished → value cleared
            test('clears value after invalid animation completes', async ({page}) => {
                const input = documentPage.demo.locator('input[tuiPincode]');

                await input.focus();
                await input.pressSequentially('1234');

                const validRow = documentPage.getRow('[valid]');
                const validSelect = validRow.locator('[tuiSelect], [tuiSelectLike]');

                await validSelect.click();
                await page
                    .locator('tui-data-list-wrapper [tuiOption]')
                    .filter({hasText: 'false'})
                    .click();

                await expect(input).toHaveValue('', {timeout: 5_000});
            });
        });

        describe('password mode', () => {
            beforeEach(async ({page}) => {
                const typeRow = documentPage.getRow('type');
                const typeSelect = typeRow.locator('[tuiSelect], [tuiSelectLike]');

                await typeSelect.click();
                await page
                    .locator('tui-data-list-wrapper [tuiOption]')
                    .filter({hasText: 'password'})
                    .click();
            });

            test('shows dots instead of digits', async () => {
                const input = documentPage.demo.locator('input[tuiPincode]');

                await input.focus();
                await input.pressSequentially('123');

                await expect
                    .soft(documentPage.demo)
                    .toHaveScreenshot('09-password-partial.png');
            });

            // Security: digits must not be present in DOM in password mode
            test('does not expose digits in DOM', async () => {
                const input = documentPage.demo.locator('input[tuiPincode]');

                await input.focus();
                await input.pressSequentially('1234');

                const textValues = await documentPage.demo
                    .locator('.t-value')
                    .allTextContents();

                expect(textValues.every((text) => text.trim() === '')).toBe(true);
            });
        });

        describe('maxlength', () => {
            test('changing maxlength updates cell count immediately', async () => {
                const maxlengthInput = documentPage
                    .getRow('maxlength')
                    .locator('input[tuiInputNumber]');

                await maxlengthInput.fill('6');
                await maxlengthInput.blur();

                const cells = documentPage.demo.locator('.t-item');

                await expect(cells).toHaveCount(6);
                await expect
                    .soft(documentPage.demo)
                    .toHaveScreenshot('10-maxlength-6.png');
            });
        });

        describe('focus', () => {
            test('shows caret in first cell when focused', async () => {
                const input = documentPage.demo.locator('input[tuiPincode]');

                await input.focus();

                await expect
                    .soft(documentPage.demo)
                    .toHaveScreenshot('11-focused-empty.png');
            });

            test('advances caret to next cell after input', async () => {
                const input = documentPage.demo.locator('input[tuiPincode]');

                await input.focus();
                await input.pressSequentially('1');

                await expect
                    .soft(documentPage.demo)
                    .toHaveScreenshot('12-focused-one-digit.png');
            });
        });
    });
});
