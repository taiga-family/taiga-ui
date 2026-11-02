import {TUI_SELECT_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiTextfieldEO} from './textfield.eo';
import {withDataList} from '../mixins';

/**
 * Element Object for a TuiSelect component.
 *
 * Composes the textfield behavior with the data-list dropdown.
 */
export class TuiSelectEO extends withDataList(TuiTextfieldEO) {
    protected override readonly hostSelector = TUI_SELECT_LOCATORS.HOST;
}
