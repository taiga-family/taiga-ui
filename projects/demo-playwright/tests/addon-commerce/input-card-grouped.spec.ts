import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputCardGroupedPO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

test.describe('InputCardGrouped', () => {
    let documentationPage: TuiDocumentationPagePO;

    test.describe('API', () => {
        test.use({viewport: {width: 700, height: 800}});

        let apiPageExample: Locator;

        test.beforeEach(({page}) => {
            ({apiPageExample} = new TuiDocumentationPagePO(page));
        });

        test('set value and clear after', async ({page}) => {
            await tuiGoto(page, 'components/input-card-grouped/API');

            const {numberTextfield, cleanerIcon} = new TuiInputCardGroupedPO(
                apiPageExample,
            );
            const entryValue = '1234 4567 8910 1112';

            await numberTextfield.pressSequentially(entryValue);
            await expect(numberTextfield).toHaveValue(entryValue);
            await expect(numberTextfield).toHaveScreenshot(
                '01-input-card-grouped-filled.png',
            );

            await cleanerIcon.click();
            await expect(numberTextfield).toHaveScreenshot(
                '02-input-card-grouped-cleared.png',
            );

            await apiPageExample.click({
                force: true,
                position: {x: 0, y: 0}, // click top left corner, away from field
            });
            await expect(numberTextfield).toHaveScreenshot(
                '03-input-card-grouped-unfocused.png',
            );
        });

        test('disabled input card grouped', async ({page}) => {
            await tuiGoto(page, 'components/input-card-grouped/API?disabled=true');

            const {numberTextfield} = new TuiInputCardGroupedPO(apiPageExample);

            await expect(numberTextfield).toHaveCSS('pointer-events', 'none');
            await expect(numberTextfield).toHaveScreenshot(
                '04-input-card-grouped-disabled.png',
            );
        });
    });

    test.describe('Examples', () => {
        test.use({viewport: {width: 1280, height: 800}});

        test.beforeEach(async ({page}) => {
            await tuiGoto(page, 'components/input-card-grouped');

            documentationPage = new TuiDocumentationPagePO(page);
        });

        test('input card grouped with validation', async () => {
            const example = documentationPage.getExample('#validation');
            const {numberTextfield, expiryTextfield, cvcTextfield, cleanerIcon} =
                new TuiInputCardGroupedPO(example);
            const cardInfo = {
                number: '5213 0000 4039 5834',
                expiry: '02/38',
                cvc: '123',
            };

            await expect(numberTextfield).toHaveScreenshot(
                '05-default-state-input-card.png',
            );

            await numberTextfield.pressSequentially(cardInfo.number);
            await expect(numberTextfield).toHaveValue(cardInfo.number);
            await expect(numberTextfield).toHaveScreenshot(
                '06-input-card-with-value.png',
            );

            await numberTextfield.focus();
            await expect(numberTextfield).toHaveScreenshot(
                '07-input-card-with-value-focus-edit-card.png',
            );

            await numberTextfield.press('Tab');
            await expect(numberTextfield).toHaveScreenshot(
                '08-input-card-with-value-tab-to-expired.png',
            );

            await expiryTextfield.pressSequentially(cardInfo.expiry);
            await expect(expiryTextfield).toHaveValue(cardInfo.expiry);
            await expect(numberTextfield).toHaveScreenshot(
                '09-input-card-with-value-expire-filled.png',
            );

            await cvcTextfield.pressSequentially('123');
            await expect(cvcTextfield).toHaveValue(cardInfo.cvc);
            await expect(numberTextfield).toHaveScreenshot(
                '10-input-card-with-value-cvc-filled.png',
            );

            await cleanerIcon.click();
            await expect(numberTextfield).toBeEmpty();
            await expect(numberTextfield).toHaveScreenshot(
                '11-input-card-with-focused-after-clear.png',
            );

            await example.click({position: {x: 0, y: 0}});
            await expect(numberTextfield).toHaveScreenshot(
                '12-default-state-input-card.png',
            );
        });

        test('input card grouped with saved cards', async () => {
            const example = documentationPage.getExample('#select');
            const {numberTextfield, cvcTextfield, cleanerIcon} =
                new TuiInputCardGroupedPO(example);
            const cvc = '123';

            await expect(numberTextfield).toHaveScreenshot(
                '13-default-prefilled-state-input-card.png',
            );
            await expect(numberTextfield).toHaveCSS('pointer-events', /none/);
            await expect(numberTextfield).toHaveScreenshot(
                '14-prefilled-value-cannot-be-edit.png',
            );

            await cvcTextfield.pressSequentially(cvc);
            await expect(cvcTextfield).toHaveValue(cvc);
            await expect(numberTextfield).toHaveScreenshot(
                '15-input-card-with-value-cvc-filled.png',
            );

            await cleanerIcon.click();
            await expect(numberTextfield).toBeEmpty();
            await expect(numberTextfield).toHaveScreenshot(
                '16-input-card-with-focused-after-clear.png',
            );

            await example.click({position: {x: 0, y: 0}});
            await expect(numberTextfield).toHaveScreenshot(
                '17-default-prefilled-state-input-card.png',
            );
        });

        test('expired field should be clickable after reset of prefilled value', async () => {
            const example = documentationPage.getExample('#custom-labels');
            const {numberTextfield, expiryTextfield, cvcTextfield, cleanerIcon} =
                new TuiInputCardGroupedPO(example);
            const cardInfo = {number: '5586 2000 7149 2158', expiry: '12/25'};

            await cvcTextfield.focus();
            await expect(expiryTextfield).toHaveCSS('pointer-events', 'none');

            await cleanerIcon.click();
            await numberTextfield.pressSequentially(cardInfo.number);
            await expect(numberTextfield).toHaveValue(cardInfo.number);
            await expect(expiryTextfield).toHaveCSS('pointer-events', 'auto');

            await expiryTextfield.pressSequentially(cardInfo.expiry);
            await expect(expiryTextfield).toHaveValue(cardInfo.expiry);
        });
    });
});
