import {withDataList} from '../mixins';
import {TuiTextfieldEO} from './textfield.eo';

/**
 * Element Object for a TuiComboBox component.
 *
 * Composes the textfield behavior with the data-list dropdown.
 */
export class TuiComboBoxEO extends withDataList(TuiTextfieldEO) {}
