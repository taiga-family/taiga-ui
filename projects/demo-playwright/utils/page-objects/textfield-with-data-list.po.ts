import {expect, type Locator} from '@playwright/test';

export class TuiTextfieldWithDataListPO {
    public readonly textfield: Locator = this.host.getByRole('combobox');
    public readonly dropdown = this.host
        .page()
        .locator('tui-dropdown,tui-dropdown-mobile,tui-sheet-dialog');

    constructor(protected readonly host: Locator) {}

    public async getOptions(): Promise<Locator[]> {
        await expect(this.dropdown).toBeAttached();

        return this.dropdown.locator('[tuiOption]').all();
    }

    public async selectOptions(indexes: number[]): Promise<void> {
        const options = await this.getOptions();

        for (const optionIndex of indexes) {
            await options[optionIndex]?.click();
        }
    }

    public async scrollDropdown(x: number, y: number): Promise<void>;
    public async scrollDropdown(options?: ScrollToOptions): Promise<void>;
    public async scrollDropdown(...args: any[]): Promise<void> {
        await this.dropdown
            .locator('tui-scrollbar')
            .evaluate((el, args) => el.scrollTo(...args), args);

        return this.host.page().waitForTimeout(100); // flaky free
    }

    public async closeDropdown(): Promise<void> {
        await this.host.press('Escape');

        await expect(this.dropdown).not.toBeAttached();
    }
}
