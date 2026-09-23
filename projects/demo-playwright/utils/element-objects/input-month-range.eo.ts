import {type Locator} from '@playwright/test';

export class TuiInputMonthRangeEO {
    public readonly textfield = this.host.getByRole('combobox');

    constructor(private readonly host: Locator) {}
}
