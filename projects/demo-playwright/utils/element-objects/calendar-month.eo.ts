import {TUI_CALENDAR_MONTH_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

/**
 * Element Object for a TuiCalendarMonth component.
 *
 * Exposes the month cell locator of the month picker and a helper to select a
 * month by index.
 */
export class TuiCalendarMonthEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_CALENDAR_MONTH_LOCATORS.HOST;

    /** Month cells of the month picker. */
    public readonly month = this.host.locator(TUI_CALENDAR_MONTH_LOCATORS.MONTH);

    /**
     * Selects the month at the given index by clicking its cell.
     *
     * @param index Zero-based index of the month cell to select.
     */
    public async selectMonth(index: number): Promise<void> {
        await this.month.nth(index).click();
    }
}
