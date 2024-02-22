import {Locator} from '@playwright/test';

export class TuiInputCardGroupedPO {
    protected readonly numberTextfield = this.host.locator(
        '[automation-id="tui-input-card-grouped__card"]',
    );

    protected readonly cleanerIcon = this.host.locator(
        '[automation-id="tui-input-card-grouped__cleaner"]',
    );

    protected readonly expiryTextfield = this.host.locator(
        '[automation-id="tui-input-card-grouped__expire"]',
    );

    protected readonly cvcTextfield = this.host.locator(
        '[automation-id="tui-input-card-grouped__cvc"]',
    );

    constructor(private readonly host: Locator) {}
}
