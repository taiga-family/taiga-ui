import {expect} from '@playwright/test';
import {Locator} from 'playwright';
import {Page} from 'playwright-core';

import {tuiPlaywrightNoFailOnSnapshotDiff} from '../errors/no-fail-on-snapshot-diff';

const demo = `#demo-content`;
const toggleExclusions: Record<string, readonly number[]> = {
    'components/button': [1],
    'components/group': [0], // [adaptive]
    'components/toggle': [2, 4], // [showLoader], [focusable]
};

export async function tuiPlaywrightTapEveryToggle(
    path: string,
    page: Page,
    toggles: Locator[],
): Promise<void> {
    for (const [index, toggle] of toggles.entries()) {
        if (toggleExclusions[path]?.includes(index)) {
            continue;
        }

        await toggle.click();

        await tuiPlaywrightNoFailOnSnapshotDiff(async () =>
            expect(await page.locator(demo).screenshot()).toMatchSnapshot(),
        );

        await toggle.click(); // note: reset by default
    }
}
