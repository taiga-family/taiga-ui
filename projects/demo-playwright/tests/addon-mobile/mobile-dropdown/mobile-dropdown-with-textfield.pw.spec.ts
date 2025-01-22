import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

const {describe} = test;

describe('DropdownMobile for textfields', () => {
    test.use(TUI_PLAYWRIGHT_MOBILE);

    test('with select', async ({page}) => {
        await page.goto(DemoRoute.Dropdown);

        const example = new TuiDocumentationPagePO(page).getExample('#mobile');

        await example.locator('tui-select').click();

        await expect(page).toHaveScreenshot('dropdown-mobile-with-select.png');
    });
});
