import {type Locator} from '@playwright/test';
import {TUI_CALENDAR_SHEET_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

/**
 * Element Object for a TuiCalendarSheet component.
 *
 * Exposes helpers to resolve and click on a specific day cell.
 */
export class TuiCalendarSheetEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_CALENDAR_SHEET_LOCATORS.HOST;

    /**
     * Returns the locator of the day cell matching the given day number.
     *
     * @param day Day of the month (1-31).
     */
    public getCalendarDay(day: number): Locator {
        return this.cells
            .filter({hasText: new RegExp(String.raw`^\s*${day}\s*$`)})
            .first();
    }

    /**
     * Clicks the day cell matching the given day number.
     *
     * Waits for the cell to become visible before clicking.
     *
     * @param day Day of the month (1-31).
     */
    public async clickOnDay(day: number): Promise<void> {
        const cell = this.getCalendarDay(day);

        await cell.waitFor({state: 'visible'});
        await cell.click({force: true});
    }

    /** Day cells of the sheet (desktop and mobile variants). */
    private get cells(): Locator {
        return this.host.locator(
            [
                TUI_CALENDAR_SHEET_LOCATORS.CELL,
                TUI_CALENDAR_SHEET_LOCATORS.CELL_MOBILE,
            ].join(', '),
        );
    }
}
