import {expect, test} from '@playwright/test';
import {tuiGoto} from '@demo-playwright/utils';
import {TUI_PLAYWRIGHT_MOBILE_USER_AGENT} from '../../../playwright.options';

test.describe('DropdownMobile', () => {
    test.use({
        viewport: {width: 390, height: 844},
        userAgent: TUI_PLAYWRIGHT_MOBILE_USER_AGENT,
    });

    test('does not close sheet dropdown when input inside is blurred', async ({page}) => {
        await tuiGoto(page, 'directives/dropdown#mobile');
        await page.getByRole('button', {name: 'Open dropdown with input'}).click();

        const dropdown = page.locator('tui-dropdown-mobile');
        const input = dropdown.getByPlaceholder('Type something and tap Done');

        await expect(dropdown.getByText('Input inside dropdown')).toBeVisible();
        await expect(input).toBeVisible();
        await input.focus();
        await expect(input).toBeFocused();
        await input.evaluate((element: HTMLInputElement) => element.blur());
        await expect(dropdown.getByText('Input inside dropdown')).toBeVisible();
        await expect(input).toBeVisible();
        await dropdown.locator('.t-filler').click();
        await expect(dropdown).toHaveCount(0);
    });
});
