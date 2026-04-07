import {TuiTextfieldWithDataListPO} from './textfield-with-data-list.po';

export class TuiInputPhoneInternationalPO extends TuiTextfieldWithDataListPO {
    public select = this.host.locator('.t-ipi-select');
}
