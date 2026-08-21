import {DemoRoute} from '@demo/routes';
import {TuiDocumentationApiPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';
import {TUI_TEXTFIELD_LOCATORS} from '@taiga-ui/testing/locators';

test.describe('InputChip', () => {
    test('scroll to second chip in narrow container', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.InputChip}/API?rows=1&sandboxWidth=190`);

        const api = new TuiDocumentationApiPagePO(page);
        const input = api.demo.locator(TUI_TEXTFIELD_LOCATORS.CHIP).first();

        await input.focus();
        await input.fill('VeryLongFirstWord');
        await page.keyboard.press('Enter');
        await input.fill('AnotherLongSecondWord');
        await page.keyboard.press('Enter');
        await input.fill('ThirdLongWord');
        await page.keyboard.press('Enter');
        await api.waitStableState();

        const textfield = api.demo.locator(TUI_TEXTFIELD_LOCATORS.MULTI).first();

        await page.waitForTimeout(200);

        await textfield.evaluate((el) => {
            el.scrollLeft = 50;
        });

        await expect(textfield).toHaveScreenshot('input-chip-scrolled.png');
    });
});
