import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`Breakpoint service`, () => {
    for (const {width, height} of [
        {width: 768, height: 900},
        {width: 1024, height: 900},
        {width: 1280, height: 900},
    ]) {
        test(`${width}x${height}`, async ({page}) => {
            await page.setViewportSize({width, height});
            await tuiGoto(page, `/services/breakpoint-service`);
            const example = new TuiDocumentationPagePO(page).getExample(`#basic`);

            await expect(example).toHaveScreenshot(`breakpoint_${width}x${height}.png`);
        });
    }
});
