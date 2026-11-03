import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiSelectEO,
    waitIcons,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';
import {
    TUI_DATA_LIST_LOCATORS,
    TUI_LABEL_LOCATORS,
    TUI_TEXTFIELD_LOCATORS,
} from '@taiga-ui/testing/locators';

const {describe, beforeEach} = test;

describe('Select', () => {
    let documentationPage: TuiDocumentationPagePO;

    describe('Examples', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.Select);
            documentationPage = new TuiDocumentationPagePO(page);
        });

        test('dropdown works after exiting fullscreen', async ({page}) => {
            const exampleContainer = page.locator('#textfield-customization');
            const example = documentationPage.getExample('#textfield-customization');
            const host = example.locator(TUI_TEXTFIELD_LOCATORS.HOST).first();
            const select = new TuiSelectEO(page, example);

            await host.scrollIntoViewIfNeeded();

            const fullscreenButton = exampleContainer.locator('button[tuiIconButton]', {
                hasText: 'Fullscreen',
            });

            await fullscreenButton.click();
            await page.waitForFunction(() => !!document.fullscreenElement);

            await fullscreenButton.click();
            await page.waitForFunction(() => !document.fullscreenElement);

            await select.input.click();
            await expect(select.dropdown).toBeVisible();
        });

        test('checkmark size', async ({page}) => {
            const example = documentationPage.getExample('#customize-content');
            const host = example.locator(TUI_TEXTFIELD_LOCATORS.HOST).first();
            const select = new TuiSelectEO(page, example);

            await host.scrollIntoViewIfNeeded();

            await select.input.click();

            await expect(select.dropdown).toBeVisible();

            await waitIcons({
                page,
                icons: await example.locator('tui-icon >> visible=true').all(),
            });

            await expect.soft(example).toHaveScreenshot('01-checkmark-size.png');
        });

        test('opens dropdown by click on icon', async ({page}) => {
            const example = documentationPage.getExample('#items-handlers');
            const host = example.locator(TUI_TEXTFIELD_LOCATORS.HOST).first();
            const select = new TuiSelectEO(page, example);

            await host.scrollIntoViewIfNeeded();
            await select.input.click({position: {x: 200, y: 30}});

            await expect(select.dropdown).toBeVisible();

            await waitIcons({
                page,
                icons: await example.locator('tui-icon >> visible=true').all(),
            });

            await expect.soft(select.dropdown).toHaveScreenshot('01-click-arrow.png');
        });
    });

    describe('Keyboard clearing', () => {
        [true, false].forEach((cleanerEnabled) => {
            describe(`tuiTextfieldCleaner=${cleanerEnabled}`, () => {
                let example!: Locator;
                let select!: TuiSelectEO;

                beforeEach(async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.Select}/API?tuiTextfieldCleaner=${cleanerEnabled}`,
                    );
                    example = new TuiDocumentationPagePO(page).demo;
                    select = new TuiSelectEO(page, example);

                    await select.input.click();
                    await select.selectOptions([1]);
                    await select.input.click();

                    await expect(select.dropdown).toBeVisible();
                    await expect(select.input).toHaveValue('United Arab Emirates');
                });

                test('Backspace', async ({page}) => {
                    await page.keyboard.press('Backspace');
                    await expect(select.input).toHaveValue(
                        cleanerEnabled ? '' : 'United Arab Emirates',
                    );
                });

                test('Delete', async ({page}) => {
                    await page.keyboard.press('ControlOrMeta+A');
                    await page.keyboard.press('Delete');
                    await expect(select.input).toHaveValue(
                        cleanerEnabled ? '' : 'United Arab Emirates',
                    );
                });
            });
        });

        describe('[tuiTextfieldCleaner=true]', () => {
            let example!: Locator;
            let select!: TuiSelectEO;

            beforeEach(async ({page}) => {
                await tuiGoto(page, `${DemoRoute.Select}/API?tuiTextfieldCleaner=true`);
                example = new TuiDocumentationPagePO(page).demo;
                select = new TuiSelectEO(page, example);
            });

            test('click on label + Backspace => Empty textfield', async ({page}) => {
                await expect(select.input).toHaveValue('USA');

                // eslint-disable-next-line playwright/no-force-option
                await select.host.locator(TUI_LABEL_LOCATORS.HOST).click({force: true});

                await expect(select.input).toBeFocused();
                await expect(select.dropdown).toBeVisible();

                await page.keyboard.press('Backspace');

                await expect(select.input).toHaveValue('');
            });

            test('click on label + Delete => Empty textfield', async ({page}) => {
                await expect(select.input).toHaveValue('USA');

                // eslint-disable-next-line playwright/no-force-option
                await select.host.locator(TUI_LABEL_LOCATORS.HOST).click({force: true});

                await expect(select.input).toBeFocused();
                await expect(select.dropdown).toBeVisible();

                await page.keyboard.press('Delete');

                await expect(select.input).toHaveValue('');
            });
        });

        describe('updates form control value', () => {
            ['Backspace', 'Delete'].forEach((key) => {
                test(`${key} => form control value is null`, async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.Select}/API?sandboxExpanded=true&tuiTextfieldCleaner=true`,
                    );

                    documentationPage = new TuiDocumentationPagePO(page);
                    const select = new TuiSelectEO(page, documentationPage.demo);

                    await expect(select.input).toHaveValue('USA');
                    await expect(documentationPage.value).toContainText('"name": "USA"');

                    await select.input.click();
                    await page.keyboard.press(key);

                    await expect(select.input).toHaveValue('');
                    await expect(documentationPage.value).toContainText('"value": null');
                });
            });
        });
    });

    describe('updateOn=submit', () => {
        test('displays picked option immediately, but updates control value only on submit', async ({
            page,
        }) => {
            await tuiGoto(
                page,
                `${DemoRoute.Select}/API?sandboxExpanded=true&updateOn=submit`,
            );

            documentationPage = new TuiDocumentationPagePO(page);
            const select = new TuiSelectEO(page, documentationPage.demo);

            await expect(select.input).toHaveValue('USA');

            await select.input.click();
            await select.dropdown
                .locator(TUI_DATA_LIST_LOCATORS.OPTION, {hasText: 'Austria'})
                .click();

            await expect(select.input).toHaveValue('Austria');
            // Control value should stay intact until the form is submitted
            await expect(documentationPage.value).toContainText('"name": "USA"');

            await documentationPage.submitFormControlButton.click();

            await expect(documentationPage.value).toContainText('"name": "Austria"');
        });
    });
});
