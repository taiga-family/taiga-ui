import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';
import {TUI_INPUT_LOCATORS} from '@taiga-ui/testing/locators';

test.describe('FluidTypography', () => {
    test('Textfield with long value shrinks font size', async ({page}) => {
        await tuiGoto(page, DemoRoute.FluidTypography);

        const example = new TuiDocumentationPagePO(page).getExample('#textfield');
        const input = example.locator(TUI_INPUT_LOCATORS.HOST);

        await example.scrollIntoViewIfNeeded();
        await input.fill('1234567891011121314151617181920212223');
        await input.blur();

        await expect
            .soft(example)
            .toHaveScreenshot('fluid-typography-textfield-long-value.png');
    });
});
