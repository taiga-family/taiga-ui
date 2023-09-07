import {expect, Locator} from '@playwright/test';

export class TuiTextfieldWithDataListPO {
    readonly textfield: Locator = this.host.getByRole(`textbox`);
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

    async scrollDropdown(x: number, y: number): Promise<void>;
    async scrollDropdown(options?: ScrollToOptions): Promise<void>;
    async scrollDropdown(...args: any[]): Promise<void> {
        await this.dropdown
            .locator(`tui-scrollbar`)
            .evaluate((el, args) => el.scrollTo(...args), args);

        return this.host.page().waitForTimeout(100); // flaky free
    }

    async closeDropdown(): Promise<void> {
        await this.host.press(`Escape`);

        await expect(this.dropdown).not.toBeAttached();
    }
}
