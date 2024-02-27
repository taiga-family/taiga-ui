import {expect, Locator} from '@playwright/test';

export class TuiTextfieldWithDataListPO {
    protected readonly textfield: Locator = this.host.getByRole('textbox');
    protected readonly dropdown = this.host.page().locator('tui-dropdown');

    constructor(protected readonly host: Locator) {}

    protected async getOptions(): Promise<Locator[]> {
        await expect(this.dropdown).toBeAttached();

        return this.dropdown.locator('[tuiOption]').all();
    }

    protected async selectOptions(indexes: number[]): Promise<void> {
        const options = await this.getOptions();

        for (const optionIndex of indexes) {
            await options[optionIndex].click();
        }
    }

    protected async scrollDropdown(x: number, y: number): Promise<void>;
    protected async scrollDropdown(options?: ScrollToOptions): Promise<void>;
    protected async scrollDropdown(...args: any[]): Promise<void> {
        await this.dropdown
            .locator('tui-scrollbar')
            .evaluate((el, args) => el.scrollTo(...args), args);

        return this.host.page().waitForTimeout(100); // flaky free
    }

    protected async closeDropdown(): Promise<void> {
        await this.host.press('Escape');

        await expect(this.dropdown).not.toBeAttached();
    }
}
