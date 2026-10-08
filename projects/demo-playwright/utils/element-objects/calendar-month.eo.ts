import {type Locator} from '@playwright/test';

export class TuiCalendarMonthEO {
    public readonly month = this.host.locator('.t-cell');

    constructor(private readonly host: Locator) {}
}
