import {Locator} from '@playwright/test';

export class TuiInputTimePO {
    readonly textfield: Locator = this.host.getByRole(`textbox`);
    readonly dropdown = this.host.page().locator(`tui-dropdown`);

    constructor(private readonly host: Locator) {}

    async scrollDropdown(x: number, y: number): Promise<void>;
    async scrollDropdown(options?: ScrollToOptions): Promise<void>;
    async scrollDropdown(...args: any[]): Promise<void> {
        await this.dropdown
            .locator(`tui-scrollbar`)
            .evaluate((el, args) => el.scrollTo(...args), args);

        return this.host.page().waitForTimeout(100); // flaky free
    }
}
