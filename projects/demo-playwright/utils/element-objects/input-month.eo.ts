import {TuiTextfieldEO} from './textfield.eo';

export class TuiInputMonthEO extends TuiTextfieldEO {
    public override readonly textfield = this.host.locator(
        '[tuiInputMonth], [tuiInputMonthRange]',
    );

    public readonly calendar = this.host.page().locator('tui-calendar-month');
    public readonly nativePicker = this.host.locator('input[type="month"]');
}
