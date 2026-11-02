import {TUI_INPUT_MONTH_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiCalendarMonthEO} from './calendar-month.eo';
import {TuiTextfieldEO} from './textfield.eo';
import {withClickable} from '../mixins';

/**
 * Element Object for a TuiInputMonth component.
 *
 * Extends the textfield behavior with the month input, month calendar and the
 * native month picker.
 */
export class TuiInputMonthEO extends withClickable(TuiTextfieldEO) {
    protected override readonly hostSelector = TUI_INPUT_MONTH_LOCATORS.HOST;

    /** Inner text input of the month field. */
    public override readonly input = this.host.locator(TUI_INPUT_MONTH_LOCATORS.INPUT);

    /** Month calendar Element Object attached to the field. */
    public readonly calendar = new TuiCalendarMonthEO(this.page);

    /** Native month picker input. */
    public readonly nativePicker = this.host.locator(
        TUI_INPUT_MONTH_LOCATORS.NATIVE_PICKER,
    );

    /**
     * Opens the month picker and selects the month at the given index.
     *
     * @param index Zero-based index of the month cell to select.
     */
    public async selectMonth(index: number): Promise<void> {
        await this.click();
        await this.calendar.selectMonth(index);
    }
}
