import {TuiDocumentationApiPagePO, tuiGoto, tuiMockImages} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Deep / Toggle', () => {
    const deepPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!);

    deepPaths.forEach((path) =>
        test(`${path}`, async ({page}) => {
            await tuiMockImages(page);
            await tuiGoto(page, `${path}/API`);

            const api = new TuiDocumentationApiPagePO(page);
            const rows = await api.getRows();

            test.setTimeout(30_000 * rows.length);

            await api.waitTuiIcons();

            for (const [rowIndex, row] of rows.entries()) {
                const toggle = await api.getToggle(row);
                const name = await api.getNameProperty(row);

                // eslint-disable-next-line playwright/no-conditional-in-test
                if (!toggle) {
                    continue;
                }

                await api.focusOnBody();
                await toggle.scrollIntoViewIfNeeded();

                await expect(toggle).toBeVisible();

                await toggle.click();
                await api.waitTuiIcons();
                await api.hideNotifications();
                await api.waitStableState();
                await page.waitForTimeout(100);

                await expect(api.apiPageExample).toHaveScreenshot(
                    `deep-${path}__${name}-row-${rowIndex}-toggled.png`,
                );

                await toggle.click();
                await api.waitTuiIcons();
            }
        }),
    );
});
