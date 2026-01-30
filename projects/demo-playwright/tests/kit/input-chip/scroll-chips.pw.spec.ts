import {DemoRoute} from '@demo/routes';
import {TuiDocumentationApiPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('InputChip', () => {
    test('scroll to second chip in narrow container', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.InputChip}/API?rows=1&sandboxWidth=190`);

        const apiPage = new TuiDocumentationApiPagePO(page);
        const example = apiPage.apiPageExample;
        const input = example.locator('[tuiTextfield]').first();

        await input.focus();
        await input.fill('VeryLongFirstWord');
        await page.keyboard.press('Enter');
        await input.fill('AnotherLongSecondWord');
        await page.keyboard.press('Enter');
        await input.fill('ThirdLongWord');
        await page.keyboard.press('Enter');
        await apiPage.waitStableState();

        const textfield = example.locator('tui-textfield[multi]').first();

        await textfield.evaluate((el) => {
            el.scrollLeft = 50;
        });

        await expect(textfield).toHaveScreenshot('input-chip-scrolled.png');
    });
});
