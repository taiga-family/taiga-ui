import {DemoRoute} from '@demo/routes';
import {
    TuiCalendarSheetPO,
    TuiDocumentationApiPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

const {describe, beforeEach} = test;

describe('InputDateMulti', () => {
    let api!: TuiDocumentationApiPagePO;
    let input!: Locator;
    let chips!: Locator;
    let calendar!: TuiCalendarSheetPO;
    let submit!: Locator;

    beforeEach(({page}) => {
        api = new TuiDocumentationApiPagePO(page);
        input = api.demo.locator('input[tuiInputDateMulti]');
        chips = api.demo.locator('tui-textfield-item');
        calendar = new TuiCalendarSheetPO(page.locator('tui-dropdown tui-calendar'));
        submit = api.submitFormControlButton;
    });

    describe('updateOn=submit', () => {
        beforeEach(async ({page}) => {
            await tuiGoto(
                page,
                `${DemoRoute.InputDateMulti}/API?sandboxExpanded=true&updateOn=submit`,
            );
        });

        test('shows selected days as chips immediately, but updates control value only on submit', async ({
            page,
        }) => {
            await input.click();
            await expect(page.locator('tui-dropdown')).toBeAttached();

            await calendar.clickOnDay(3);
            await calendar.clickOnDay(4);

            await expect(chips).toHaveCount(2);
            await expect(api.value).not.toContainText('2020-09-03');

            await submit.click();

            await expect(api.value).toContainText('2020-09-03');
            await expect(api.value).toContainText('2020-09-04');
            await expect(chips).toHaveCount(2);
        });

        test('removes submitted date via chip remove button', async ({page}) => {
            await input.click();
            await expect(page.locator('tui-dropdown')).toBeAttached();

            await calendar.clickOnDay(3);
            await calendar.clickOnDay(4);
            await submit.click();

            await expect(api.value).toContainText('2020-09-03');
            await expect(api.value).toContainText('2020-09-04');
            await expect(chips).toHaveCount(2);

            await chips.first().locator('button', {hasText: 'Remove'}).click();

            await expect(chips).toHaveCount(1);
            // Control value should stay intact until the form is submitted
            await expect(api.value).toContainText('2020-09-03');

            await submit.click();

            await expect(api.value).not.toContainText('2020-09-03');
            await expect(api.value).toContainText('2020-09-04');
            await expect(chips).toHaveCount(1);
        });

        test('unselects day via calendar after submit', async ({page}) => {
            await input.click();
            await expect(page.locator('tui-dropdown')).toBeAttached();

            await calendar.clickOnDay(3);
            await calendar.clickOnDay(4);
            await submit.click();

            await expect(chips).toHaveCount(2);

            await input.click();
            await expect(page.locator('tui-dropdown')).toBeAttached();

            await calendar.clickOnDay(3);

            await expect(chips).toHaveCount(1);
            await expect(api.value).toContainText('2020-09-03');

            await submit.click();

            await expect(api.value).not.toContainText('2020-09-03');
            await expect(api.value).toContainText('2020-09-04');
        });
    });
});
