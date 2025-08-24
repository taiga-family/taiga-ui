import {DemoRoute} from '@demo/routes';
import {PerformanceCollector, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {TUI_PLAYWRIGHT_MOBILE} from '../../../playwright.options';

test.describe('Select', () => {
    test.beforeEach(async ({page}, testInfo) => {
        await PerformanceCollector.startTestCollection(
            page,
            testInfo.titlePath.join(' › '),
            testInfo.file,
        );
    });

    test.afterEach(async ({page}, testInfo) => {
        await PerformanceCollector.stopTestCollection(
            page,
            testInfo.titlePath.join(' › '),
        );
    });

    test.use(TUI_PLAYWRIGHT_MOBILE);

    test('native select value', async ({page}) => {
        await tuiGoto(page, DemoRoute.SelectLegacy);
        const dropdown = page.locator('#native-select select').first();

        await dropdown.selectOption({index: 1});

        await expect
            .soft(page.locator('#native-select'))
            .toHaveScreenshot('01-native-select-value.png');
    });
});
