import type {Locator} from '@playwright/test';

export class TuiMobileDropdownPO {
    public overlay = this.host.locator('.t-filler');

    constructor(private readonly host: Locator) {}
}
