import type {Locator} from '@playwright/test';

export class TuiRangePO {
    public readonly left = this.host.locator('input[type=range]:first-child');
    public readonly right = this.host.locator('input[type=range]:last-child');

    constructor(public readonly host: Locator) {}
}
