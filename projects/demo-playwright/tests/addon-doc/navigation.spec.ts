import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`Navigation`, () => {
    test.use({viewport: {width: 1080, height: 522}});
    test(`getting started / [light mode]`, async ({page}) => {
        await tuiGoto(page, `/getting-started`, {
            hideHeader: false,
            hideLanguageSwitcher: true,
            hideVersionManager: true,
        });
        const example = page.locator(`tui-doc-navigation`);

        await example.isVisible();
        await expect(example).toHaveScreenshot(`01-tui-doc-navigation-light-mode.png`);
    });

    test(`getting started / [night mode]`, async ({page}) => {
        await tuiGoto(page, `/getting-started`, {
            hideHeader: false,
            enableNightMode: true,
            hideLanguageSwitcher: true,
            hideVersionManager: true,
        });
        const example = page.locator(`tui-doc-navigation`);

        await example.isVisible();
        await expect(example).toHaveScreenshot(`02-tui-doc-navigation-night-mode.png`);
    });

    test.describe(`anchor links navigation works`, () => {
        test(`scroll to \`tui-doc-example\``, async ({page}) => {
            await tuiGoto(page, `/components/input#table`);
            await expect(page.locator(`#table`)).toBeInViewport();
        });

        test(`scroll to \`tui-doc-code\``, async ({page}) => {
            await tuiGoto(page, `/getting-started#icons`);
            await expect(page.locator(`#icons`)).toBeVisible();
            await expect(page.locator(`#icons`)).toBeInViewport();
        });

        test(`scroll after click on link with anchor`, async ({page}) => {
            await tuiGoto(page, `/getting-started`);
            const example = page.locator(`a[fragment="root"]`);

            await expect(example).toBeVisible();
            await example.click();
            await expect(page.locator(`#root`)).toBeInViewport();
        });
    });
});
