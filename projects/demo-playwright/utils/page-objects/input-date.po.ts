import {type Locator} from '@playwright/test';

export class TuiInputDatePO {
    public readonly textfield: Locator = this.host.getByRole('textbox');
    public readonly calendar: Locator = this.host.page().locator('tui-calendar');

    constructor(public readonly host: Locator) {}
}
