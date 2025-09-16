/* eslint-disable playwright/no-conditional-in-test */
import {DemoRoute} from '@demo/routes';
import {TuiDocumentationApiPagePO, tuiGoto, tuiMockImages} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

const LEGACY: string[] = [DemoRoute.Island, DemoRoute.Sheet, DemoRoute.Tag];

test.describe('Deep / Toggle', () => {
    const deepPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!)
        // TODO migrate
        .filter((path: string) => !LEGACY.includes(path));

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

                const example = api.apiPageExample;
                const makeName = (dir: string): string =>
                    `deep-${path}-${name}-row-${rowIndex}-toggled.${dir}.png`;

                await expect.soft(example).toHaveScreenshot(makeName('ltr'));
                await example.evaluate((node) => node.setAttribute('dir', 'rtl'));
                await expect.soft(example).toHaveScreenshot(makeName('rtl'));

                await toggle.click();

                // note: hello Safari
                if (browserName === 'webkit') {
                    await page.waitForTimeout(200);
                }
            }
        }),
    );
});
