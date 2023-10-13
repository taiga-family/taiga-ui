import {
    TuiDocumentationPagePO,
    tuiGoto,
    TuiInputCardGroupedPO,
} from '@demo-playwright/utils';
import {expect, Locator, test} from '@playwright/test';

const {describe, beforeEach, use} = test;

describe(`InputCardGrouped`, () => {
    use({viewport: {width: 1280, height: 800}});

    let documentationPage: TuiDocumentationPagePO;
    let inputCardGroupedPage: TuiInputCardGroupedPO;
    let example: Locator;
    let cardGroupInput: Locator;
    let cardExpiryInput: Locator;
    let cleanerIcon: Locator;

    describe(`API`, () => {
        beforeEach(({page}) => {
            documentationPage = new TuiDocumentationPagePO(page);
            example = new TuiDocumentationPagePO(page).apiPageExample;
            inputCardGroupedPage = new TuiInputCardGroupedPO(example);
            cardGroupInput = inputCardGroupedPage.cardGroupInput;
            cleanerIcon = inputCardGroupedPage.cleanerIcon;
        });

        test(`set value and clear after`, async ({page}) => {
            await tuiGoto(page, `components/input-card-grouped/API`);

            await cardGroupInput.pressSequentially(`1234 4567 8910 1112`);
            await expect(cardGroupInput).toHaveScreenshot(
                `01-input-card-grouped-filled.png`,
            );

            await cleanerIcon.click();
            await expect(cardGroupInput).toHaveScreenshot(
                `02-input-card-grouped-cleared.png`,
            );

            await documentationPage.apiPageExample.click({
                force: true,
                position: {x: 0, y: 0}, // click top left corner, away from field
            });
            await expect(cardGroupInput).toHaveScreenshot(
                `03-input-card-grouped-unfocused.png`,
            );
        });

        test(`disabled input card grouped`, async ({page}) => {
            await tuiGoto(page, `components/input-card-grouped/API?disabled=true`);

            await expect(cardGroupInput).toHaveCSS(`pointer-events`, `none`);
            await expect(cardGroupInput).toHaveScreenshot(
                `04-input-card-grouped-disabled.png`,
            );
        });
    });

    describe(`Examples`, () => {
        let cardCvcInput: Locator;

        beforeEach(async ({page}) => {
            await tuiGoto(page, `components/input-card-grouped`);

            documentationPage = new TuiDocumentationPagePO(page);
        });

        test(`input card grouped with validation`, async () => {
            example = documentationPage.getExample(`#validation`);
            inputCardGroupedPage = new TuiInputCardGroupedPO(example);
            cardGroupInput = inputCardGroupedPage.cardGroupInput;
            cardExpiryInput = inputCardGroupedPage.cardExpiryInput;
            cardCvcInput = inputCardGroupedPage.cardCvcInput;
            cleanerIcon = inputCardGroupedPage.cleanerIcon;

            await expect(cardGroupInput).toHaveScreenshot(
                `05-default-state-input-card.png`,
            );

            await cardGroupInput.pressSequentially(`5213 0000 4039 5834`);
            await expect(cardGroupInput).toHaveScreenshot(`06-input-card-with-value.png`);

            await cardGroupInput.focus();
            await expect(cardGroupInput).toHaveScreenshot(
                `07-input-card-with-value-focus-edit-card.png`,
            );

            await cardGroupInput.press(`Tab`);
            await expect(cardGroupInput).toHaveScreenshot(
                `08-input-card-with-value-tab-to-expired.png`,
            );

            await cardExpiryInput.pressSequentially(`02/38`);
            await expect(cardGroupInput).toHaveScreenshot(
                `09-input-card-with-value-expire-filled.png`,
            );

            await cardCvcInput.pressSequentially(`123`);
            await expect(cardGroupInput).toHaveScreenshot(
                `10-input-card-with-value-cvc-filled.png`,
            );

            await cleanerIcon.click();
            await expect(cardGroupInput).toHaveScreenshot(
                `11-input-card-with-focused-after-clear.png`,
            );

            await example.click({position: {x: 0, y: 0}});
            await expect(cardGroupInput).toHaveScreenshot(
                `12-default-state-input-card.png`,
            );
        });

        test(`input card grouped with saved cards`, async () => {
            example = documentationPage.getExample(`#select`);
            inputCardGroupedPage = new TuiInputCardGroupedPO(example);
            cardGroupInput = inputCardGroupedPage.cardGroupInput;
            cardCvcInput = inputCardGroupedPage.cardCvcInput;
            cleanerIcon = inputCardGroupedPage.cleanerIcon;

            await expect(cardGroupInput).toHaveScreenshot(
                `13-default-prefilled-state-input-card.png`,
            );
            await expect(cardGroupInput).toHaveCSS(`pointer-events`, /none/);
            await expect(cardGroupInput).toHaveScreenshot(
                `14-prefilled-value-cannot-be-edit.png`,
            );

            await cardCvcInput.pressSequentially(`123`);
            await expect(cardGroupInput).toHaveScreenshot(
                `15-input-card-with-value-cvc-filled.png`,
            );

            await cleanerIcon.click();
            await expect(cardGroupInput).toHaveScreenshot(
                `16-input-card-with-focused-after-clear.png`,
            );

            await example.click({position: {x: 0, y: 0}});
            await expect(cardGroupInput).toHaveScreenshot(
                `17-default-prefilled-state-input-card.png`,
            );
        });

        test(`expired field should be clickable after reset of prefilled value`, async () => {
            example = documentationPage.getExample(`#custom-labels`);
            inputCardGroupedPage = new TuiInputCardGroupedPO(example);
            cardGroupInput = inputCardGroupedPage.cardGroupInput;
            cardExpiryInput = inputCardGroupedPage.cardExpiryInput;
            cardCvcInput = inputCardGroupedPage.cardCvcInput;
            cleanerIcon = inputCardGroupedPage.cleanerIcon;

            await cardCvcInput.focus();
            await expect(cardExpiryInput).toHaveCSS(`pointer-events`, `none`);

            await cleanerIcon.click();
            await cardGroupInput.pressSequentially(`5586 2000 7149 2158`);
            await expect(cardExpiryInput).toHaveCSS(`pointer-events`, `auto`);

            await cardExpiryInput.pressSequentially(`12/25`);
        });
    });
});
