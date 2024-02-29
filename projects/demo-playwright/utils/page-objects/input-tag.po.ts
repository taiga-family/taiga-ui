import {TuiTextfieldWithDataListPO} from './textfield-with-data-list.po';

export class TuiInputTagPO extends TuiTextfieldWithDataListPO {
    public readonly cleaner = this.host.locator(
        '[automation-id="tui-input-tag__cleaner"]',
    );
}
