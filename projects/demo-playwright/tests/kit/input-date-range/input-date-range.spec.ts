/* eslint-disable no-irregular-whitespace */
import {expect, Locator, test} from '@playwright/test';

import {TuiDocumentationPagePO, tuiGoto, TuiInputDateRangePO} from '../../../utils';

test.describe(`InputDateRange`, () => {
    let example!: Locator;
    let inputDateRange!: TuiInputDateRangePO;

    test.use({
        viewport: {width: 650, height: 500},
    });

    test.beforeEach(async ({page}) => {
        await tuiGoto(page, `components/input-date-range`);

        example = new TuiDocumentationPagePO(page).apiPageExample;

        inputDateRange = new TuiInputDateRangePO(example.locator(`tui-input-date-range`));
    });

    test.describe(`API`, () => {
        for (const size of [`s`, `m`, `l`]) {
            test(`correct filler display for size ${size.toUpperCase()}`, async ({
                page,
            }) => {
                await tuiGoto(
                    page,
                    `components/input-date-range/API?tuiTextfieldSize=${size}`,
                );

                await inputDateRange.textfield.click();
                await expect(example).toHaveScreenshot(
                    `input-date-range-size-${size}-empty.png`,
                );

                await inputDateRange.textfield.type(`01`);
                await expect(example).toHaveScreenshot(
                    `input-date-range-size-${size}-set-day.png`,
                );

                await inputDateRange.textfield.type(`.06.1994`);
                await expect(example).toHaveScreenshot(
                    `input-date-range-size-${size}-set-from-date.png`,
                );

                await inputDateRange.textfield.type(`01.01.2022`);
                await expect(example).toHaveScreenshot(
                    `input-date-range-size-${size}-set-to-date.png`,
                );
            });
        }

        test(`Maximum month less than current month`, async ({page}) => {
            await tuiGoto(page, `components/input-date-range/API?min$=3`);

            await expect(example).toHaveScreenshot(`input-date-range-maximum-month.png`);
        });

        test(`Minimum month more than current month`, async ({page}) => {
            await tuiGoto(page, `components/input-date-range/API?min$=3`);

            await expect(example).toHaveScreenshot(`input-date-range-minimum-month.png`);
        });

        test.describe(`prevents changes if you enter an invalid date`, () => {
            test(`day > 31`, async ({page}) => {
                await tuiGoto(page, `components/input-date-range/API`);

                await inputDateRange.textfield.type(`32`);

                await expect(inputDateRange.textfield).toHaveValue(`3`);

                await inputDateRange.textfield.type(`1`);

                await expect(inputDateRange.textfield).toHaveValue(`31`);
            });

            test(`month > 12`, async ({page}) => {
                await tuiGoto(page, `components/input-date-range/API`);

                await inputDateRange.textfield.type(`2913`);

                await expect(inputDateRange.textfield).toHaveValue(`29.1`);

                await inputDateRange.textfield.type(`0`);
                await expect(inputDateRange.textfield).toHaveValue(`29.10`);
            });

            test(`pads date range if it is less than [minLength]`, async ({page}) => {
                await tuiGoto(page, `components/input-date-range/API?minLength$=0`); // minLength = {day: 3}

                await inputDateRange.textfield.type(`21052023-22052023`);

                await expect(inputDateRange.textfield).toHaveValue(
                    `21.05.2023 – 23.05.2023`,
                );
            });

            test(`cuts date range if it is more than [maxLength]`, async ({page}) => {
                await tuiGoto(page, `components/input-date-range/API?maxLength$=0`); // maxLength = {day: 5}

                await inputDateRange.textfield.type(`20052023-29052023`);

                await expect(inputDateRange.textfield).toHaveValue(
                    `20.05.2023 – 24.05.2023`,
                );
            });
        });
    });
});
