import {Locator} from '@playwright/test';

export class TuiInputMonthPO {
    readonly textfield: Locator = this.host.getByRole('textbox');

    constructor(private readonly host: Locator) {}
}
