import {type Locator} from '@playwright/test';

export class TuiInputDatePO {
    public readonly textfield: Locator = this.host.getByRole('combobox');
    public readonly calendar: Locator = this.host.page().locator('tui-calendar');
    public readonly nativePicker = this.host.locator('input[type="date"]');

    constructor(public readonly host: Locator) {}
}
