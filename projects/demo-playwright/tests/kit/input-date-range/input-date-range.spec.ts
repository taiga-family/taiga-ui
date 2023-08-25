import {Page, test} from '@playwright/test';

import {tuiGoto} from '../../../utils';

test.use({
    viewport: {width: 650, height: 500},
});

test.describe(`InputDateRange`, () => {
    test.describe(`API`, () => {
        for (const size of [`s`, `m`, `l`]) {
            test(`correct filler display for size ${size.toUpperCase()}`, async ({
                page,
            }) => {
                await visitBy(page, size);

                await page.click(getInputSelector());
                // await expect(page).toHaveScreenshot();
                //
                // await page.goto(page);
                //
                // const img = await page.screenshot({ fullPage: true });
                //
                // expect(img).toMatchImageSnapshot();
            });
        }

        async function visitBy(page: Page, size: string): Promise<void> {
            await tuiGoto(
                page,
                `components/input-date-range/API?tuiMode=null&tuiTextfieldSize=${size}`,
            );
        }

        function getInputSelector(): string {
            return `#demo-content [data-testid="tui-primitive-textfield__native-input"]`;
        }
    });
});
