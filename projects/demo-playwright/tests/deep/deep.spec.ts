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

            const controls = await page.locator('.t-table .t-cell_value').all();

            for (const [index, control] of controls.entries()) {
                const selects = (await control.locator('tui-select').all()) ?? [];

                for (const [selectIndex, select] of selects.entries()) {
                    await select.click();

                    const options = await page.locator('[tuiOption]').all();
                    const defaultOptionIndex =
                        await getDefaultOptionOnApiControl(options);

                    for (const [optionIndex, option] of options.entries()) {
                        await option.focus();
                        await page.keyboard.press('Enter');
                        await expect(page.locator('#demo-content')).toHaveScreenshot(
                            `deep-${path}-${index}-select-${selectIndex}-option-${optionIndex}.png`,
                        );
                        await select.click();
                    }

                    if (defaultOptionIndex !== null) {
                        await page.locator('[tuiOption]').nth(defaultOptionIndex).click();
                    } else {
                        await select
                            .locator('[automation-id=tui-primitive-textfield__cleaner]')
                            .click();
                        await select.click();
                    }
                }

                const toggles = (await control.locator('tui-toggle').all()) ?? [];

                for (const [toggleIndex, toggle] of toggles.entries()) {
                    await toggle.click();
                    await expect(page.locator('#demo-content')).toHaveScreenshot(
                        `deep-${path}-${index}-toggles-${toggleIndex}.png`,
                    );
                    await toggle.click();
                }
            }
        });
    });
});

async function getDefaultOptionOnApiControl(options: Locator[]): Promise<number | null> {
    for (const [index, option] of options.entries()) {
        const hasMark = await option
            .locator('[automation-id=tui-select-option__checkmark]')
            .all();

        if (hasMark.length) {
            return index;
        }
    }

    return null;
}
