import {TUI_INPUT_TIME_LOCATORS} from '@taiga-ui/testing/locators';

import {withDataList} from '../mixins';
import {TuiTextfieldEO} from './textfield.eo';

/**
 * Element Object for a TuiInputTime component.
 *
 * Composes the textfield behavior with the data-list dropdown and the native
 * time picker.
 *
 */
export class TuiInputTimeEO extends withDataList(TuiTextfieldEO) {
    /** Time text input of the field. */
    public override readonly input = this.host.locator(TUI_INPUT_TIME_LOCATORS.INPUT);

    /** Native time picker input. */
    public readonly nativePicker = this.host.locator('.t-content input[type="time"]');
}
