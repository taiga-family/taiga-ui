import type {Locator} from '@playwright/test';

export class TuiInputDatePO {
    public readonly textfield: Locator = this.host.getByRole('textbox');
    public readonly calendar: Locator = this.host.page().locator('tui-calendar');
    public readonly itemButton: Locator = this.host
        .page()
        .locator('tui-dropdown tui-calendar ~ * button');

    constructor(private readonly host: Locator) {}
}
