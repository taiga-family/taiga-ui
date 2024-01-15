import {Locator} from '@playwright/test';

export class TuiRangePO {
    readonly left = this.host.locator('input[type=range]:first-child');
    readonly right = this.host.locator('input[type=range]:last-child');

    constructor(readonly host: Locator) {}
}
