import {tuiGoto, tuiMockImages} from '@demo-playwright/utils';
import {expect, Locator, Page, test} from '@playwright/test';

test.describe('Deep', () => {
    const deepPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!);

    deepPaths.forEach(path => {
        test(path, async ({page}) => {
            await tuiMockImages(page);
            await tuiGoto(page, `${path}/API`);

            const rows = await page.locator('.t-table .t-row:not(.t-row_header)').all();

            test.setTimeout(10_000 * rows.length);

            for (const row of rows) {
                const select = ((await row.locator('.t-cell_value tui-select').all()) ??
                    [])?.[0];

                const name =
                    (await row.locator('.t-property code').textContent())?.trim() ?? '';

                if (select) {
                    await select.scrollIntoViewIfNeeded();
                    await select.click();

                    const options = await page
                        .locator('[automation-id="tui-data-list-wrapper__option"]')
                        .all();
                    const defaultOptionIndex =
                        await getDefaultOptionOnApiControl(options);

                    for (const [index, option] of options.entries()) {
                        await option.click();

                        await page.evaluate(
                            async () =>
                                new Promise(resolve => {
                                    setTimeout(resolve, 500);
                                }),
                        );

                        await hideNotifications(page);

                        await expect(page.locator('#demo-content')).toHaveScreenshot(
                            `deep-${path}__${name}-select-option-${index}.png`,
                        );

                        await select.click();
                    }

                    const cleaner = ((await select
                        .locator('[automation-id="tui-primitive-textfield__cleaner"]')
                        .all()) ?? [])?.[0];

                    if (cleaner) {
                        await cleaner.click({force: true});
                    } else {
                        await options[defaultOptionIndex]?.click({force: true});
                    }

                    await page.locator('body').click({force: true});
                }

                const toggle = ((await row.locator('.t-cell_value tui-toggle').all()) ??
                    [])?.[0];

                if (toggle) {
                    await toggle.scrollIntoViewIfNeeded();
                    await toggle.click();

                    await hideNotifications(page);
                    await expect(page.locator('#demo-content')).toHaveScreenshot(
                        `deep-${path}__${name}-toggled.png`,
                    );

                    await toggle.click();
                }
            }
        });
    });
});

async function hideNotifications(page: Page): Promise<void> {
    const notifications = await page.locator('tui-alert-host > tui-notification').all();

    for (const notification of notifications) {
        await notification.evaluate(el => el.remove());
    }
}

async function getDefaultOptionOnApiControl(options: Locator[]): Promise<number> {
    for (const [index, option] of options.entries()) {
        const hasMark = await option
            .locator('[automation-id=tui-select-option__checkmark]')
            .all();

        if (hasMark.length) {
            return index;
        }
    }

    return 0;
}
