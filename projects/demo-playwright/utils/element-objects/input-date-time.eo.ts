import {
    TUI_CALENDAR_LOCATORS,
    TUI_CALENDAR_SHEET_LOCATORS,
    TUI_INPUT_DATE_TIME_LOCATORS,
    TUI_TEXTFIELD_LOCATORS,
} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

/**
 * Element Object for a TuiInputDateTime component.
 *
 * Exposes the inner input, native picker, calendar and a helper to select a day
 * via the attached calendar sheet.
 */
export class TuiInputDateTimeEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_INPUT_DATE_TIME_LOCATORS.HOST;

    /** Inner text input of the date-time field. */
    public readonly input = this.host.locator(TUI_INPUT_DATE_TIME_LOCATORS.INPUT);

    /** Placeholder text shown when the field is empty. */
    public readonly filler = this.host.locator(TUI_TEXTFIELD_LOCATORS.FILLER);

    /** Calendar attached to the field. */
    public readonly calendar = this.host.page().locator(TUI_CALENDAR_LOCATORS.HOST);

    /** Native date-time picker input. */
    public readonly nativePicker = this.host.locator(
        TUI_INPUT_DATE_TIME_LOCATORS.NATIVE_PICKER,
    );

    /**
     * Selects a day via the attached calendar sheet.
     *
     * @param day Day of the month to select.
     */
    public async selectDayViaCalendar(day: number): Promise<void> {
        return this.calendar
            .locator(TUI_CALENDAR_SHEET_LOCATORS.CELL)
            .filter({hasText: `${day}`})
            .click();
    }
}
