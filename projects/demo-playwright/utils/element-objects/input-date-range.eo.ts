import {type Locator} from '@playwright/test';
import {
    TUI_CALENDAR_RANGE_LOCATORS,
    TUI_DATA_LIST_LOCATORS,
    TUI_INPUT_DATE_RANGE_LOCATORS,
} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

/**
 * Element Object for a TuiInputDateRange component.
 *
 * Exposes the textfield, calendar, range switcher items and template locators,
 * plus helpers to read and select the range switcher items.
 */
export class TuiInputDateRangeEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_INPUT_DATE_RANGE_LOCATORS.HOST;

    /** Textfield combobox of the range field. */
    public readonly textfield = this.host.getByRole('combobox');

    /** Calendar (desktop or mobile) attached to the field. */
    public readonly calendar = this.host
        .page()
        .locator('tui-calendar-range, tui-mobile-calendar');

    /** Range switcher items menu. */
    public readonly items = this.calendar.locator(TUI_CALENDAR_RANGE_LOCATORS.MENU);

    /** Template slot of the field. */
    public readonly template = this.host.locator('.t-template');

    /**
     * Returns the range switcher items.
     *
     * Waits for the items menu to be attached before resolving them.
     */
    public async getItems(): Promise<Locator[]> {
        const dataList = this.calendar.locator(TUI_CALENDAR_RANGE_LOCATORS.MENU);

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
