import type {Locator} from '@playwright/test';

export class TuiInputPhonePO {
    public readonly textfield = this.host.getByRole('textbox');
    public readonly cleaner = this.host.locator(
        '[automation-id="tui-primitive-textfield__cleaner"]',
    );

    constructor(private readonly host: Locator) {}
}
