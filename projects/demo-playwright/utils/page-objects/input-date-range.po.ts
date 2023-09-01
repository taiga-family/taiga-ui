import {Locator} from '@playwright/test';

export class TuiInputDateRangePO {
    readonly textfield: Locator = this.host.getByRole(`textbox`);
    readonly calendar: Locator = this.host.page().locator(`tui-calendar-range`);

    constructor(private readonly host: Locator) {}
}
