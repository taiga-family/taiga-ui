/* eslint-disable playwright/no-conditional-in-test */
import {TuiDocumentationApiPagePO, tuiGoto, tuiMockImages} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Deep / Toggle', () => {
    const deepPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!);

    deepPaths.forEach((path) =>
        test(`${path}`, async ({page, browserName}) => {
            await tuiMockImages(page);
            await tuiGoto(page, `${path}/API`);

            const api = new TuiDocumentationApiPagePO(page);
            const rows = await api.getRows();

            test.setTimeout(30_000 * rows.length);

            await api.waitTuiIcons();

            for (const [rowIndex, row] of rows.entries()) {
                const toggle = await api.getToggle(row);
                const name = await api.getNameProperty(row);

                if (!toggle) {
                    continue;
                }

                await api.focusOnBody();
                await toggle.scrollIntoViewIfNeeded();

                await expect(toggle).toBeVisible();

                await toggle.click();
                await api.hideNotifications();
                await api.waitStableState();

                // note: hello Safari
                if (browserName === 'webkit') {
                    await page.waitForTimeout(300);
                }

                await expect
                    .soft(api.apiPageExample)
                    .toHaveScreenshot(`deep-${path}-${name}-row-${rowIndex}-toggled.png`);

                await toggle.click();

                // note: hello Safari
                if (browserName === 'webkit') {
                    await page.waitForTimeout(200);
                }
            }
        }),
    );
});
