import type {Locator} from '@playwright/test';

export class TuiInputCardGroupPO {
    public readonly numberTextfield = this.host.locator(
        '[automation-id="tui-input-card-group__card"]',
    );

    public readonly cleanerIcon = this.host.locator(
        '[automation-id="tui-input-card-group__cleaner"]',
    );

    public readonly expiryTextfield = this.host.locator(
        '[automation-id="tui-input-card-group__expire"]',
    );

    public readonly cvcTextfield = this.host.locator(
        '[automation-id="tui-input-card-group__cvc"]',
    );

    constructor(private readonly host: Locator) {}
}
