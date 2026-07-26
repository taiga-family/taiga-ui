import {TuiTextfieldPO} from './textfield.po';

export class TuiInputMonthPO extends TuiTextfieldPO {
    public override readonly textfield = this.host.locator(
        '[tuiInputMonth], [tuiInputMonthRange]',
    );

    public readonly calendar = this.host.page().locator('tui-calendar-month');
    public readonly nativePicker = this.host.locator('input[type="month"]');
}
