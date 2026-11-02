import {DemoRoute} from '@demo/routes';
import {TuiComboBoxEO, TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('ComboBox', () => {
    test.use({viewport: {width: 400, height: 500}});

    describe('API', () => {
        let example!: Locator;
        let value!: Locator;
        let submit!: Locator;
        let comboBox!: TuiComboBoxEO;

        beforeEach(({page}) => {
            const documentationPage = new TuiDocumentationPagePO(page);

            example = documentationPage.demo;
            value = documentationPage.value;
            submit = documentationPage.submitFormControlButton;
            comboBox = new TuiComboBoxEO(page, example);
        });

        test("Don't allow disabled options to be selected by typing them", async ({
            page,
        }) => {
            await tuiGoto(
                page,
                `${DemoRoute.ComboBox}/API?sandboxExpanded=true&disabledItemHandler$=1`,
            );

            await comboBox.input.fill('austria');

            const option = await comboBox.getOptionByText('Austria');

            await expect
                .soft(option)
                .toHaveScreenshot('01-combobox-option-no-checkmark.png');

            await expect(value).toContainText('"value": null');
        });

        test('Automatically selects not disabled option by typing its name', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.ComboBox}/API?sandboxExpanded=true`);

            await comboBox.input.fill('austria');

            const option = await comboBox.getOptionByText('Austria');

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

            await comboBox.input.fill('aUsTri');

            await expect(comboBox.input).toHaveValue('aUsTri');
            await expect(value).toContainText('"value": null');

            await comboBox.input.pressSequentially('a');

            await expect(comboBox.input).toHaveValue('Austria');

            await expect(value).toContainText('"id": "AT"');
            await expect(value).toContainText('"name": "Austria"');
        });

        test('selects option on Enter (if it is a single datalist item)', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.ComboBox}/API?sandboxExpanded=true`);

            await comboBox.input.fill(
                // cspell:disable-next-line
                'austr',
            );

            await expect(comboBox.options).toHaveCount(2);

            await page.keyboard.press('Enter');

            await expect(comboBox.input).toHaveValue(
                // cspell:disable-next-line
                'austr',
            );

            await expect(value).toContainText('"value": null');

            await comboBox.input.pressSequentially('i');

            await expect(comboBox.options).toHaveCount(1);

            await page.keyboard.press('Enter');

            await expect(comboBox.input).toHaveValue('Austria');

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

            await comboBox.input.focus();
            await comboBox.input.fill('Austri');
            await comboBox.input.blur();

            await expect(comboBox.input).toHaveValue('');
            await expect(value).toContainText('"value": null');
        });

        test('does not clear incomplete textfield value (not matched by any option) on blur for [strict]=false', async ({
            page,
        }) => {
            await tuiGoto(
                page,
                `${DemoRoute.ComboBox}/API?sandboxExpanded=true&strict=false`,
            );

            await comboBox.input.focus();
            await comboBox.input.fill('Austri');
            await comboBox.input.blur();

            await expect(comboBox.input).toHaveValue('Austri');
            await expect(value).toContainText('"value": "Austri"');
        });

        test('set `null` on Backspace for matched value', async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.ComboBox}/API?sandboxExpanded=true&strict=true`,
            );

            await comboBox.input.focus();
            await comboBox.input.fill('aUsTrIa');
            await expect(comboBox.input).toHaveValue('Austria');
            await expect(value).toContainText('"id": "AT"');
            await expect(value).toContainText('"name": "Austria"');

            await comboBox.input.press('Backspace');
            await expect(comboBox.input).toHaveValue('Austri');
            await expect(value).toContainText('"value": null');
        });

        describe('updateOn=submit', () => {
            test('displays selected option immediately, but updates control value only on submit', async ({
                page,
            }) => {
                await tuiGoto(
                    page,
                    `${DemoRoute.ComboBox}/API?sandboxExpanded=true&updateOn=submit`,
                );

                await comboBox.input.fill('austri');
                const option = await comboBox.getOptionByText('Austria');
                await option.click();

                await expect(comboBox.input).toHaveValue('Austria');
                await expect(value).toContainText('"value": null');

                await submit.click();

                await expect(value).toContainText('"id": "AT"');
                await expect(value).toContainText('"name": "Austria"');
            });
        });
    });

    describe('Examples', () => {
        let example!: Locator;
        let comboBox!: TuiComboBoxEO;

        describe('Client-side filtering', () => {
            beforeEach(async ({page}) => {
                await tuiGoto(page, DemoRoute.ComboBox);

                example = new TuiDocumentationPagePO(page).getExample(
                    '#client-side-filtering',
                );
                comboBox = new TuiComboBoxEO(page, example);
            });

            test('all items are visible for empty textfield', async () => {
                await comboBox.input.click();

                await expect(comboBox.dropdown).toBeVisible();
                await expect(comboBox.options).toHaveCount(8);
            });

            test('filter works', async () => {
                await comboBox.input.fill('george');

                await expect(comboBox.dropdown).toBeVisible();
                await expect(comboBox.options).toHaveCount(4);
                await expect(comboBox.dropdown).toContainText('George VI');
                await expect(comboBox.dropdown).toContainText('George V');
                await expect(comboBox.dropdown).toContainText('George IV');
                await expect(comboBox.dropdown).toContainText('George III');
            });

            test('custom matcher converts roman numeral to arabic digit', async () => {
                await comboBox.input.fill('3');

                await expect(comboBox.dropdown).toBeVisible();
                await expect(comboBox.options).toHaveCount(2);
                await expect(comboBox.dropdown).toContainText('Charles III');
                await expect(comboBox.dropdown).toContainText('George III');
            });

            test('continue filtering on exact match if there are partially matched options', async () => {
                await comboBox.input.fill('George V');

                await expect(comboBox.options).toHaveCount(2);
                await expect(
                    comboBox.getOptionByText(/George V\b/),
                ).resolves.toBeVisible();
                await expect(
                    comboBox.getOptionByText('George VI'),
                ).resolves.toBeVisible();
                await expect(comboBox.dropdown).toHaveScreenshot(
                    'george-5-checked-two-options-only.png',
                );

                await comboBox.input.pressSequentially('I');

                await expect(comboBox.input).toHaveValue('George VI');
                await expect(comboBox.options).toHaveCount(8);
            });
        });

        describe('Choose form control output', () => {
            beforeEach(async ({page}) => {
                await tuiGoto(page, DemoRoute.ComboBox);
                const documentationPage = new TuiDocumentationPagePO(page);

                example = documentationPage.getExample('#choose-form-control-output');
                comboBox = new TuiComboBoxEO(page, example);
            });

            test('match option by typing complete name', async () => {
                await comboBox.input.clear();
                await comboBox.input.fill('eRiC iDle');
                await expect(comboBox.input).toHaveValue('Eric Idle');
                await expect(example).toContainText('Form control:0');
            });

            test('match option by typing id', async () => {
                await comboBox.input.clear();
                await comboBox.input.fill('0');
                await expect(comboBox.input).toHaveValue('Eric Idle');
                await expect(example).toContainText('Form control:0');
            });

            test('click on item and blur – keeps already matched option', async () => {
                await comboBox.input.click();
                const option = await comboBox.getOptionByText('Eric Idle');
                await option.click();

                await expect(comboBox.input).toHaveValue('Eric Idle');
                await expect(example).toContainText('Form control:0');

                await comboBox.closeDropdown();
                await comboBox.input.blur();

                await expect(comboBox.input).toHaveValue('Eric Idle');
                await expect(example).toContainText('Form control:0');
            });

            test('shows all available options on click (control has selected item)', async () => {
                await expect(comboBox.input).toHaveValue('Terry Jones');
                await expect(example).toContainText('Form control:777');

                await comboBox.input.click();
                await expect(comboBox.options).toHaveCount(6);
            });

            test('filter works', async () => {
                await comboBox.input.clear();
                await comboBox.input.fill('eRic iDl');
                await expect(example).toContainText('Form control:null');
                await expect(comboBox.options).toHaveCount(1);
                await expect(comboBox.dropdown).toHaveText('Eric Idle');

                await comboBox.input.pressSequentially('e');
                await expect(comboBox.input).toHaveValue('Eric Idle');
                await expect(example).toContainText('Form control:0');
            });

            test('shows all options again when textfield value matches datalist item', async () => {
                await comboBox.input.clear();
                await comboBox.input.fill('eRic iDl');
                await expect(comboBox.options).toHaveCount(1);

                await comboBox.input.pressSequentially('e');
                await expect(comboBox.options).toHaveCount(6);
            });
        });

        describe('Server-side filtering', () => {
            beforeEach(async ({page}) => {
                await page.clock.install();
                await tuiGoto(page, DemoRoute.ComboBox, {date: null});
                const documentationPage = new TuiDocumentationPagePO(page);

                example = documentationPage.getExample('#server-side-filtering');
                comboBox = new TuiComboBoxEO(page, example);
            });

            test('matched textfield value with datalist options even if items are loaded later user typing', async ({
                page,
            }) => {
                await comboBox.input.focus();
                await comboBox.input.fill('aUsTrIa');

                await expect(comboBox.options).toHaveCount(0);
                await expect(comboBox.dropdown.locator('tui-loader')).toBeAttached();

                await page.clock.runFor(5_000);

                await expect(comboBox.options).toHaveCount(1);

                await expect
                    .soft(comboBox.dropdown)
                    .toHaveScreenshot(
                        'example---server-side-filtering---combobox-option-has-checkmark.png',
                    );
            });
        });

        describe('Virtual scroll', () => {
            let example!: Locator;
            let comboBox!: TuiComboBoxEO;

            beforeEach(async ({page}) => {
                await tuiGoto(page, DemoRoute.ComboBox);
                const documentationPage = new TuiDocumentationPagePO(page);

                example = documentationPage.getExample('#virtual-scroll');
                comboBox = new TuiComboBoxEO(page, example);
            });

            test('textfield keeps already selected option even if option disappears from datalist by scroll', async () => {
                const option = await comboBox.getOptionByText('Afghanistan');

                await comboBox.input.click();

                await expect(async () => {
                    const count = await comboBox.options.count();

                    // assertion for the exact number of options is not reliable
                    expect(count).toBeGreaterThan(10);
                    expect(count).toBeLessThan(30);
                }).toPass();

                await option.click();

                await expect(comboBox.input).toHaveValue('Afghanistan');

                await expect(comboBox.options).toHaveCount(0);
                await expect(comboBox.dropdown).not.toBeAttached();

                await comboBox.input.click();
                await comboBox.dropdown
                    .locator('cdk-virtual-scroll-viewport')
                    .evaluate((el) => el.scrollTo(0, 500));

                await expect(async () => {
                    const count = await comboBox.options.count();

                    expect(count).toBeGreaterThan(10);
                    expect(count).toBeLessThan(30);
                }).toPass();
                await expect(option).not.toBeAttached();

                await comboBox.input.blur();

                await expect(comboBox.input).toHaveValue('Afghanistan');
            });

            test('paste of exact value', async ({page}) => {
                // Fill with value that is not in first 20 options
                await comboBox.input.fill('Russia');

                await expect(comboBox.input).toHaveValue('Russia');

                await expect(
                    comboBox.getOptionByText('Russia'),
                ).resolves.not.toBeAttached();

                await comboBox.input.blur();
                await page.waitForTimeout(100);

                await expect(comboBox.input).toHaveValue('Russia');
            });
        });
    });
});
