import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';
import {TUI_SELECT_LOCATORS, TUI_TEXTFIELD_LOCATORS} from '@taiga-ui/testing/locators';

test.describe('Select mobile', () => {
    test.use(TUI_PLAYWRIGHT_MOBILE);

    test('native select value', async ({page}) => {
        await tuiGoto(page, DemoRoute.Select);

        const documentationPage = new TuiDocumentationPagePO(page);

        const example = documentationPage.getExample(
            '#native-picker-with-disabled-option',
        );

        const host = example.locator(TUI_TEXTFIELD_LOCATORS.HOST).first();
        const nativeSelect = host.locator(TUI_SELECT_LOCATORS.HOST);

        await expect(nativeSelect).toBeVisible();

        await nativeSelect.selectOption({index: 1});

        await expect.soft(host).toHaveScreenshot('01-native-select-value.png');
    });
});
