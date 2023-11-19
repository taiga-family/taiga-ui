import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`Button`, () => {
    test(`tuiMode=OnDark + appearance=icon + hovered state`, async ({page}) => {
        await tuiGoto(
            page,
            `/components/button/API?tuiMode=onDark&appearance=icon&icon=tuiIconEyeOff`,
        );
        const {apiPageExample} = new TuiDocumentationPagePO(page);

        await apiPageExample.waitFor({state: `visible`});
        const button = apiPageExample.locator(`[tuiButton]`);

        await button.hover();

        await expect(button).toHaveScreenshot(
            `01-[tuiMode=onDark]-[appearance=icon]-[data-state=hovered].png`,
        );
    });
});
