import {Locator} from '@playwright/test';

export class TuiInputCardGroupedPO {
    readonly numberTextfield = this.host.getByTestId('tui-input-card-grouped__card');
    readonly cleanerIcon = this.host.getByTestId('tui-input-card-grouped__cleaner');
    readonly expiryTextfield = this.host.getByTestId('tui-input-card-grouped__expire');
    readonly cvcTextfield = this.host.getByTestId('tui-input-card-grouped__cvc');

    constructor(private readonly host: Locator) {}
}
