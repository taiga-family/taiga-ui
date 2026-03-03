import {TuiTextfieldWithDataListPO} from './textfield-with-data-list.po';

export class TuiInputTimePO extends TuiTextfieldWithDataListPO {
    public readonly nativePicker = this.host.locator('input[type="time"]');
}
