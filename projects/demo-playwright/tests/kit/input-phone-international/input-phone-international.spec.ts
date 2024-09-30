import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('InputPhoneInternational', () => {
    test.describe('API page', () => {
        let example: Locator;
        let select!: Locator;
        let dropdown!: Locator;

        test.beforeEach(({page}) => {
            example = new TuiDocumentationPagePO(page).apiPageExample;
            select = example.locator('tui-input-phone-international select');
            dropdown = page.locator('tui-dropdown');
        });

        test('Open dropdown if readonly=false', async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.InputPhoneInternational}/API?readOnly=false`,
            );

            await expect(dropdown).not.toBeAttached();

            await select.click();

            await expect(dropdown).toBeAttached();
        });

        test('Dont open dropdown if readonly=true', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputPhoneInternational}/API?readOnly=true`);

            await expect(dropdown).not.toBeAttached();

            await select.click();

            await expect(dropdown).not.toBeAttached();
        });
    });
});
