import {Locator} from '@playwright/test';

export class TuiInputMonthRangePO {
    readonly textfield: Locator = this.host.getByRole(`textbox`);

    constructor(private readonly host: Locator) {}
}
