import {TuiDocumentationPagePO, tuiGoto, TuiInputCardPO} from '@demo-playwright/utils';
import {expect, Locator, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe(`InputExpire`, () => {
    let documentationPage: TuiDocumentationPagePO;
    let inputCardPage: TuiInputCardPO;
    let example: Locator;
    let cardExpiryInput: Locator;
    let entryValue: string;
    let expectedValue: string;

    beforeEach(async ({page}) => {
        await tuiGoto(page, `components/input-card/API`);

        documentationPage = new TuiDocumentationPagePO(page);
        example = documentationPage.apiPageExample;
        inputCardPage = new TuiInputCardPO(example);
        cardExpiryInput = inputCardPage.cardExpiryInput;

        await expect(cardExpiryInput).toBeEmpty();
    });

    test(`should add 0 as prefix to single digit month entry`, async () => {
        entryValue = `5`;
        expectedValue = `05`;

        await cardExpiryInput.fill(entryValue);
        await expect(cardExpiryInput).toHaveValue(expectedValue);
        await expect(cardExpiryInput).toHaveJSProperty(
            `selectionStart`,
            expectedValue.length,
        );
        await expect(cardExpiryInput).toHaveJSProperty(
            `selectionEnd`,
            expectedValue.length,
        );
    });

    test(`should not allow month entry greater than 12`, async () => {
        entryValue = `13`;
        expectedValue = `1`;

        await cardExpiryInput.pressSequentially(entryValue);
        await expect(cardExpiryInput).toHaveValue(expectedValue);
        await expect(cardExpiryInput).toHaveJSProperty(
            `selectionStart`,
            expectedValue.length,
        );
        await expect(cardExpiryInput).toHaveJSProperty(
            `selectionEnd`,
            expectedValue.length,
        );
    });

    test(`should allow month entry equal to 12`, async () => {
        expectedValue = `12`;

        await cardExpiryInput.fill(expectedValue);
        await expect(cardExpiryInput).toHaveValue(expectedValue);
        await expect(cardExpiryInput).toHaveJSProperty(
            `selectionStart`,
            expectedValue.length,
        );
        await expect(cardExpiryInput).toHaveJSProperty(
            `selectionEnd`,
            expectedValue.length,
        );
    });

    test(`should not allow multiple 0s as month entry`, async () => {
        entryValue = `00`;
        expectedValue = `0`;

        await cardExpiryInput.pressSequentially(entryValue);
        await expect(cardExpiryInput).toHaveValue(expectedValue);
        await expect(cardExpiryInput).toHaveJSProperty(
            `selectionStart`,
            expectedValue.length,
        );
        await expect(cardExpiryInput).toHaveJSProperty(
            `selectionEnd`,
            expectedValue.length,
        );
    });

    test(`should add date separator automatically`, async () => {
        entryValue = `0130`;
        expectedValue = `01/30`;

        await cardExpiryInput.pressSequentially(entryValue);
        await expect(cardExpiryInput).toHaveValue(expectedValue);
        await expect(cardExpiryInput).toHaveJSProperty(
            `selectionStart`,
            expectedValue.length,
        );
        await expect(cardExpiryInput).toHaveJSProperty(
            `selectionEnd`,
            expectedValue.length,
        );
    });
});
