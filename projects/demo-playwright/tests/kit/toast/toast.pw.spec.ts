import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

test.describe('Toast', () => {
    test.use(TUI_PLAYWRIGHT_MOBILE);

    test('should show toast in mobile resolution', async ({page}) => {
        await tuiGoto(page, DemoRoute.Toast);

        const documentationPage = new TuiDocumentationPagePO(page);
        const example = documentationPage.getExample('#service');

        await example.locator('button:has-text("String")').click();

        const toast = page.locator('tui-toast');

        await expect(toast).toBeVisible();

        await page.waitForTimeout(500);

        await expect(page).toHaveScreenshot('toast-mobile.png');
    });

    for (const [block, edge] of [
        ['start', 'top'],
        ['end', 'bottom'],
    ] as const) {
        test(`should cap the ${edge} offset at 5.25rem including the safe area`, async ({
            browserName,
            page,
        }) => {
            test.skip(
                browserName !== 'chromium',
                'Safe area emulation requires Chromium',
            );

            await tuiGoto(page, `${DemoRoute.Toast}/API?block=${block}&autoClose=0`);
            await page.getByRole('button', {name: 'Show toast', exact: true}).click();

            const toast = page.locator('tui-toast [tuiToast]');
            const cdp = await page.context().newCDPSession(page);

            for (const [inset, offset] of [
                [0, 20],
                [44, 64],
                [80, 84],
                [100, 84],
            ]) {
                await cdp.send('Emulation.setSafeAreaInsetsOverride', {
                    insets: {[edge]: inset},
                });

                await expect
                    .poll(
                        async () =>
                            toast.evaluate((element, viewportEdge) => {
                                const {top, bottom} = element.getBoundingClientRect();

                                return viewportEdge === 'top'
                                    ? top
                                    : globalThis.innerHeight - bottom;
                            }, edge),
                        {
                            message: `Toast ${edge} offset with a ${inset}px safe area inset`,
                        },
                    )
                    .toBe(offset);
            }
        });
    }
});
