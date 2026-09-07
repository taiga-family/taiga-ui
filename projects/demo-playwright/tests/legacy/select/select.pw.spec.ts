import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto, waitIcons} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TuiSelectPO} from '../../../utils/page-objects/select.po';
import {TUI_SELECT_LOCATORS} from '@taiga-ui/testing/locators';

test.describe('Select', () => {
    test.describe('Examples', () => {
        let documentationPage: TuiDocumentationPagePO;

        test.beforeEach(async ({page}) => {
            await tuiGoto(page, DemoRoute.SelectLegacy);

            documentationPage = new TuiDocumentationPagePO(page);
        });

        test('checkmark size', async ({page}) => {
            const example = documentationPage.getExample('#template');
            const selectLocator = example.locator(TUI_SELECT_LOCATORS.LEGACY).first();
            const select = new TuiSelectPO(selectLocator);

            await selectLocator.scrollIntoViewIfNeeded();
            await select.textfield.click();

            await expect(select.dropdown).toBeVisible();

            await waitIcons({
                page,
                icons: await example.locator('tui-icon >> visible=true').all(),
            });

            await expect.soft(example).toHaveScreenshot('01-checkmark-size.png');
        });

        test('opens dropdown by click on icon', async ({page}) => {
            const example = documentationPage.getExample('#base');
            const selectLocator = example.locator(TUI_SELECT_LOCATORS.LEGACY).first();
            const select = new TuiSelectPO(selectLocator);

            await selectLocator.scrollIntoViewIfNeeded();
            await select.textfield.click({position: {x: 200, y: 30}});

            await expect(select.dropdown).toBeVisible();

            await waitIcons({
                page,
                icons: await example.locator('tui-icon >> visible=true').all(),
            });

            await expect.soft(select.dropdown).toHaveScreenshot('01-click-arrow.png');
        });
    });
});
