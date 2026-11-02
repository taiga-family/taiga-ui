import {TuiTextfieldEO} from './textfield.eo';
import {withDataList} from '../mixins';

/**
 * Element Object for a TuiComboBox component.
 *
 * Composes the textfield behavior with the data-list dropdown.
 */
export class TuiComboBoxEO extends withDataList(TuiTextfieldEO) {}
