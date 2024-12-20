import {DemoRoute} from '@demo/routes';
import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputPhoneInternationalPO,
} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';
import {expect, test} from '@playwright/test';

test.describe('InputPhoneInternational', () => {
    test.describe('API page', () => {
        let example: Locator;
        let dropdown!: Locator;
        let inputPhoneInternational!: TuiInputPhoneInternationalPO;

        test.beforeEach(({page}) => {
            example = new TuiDocumentationPagePO(page).apiPageExample;
            dropdown = page.locator('tui-dropdown');
            inputPhoneInternational = new TuiInputPhoneInternationalPO(
                example.locator('tui-textfield'),
            );
        });

        test('Open dropdown if readonly=false', async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.InputPhoneInternational}/API?readOnly=false`,
            );

            await expect(dropdown).not.toBeAttached();

            await inputPhoneInternational.select.click();

            await expect(dropdown).toBeAttached();
        });

        test('Dont open dropdown if readonly=true', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputPhoneInternational}/API?readOnly=true`);

            await expect(dropdown).not.toBeAttached();

            await expect(async () => {
                await inputPhoneInternational.select.click();
            }).rejects.toThrow();

            await expect(dropdown).not.toBeAttached();
        });
    });
});
