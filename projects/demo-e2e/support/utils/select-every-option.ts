import {expect} from '@playwright/test';
import {Locator} from 'playwright';
import {Page} from 'playwright-core';

import {tuiPlaywrightNoFailOnSnapshotDiff} from '../errors/no-fail-on-snapshot-diff';

const selectExclusions: Record<string, readonly number[]> = {
    'components/calendar': [4, 5], // not visible for test props: [min], [minViewedMonth]
    'components/calendar-month': [2], // not visible for test props: [min]
};

export async function tuiPlaywrightSelectEveryOption(
    path: string,
    page: Page,
    selects: Locator[],
): Promise<void> {
    for (const [selectIndex, select] of selects.entries()) {
        if (selectExclusions[path]?.includes(selectIndex)) {
            continue;
        }

        await select.click(); // note: open select

        const options = await page.locator(`[tuiOption]`).all();
        const defaultOptionIndex = await getDefaultOptionOnApiControl(options);

        for (const [, option] of options.entries()) {
            await option.click();

            await tuiPlaywrightNoFailOnSnapshotDiff(async () =>
                expect(
                    await page.locator(`#demo-content`).screenshot(),
                ).toMatchSnapshot(),
            );

            await select.click(); // note: reopen select
        }

        await resetSelectToDefaultOption(page, defaultOptionIndex, select);
    }
}

async function getDefaultOptionOnApiControl(options: Locator[]): Promise<number | null> {
    for (const [index, option] of options.entries()) {
        const hasMark = await option
            .locator(`[automation-id=tui-select-option__checkmark]`)
            .all();

        if (hasMark.length) {
            return index;
        }
    }

    return null;
}

async function resetSelectToDefaultOption(
    page: Page,
    defaultOptionIndex: number | null,
    select: Locator,
): Promise<void> {
    if (defaultOptionIndex !== null) {
        // note: return to default marked option
        await page.locator(`[tuiOption]`).nth(defaultOptionIndex).click();
    } else {
        // note: clear select if was null
        await select.locator(`[automation-id=tui-primitive-textfield__cleaner]`).click();
        await select.click();
    }
}
