import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Breakpoint service', () => {
    [
        // smartphone (mobile)
        {width: 320, height: 480},
        {width: 320, height: 568},
        {width: 767, height: 900},
        // tablet (desktopSmall)
        {width: 768, height: 900},
        {width: 1023, height: 900},
        // desktop (desktopLarge)
        {width: 1024, height: 900},
        {width: 1279, height: 900},
        {width: 1280, height: 900},
        {width: 1281, height: 900},
    ].forEach(({width, height}) => {
        test(`${width}x${height}`, async ({page}) => {
            await page.setViewportSize({width, height});
            await tuiGoto(page, DemoRoute.BreakpointService);
            const example = new TuiDocumentationPagePO(page).getExample('#basic');

            await expect(example).toHaveScreenshot(`breakpoint_${width}x${height}.png`);
        });
    });
});
