import {DemoRoute} from '@demo/routes';
import {TuiComboBoxPO, TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('ComboBox', () => {
    test.use({viewport: {width: 400, height: 500}});

    describe('API', () => {
        let example!: Locator;
        let value!: Locator;
        let comboBox!: TuiComboBoxPO;

        beforeEach(({page}) => {
            const documentationPage = new TuiDocumentationPagePO(page);

            example = documentationPage.demo;
            value = documentationPage.value;
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

            const option = comboBox.dropdown.locator('[tuiOption]', {hasText: 'Austria'});

            await expect
                .soft(option)
                .toHaveScreenshot('01-combobox-option-no-checkmark.png');

            await expect(value).toContainText('"value": null');
        });

        test('Automatically selects not disabled option by typing its name', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.ComboBox}/API?sandboxExpanded=true`);

            await comboBox.textfield.fill('austria');

            const option = comboBox.dropdown.locator('[tuiOption]', {hasText: 'Austria'});

            await expect
                .soft(option)
                .toHaveScreenshot('02-combobox-option-has-checkmark.png');

            await expect(value).toContainText('"id": "AT"');
            await expect(value).toContainText('"name": "Austria"');
        });

        test('corrects textfield value on exact matching from datalist', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.ComboBox}/API?sandboxExpanded=true`);

            await comboBox.textfield.fill('aUsTri');

            await expect(comboBox.textfield).toHaveValue('aUsTri');
            await expect(value).toContainText('"value": null');

            await comboBox.textfield.pressSequentially('a');

            await expect(comboBox.textfield).toHaveValue('Austria');

            await expect(value).toContainText('"id": "AT"');
            await expect(value).toContainText('"name": "Austria"');
        });

        test('selects option on Enter (if it is a single datalist item)', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.ComboBox}/API?sandboxExpanded=true`);

            await comboBox.textfield.fill(
                // cspell:disable-next-line
                'austr',
            );

            await expect(comboBox.dropdown.locator('[tuiOption]')).toHaveCount(2);

            await page.keyboard.press('Enter');

            await expect(comboBox.textfield).toHaveValue(
                // cspell:disable-next-line
                'austr',
            );

            await expect(value).toContainText('"value": null');

            await comboBox.textfield.pressSequentially('i');

            await expect(comboBox.dropdown.locator('[tuiOption]')).toHaveCount(1);

            await page.keyboard.press('Enter');

            await expect(comboBox.textfield).toHaveValue('Austria');

            await expect(value).toContainText('"id": "AT"');
            await expect(value).toContainText('"name": "Austria"');
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
            await expect(value).toContainText('"value": null');
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
            await expect(value).toContainText('"value": "Austri"');
        });

        test('set `null` on Backspace for matched value', async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.ComboBox}/API?sandboxExpanded=true&strict=true`,
            );

            await comboBox.textfield.focus();
            await comboBox.textfield.fill('aUsTrIa');
            await expect(comboBox.textfield).toHaveValue('Austria');
            await expect(value).toContainText('"id": "AT"');
            await expect(value).toContainText('"name": "Austria"');

            await comboBox.textfield.press('Backspace');
            await expect(comboBox.textfield).toHaveValue('Austri');
            await expect(value).toContainText('"value": null');
        });
    });

    describe('Examples', () => {
        let example!: Locator;
        let comboBox!: TuiComboBoxPO;

        describe('Choose form control output', () => {
            beforeEach(async ({page}) => {
                await tuiGoto(page, DemoRoute.ComboBox);
                const documentationPage = new TuiDocumentationPagePO(page);

                example = documentationPage.getExample('#choose-form-control-output');
                comboBox = new TuiComboBoxPO(
                    example.locator('tui-textfield:has([tuiComboBox])'),
                );
            });

            test('match option by typing complete name', async () => {
                await comboBox.textfield.clear();
                await comboBox.textfield.fill('eRiC iDle');
                await expect(comboBox.textfield).toHaveValue('Eric Idle');
                await expect(example).toContainText('Form control:0');
            });

            test('match option by typing id', async () => {
                await comboBox.textfield.clear();
                await comboBox.textfield.fill('0');
                await expect(comboBox.textfield).toHaveValue('Eric Idle');
                await expect(example).toContainText('Form control:0');
            });

            test('click on item and blur – keeps already matched option', async () => {
                await comboBox.textfield.click();
                await comboBox.dropdown
                    .locator('[tuiOption]', {hasText: 'Eric Idle'})
                    .click();

                await expect(comboBox.textfield).toHaveValue('Eric Idle');
                await expect(example).toContainText('Form control:0');

                await comboBox.closeDropdown();
                await comboBox.textfield.blur();

                await expect(comboBox.textfield).toHaveValue('Eric Idle');
                await expect(example).toContainText('Form control:0');
            });

            test('shows all available options on click (control has selected item)', async () => {
                await expect(comboBox.textfield).toHaveValue('Terry Jones');
                await expect(example).toContainText('Form control:777');

                await comboBox.textfield.click();
                await expect(comboBox.dropdown.locator('[tuiOption]')).toHaveCount(6);
            });

            test('filter works', async () => {
                await comboBox.textfield.clear();
                await comboBox.textfield.fill('eRic iDl');
                await expect(example).toContainText('Form control:null');
                await expect(comboBox.dropdown.locator('[tuiOption]')).toHaveCount(1);
                await expect(comboBox.dropdown).toHaveText('Eric Idle');

                await comboBox.textfield.pressSequentially('e');
                await expect(comboBox.textfield).toHaveValue('Eric Idle');
                await expect(example).toContainText('Form control:0');
            });

            test('shows all options again when textfield value matches datalist item', async () => {
                await comboBox.textfield.clear();
                await comboBox.textfield.fill('eRic iDl');
                await expect(comboBox.dropdown.locator('[tuiOption]')).toHaveCount(1);

                await comboBox.textfield.pressSequentially('e');
                await expect(comboBox.dropdown.locator('[tuiOption]')).toHaveCount(6);
            });
        });

        describe('Server-side filtering', () => {
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

        describe('Virtual scroll', () => {
            let example!: Locator;
            let comboBox!: TuiComboBoxPO;

            beforeEach(async ({page}) => {
                await tuiGoto(page, DemoRoute.ComboBox);
                const documentationPage = new TuiDocumentationPagePO(page);

                example = documentationPage.getExample('#virtual-scroll');
                comboBox = new TuiComboBoxPO(
                    example.locator('tui-textfield:has([tuiComboBox])'),
                );
            });

            test('textfield keeps already selected option even if option disappears from datalist by scroll', async () => {
                const option = comboBox.dropdown.locator('[tuiOption]', {
                    hasText: 'Afghanistan',
                });

                await comboBox.textfield.click();

                await expect(async () => {
                    const count = await comboBox.dropdown.locator('[tuiOption]').count();

                    // assertion for the exact number of options is not reliable
                    expect(count).toBeGreaterThan(10);
                    expect(count).toBeLessThan(30);
                }).toPass();

                await option.click();

                await expect(comboBox.textfield).toHaveValue('Afghanistan');

                await expect(comboBox.dropdown.locator('[tuiOption]')).toHaveCount(0);
                await expect(comboBox.dropdown).not.toBeAttached();

                await comboBox.textfield.click();
                await comboBox.dropdown
                    .locator('cdk-virtual-scroll-viewport')
                    .evaluate((el) => el.scrollTo(0, 500));

                await expect(async () => {
                    const count = await comboBox.dropdown.locator('[tuiOption]').count();

                    expect(count).toBeGreaterThan(10);
                    expect(count).toBeLessThan(30);
                }).toPass();
                await expect(option).not.toBeAttached();

                await comboBox.textfield.blur();

                await expect(comboBox.textfield).toHaveValue('Afghanistan');
            });
        });
    });
});
