import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';
import {TUI_SCROLLBAR_LOCATORS, TUI_TEXTFIELD_LOCATORS} from '@taiga-ui/testing/locators';

test('the vertical thumb appears only when chips overflow', async ({page}) => {
    await tuiGoto(page, DemoRoute.InputChip);

    const textfield = new TuiDocumentationPagePO(page)
        .getExample('#chips')
        .locator(TUI_TEXTFIELD_LOCATORS.HOST)
        .first();

    const thumb = textfield
        .locator(TUI_SCROLLBAR_LOCATORS.VERTICAL_BAR)
        .locator(TUI_SCROLLBAR_LOCATORS.THUMB);

    await expect
        .poll(async () =>
            thumb.evaluateAll(([element]) =>
                element ? getComputedStyle(element).opacity : '0',
            ),
        )
        .toBe('0');

    await textfield.evaluate((element) => {
        element.style.inlineSize = '8rem';
        element.style.maxBlockSize = '4rem';
    });

    await expect(thumb).toHaveCSS('opacity', '0.2');
});
