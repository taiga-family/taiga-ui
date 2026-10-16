import {TuiTextfieldWithDataListEO} from './textfield-with-data-list.eo';

export class TuiInputTimeEO extends TuiTextfieldWithDataListEO {
    public readonly nativePicker = this.host.locator('input[type="time"]');
}
