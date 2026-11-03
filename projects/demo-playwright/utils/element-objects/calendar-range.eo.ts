import {type Locator} from '@playwright/test';
import {
    TUI_CALENDAR_LOCATORS,
    TUI_CALENDAR_RANGE_LOCATORS,
    TUI_DATA_LIST_LOCATORS,
} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';
import {TuiCalendarEO} from './calendar.eo';
import {type TuiCalendarSheetEO} from './calendar-sheet.eo';

/**
 * Element Object for a TuiCalendarRange component.
 *
 * Exposes month navigation buttons, the underlying calendars/sheets and the
 * range switcher items.
 */
export class TuiCalendarRangeEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_CALENDAR_RANGE_LOCATORS.HOST;

    /** Button to navigate to the previous month. */
    public previousMonth = this.host
        .locator('tui-calendar-spin tui-spin-button > button')
        .first();

    /** Button to navigate to the next month. */
    public nextMonth = this.host
        .locator('tui-calendar-spin tui-spin-button > button')
        .last();

    /**
     * Returns the calendar Element Objects rendered inside the range.
     */
    public async getCalendars(): Promise<
        [TuiCalendarEO, TuiCalendarEO] | [TuiCalendarEO]
    > {
        const calendars = await this.host.locator(TUI_CALENDAR_LOCATORS.HOST).all();

        return calendars.map(
            (_, index) => new TuiCalendarEO(this.page, this.host, '', index),
        ) as [TuiCalendarEO, TuiCalendarEO] | [TuiCalendarEO];
    }

    /**
     * Returns the calendar sheet Element Objects for the rendered calendars.
     */
    public async getCalendarSheets(): Promise<
        [TuiCalendarSheetEO, TuiCalendarSheetEO] | [TuiCalendarSheetEO]
    > {
        const calendars = await this.getCalendars();
        const calendarSheets = calendars.map((x) => x.calendarSheet);

        return calendarSheets as
            [TuiCalendarSheetEO, TuiCalendarSheetEO] | [TuiCalendarSheetEO];
    }

    /**
     * Returns the range switcher items of the calendar range.
     *
     * Waits for the items menu to be attached before resolving them.
     */
    public async getItems(): Promise<Locator[]> {
        const dataList = this.host.locator(TUI_CALENDAR_RANGE_LOCATORS.MENU);

        await dataList.waitFor({state: 'attached'});

        return dataList.locator(TUI_DATA_LIST_LOCATORS.OPTION).all();
    }

    /**
     * Selects the range switcher item at the given index.
     *
     * @param index Zero-based index of the item to select.
     */
    public async selectItem(index: number): Promise<void> {
        const items = await this.getItems();

        await items[index]?.click();
    }

    /**
     * Returns the checkmark locator of the range switcher item at the given index.
     *
     * @param index Zero-based index of the item.
     */
    public async getCheckmark(index: number): Promise<Locator | undefined> {
        const items = await this.getItems();

        return items[index]?.locator(TUI_CALENDAR_RANGE_LOCATORS.CHECKMARK);
    }
}
