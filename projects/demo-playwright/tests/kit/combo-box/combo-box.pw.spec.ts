import {DemoRoute} from '@demo/routes';
import {TuiComboBoxPO, TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('ComboBox', () => {
    test.use({viewport: {width: 400, height: 500}});

    describe('API', () => {
        let example!: Locator;
        let comboBox!: TuiComboBoxPO;

        beforeEach(({page}) => {
            const documentationPage = new TuiDocumentationPagePO(page);

            example = documentationPage.apiPageExample;
            comboBox = new TuiComboBoxPO(
                example.locator('tui-textfield:has([tuiComboBox])'),
            );
        });

        test("Don't allow disabled options to be selected by typing them", async ({
            page,
        }) => {
            await tuiGoto(
                page,
                `${DemoRoute.ComboBox}/API?sandboxExpanded=true&disabledItemHandler$=1`,
            );

            await comboBox.textfield.fill('austria');

            const option = comboBox.dropdown.locator('[tuiOption]', {
                hasText: 'Austria',
            });

            await expect
                .soft(option)
                .toHaveScreenshot('01-combobox-option-no-checkmark.png');

            await expect(example).toContainText('"testValue": null');
        });

        test('Automatically selects not disabled option by typing its name', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.ComboBox}/API?sandboxExpanded=true`);

            await comboBox.textfield.fill('austria');

            const option = comboBox.dropdown.locator('[tuiOption]', {
                hasText: 'Austria',
            });

            await expect
                .soft(option)
                .toHaveScreenshot('02-combobox-option-has-checkmark.png');

            await expect(example).toContainText('"id": "AT"');
            await expect(example).toContainText('"name": "Austria"');
        });

        test('corrects textfield value on exact matching from datalist', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.ComboBox}/API?sandboxExpanded=true`);

            await comboBox.textfield.fill('aUsTri');

            await expect(comboBox.textfield).toHaveValue('aUsTri');
            await expect(example).toContainText('"testValue": null');

            await comboBox.textfield.pressSequentially('a');

            await expect(comboBox.textfield).toHaveValue('Austria');

            await expect(example).toContainText('"id": "AT"');
            await expect(example).toContainText('"name": "Austria"');
        });

        test('selects option on Enter (if it is a single datalist item)', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.ComboBox}/API?sandboxExpanded=true`);

            await comboBox.textfield.fill('austr');

            await expect(comboBox.dropdown.locator('[tuiOption]')).toHaveCount(2);

            await page.keyboard.press('Enter');

            await expect(comboBox.textfield).toHaveValue('austr');
            await expect(example).toContainText('"testValue": null');

            await comboBox.textfield.pressSequentially('i');

            await expect(comboBox.dropdown.locator('[tuiOption]')).toHaveCount(1);

            await page.keyboard.press('Enter');

            await expect(comboBox.textfield).toHaveValue('Austria');

            await expect(example).toContainText('"id": "AT"');
            await expect(example).toContainText('"name": "Austria"');
        });

        test('clear incomplete textfield value (not matched by any option) on blur for [strict]=true', async ({
            page,
        }) => {
            await tuiGoto(
                page,
                `${DemoRoute.ComboBox}/API?sandboxExpanded=true&strict=true`,
            );

            await comboBox.textfield.focus();
            await comboBox.textfield.fill('Austri');
            await comboBox.textfield.blur();

            await expect(comboBox.textfield).toHaveValue('');
            await expect(example).toContainText('"testValue": null');
        });

        test('does not clear incomplete textfield value (not matched by any option) on blur for [strict]=false', async ({
            page,
        }) => {
            await tuiGoto(
                page,
                `${DemoRoute.ComboBox}/API?sandboxExpanded=true&strict=false`,
            );

            await comboBox.textfield.focus();
            await comboBox.textfield.fill('Austri');
            await comboBox.textfield.blur();

            await expect(comboBox.textfield).toHaveValue('Austri');
            await expect(example).toContainText('"testValue": "Austri"');
        });
    });

    describe('Examples', () => {
        describe('Server-side filtering', () => {
            let example!: Locator;
            let comboBox!: TuiComboBoxPO;

            beforeEach(async ({page}) => {
                await page.clock.install();
                await tuiGoto(page, DemoRoute.ComboBox, {date: null});
                const documentationPage = new TuiDocumentationPagePO(page);

                example = documentationPage.getExample('#server-side-filtering');
                comboBox = new TuiComboBoxPO(
                    example.locator('tui-textfield:has([tuiComboBox])'),
                );
            });

            test('matched textfield value with datalist options even if items are loaded later user typing', async ({
                page,
            }) => {
                await comboBox.textfield.focus();
                await comboBox.textfield.fill('aUsTrIa');

                await expect(comboBox.dropdown.locator('[tuiOption]')).toHaveCount(0);
                await expect(comboBox.dropdown.locator('tui-loader')).toBeAttached();

                await page.clock.runFor(5_000);

                await expect(comboBox.dropdown.locator('[tuiOption]')).toHaveCount(1);

                await expect
                    .soft(comboBox.dropdown)
                    .toHaveScreenshot(
                        'example---server-side-filtering---combobox-option-has-checkmark.png',
                    );
            });
        });
    });
});
