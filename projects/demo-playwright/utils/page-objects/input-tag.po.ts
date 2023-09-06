import {expect, Locator} from '@playwright/test';

export class TuiInputTagPO {
    readonly textfield: Locator = this.host.getByRole(`textbox`);
    readonly cleaner = this.host.locator(`[automation-id="tui-input-tag__cleaner"]`);
    readonly dropdown = this.host.page().locator(`tui-dropdown`);

    constructor(protected readonly host: Locator) {}

    async getOptions(): Promise<Locator[]> {
        await expect(this.dropdown).toBeAttached();

        return this.dropdown.locator(`[tuiOption]`).all();
    }

    async selectOptions(indexes: number[]): Promise<void> {
        const options = await this.getOptions();

        for (const optionIndex of indexes) {
            await options[optionIndex].click();
        }
    }

    async closeDropdown(): Promise<void> {
        await this.host.press(`Escape`);

        await expect(this.dropdown).not.toBeAttached();
    }
}
