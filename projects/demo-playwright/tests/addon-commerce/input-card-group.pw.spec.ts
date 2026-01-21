import {DemoRoute} from '@demo/routes';
import {
    CHAR_NO_BREAK_SPACE,
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputCardGroupPO,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

test.describe('InputCardGroup', () => {
    let documentationPage: TuiDocumentationPagePO;

    test.describe('API', () => {
        test.use({viewport: {width: 700, height: 800}});

        let apiPageExample: Locator;

        test.beforeEach(({page}) => {
            ({apiPageExample} = new TuiDocumentationPagePO(page));
        });

        test('set value and clear after', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputCardGroup}/API`);

            const {numberTextfield, cleanerIcon} = new TuiInputCardGroupPO(
                apiPageExample,
            );
            const entryValue = '1234 4567 8910 1112'.replaceAll(' ', CHAR_NO_BREAK_SPACE);

            await numberTextfield.pressSequentially(entryValue);

            await expect(numberTextfield).toHaveValue(entryValue);
            await expect.soft(numberTextfield).toHaveScreenshot();

            await cleanerIcon.click();

            await expect.soft(numberTextfield).toHaveScreenshot();

            // click top left corner, away from field
            await page.locator('body').click({position: {x: 0, y: 0}});

            await expect.soft(numberTextfield).toHaveScreenshot();
        });

        test('disabled input card grouped', async ({page}) => {
            await tuiGoto(page, `${DemoRoute.InputCardGroup}/API?disabled=true`);

            const {numberTextfield} = new TuiInputCardGroupPO(apiPageExample);

            await expect(numberTextfield).toHaveAttribute('disabled');
            await expect.soft(numberTextfield).toHaveScreenshot();
        });
    });

    test.describe('Examples', () => {
        test.use({viewport: {width: 1280, height: 800}});

        test.beforeEach(async ({page, browserName}) => {
            await tuiGoto(page, DemoRoute.InputCardGroup);

            documentationPage = new TuiDocumentationPagePO(page);

            // TODO: why does this test keep failing in safari

            test.skip(
                browserName !== 'chromium',
                'This feature is only relevant in Chrome',
            );
        });

        test('input card grouped with validation', async () => {
            const example = documentationPage.getExample('#with-validation');
            const {numberTextfield, expiryTextfield, cvcTextfield, cleanerIcon} =
                new TuiInputCardGroupPO(example);
            const cardInfo = {
                number: '5213 0000 4039 5834'.replaceAll(' ', CHAR_NO_BREAK_SPACE),
                expiry: '02/38',
                cvc: '123',
            };

            await expect.soft(numberTextfield).toHaveScreenshot();

            await numberTextfield.pressSequentially(cardInfo.number);

            await expect(numberTextfield).toHaveValue(cardInfo.number);
            await expect.soft(numberTextfield).toHaveScreenshot();

            await numberTextfield.focus();

            await expect.soft(numberTextfield).toHaveScreenshot();

            await numberTextfield.press('Tab');

            await expect.soft(numberTextfield).toHaveScreenshot();

            await expiryTextfield.pressSequentially(cardInfo.expiry);

            await expect(expiryTextfield).toHaveValue(cardInfo.expiry);
            await expect.soft(numberTextfield).toHaveScreenshot();

            await cvcTextfield.pressSequentially('123');

            await expect(cvcTextfield).toHaveValue(cardInfo.cvc);
            await expect.soft(numberTextfield).toHaveScreenshot();

            await cleanerIcon.click();

            await expect(numberTextfield).toBeEmpty();
            await expect.soft(numberTextfield).toHaveScreenshot();

            await example.click({position: {x: 0, y: 0}});

            await expect.soft(numberTextfield).toHaveScreenshot();
        });

        test('input card grouped with saved cards', async () => {
            const example = documentationPage.getExample('#with-saved-cards');
            const {numberTextfield, cvcTextfield, cleanerIcon} = new TuiInputCardGroupPO(
                example,
            );
            const cvc = '123';

            await expect.soft(numberTextfield).toHaveScreenshot();
            await expect(numberTextfield).toHaveCSS('pointer-events', /none/);
            await expect.soft(numberTextfield).toHaveScreenshot();

            await cvcTextfield.pressSequentially(cvc);

            await expect(cvcTextfield).toHaveValue(cvc);
            await expect.soft(numberTextfield).toHaveScreenshot();

            await cleanerIcon.click();

            await expect(numberTextfield).toBeEmpty();
            await expect.soft(numberTextfield).toHaveScreenshot();

            await example.click({position: {x: 0, y: 0}});

            await expect.soft(numberTextfield).toHaveScreenshot();
        });

        test('expired field should be clickable after reset of prefilled value', async () => {
            const example = documentationPage.getExample('#custom-labels');
            const {numberTextfield, expiryTextfield, cvcTextfield, cleanerIcon} =
                new TuiInputCardGroupPO(example);
            const cardInfo = {
                number: '5586 2000 7149 2158'.replaceAll(' ', CHAR_NO_BREAK_SPACE),
                expiry: '12/25',
            };

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
