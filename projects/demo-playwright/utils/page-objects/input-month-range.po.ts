import {type Locator} from '@playwright/test';

export class TuiInputMonthRangePO {
    public readonly textfield = this.host.getByRole('combobox');

    constructor(private readonly host: Locator) {}
}
