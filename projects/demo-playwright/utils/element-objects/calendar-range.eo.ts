import {expect, type Locator} from '@playwright/test';

import {TuiCalendarEO} from './calendar.eo';

export class TuiCalendarRangeEO {
    public previousMonth = this.host
        .locator('tui-calendar-spin tui-spin-button > button')
        .first();

    public nextMonth = this.host
        .locator('tui-calendar-spin tui-spin-button > button')
        .last();

    constructor(public readonly host: Locator) {}

    public async getCalendars(): Promise<
        [TuiCalendarEO, TuiCalendarEO] | [TuiCalendarEO]
    > {
        const calendars = await this.host.locator('tui-calendar').all();

        return calendars.map((x) => new TuiCalendarEO(x)) as
            [TuiCalendarEO, TuiCalendarEO] | [TuiCalendarEO];
    }

    public async getItems(): Promise<Locator[]> {
        const dataList = this.host.locator('[automation-id="tui-calendar-range__menu"]');

        await expect(dataList).toBeAttached();

        return dataList.locator('[tuiOption]').all();
    }

    public async selectItem(index: number): Promise<void> {
        const items = await this.getItems();

        await items[index]?.click();
    }

    public async itemHasCheckmark(index: number): Promise<boolean> {
        const items = await this.getItems();

        const itemCheckmark = await items[index]
            ?.locator('[automation-id="tui-calendar-range__checkmark"]')
            .count();

        return !!itemCheckmark;
    }
}
