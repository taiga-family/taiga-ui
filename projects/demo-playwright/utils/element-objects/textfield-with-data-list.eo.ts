import {withDataList} from '../mixins';
import {TuiTextfieldEO} from './textfield.eo';

/**
 * Element Object for a textfield that opens a data-list dropdown
 * (e.g. Select, ComboBox, InputTime, InputPhoneInternational).
 *
 * Composes the textfield behavior with the data-list dropdown.
 */
export class TuiTextfieldWithDataListEO extends withDataList(TuiTextfieldEO) {}
