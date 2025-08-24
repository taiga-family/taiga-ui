import {PerformanceCollector, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Landing', () => {
    test.use({
        viewport: {width: 360, height: 740},
    });

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

    test('take snapshot', async ({page}) => {
        await tuiGoto(page, '/', {
            hideHeader: false,
        });

        await expect.soft(page).toHaveScreenshot('landing-360-740.png');
    });
});
