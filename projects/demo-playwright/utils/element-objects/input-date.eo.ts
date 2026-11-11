import {TUI_INPUT_DATE_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';
import {TuiCalendarEO} from './calendar.eo';

/**
 * Element Object for a TuiInputDate component.
 *
 * Exposes the inner input, the native picker and the attached calendar.
 */
export class TuiInputDateEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_INPUT_DATE_LOCATORS.HOST;

    /** Inner text input of the date field. */
    public readonly input = this.host.locator(TUI_INPUT_DATE_LOCATORS.INPUT);

    /** Calendar Element Object attached to the field. */
    public readonly calendar = new TuiCalendarEO(this.page);

    /** Native date picker input. */
    public readonly nativePicker = this.host.locator(
        TUI_INPUT_DATE_LOCATORS.NATIVE_PICKER,
    );
}
