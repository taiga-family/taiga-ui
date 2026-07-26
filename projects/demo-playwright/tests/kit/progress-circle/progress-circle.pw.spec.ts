import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('TuiProgressCircle', () => {
    beforeEach(async ({page}) => {
        await tuiGoto(page, DemoRoute.ProgressCircle);
    });

    describe('Arc mode', () => {
        test.use({viewport: {width: 225, height: 300}});

        ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'].forEach((size) => {
            describe(`size=${size} & max=10`, () => {
                [0, 2, 3, 5, 7, 9, 10].forEach((value) => {
                    test(`value=${value}`, async ({page}) => {
                        await tuiGoto(
                            page,
                            `${DemoRoute.ProgressCircle}/API?max=10&value=${value}&size=${size}&arc=true`,
                        );

                        await expect
                            .soft(
                                new TuiDocumentationPagePO(page).demo.locator(
                                    'tui-progress-circle',
                                ),
                            )
                            .toHaveScreenshot(
                                `progress-circle--size-${size}--value-${value}--max-10.png`,
                            );
                    });
                });
            });
        });
    });
});
