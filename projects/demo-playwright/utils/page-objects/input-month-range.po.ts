import {type Locator} from '@playwright/test';

export class TuiInputMonthRangePO {
    public readonly textfield: Locator = this.host.getByRole('textbox');

    constructor(private readonly host: Locator) {}
}
