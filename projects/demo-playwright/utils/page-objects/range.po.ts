import {Locator} from '@playwright/test';

export class TuiRangePO {
    protected readonly left = this.host.locator('input[type=range]:first-child');
    protected readonly right = this.host.locator('input[type=range]:last-child');

    constructor(protected readonly host: Locator) {}
}
