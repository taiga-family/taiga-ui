import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiSelectPO} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';
import {TUI_SELECT_LOCATORS} from '@taiga-ui/testing/locators';

const {describe, beforeEach} = test;

describe('Select', () => {
    describe('Keyboard clearing', () => {
        [true, false].forEach((cleanerEnabled) => {
            describe(`tuiTextfieldCleaner=${cleanerEnabled}`, () => {
                let example!: Locator;
                let select!: TuiSelectPO;

                beforeEach(async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.Select}/API?tuiTextfieldCleaner=${cleanerEnabled}`,
                    );
                    example = new TuiDocumentationPagePO(page).apiPageExample;
                    select = new TuiSelectPO(
                        example.locator(TUI_SELECT_LOCATORS.TEXTFIELD_PARENT),
                    );

                    await select.textfield.click();
                    await select.selectOptions([1]);
                    await select.textfield.click();

                    await expect(select.dropdown).toBeVisible();
                    await expect(select.textfield).toHaveValue('United Arab Emirates');
                });

                test('Backspace', async ({page}) => {
                    await page.keyboard.press('Backspace');
                    await expect(select.textfield).toHaveValue(
                        cleanerEnabled ? '' : 'United Arab Emirates',
                    );
                });

                test('Delete', async ({page}) => {
                    await page.keyboard.press('ControlOrMeta+A');
                    await page.keyboard.press('Delete');
                    await expect(select.textfield).toHaveValue(
                        cleanerEnabled ? '' : 'United Arab Emirates',
                    );
                });
            });
        });

        describe('[tuiTextfieldCleaner=true]', () => {
            let example!: Locator;
            let select!: TuiSelectPO;

            beforeEach(async ({page}) => {
                await tuiGoto(page, `${DemoRoute.Select}/API?tuiTextfieldCleaner=true`);
                example = new TuiDocumentationPagePO(page).apiPageExample;
                select = new TuiSelectPO(
                    example.locator(TUI_SELECT_LOCATORS.TEXTFIELD_PARENT),
                );
            });

            test('click on label + Backspace => Empty textfield', async ({page}) => {
                await expect(select.textfield).toHaveValue('USA');

                // eslint-disable-next-line playwright/no-force-option
                await select.host.locator(TUI_SELECT_LOCATORS.LABEL).click({force: true});

                await expect(select.textfield).toBeFocused();
                await expect(select.dropdown).toBeVisible();

                await page.keyboard.press('Backspace');

                await expect(select.textfield).toHaveValue('');
            });

            test('click on label + Delete => Empty textfield', async ({page}) => {
                await expect(select.textfield).toHaveValue('USA');

                // eslint-disable-next-line playwright/no-force-option
                await select.host.locator(TUI_SELECT_LOCATORS.LABEL).click({force: true});

                await expect(select.textfield).toBeFocused();
                await expect(select.dropdown).toBeVisible();

                await page.keyboard.press('Delete');

                await expect(select.textfield).toHaveValue('');
            });
        });
    });
});
