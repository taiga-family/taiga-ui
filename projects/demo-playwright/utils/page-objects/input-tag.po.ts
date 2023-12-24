import {TuiTextfieldWithDataListPO} from './textfield-with-data-list.po';

export class TuiInputTagPO extends TuiTextfieldWithDataListPO {
    readonly cleaner = this.host.getByTestId('tui-input-tag__cleaner');
}
