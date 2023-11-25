import {TuiDocumentationPagePO, tuiGoto, TuiInputPhonePO} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

const {describe} = test;

describe(`InputPhone`, () => {
    test(`Don't duplicate Code 52 When Inputting Digit '2' After Clearing`, async ({
        page,
    }) => {
        await tuiGoto(
            page,
            `components/input-phone/API?countryCode=%2B52&tuiTextfieldCleaner=true`,
        );

        const {apiPageExample} = new TuiDocumentationPagePO(page);
        const input = new TuiInputPhonePO(apiPageExample.locator(`tui-input-phone`));

        await input.textfield.fill(`52`);
        await expect(input.textfield).toHaveValue(`+52 (52`);

        await input.cleaner.click();
        await expect(input.textfield).toHaveValue(`+52 `);

        await input.textfield.fill(`52`);
        await expect(input.textfield).toHaveValue(`+52 (52`);
    });
});
