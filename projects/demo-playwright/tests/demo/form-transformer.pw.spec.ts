import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Form transformer', () => {
    test('toggles between form and transformed state', async ({page}) => {
        await page.emulateMedia({reducedMotion: 'reduce'});
        await tuiGoto(page, '/layout/form');

        const example = page.locator('tui-doc-example').filter({hasText: 'Transformer'});
        const action = example.locator('.action');
        const content = example.locator('.form__content');
        const status = example.locator('.status');

        await expect(action).toHaveText('Sign in');
        await expect(content).toHaveAttribute('aria-hidden', 'false');

        await action.click();

        await expect(action).toHaveText('Sign out');
        await expect(content).toHaveAttribute('aria-hidden', 'true');
        await expect(status).toHaveText('Signed in as taiga@ui.dev');

        await action.click();

        await expect(action).toHaveText('Sign in');
        await expect(content).toHaveAttribute('aria-hidden', 'false');
        await expect(status).toHaveText('Signed out');
    });
});
