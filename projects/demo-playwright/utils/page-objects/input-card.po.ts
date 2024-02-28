import {Locator} from '@playwright/test';

export class TuiInputCardPO {
    public readonly expiryTextfield = this.host
        .locator('tui-input-expire')
        .locator('input')
        .first();

    constructor(private readonly host: Locator) {}
}
