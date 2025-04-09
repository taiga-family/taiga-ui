import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiMultiSelectPO} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('MultiSelect', () => {
    test.describe('Examples', () => {
        let documentationPage: TuiDocumentationPagePO;

        test.beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.MultiSelect);

            documentationPage = new TuiDocumentationPagePO(page);
        });

        test('does not overflow arrow icon by many tags', async () => {
            const example = documentationPage.getExample('#objects-array');
            const multiSelect = new TuiMultiSelectPO(example.locator('tui-multi-select'));

            await multiSelect.textfield.click();
            await documentationPage.waitStableState();

            await expect(multiSelect.dropdown).toBeVisible();

            await multiSelect.selectOptions([0, 1, 2]);
            await multiSelect.closeDropdown();
            await documentationPage.waitStableState();

            await expect(example).toHaveScreenshot(
                '01-arrow-icon-not-overflown-by-tags.png',
            );
        });

        test('multi-select with data list with label', async ({page}) => {
            const example = documentationPage.getExample('#datalist');
            const multiSelectEl = example.locator('tui-multi-select').first();
            const multiSelect = new TuiMultiSelectPO(multiSelectEl);

            await multiSelect.arrow.click();
            await multiSelectEl.scrollIntoViewIfNeeded();
            await documentationPage.waitStableState();
            await page.mouse.move(0, 0); // clear focus
            await documentationPage.hideContent(); // hide content under dropdown before screenshot

            await expect(multiSelect.dropdown).toHaveScreenshot(
                '02-with-data-list-with-label.png',
            );
        });

        test('multi-select with data list without label', async ({page}) => {
            const example = documentationPage.getExample('#datalist');
            const multiSelectEl = example.locator('tui-multi-select').nth(1);
            const multiSelect = new TuiMultiSelectPO(multiSelectEl);

            await multiSelect.arrow.click();
            await multiSelectEl.scrollIntoViewIfNeeded();
            await documentationPage.waitStableState();
            await page.mouse.move(0, 0); // clear focus
            await documentationPage.hideContent(); // hide content under dropdown before screenshot

            await expect(multiSelect.dropdown).toHaveScreenshot(
                '03-with-data-list-without-label.png',
            );
        });

        // TODO: this tests should be written as component testing (+ delete example from demo)
        test.describe('Multiselect inside dialog with different textfield sizes', () => {
            test.use({viewport: {width: 400, height: 400}});

            ['s', 'm', 'l'].forEach((size, index) => {
                test(`multiselect inside dialog with tuiTextfieldSize=${size}`, async ({
                    page,
                }) => {
                    const example = documentationPage.getExample('#inside-dialog');

                    await example.getByRole('button').nth(index).click();

                    const multiSelect = new TuiMultiSelectPO(
                        page.locator('tui-dialog tui-multi-select'),
                    );

                    await multiSelect.arrow.click();
                    await documentationPage.waitStableState();
                    await multiSelect.selectOptions([0, 1, 2]);
                    await documentationPage.hideContent();
                    await documentationPage.waitStableState();

                    await expect(page).toHaveScreenshot(
                        `04-dialog-with-text-field-size-${size}.png`,
                    );
                });
            });
        });
    });

    test.describe('API page', () => {
        test.use({viewport: {width: 400, height: 400}});

        let documentationPage!: TuiDocumentationPagePO;
        let apiPageExample!: Locator;
        let multiSelect!: TuiMultiSelectPO;

        test.beforeEach(({page}) => {
            documentationPage = new TuiDocumentationPagePO(page);
            apiPageExample = documentationPage.apiPageExample;
            multiSelect = new TuiMultiSelectPO(
                apiPageExample.locator('tui-multi-select'),
            );
        });

        test.describe('sizes', () => {
            ['s', 'm', 'l'].forEach((size) => {
                test(`tuiTextfieldSize=${size}`, async ({page}) => {
                    await tuiGoto(
                        page,
                        `components/multi-select/API?tuiTextfieldCleaner=true&tuiTextfieldSize=${size}`,
                    );
                    await multiSelect.arrow.click();
                    await documentationPage.waitStableState();
                    await multiSelect.selectOptions([0, 1, 2, 3, 4]);
                    await documentationPage.prepareBeforeScreenshot();
                    await documentationPage.waitStableState();

                    await expect(page).toHaveScreenshot(
                        `05-multi-select-size-${size}.png`,
                    );
                });
            });
        });

        test.describe('Form changes by updateOn', () => {
            test.use({viewport: {width: 400, height: 500}});

            (['submit', 'blur', 'change'] as const).forEach((type) => {
                test(`updateOn: ${type}`, async ({page}) => {
                    await tuiGoto(
                        page,
                        'components/multi-select/API?sandboxExpanded=true',
                    );
                    await documentationPage.selectFormControlUpdateOnMethod(type);
                    await documentationPage.prepareBeforeScreenshot();
                    await documentationPage.waitStableState();

                    await expect(apiPageExample).toHaveScreenshot(
                        `06-update-on-${type}-1_initial.png`,
                    );

                    await multiSelect.arrow.click();
                    await documentationPage.waitStableState();
                    await multiSelect.selectOptions([0, 1, 2]);
                    await documentationPage.waitStableState();

                    await expect(multiSelect.dropdown).toHaveScreenshot(
                        `06-update-on-${type}-2_selected-values.png`,
                    );

                    await multiSelect.closeDropdown();
                    await documentationPage.waitStableState();

                    await expect(apiPageExample).toHaveScreenshot(
                        `06-update-on-${type}-3_hide-dropdown.png`,
                    );

                    await multiSelect.textfield.blur();
                    await documentationPage.waitStableState();

                    await expect(apiPageExample).toHaveScreenshot(
                        `06-update-on-${type}-4_blur-event.png`,
                    );

                    await documentationPage.submitFormControlButton.click();
                    await documentationPage.waitStableState();

                    await expect(apiPageExample).toHaveScreenshot(
                        `06-update-on-${type}-5_submit-event.png`,
                    );

                    await documentationPage.resetFormControlButton.click();
                    await documentationPage.waitStableState();

                    await expect(apiPageExample).toHaveScreenshot(
                        `06-update-on-${type}-6_reset.png`,
                    );
                });
            });
        });

        test('checking that the arrow icon is rotated when enabled tuiTextfieldCleaner', async ({
            page,
        }) => {
            await tuiGoto(page, `${DemoRoute.MultiSelect}/API?tuiTextfieldCleaner=true`);
            await multiSelect.arrow.click();
            await documentationPage.waitStableState();
            await multiSelect.selectOptions([0, 1, 2, 3, 4]);
            await documentationPage.prepareBeforeScreenshot();
            await documentationPage.waitStableState();

            await expect(page).toHaveScreenshot('07-multi-select-before-clear.png');

            await multiSelect.arrow.click();
            await multiSelect.cleaner.click();
            await documentationPage.waitStableState();

            await expect(page).toHaveScreenshot('07-multi-select-after-clear.png');
        });

        test('should scroll to end on focus', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.MultiSelect}/API?rows=1&sandboxWidth=350`);
            await multiSelect.arrow.click();
            await documentationPage.waitStableState();
            await multiSelect.selectOptions([0, 1, 2, 3, 4]);
            await documentationPage.prepareBeforeScreenshot();
            await documentationPage.waitStableState();

            await expect(page).toHaveScreenshot(
                '08-multi-select-1-before-scroll-to-end.png',
            );

            await multiSelect.closeDropdown();
            await multiSelect.textfield.blur();
            await multiSelect.arrow.click();
            await documentationPage.waitStableState();

            await expect(page).toHaveScreenshot(
                '08-multi-select-2-after-scroll-to-end.png',
            );
        });

        test('non-editable multiselect with custom value content', async ({page}) => {
            await tuiGoto(
                page,
                'components/multi-select/API?valueContent$=1&editable=false',
            );
            await multiSelect.arrow.click();
            await documentationPage.waitStableState();
            await multiSelect.selectOptions([0, 1, 2]);
            await documentationPage.prepareBeforeScreenshot();
            await documentationPage.waitStableState();

            await expect(page).toHaveScreenshot('09-multi-select-non-editable.png');
        });

        test('placeholder with value content', async ({page}) => {
            await tuiGoto(
                page,
                'components/multi-select/API?valueContent$=1&placeholder=test',
            );

            await multiSelect.arrow.click();

            await multiSelect.selectOptions([0]);
            await multiSelect.closeDropdown();

            await multiSelect.textfield.blur();

            await documentationPage.prepareBeforeScreenshot();
            await documentationPage.waitStableState();

            await expect(page).toHaveScreenshot(
                '10-multi-select-placeholder-with-value-content.png',
            );
        });
    });

    test('Multi group with separate data list', async ({page}) => {
        await tuiGoto(page, 'components/multi-select');

        const example = new TuiDocumentationPagePO(page).getExample(
            '#multi-group-with-separate-data-list',
        );

        await example.scrollIntoViewIfNeeded();
        await example.locator('button').click();

        await expect(page).toHaveScreenshot('11-multi-group-with-separate-data-list.png');
    });
});
