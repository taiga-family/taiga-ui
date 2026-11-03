import {TUI_INPUT_PHONE_INTERNATIONAL_LOCATORS} from '@taiga-ui/testing/locators';

import {withDataList} from '../mixins';
import {TuiTextfieldEO} from './textfield.eo';

/**
 * Element Object for a TuiInputPhoneInternational component.
 *
 * Composes the textfield behavior with the data-list dropdown, the phone input
 * and the country select.
 */
export class TuiInputPhoneInternationalEO extends withDataList(TuiTextfieldEO) {
    protected override readonly hostSelector =
        TUI_INPUT_PHONE_INTERNATIONAL_LOCATORS.HOST;

    /** Inner text input of the phone field. */
    public override readonly input = this.host.locator(
        TUI_INPUT_PHONE_INTERNATIONAL_LOCATORS.INPUT,
    );

    /** Country select of the international phone field. */
    public readonly select = this.host.locator(
        TUI_INPUT_PHONE_INTERNATIONAL_LOCATORS.SELECT,
    );
}
