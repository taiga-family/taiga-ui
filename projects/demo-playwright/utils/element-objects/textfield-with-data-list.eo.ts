import {TuiTextfieldEO} from './textfield.eo';
import {withDataList} from '../mixins';

/**
 * Element Object for a textfield that opens a data-list dropdown
 * (e.g. Select, ComboBox, InputTime, InputPhoneInternational).
 *
 * Composes the textfield behavior with the data-list dropdown.
 */
export class TuiTextfieldWithDataListEO extends withDataList(TuiTextfieldEO) {}
