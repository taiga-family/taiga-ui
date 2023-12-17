import {TuiDocumentationPagePO, tuiGoto, TuiInputPhonePO} from '@demo-playwright/utils';
import {expect, Locator, test} from '@playwright/test';

const {beforeEach, describe} = test;

describe(`InputPhone`, () => {
    describe(`API page`, () => {
        let example: Locator;
        let inputPhone: TuiInputPhonePO;

        beforeEach(({page}) => {
            example = new TuiDocumentationPagePO(page).apiPageExample;
            inputPhone = new TuiInputPhonePO(example.locator(`tui-input-phone`));
        });

        test(`Don't duplicate Code 52 When Inputting Digit '2' After Clearing`, async ({
            page,
        }) => {
            await tuiGoto(
                page,
                `components/input-phone/API?countryCode=%2B52&tuiTextfieldCleaner=true`,
            );

            await inputPhone.textfield.fill(`52`);
            await expect(inputPhone.textfield).toHaveValue(`+52 (52`);

            await inputPhone.cleaner.click();
            await expect(inputPhone.textfield).toHaveValue(`+52 `);

            await inputPhone.textfield.fill(`52`);
            await expect(inputPhone.textfield).toHaveValue(`+52 (52`);
        });

        test(`Remove country prefix on blur if textfield does not contains any other symbols`, async ({
            page,
        }) => {
            await tuiGoto(
                page,
                `components/input-phone/API?countryCode=%2B1&tuiTextfieldCleaner=true`,
            );

            await inputPhone.textfield.focus();
            await expect(inputPhone.textfield).toHaveValue(`+1 `);

            await inputPhone.textfield.blur();
            await expect(inputPhone.textfield).toHaveValue(``);

            await inputPhone.textfield.pressSequentially(`2125552368`);
            await expect(inputPhone.textfield).toHaveValue(`+1 (212) 555-23-68`);
            await inputPhone.textfield.blur();
            await expect(inputPhone.textfield).toHaveValue(`+1 (212) 555-23-68`);

            await inputPhone.textfield.focus();
            await inputPhone.cleaner.click();
            await expect(inputPhone.textfield).toHaveValue(`+1 `);
            await inputPhone.textfield.blur();
            await expect(inputPhone.textfield).toHaveValue(``);
        });

        describe(`Angular form control is empty is textfield's value is just country code`, () => {
            beforeEach(async ({page}) => {
                await tuiGoto(
                    page,
                    `components/input-phone/API?countryCode=%2B1&tuiTextfieldCleaner=true&sandboxExpanded=true`,
                );
            });

            test(`Empty textfield => focus => textfield value is country code & form control is empty`, async () => {
                await inputPhone.textfield.focus();
                await expect(inputPhone.textfield).toHaveValue(`+1 `);
                await expect(example).toContainText(`"testValue": ""`);
            });

            test(`Click on cleaner => => textfield value is country code & form control is empty`, async () => {
                await inputPhone.textfield.pressSequentially(`2345`);
                await expect(inputPhone.textfield).toHaveValue(`+1 (234) 5`);
                await expect(example).toContainText(`"testValue": "+12345"`);

                await inputPhone.cleaner.click();
                await expect(inputPhone.textfield).toHaveValue(`+1 `);
                await expect(example).toContainText(`"testValue": ""`);
            });
        });
    });
});
