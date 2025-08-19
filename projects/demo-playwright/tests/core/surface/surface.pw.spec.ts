import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Surface', () => {
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

    test('Layers', async ({page, browserName}) => {
        test.skip(
            browserName !== 'chromium',
            // TODO: why does this test keep failing in safari
            'This feature is only relevant in Chrome',
        );

        await tuiGoto(page, `${DemoRoute.Surface}/Layers`);

        const example = new TuiDocumentationPagePO(page).getExample('#layers');

        await expect.soft(example).toHaveScreenshot('01-layers.png');
    });
});
