import {TUI_CALENDAR_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';
import {TuiCalendarSheetEO} from './calendar-sheet.eo';

/**
 * Element Object for a single TuiCalendar component.
 *
 * Exposes a helper to obtain the underlying calendar sheet.
 */
export class TuiCalendarEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_CALENDAR_LOCATORS.HOST;

    /**
     * Returns an Element Object for the calendar sheet scoped to this calendar.
     */
    public readonly calendarSheet = new TuiCalendarSheetEO(this.page, this.host);
}
