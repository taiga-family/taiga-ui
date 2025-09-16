import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

test.describe('Select', () => {
    test.use(TUI_PLAYWRIGHT_MOBILE);

    test.skip('native select value', async ({page}) => {
        // await tuiGoto(page, DemoRoute.SelectLegacy);
        const dropdown = page.locator('#native-select select').first();

        await dropdown.selectOption({index: 1});

        await expect
            .soft(page.locator('#native-select'))
            .toHaveScreenshot('01-native-select-value.png');
    });
});
