import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

test.describe('Copy', () => {
    test.use({hasTouch: false});

    let copy: Locator;
    let content: Locator;

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, DemoRoute.Copy);

        copy = new TuiDocumentationPagePO(page)
            .getExample('#basic')
            .locator('tui-copy')
            .nth(1);
        content = copy.locator('.t-content');

        await copy.evaluate((node) => {
            node.parentElement!.style.inlineSize = '12rem';
        });
        await copy.scrollIntoViewIfNeeded();

        expect(
            await content.evaluate((node) => node.getClientRects().length),
        ).toBeGreaterThan(1);
    });

    test('uses scoped keyframes when hovering wrapped text', async () => {
        await copy.hover();

        await expect(copy.locator('button')).toHaveCSS('opacity', '1');
        await expect(content).toHaveCSS('animation-name', /^.+_tuiCopySafariOpacity$/);
    });

    test('uses scoped keyframes when focusing the copy button', async ({page}) => {
        await page.keyboard.press('Tab');
        await copy.locator('button').focus();

        await expect(copy.locator('button')).toBeFocused();
        await expect(copy.locator('button')).toHaveCSS('opacity', '1');
        await expect(content).toHaveCSS('animation-name', /^.+_tuiCopySafariOpacity$/);
    });
});
