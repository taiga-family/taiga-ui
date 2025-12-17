import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiSelectPO,
    waitIcons,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('Select', () => {
    let documentationPage: TuiDocumentationPagePO;

    describe('Examples', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.Select);
            documentationPage = new TuiDocumentationPagePO(page);
        });

        test('checkmark size', async ({page}) => {
            const example = documentationPage.getExample('#content-customization');
            const host = example.locator('tui-textfield').first();
            const select = new TuiSelectPO(host);

            await host.scrollIntoViewIfNeeded();

            await select.textfield.click();

            await expect(select.dropdown).toBeVisible();

            await waitIcons({
                page,
                icons: await example.locator('tui-icon >> visible=true').all(),
            });

            await expect.soft(example).toHaveScreenshot('01-checkmark-size.png');
        });

        test('opens dropdown by click on icon', async ({page}) => {
            const example = documentationPage.getExample('#items-handlers');
            const host = example.locator('tui-textfield').first();
            const select = new TuiSelectPO(host);

            await host.scrollIntoViewIfNeeded();
            await select.textfield.click({position: {x: 200, y: 30}});

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
                let select!: TuiSelectPO;

                beforeEach(async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.Select}/API?tuiTextfieldCleaner=${cleanerEnabled}`,
                    );
                    example = new TuiDocumentationPagePO(page).apiPageExample;
                    select = new TuiSelectPO(
                        example.locator('tui-textfield:has([tuiSelect])'),
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
    });
});
