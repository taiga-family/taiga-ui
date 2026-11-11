import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, type Page, test} from '@playwright/test';

const HINT_TEXT = 'I will be visible upon keyboard focus';

/**
 * `tuiHintDescribe` reacts only to keyboard navigation:
 * focus has to land on the host via `Tab` (programmatic focus is not enough).
 */
async function focusWithKeyboard(page: Page, host: Locator): Promise<void> {
    await host.focus();
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Tab');
    await expect(host).toBeFocused();
}

test.describe('TuiHintDescribe', () => {
    test('describes host before show delay elapses (fake timers)', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.HintDescribe}/API`, {date: null});
        const input = new TuiDocumentationPagePO(page).demo.locator('input');

        await page.clock.install();
        await focusWithKeyboard(page, input);
        // let zoneless change detection run, but stay far below show delay
        await page.clock.runFor(100);

        await expect(page.locator('tui-hint')).toBeHidden();
        await expect(input).toHaveAccessibleDescription(HINT_TEXT);
    });

    test('describes host after the hint pops up (fake timers)', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.HintDescribe}/API`, {date: null});
        const input = new TuiDocumentationPagePO(page).demo.locator('input');

        await page.clock.install();
        await focusWithKeyboard(page, input);
        await page.clock.runFor(1500);

        await expect(page.locator('tui-hint')).toBeVisible();
        await expect(input).toHaveAccessibleDescription(HINT_TEXT);
    });

    test('describes host before Tab key is released', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.HintDescribe}/API`, {date: null});
        const input = new TuiDocumentationPagePO(page).demo.locator('input');

        await page.clock.install();
        await input.focus();
        await page.keyboard.press('Shift+Tab');
        // screen readers announce focused element right upon keydown, real keyup comes noticeably later
        await page.keyboard.down('Tab');
        await expect(input).toBeFocused();
        await page.clock.runFor(100);

        await expect(input).toHaveAccessibleDescription(HINT_TEXT);

        await page.keyboard.up('Tab');
    });

    test('does not show hint upon non-keyboard focus after unrelated key press', async ({
        page,
    }) => {
        await tuiGoto(page, `${DemoRoute.HintDescribe}/API`, {date: null});
        const input = new TuiDocumentationPagePO(page).demo.locator('input');

        await page.clock.install();
        await page.keyboard.press('Shift');
        await input.focus();
        await page.clock.runFor(1500);

        await expect(page.locator('tui-hint')).toHaveCount(0);
        await expect(input).not.toHaveAttribute('aria-describedby');
    });

    test('removes hint and description if focus leaves before show delay', async ({
        page,
    }) => {
        await tuiGoto(page, `${DemoRoute.HintDescribe}/API`, {date: null});
        const input = new TuiDocumentationPagePO(page).demo.locator('input');

        await page.clock.install();
        await focusWithKeyboard(page, input);
        await page.clock.runFor(100);
        await page.keyboard.press('Tab');
        await expect(input).not.toBeFocused();
        await page.clock.runFor(1500);

        await expect(page.locator('tui-hint')).toHaveCount(0);
        await expect(input).not.toHaveAttribute('aria-describedby');
    });

    test('Chromium accessibility tree exposes description to screen readers', async ({
        page,
        browserName,
    }) => {
        test.skip(browserName !== 'chromium', 'CDP is available only in Chromium');

        await tuiGoto(page, `${DemoRoute.HintDescribe}/API`);
        const input = new TuiDocumentationPagePO(page).demo.locator('input');

        await focusWithKeyboard(page, input);

        const cdp = await page.context().newCDPSession(page);
        const getDescription = async (): Promise<unknown> => {
            const {result} = await cdp.send('Runtime.evaluate', {
                expression: 'document.activeElement',
            });

            const {nodes} = await cdp.send('Accessibility.getPartialAXTree', {
                objectId: result.objectId,
                fetchRelatives: false,
            });

            return nodes.at(0)?.description?.value;
        };

        await expect.poll(getDescription).toBe(HINT_TEXT);
    });
});
