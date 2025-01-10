/* eslint-disable playwright/no-conditional-in-test */
import {DemoRoute} from '@demo/routes';
import {TuiDocumentationApiPagePO, tuiGoto, tuiMockImages} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

const DEEP_SELECT_FLAKY = new Set<string>([DemoRoute.Avatar]);

test.describe('Deep / Select', () => {
    const deepPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!).filter(
        (path: string) => !DEEP_SELECT_FLAKY.has(path),
    );

    deepPaths.forEach((path) =>
        test(`${path}`, async ({page}) => {
            await tuiMockImages(page);
            await tuiGoto(page, `${path}/API`);

            const api = new TuiDocumentationApiPagePO(page);
            const rows = await api.getRows();

            test.setTimeout(30_000 * rows.length);

            await api.waitTuiIcons();

            for (const [rowIndex, row] of rows.entries()) {
                const select = await api.getSelect(row);
                const name = await api.getNameProperty(row);

                if (!select) {
                    continue;
                }

                await api.focusOnBody();
                await api.waitStableState();
                await select.scrollIntoViewIfNeeded();

                await expect(select).toBeVisible();

                await select.click();
                await page.waitForTimeout(200);

                const options = await api.getOptions();

                for (const [index, option] of options.entries()) {
                    await option.focus();
                    await page.keyboard.down('Enter');
                    await api.focusOnBody();
                    await api.hideNotifications();
                    await api.waitStableState();

                    // e2e flaky: wait more time for charts graphics
                    await page.waitForTimeout(path.includes('charts') ? 500 : 100);

                    await expect(api.apiPageExample).toHaveScreenshot(
                        `deep-${path}-${name}-row—${rowIndex}-select-option-${index}.png`,
                    );

                    await select.click();

                    // e2e flaky: wait more time for charts graphics
                    await page.waitForTimeout(path.includes('charts') ? 500 : 100);
                }

                const cleaner = await api.getCleaner(select);

                if (cleaner) {
                    await cleaner.click();
                } else {
                    await options[0]?.focus();
                    await page.keyboard.down('Enter');
                }

                await api.waitStableState();
                await api.focusOnBody();
                await page.waitForTimeout(200);
            }
        }),
    );
});
