import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

test.describe('Keypad', () => {
    test.use(TUI_PLAYWRIGHT_MOBILE);

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, DemoRoute.Keypad);
    });

    test('the on-screen keypad drives the value display', async ({page}) => {
        // The "Custom keys" example shows the keypad-driven value in a <div>
        const display = page.locator('.display');
        const keypad = page.locator('tui-keypad.custom');

        await keypad.getByRole('button', {name: '1', exact: true}).click();
        await keypad.getByRole('button', {name: '4', exact: true}).click();
        await keypad.getByRole('button', {name: '3', exact: true}).click();

        await expect(display).toHaveText('143');
    });

    test('long-press backspace clears the whole value (consumer-wired longtap)', async ({
        page,
    }) => {
        const display = page.locator('.display');
        const keypad = page.locator('tui-keypad.custom');

        await keypad.getByRole('button', {name: '1', exact: true}).click();
        await keypad.getByRole('button', {name: '4', exact: true}).click();
        await expect(display).toHaveText('14');

        // longtap is a touch-timer gesture owned by @taiga-ui/event-plugins; here we assert
        // the example wires it (the regression was a missing (longtap) binding), not the plugin
        await keypad
            .locator('[aria-label="Backspace"]')
            .dispatchEvent('longtap', {detail: {clientX: 0, clientY: 0}});

        await expect(display).toHaveText('—');
    });

    test('keypad buttons expose accessible names (icons labelled, digits use text)', async ({
        page,
    }) => {
        const keypad = page.locator('tui-keypad.custom');

        // Backspace is only rendered once the field has a value
        await keypad.getByRole('button', {name: '1', exact: true}).click();

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
