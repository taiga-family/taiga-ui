import {DemoRoute} from '@demo/routes';
import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Viewport', () => {
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

    Array.from(
        [
            {width: 767, height: 900},
            {width: 768, height: 900},
            {width: 1023, height: 900},
            {width: 1024, height: 900},
            {width: 1279, height: 900},
            {width: 1280, height: 900},
        ].entries(),
    ).forEach(([index, {width, height}]) => {
        test(`${width}x${height}`, async ({page}) => {
            await page.setViewportSize({width, height});
            await tuiGoto(page, DemoRoute.Breakpoints, {hideHeader: true});
            const example = new TuiDocumentationPagePO(page).getExample('#usage');

            await expect
                .soft(example)
                .toHaveScreenshot(
                    `01-0${index + 1}-breakpoints-${width}-${height}-viewport.png`,
                );
        });
    });
});
