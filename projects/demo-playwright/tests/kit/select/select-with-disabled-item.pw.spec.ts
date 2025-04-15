import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, TuiSelectPO} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

const {describe} = test;

describe('Select | With with disabled datalist item', () => {
    describe('Desktop default dropdown', () => {
        test('Click on the disabled item does not close dropdown and change value', async ({
            page,
        }) => {
            await tuiGoto(page, DemoRoute.Select);
            const example = new TuiDocumentationPagePO(page).getExample(
                '#items-handlers',
            );

            const select = new TuiSelectPO(
                example.locator('tui-textfield:has([tuiSelect])'),
            );

            await select.textfield.click();
            await expect(select.dropdown).toBeAttached();

            const disabledOption = select.dropdown.locator('[tuiOption]', {
                hasText: 'Trevor Philips',
            });

            await expect(disabledOption).toBeDisabled();
            // eslint-disable-next-line playwright/no-force-option
            await disabledOption.click({force: true});

            await page.waitForTimeout(300); // ensure that dropdown is actually not closed even after any async actions
            await expect(select.dropdown).toBeAttached();
            await expect(select.textfield).toHaveValue('Tommy Vercetti'); // initial
            await select.selectOptions([2]);
            await expect(select.dropdown).not.toBeAttached();
            await expect(select.textfield).toHaveValue('Niko Bellic');
        });
    });

    describe('Mobile sheet dialog', () => {
        test.use({...TUI_PLAYWRIGHT_MOBILE, hasTouch: true});

        test('Click on the disabled item does not close dropdown and change value', async ({
            page,
        }) => {
            await tuiGoto(page, DemoRoute.Select);
            const example = new TuiDocumentationPagePO(page).getExample(
                '#dropdown-mobile',
            );
            const select = new TuiSelectPO(
                example.locator('tui-textfield:has([tuiSelect])'),
            );

            await select.textfield.click();
            await expect(select.dropdown).toBeAttached();
            await select.dropdown
                .locator('[tuiOption]', {hasText: 'web'})
                // eslint-disable-next-line playwright/no-force-option
                .tap({force: true});

            await page.waitForTimeout(300); // ensure that dropdown is actually not closed even after any async actions
            await expect(select.dropdown).toBeAttached();
            await expect(select.textfield).toHaveValue('ios'); // initial
            await select.dropdown.locator('[tuiOption]', {hasText: 'android'}).tap();
            await expect(select.dropdown).not.toBeAttached();
            await expect(select.textfield).toHaveValue('android');
        });
    });
});
