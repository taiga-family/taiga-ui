import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

test.describe('Select', () => {
    test.use(TUI_PLAYWRIGHT_MOBILE);

    test('native select value', async ({page}) => {
        await tuiGoto(page, DemoRoute.Select);
        const dropdown = page.locator('#native-select select').first();

        await dropdown.selectOption({index: 1});

        await expect(page.locator('#native-select')).toHaveScreenshot(
            '01-native-select-value.png',
        );
    });
});
