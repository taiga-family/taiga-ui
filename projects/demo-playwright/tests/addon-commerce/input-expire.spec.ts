import {TuiDocumentationPagePO, tuiGoto, TuiInputCardPO} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

test.describe('InputExpire', () => {
    let expiryTextfield: Locator;

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, 'components/input-card/API');

        const {apiPageExample} = new TuiDocumentationPagePO(page);

        expiryTextfield = new TuiInputCardPO(apiPageExample).expiryTextfield;
        await expect(expiryTextfield).toBeEmpty();
    });

    test('should add 0 as prefix to single digit month entry', async () => {
        const entryValue = '5';
        const expectedValue = '05';

        await expiryTextfield.fill(entryValue);
        await expect(expiryTextfield).toHaveValue(expectedValue);
        await expect(expiryTextfield).toHaveJSProperty(
            'selectionStart',
            expectedValue.length,
        );
        await expect(expiryTextfield).toHaveJSProperty(
            'selectionEnd',
            expectedValue.length,
        );
    });

    test('should not allow month entry greater than 12', async () => {
        const entryValue = '13';
        const expectedValue = '1';

        await expiryTextfield.pressSequentially(entryValue);
        await expect(expiryTextfield).toHaveValue(expectedValue);
        await expect(expiryTextfield).toHaveJSProperty(
            'selectionStart',
            expectedValue.length,
        );
        await expect(expiryTextfield).toHaveJSProperty(
            'selectionEnd',
            expectedValue.length,
        );
    });

    test('should allow month entry equal to 12', async () => {
        const expectedValue = '12';

        await expiryTextfield.fill(expectedValue);
        await expect(expiryTextfield).toHaveValue(expectedValue);
        await expect(expiryTextfield).toHaveJSProperty(
            'selectionStart',
            expectedValue.length,
        );
        await expect(expiryTextfield).toHaveJSProperty(
            'selectionEnd',
            expectedValue.length,
        );
    });

    test('should not allow multiple 0s as month entry', async () => {
        const entryValue = '00';
        const expectedValue = '0';

        await expiryTextfield.pressSequentially(entryValue);
        await expect(expiryTextfield).toHaveValue(expectedValue);
        await expect(expiryTextfield).toHaveJSProperty(
            'selectionStart',
            expectedValue.length,
        );
        await expect(expiryTextfield).toHaveJSProperty(
            'selectionEnd',
            expectedValue.length,
        );
    });

    test('should add date separator automatically', async () => {
        const entryValue = '0130';
        const expectedValue = '01/30';

        await expiryTextfield.pressSequentially(entryValue);
        await expect(expiryTextfield).toHaveValue(expectedValue);
        await expect(expiryTextfield).toHaveJSProperty(
            'selectionStart',
            expectedValue.length,
        );
        await expect(expiryTextfield).toHaveJSProperty(
            'selectionEnd',
            expectedValue.length,
        );
    });
});
