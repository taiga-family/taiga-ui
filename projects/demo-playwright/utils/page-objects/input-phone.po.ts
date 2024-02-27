import {Locator} from '@playwright/test';

export class TuiInputPhonePO {
    protected readonly textfield = this.host.getByRole('textbox');
    protected readonly cleaner = this.host.locator(
        '[automation-id="tui-primitive-textfield__cleaner"]',
    );

    constructor(private readonly host: Locator) {}
}
