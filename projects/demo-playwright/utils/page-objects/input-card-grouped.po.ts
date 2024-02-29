import {Locator} from '@playwright/test';

export class TuiInputCardGroupedPO {
    public readonly numberTextfield = this.host.locator(
        '[automation-id="tui-input-card-grouped__card"]',
    );

    public readonly cleanerIcon = this.host.locator(
        '[automation-id="tui-input-card-grouped__cleaner"]',
    );

    public readonly expiryTextfield = this.host.locator(
        '[automation-id="tui-input-card-grouped__expire"]',
    );

    public readonly cvcTextfield = this.host.locator(
        '[automation-id="tui-input-card-grouped__cvc"]',
    );

    constructor(private readonly host: Locator) {}
}
