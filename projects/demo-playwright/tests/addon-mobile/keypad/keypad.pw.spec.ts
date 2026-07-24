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

        await keypad.getByRole('button', {name: '1', exact: true}).click();
        await keypad.getByRole('button', {name: '4', exact: true}).click();
        await keypad.getByRole('button', {name: '3', exact: true}).click();

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

    test('long-press backspace clears the whole value (consumer-wired longtap)', async ({
        page,
    }) => {
        const input = page.locator('input.display');
        const keypad = page.locator('tui-keypad.custom');

        await keypad.getByRole('button', {name: '1', exact: true}).click();
        await keypad.getByRole('button', {name: '4', exact: true}).click();
        await expect(input).toHaveValue('14');

        // longtap is a touch-timer gesture owned by @taiga-ui/event-plugins; here we assert
        // the example wires it (the regression was a missing (longtap) binding), not the plugin
        await keypad
            .locator('[aria-label="Backspace"]')
            .dispatchEvent('longtap', {detail: {clientX: 0, clientY: 0}});

        await expect(input).toHaveValue('');
    });

    test('keypad buttons expose accessible names (icons labelled, digits use text)', async ({
        page,
    }) => {
        const keypad = page.locator('tui-keypad.custom');

        await expect(keypad.locator('[aria-label="Backspace"]')).toHaveAttribute(
            'aria-label',
            /.+/,
        );

        await expect(keypad.getByRole('button', {name: '1', exact: true})).toHaveText(
            '1',
        );
        await expect(
            keypad.getByRole('button', {name: '1', exact: true}),
        ).not.toHaveAttribute('aria-label', /.+/);
    });
});
