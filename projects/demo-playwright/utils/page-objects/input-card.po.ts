import type {Locator} from '@playwright/test';

export class TuiInputCardPO {
    public readonly expiryTextfield = this.host.locator('input[tuiInputExpire]').first();

    constructor(private readonly host: Locator) {}
}
