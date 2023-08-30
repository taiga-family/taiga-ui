import {expect, Locator, test} from '@playwright/test';

import {tuiGoto} from '../../../utils';
import {TuiInputDateRangePO} from '../../../utils/page-objects/input-date-range.po';

test.describe(`InputDateRange`, () => {
    let example!: Locator;
    let inputDateRange!: TuiInputDateRangePO;
    let inputValue!: string;

    test.beforeEach(async ({page}) => {
        test.use({
            viewport: {width: 650, height: 500},
        });

        await tuiGoto(page, `components/input-date-range`);

        example = page.locator(`#demo-content .tui-primitive-textfield__native-input`);
        inputDateRange = new TuiInputDateRangePO(example);
    });

    test.describe(`API`, () => {
        for (const size of [`s`, `m`, `l`]) {
            test(`correct filler display for size ${size.toUpperCase()}`, async ({
                page,
            }) => {
                await tuiGoto(
                    page,
                    `components/input-date-range/API?tuiMode=null&tuiTextfieldSize=${size}`,
                );

                await inputDateRange.click();
                await expect(example).toHaveScreenshot(
                    `input-date-range-size-${size}-empty`,
                );

                await inputDateRange.type(`01`);
                await expect(example).toHaveScreenshot(
                    `input-date-range-size-${size}-set-day`,
                );

                await inputDateRange.type(`.06.1994`);
                await expect(example).toHaveScreenshot(
                    `input-date-range-size-${size}-set-from-date`,
                );

                await inputDateRange.type(`01.01.2022`);
                await expect(example).toHaveScreenshot(
                    `input-date-range-size-${size}-set-to-date`,
                );
            });
        }

        test(`Maximum month less than current month`, async ({page}) => {
            await tuiGoto(page, `components/input-date-range/API?tuiMode=null&min$=3`);

            await expect(example).toHaveScreenshot(`input-date-range-maximum-month`);
        });

        test(`Minimum month more than current month`, async ({page}) => {
            await tuiGoto(page, `components/input-date-range/API?tuiMode=null&min$=3`);

            await expect(example).toHaveScreenshot(`input-date-range-minimum-month`);
        });

        test.describe(`prevents changes if you enter an invalid date`, () => {
            test(`day > 31`, async ({page}) => {
                await tuiGoto(page, `components/input-date-range/API`);

                await inputDateRange.type(`32`);
                inputValue = await inputDateRange.inputValue;

                expect(inputValue).toBe(`3`);

                await inputDateRange.type(`1`);

                expect(inputValue).toBe(`31`);
            });

            test(`month > 12`, async ({page}) => {
                await tuiGoto(page, `components/input-date-range/API`);

                await inputDateRange.type(`2913`);
                inputValue = await inputDateRange.inputValue;

                expect(inputValue).toBe(`29.1`);

                await inputDateRange.type(`0`);
                expect(inputValue).toBe(`0`);
            });

            test(`pads date range if it is less than [minLength]`, async ({page}) => {
                await tuiGoto(page, `components/input-date-range/API?minLength$=0`); // minLength = {day: 3}

                await inputDateRange.type(`21052023-22052023`);
                inputValue = await inputDateRange.inputValue;

                // eslint-disable-next-line no-irregular-whitespace
                expect(inputValue).toBe(`20.05.2023 – 24.05.2023`);
            });

            test(`cuts date range if it is more than [maxLength]`, async ({page}) => {
                await tuiGoto(page, `components/input-date-range/API?maxLength$=0`); // maxLength = {day: 5}

                await inputDateRange.type(`20052023-29052023`);
                inputValue = await inputDateRange.inputValue;

                // eslint-disable-next-line no-irregular-whitespace
                expect(inputValue).toBe(`20.05.2023 – 24.05.2023`);
            });
        });
    });
});
