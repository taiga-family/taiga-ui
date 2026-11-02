import {TUI_INPUT_PHONE_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

/**
 * Element Object for a TuiInputPhone component.
 *
 * Exposes the inner textfield and the clear button.
 */
export class TuiInputPhoneEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_INPUT_PHONE_LOCATORS.HOST;

    /** Inner text input of the phone field. */
    public readonly textfield = this.host.getByRole('textbox');

    /** Clear button shown when the field has a value. */
    public readonly cleaner = this.host.getByRole('button', {name: 'Clear'});
}
