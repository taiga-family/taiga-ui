import {DemoRoute} from '@demo/routes';
import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Navigation', () => {
    test.use({viewport: {width: 1080, height: 600}});

    test('getting started / [light mode]', async ({page, browserName}) => {
        test.skip(
            browserName !== 'chromium',
            // TODO: why does this test keep failing in safari
            'This feature is only relevant in Chrome',
        );

        await tuiGoto(page, DemoRoute.GettingStarted, {
            hideHeader: false,
            hideVersionManager: true,
        });
        const sideNavigation = page.locator('tui-doc-navigation');

        await expect(sideNavigation).toBeVisible();
        await expect(sideNavigation).toHaveScreenshot(
            '01-tui-doc-navigation-light-mode.png',
        );
    });

    test('getting started / [dark mode]', async ({page, browserName}) => {
        test.skip(
            browserName !== 'chromium',
            // TODO: why does this test keep failing in safari
            'This feature is only relevant in Chrome',
        );

        await tuiGoto(page, DemoRoute.GettingStarted, {
            hideHeader: false,
            enableNightMode: true,
            hideVersionManager: true,
        });
        const sideNavigation = page.locator('tui-doc-navigation');

        await expect(sideNavigation).toBeVisible();

        await expect(sideNavigation).toHaveScreenshot(
            '02-tui-doc-navigation-dark-mode.png',
        );
    });

    test.describe('anchor links navigation works', () => {
        // TODO: migrate
        test.skip('scroll to "tui-doc-example"', async ({page, browserName}) => {
            // TODO: why does this test keep failing in safari

            test.skip(
                browserName !== 'chromium',
                'This feature is only relevant in Chrome',
            );

            await tuiGoto(page, `${DemoRoute.Input}#table`);

            await expect(page.locator('#table')).toBeInViewport();
        });

        test('scroll after click on link with anchor', async ({page, browserName}) => {
            await page.setViewportSize({width: 1300, height: 500});

            test.skip(
                browserName !== 'chromium',
                // TODO: why does this test keep failing in safari
                'This feature is only relevant in Chrome',
            );

            const isProprietary = process.env['PROPRIETARY'] === 'true';
            // eslint-disable-next-line playwright/no-conditional-in-test
            const anchor = `a[href$="${isProprietary ? encodeURIComponent('Основной-компонент') : 'root-component'}"]`;

            await tuiGoto(
                page,
                `${DemoRoute.GettingStarted}/${isProprietary ? 'Ручное' : 'Manual'}`,
            );

            await page.locator(`tui-doc-toc ${anchor}`).click();
            await expect(page.locator(`tui-doc-example ${anchor}`)).toBeInViewport();
        });
    });
});
