import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe(`Checkbox`, () => {
    test.describe(`API`, () => {
        [`m`, `l`].forEach(size => {
            test(`size=${size}`, async ({page}) => {
                await tuiGoto(page, `components/checkbox/API?size=${size}`);
                const {apiPageExample} = new TuiDocumentationPagePO(page);

                await expect(apiPageExample).toHaveScreenshot(
                    `checkbox-size-${size}.png`,
                );
            });
        });
    });
});
