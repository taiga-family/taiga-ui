import {type Locator} from '@playwright/test';

export class TuiRangePO {
    public readonly start = this.host.locator('input[type=range]:first-child');
    public readonly end = this.host.locator('input[type=range]:last-child');

    constructor(public readonly host: Locator) {}
}
