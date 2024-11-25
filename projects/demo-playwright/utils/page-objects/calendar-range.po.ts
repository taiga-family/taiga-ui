import type {Locator} from '@playwright/test';
import {expect} from '@playwright/test';

import {TuiCalendarPO} from './calendar.po';

export class TuiCalendarRangePO {
    public previousMonth = this.host
        .locator('tui-calendar-spin tui-spin-button > button')
        .first();

    public nextMonth = this.host
        .locator('tui-calendar-spin tui-spin-button > button')
        .last();

    constructor(private readonly host: Locator) {}

    public async getCalendars(): Promise<
        [TuiCalendarPO, TuiCalendarPO] | [TuiCalendarPO]
    > {
        const calendars = await this.host.locator('tui-calendar').all();

        return calendars.map((x) => new TuiCalendarPO(x)) as
            | [TuiCalendarPO, TuiCalendarPO]
            | [TuiCalendarPO];
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
