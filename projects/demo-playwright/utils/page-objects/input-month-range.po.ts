import {type Locator} from '@playwright/test';

export class TuiInputMonthRangePO {
    public readonly textfield: Locator = this.host.getByRole('combobox');

    constructor(private readonly host: Locator) {}
}
