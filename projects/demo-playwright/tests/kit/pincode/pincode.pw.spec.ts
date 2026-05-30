import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('Pincode', () => {
    describe('API page', () => {
        let documentPage: TuiDocumentationPagePO;

        beforeEach(async ({page}) => {
            await tuiGoto(page, `${DemoRoute.Pincode}/API`);
            documentPage = new TuiDocumentationPagePO(page);
        });

        describe('text mode', () => {
            test('reaches pending state after full input', async () => {
                const input = documentPage.demo.locator('input[tuiPincode]');

                await input.focus();
                await input.pressSequentially('1234');

                await expect(input).toHaveAttribute('data-state', 'pending');
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

                const validRow = documentPage.getRow('[invalid]');
                const validSelect = validRow.locator('[tuiSelect], [tuiSelectLike]');

                await validSelect.click();
                await page
                    .locator('tui-data-list-wrapper [tuiOption]')
                    .filter({hasText: 'false'})
                    .click();

                await expect(input).toHaveAttribute('data-state', 'success');
                await expect
                    .soft(documentPage.demo)
                    .toHaveScreenshot('07-text-success.png');
            });

            test('shows invalid state', async ({page}) => {
                const input = documentPage.demo.locator('input[tuiPincode]');

                await input.focus();
                await input.pressSequentially('1234');

                const validRow = documentPage.getRow('[invalid]');
                const validSelect = validRow.locator('[tuiSelect], [tuiSelectLike]');

                await validSelect.click();
                await page
                    .locator('tui-data-list-wrapper [tuiOption]')
                    .filter({hasText: 'true'})
                    .click();

                await expect(input).toHaveAttribute('data-state', 'invalid');
                await expect
                    .soft(documentPage.demo)
                    .toHaveScreenshot('08-text-invalid.png');
            });

            test('clears value and resets state after invalid animation completes', async ({
                page,
            }) => {
                const input = documentPage.demo.locator('input[tuiPincode]');

                await input.focus();
                await input.pressSequentially('1234');

                const validRow = documentPage.getRow('[invalid]');
                const validSelect = validRow.locator('[tuiSelect], [tuiSelectLike]');

                await validSelect.click();
                await page
                    .locator('tui-data-list-wrapper [tuiOption]')
                    .filter({hasText: 'true'})
                    .click();

                await expect(input).toHaveValue('', {timeout: 5_000});
                await expect(input).not.toHaveAttribute('data-state');
            });

            test('allows re-entry after invalid animation completes', async ({page}) => {
                const input = documentPage.demo.locator('input[tuiPincode]');

                await input.focus();
                await input.pressSequentially('1234');

                const invalidRow = documentPage.getRow('[invalid]');
                const invalidSelect = invalidRow.locator('[tuiSelect], [tuiSelectLike]');

                await invalidSelect.click();
                await page
                    .locator('tui-data-list-wrapper [tuiOption]')
                    .filter({hasText: 'true'})
                    .click();

                await expect(input).toHaveValue('', {timeout: 5_000});
                await expect(input).not.toHaveAttribute('data-state', {timeout: 3_000});

                await input.focus();
                await input.pressSequentially('5678');
                await expect(input).toHaveValue('5678');
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
    });
});
