import {expect, type Locator} from '@playwright/test';
import {
    TUI_SCROLLBAR_LOCATORS,
    TUI_TEXTFIELD_WITH_DATA_LIST_LOCATORS,
} from '@taiga-ui/testing/locators';

import {TuiTextfieldPO} from './textfield.po';

export class TuiTextfieldWithDataListPO extends TuiTextfieldPO {
    public readonly dropdown = this.host
        .page()
        .locator(TUI_TEXTFIELD_WITH_DATA_LIST_LOCATORS.DROPDOWN);

    public async getOptions(): Promise<Locator[]> {
        await expect(this.dropdown).toBeAttached();

        return this.dropdown.locator(TUI_TEXTFIELD_WITH_DATA_LIST_LOCATORS.OPTION).all();
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
            .locator(TUI_SCROLLBAR_LOCATORS.HOST)
            .evaluate((el, args) => el.scrollTo(...args), args);

        return this.host.page().waitForTimeout(100); // flaky free
    }

    public async closeDropdown(): Promise<void> {
        await this.host.press('Escape');

        await expect(this.dropdown).not.toBeAttached();
    }
}
