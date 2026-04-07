import {type Locator} from '@playwright/test';

export class TuiInputDatePO {
    public readonly textfield = this.host.getByRole('combobox');
    public readonly calendar = this.host.page().locator('tui-calendar');
    public readonly nativePicker = this.host.locator('input[type="date"]');

    constructor(public readonly host: Locator) {}
}
