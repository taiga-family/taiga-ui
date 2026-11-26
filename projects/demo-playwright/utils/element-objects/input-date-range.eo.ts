import {type Locator} from '@playwright/test';
import {
    TUI_CALENDAR_RANGE_LOCATORS,
    TUI_DATA_LIST_LOCATORS,
    TUI_INPUT_DATE_RANGE_LOCATORS,
} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';
import {TuiCalendarSheetEO} from './calendar-sheet.eo';

/**
 * Element Object for a TuiInputDateRange component.
 *
 * Exposes the textfield, calendar, calendar sheet, range switcher items and
 * template locators, plus helpers to read and select the range switcher items.
 */
export class TuiInputDateRangeEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_INPUT_DATE_RANGE_LOCATORS.HOST;

    /** Textfield combobox of the range field. */
    public readonly input = this.host.locator(TUI_INPUT_DATE_RANGE_LOCATORS.INPUT);

    /** Calendar (desktop or mobile) attached to the field. */
    public readonly calendar = this.host
        .page()
        .locator(`${TUI_CALENDAR_RANGE_LOCATORS.HOST}, tui-mobile-calendar`);

    /** Calendar sheet of the range field. */
    public readonly calendarSheet = new TuiCalendarSheetEO(this.calendar);

    /** Range switcher menu of the calendar. */
    public readonly menu = this.calendar.locator(TUI_CALENDAR_RANGE_LOCATORS.MENU);

    /** Range switcher items (options inside the switcher menu). */
    public readonly items = this.menu.locator(TUI_DATA_LIST_LOCATORS.OPTION);

    /** Template slot of the field. */
    public readonly template = this.host.locator('.t-template');

    /**
     * Selects the range switcher item at the given index.
     *
     * @param index Zero-based index of the item to select.
     */
    public async selectItem(index: number): Promise<void> {
        await this.items.nth(index).click();
    }

    /**
     * Returns the checkmark locator of the range switcher item at the given index.
     *
     * @param index Zero-based index of the item.
     */
    public getCheckmark(index: number): Locator {
        return this.items.nth(index).locator(TUI_CALENDAR_RANGE_LOCATORS.CHECKMARK);
    }
}
