import {Locator} from '@playwright/test';

export class TuiInputDatePO {
    readonly textfield: Locator = this.host.getByRole('textbox');
    readonly calendar: Locator = this.host.page().locator('tui-calendar');
    readonly itemButton: Locator = this.host
        .page()
        .locator('tui-dropdown tui-calendar ~ * button');

    constructor(private readonly host: Locator) {}
}
