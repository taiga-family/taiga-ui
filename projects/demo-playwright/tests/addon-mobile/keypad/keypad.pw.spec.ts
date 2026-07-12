import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

test.describe('Keypad', () => {
    test.use(TUI_PLAYWRIGHT_MOBILE);

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, DemoRoute.Keypad);
    });

    test('the on-screen keypad drives the field value', async ({page}) => {
        // The "Custom keys" example renders a `tuiKeypadInput` display next to the keypad
        const input = page.locator('input.display');
        const keypad = page.locator('tui-keypad.custom');

        await keypad.locator('[data-key="1"]').click();
        await keypad.locator('[data-key="4"]').click();
        await keypad.locator('[data-key="3"]').click();

        await expect(input).toHaveValue('143');
    });

    test('does not trap keyboard focus and blocks hardware typing (WCAG 2.1.2)', async ({
        page,
    }) => {
        const input = page.locator('input.display');

        await input.focus();
        await expect(input).toBeFocused();

        // Hardware typing is suppressed — the on-screen keypad is the single source of truth
        await input.press('9');
        await expect(input).toHaveValue('');

        // Tab must move focus away from the field: no keyboard trap
        await input.press('Tab');
        await expect(input).not.toBeFocused();
    });

    test('keypad buttons expose accessible names (icons labelled, digits use text)', async ({
        page,
    }) => {
        const keypad = page.locator('tui-keypad.custom');

        // icon-only key (backspace) has an aria-label
        await expect(keypad.locator('[data-key="backspace"]')).toHaveAttribute(
            'aria-label',
            /.+/,
        );

        // digit key is named by its visible text, with no redundant aria-label
        await expect(keypad.locator('[data-key="1"]')).toHaveText('1');
        await expect(keypad.locator('[data-key="1"]')).not.toHaveAttribute(
            'aria-label',
            /.+/,
        );
    });
});
