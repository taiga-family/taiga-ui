import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Navigation', () => {
    test.use({viewport: {width: 1080, height: 600}});
    test('getting started / [light mode]', async ({page}) => {
        await tuiGoto(page, '/getting-started', {
            hideHeader: false,
            hideLanguageSwitcher: true,
            hideVersionManager: true,
        });
        const sideNavigation = page.locator('tui-doc-navigation');

        await sideNavigation.isVisible();
        await expect(sideNavigation).toHaveScreenshot(
            '01-tui-doc-navigation-light-mode.png',
        );
    });

    test('getting started / [dark mode]', async ({page}) => {
        await tuiGoto(page, '/getting-started', {
            hideHeader: false,
            enableNightMode: true,
            hideLanguageSwitcher: true,
            hideVersionManager: true,
        });
        const sideNavigation = page.locator('tui-doc-navigation');

        await sideNavigation.isVisible();
        await expect(sideNavigation).toHaveScreenshot(
            '02-tui-doc-navigation-dark-mode.png',
        );
    });

    test.describe('anchor links navigation works', () => {
        test('scroll to "tui-doc-example"', async ({page}) => {
            await tuiGoto(page, '/components/input#table');
            await expect(page.locator('#table')).toBeInViewport();
        });

        test('scroll to "tui-doc-code"', async ({page}) => {
            await tuiGoto(page, '/getting-started#icons');
            await expect(page.locator('#icons')).toBeVisible();
            await expect(page.locator('#icons')).toBeInViewport();
        });

        test('scroll after click on link with anchor', async ({page}) => {
            await tuiGoto(page, '/getting-started');
            await page.locator('a[fragment="root"]').click();
            await expect(page.locator('#root')).toBeInViewport();
        });
    });
});
