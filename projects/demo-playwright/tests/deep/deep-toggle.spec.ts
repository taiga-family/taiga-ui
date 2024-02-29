import {TuiDocumentationApiPagePO, tuiGoto, tuiMockImages} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Deep / Toggle', () => {
    const deepPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!);

    deepPaths.forEach(path =>
        test(path, async ({page}) => {
            await tuiMockImages(page);
            await tuiGoto(page, `${path}/API`);

            const api = new TuiDocumentationApiPagePO(page);
            const rows = await api.getRows();

            test.setTimeout(30_000 * rows.length);

            for (const row of rows) {
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
                await api.networkidle();

                await expect(api.apiPageExample).toHaveScreenshot(
                    `deep-${path}__${name}-toggled.png`,
                    {threshold: 0.02},
                );

                await toggle.click();
            }
        }),
    );
});
