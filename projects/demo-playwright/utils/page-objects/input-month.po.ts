import type {Locator} from '@playwright/test';

export class TuiInputMonthPO {
    public readonly cleaner = this.host.locator('.t-clear');
    public readonly textfield: Locator = this.host.getByRole('textbox');
    public readonly calendar: Locator = this.host.page().locator('tui-calendar-month');

    constructor(private readonly host: Locator) {}
}
