import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('ThumbnailCard', () => {
    let documentationPage: TuiDocumentationPagePO;

    describe('Different width digits for different card sizes', () => {
        test.use({viewport: {width: 100, height: 300}});

        beforeEach(({page}) => {
            documentationPage = new TuiDocumentationPagePO(page);
        });

        ['mastercard', 'visa', 'mir'].forEach((paymentSystem) => {
            describe(paymentSystem, () => {
                ['m', 'l'].forEach((size) => {
                    describe(`size = ${size}`, () => {
                        [
                            '0000',
                            '1111',
                            '2222',
                            '3333',
                            '4444',
                            '5555',
                            '6666',
                            '7777',
                            '8888',
                            '9999',
                        ].forEach((cardNumber) => {
                            test(cardNumber, async ({page}) => {
                                await tuiGoto(
                                    page,
                                    `${DemoRoute.ThumbnailCard}/API?paymentSystem=${paymentSystem}&size=${size}&iconStart=@tui.snowflake&iconEnd=@tui.lock`,
                                );

                                await documentationPage
                                    .getRow('[ng-content]')
                                    .getByRole('textbox')
                                    .fill(cardNumber);

                                await expect(
                                    documentationPage.apiPageExample,
                                ).toHaveScreenshot(
                                    `ps-${paymentSystem}-size-${size}-${cardNumber}.png`,
                                );
                            });
                        });
                    });
                });

                test('size = s', async ({page}) => {
                    await tuiGoto(
                        page,
                        `${DemoRoute.ThumbnailCard}/API?paymentSystem=${paymentSystem}&size=s&iconStart=@tui.snowflake&iconEnd=@tui.lock&ng-content=8888`,
                    );

                    await expect(documentationPage.apiPageExample).toHaveScreenshot(
                        `ps-${paymentSystem}-size-s-8888.png`,
                    );
                });
            });
        });
    });
});
