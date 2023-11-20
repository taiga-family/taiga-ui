import {tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`TuiError`, () => {
    test(`No extra space between content`, async ({page}) => {
        await tuiGoto(page, `components/error#base`);
        const example = page.locator(
            `tui-doc-example[heading="Basic"] [automation-id="tui-doc-example"]`,
        );

        await example.locator(`[automation-id="tui-toggle__checkbox"]`).click();

        await example
            .locator(`[automation-id="tui-error__text"]`)
            .waitFor({state: `visible`});

        await expect(example).toHaveScreenshot(`01-tui-error.png`);
    });
});
