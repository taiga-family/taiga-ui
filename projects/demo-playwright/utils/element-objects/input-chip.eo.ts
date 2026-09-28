import {expect, Locator} from '@playwright/test';
import {
    TUI_DROPDOWN_LOCATORS,
    TUI_DROPDOWN_MOBILE_LOCATORS,
    TUI_INPUT_CHIP_LOCATORS,
    TUI_SHEET_DIALOG_LOCATORS,
    TUI_TEXTFIELD_LOCATORS,
} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

export class TuiInputChipEO extends TuiBaseEO {
    public readonly input = this.host
        .locator(TUI_TEXTFIELD_LOCATORS.HOST)
        .first()
        .locator(TUI_INPUT_CHIP_LOCATORS.INPUT);
    public readonly chips = this.host.locator(TUI_INPUT_CHIP_LOCATORS.CHIPS);
    public readonly cleaner = this.host.getByRole('button', {name: 'Clear'}).first();

    public readonly dropdown = this.host
        .page()
        .locator(
            `${TUI_DROPDOWN_LOCATORS.HOST},${TUI_DROPDOWN_MOBILE_LOCATORS.HOST},${TUI_SHEET_DIALOG_LOCATORS.HOST}`,
        );

    public get host(): Locator {
        return this.page.locator(TUI_INPUT_CHIP_LOCATORS.HOST);
    }

    public async addChip(value: string): Promise<void> {
        const initialCount = await this.chips.count();

        await this.input.focus();
        await this.input.fill(value);
        await this.input.press('Enter');
        await this.host.page().waitForTimeout(500);
        await expect.poll(async () => this.chips.count()).toBeGreaterThan(initialCount);
    }
}
