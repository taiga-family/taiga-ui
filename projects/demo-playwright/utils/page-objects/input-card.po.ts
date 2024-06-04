import type {Page} from '@playwright/test';

export class TuiInputCardPO {
    public readonly expiryTextfield = this.page.locator('input[tuiInputExpire]').first();

    constructor(private readonly page: Page) {}
}
