import {Locator} from '@playwright/test';

export class TuiInputCardGroupedPO {
    readonly cardGroupInput = this.host.locator(
        `[automation-id="tui-input-card-grouped__card"]`,
    );

    readonly cleanerIcon = this.host.locator(
        `[automation-id="tui-input-card-grouped__cleaner"]`,
    );

    readonly cardExpiryInput = this.host.locator(
        `[automation-id="tui-input-card-grouped__expire"]`,
    );

    readonly cardCvcInput = this.host.locator(
        `[automation-id="tui-input-card-grouped__cvc"]`,
    );

    constructor(private readonly host: Locator) {}
}
