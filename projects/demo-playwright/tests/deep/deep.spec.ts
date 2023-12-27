import {tuiGoto, tuiMockImages} from '@demo-playwright/utils';
import {expect, Locator, test} from '@playwright/test';

test.describe('Deep', () => {
    const deepPaths: string[] = [
        /* CORE */
        'components/button',
        'components/calendar',
        'components/group',
        'components/link',
        'components/notification',
        /* KIT */
        'components/avatar',
        'components/badge',
        'components/badged-content',
        'components/calendar-month',
        'components/filter',
        'components/island',
        'icons/marker-icon',
        'navigation/stepper',
        'components/toggle',
    ];

    deepPaths.forEach(path => {
        test(path, async ({page}) => {
            await tuiMockImages(page);
            await tuiGoto(page, `${path}/API?sandboxWidth=320`);

            const rows = await page.locator('.t-table .t-row:not(.t-row_header)').all();

            for (const row of rows) {
                const select = ((await row.locator('.t-cell_value tui-select').all()) ??
                    [])?.[0];
                const toggle = ((await row.locator('.t-cell_value tui-toggles').all()) ??
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

                        await expect(page.locator('#demo-content')).toHaveScreenshot(
                            `deep-${path}__${name}-select-option-${index}.png`,
                        );

                        await select.click();
                    }

                    const cleaner = ((await select
                        .locator('[automation-id="tui-primitive-textfield__cleaner"]')
                        .all()) ?? [])?.[0];

                    if (cleaner) {
                        await cleaner.click();
                    } else {
                        await options[defaultOptionIndex]?.click();
                    }
                }

                if (toggle) {
                    await toggle.scrollIntoViewIfNeeded();
                    await toggle.click();
                    await expect(page.locator('#demo-content')).toHaveScreenshot(
                        `deep-${path}__${name}-toggled.png`,
                    );
                    await toggle.click();
                }
            }
        });
    });
});

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
