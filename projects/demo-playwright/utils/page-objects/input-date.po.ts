import {Locator} from '@playwright/test';

export class TuiInputDatePO {
    readonly textfield: Locator = this.host.getByRole('textbox');
    readonly calendar: Locator = this.host.page().locator('tui-calendar');

    constructor(private readonly host: Locator) {}
}
