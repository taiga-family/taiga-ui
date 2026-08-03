import {expect, type Locator} from '@playwright/test';

import {TuiTextfieldPO} from './textfield.po';
import {TUI_DROPDOWN_LOCATORS} from '@taiga-ui/testing/locators';

export class TuiTextfieldWithDataListPO extends TuiTextfieldPO {
    public readonly dropdown = this.host
        .page()
        .locator(
            `${TUI_DROPDOWN_LOCATORS.DROPDOWN},${TUI_DROPDOWN_LOCATORS.DROPDOWN_MOBILE},${TUI_DROPDOWN_LOCATORS.SHEET_DIALOG}`,
        );

    public async getOptions(): Promise<Locator[]> {
        await expect(this.dropdown).toBeAttached();

        return this.dropdown.locator(TUI_DROPDOWN_LOCATORS.OPTION).all();
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
            .locator(TUI_DROPDOWN_LOCATORS.SCROLLBAR)
            .evaluate((el, args) => el.scrollTo(...args), args);

        return this.host.page().waitForTimeout(100); // flaky free
    }

    public async closeDropdown(): Promise<void> {
        await this.host.press('Escape');

        await expect(this.dropdown).not.toBeAttached();
    }
}
