import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Calendars', () => {
    test.use({viewport: {width: 720, height: 700}});

    test('Calendar', async ({page}) => {
        await tuiGoto(
            page,
            `${DemoRoute.Calendar}/API?value$=2&maxViewedMonth$=1&max$=0`,
        );
        const {demo} = new TuiDocumentationPagePO(page);

        const calendar = demo.locator('tui-calendar').first();

        await expect(calendar).toBeVisible();

        await calendar.scrollIntoViewIfNeeded();

        await expect.soft(calendar).toHaveScreenshot('01-calendar.png');
    });

    test('Open calendar from start value', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Calendar}/API?value$=2`);
        const {demo} = new TuiDocumentationPagePO(page);

        const calendar = demo.locator('tui-calendar').first();

        await expect(calendar).toBeVisible();

        await calendar.scrollIntoViewIfNeeded();

        await expect.soft(calendar).toHaveScreenshot('01-calendar-is-april-2020.png');
    });

    test('Set range between two days', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Calendar}/API?value$=1`);
        const {demo} = new TuiDocumentationPagePO(page);

        const calendar = demo.locator('tui-calendar').first();

        await expect(calendar).toBeVisible();

        await calendar.scrollIntoViewIfNeeded();

        await expect.soft(calendar).toHaveScreenshot('01-range-calendar.png');
    });

    test('Month', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.CalendarMonth}/API?year$=1&value$=2`);
        const {demo} = new TuiDocumentationPagePO(page);

        const calendar = demo.locator('tui-calendar-month').first();

        await expect(calendar).toBeVisible();

        await calendar.scrollIntoViewIfNeeded();

        await expect.soft(calendar).toHaveScreenshot('01-calendar-month.png');
    });

    test('Use initial year from value', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.CalendarMonth}/API?year=null&value$=2`);
        const {demo} = new TuiDocumentationPagePO(page);

        const calendar = demo.locator('tui-calendar-month').first();

        await expect(calendar).toBeVisible();

        await calendar.scrollIntoViewIfNeeded();

        await expect.soft(calendar).toHaveScreenshot('inital-calendar-month.png');
    });
});
