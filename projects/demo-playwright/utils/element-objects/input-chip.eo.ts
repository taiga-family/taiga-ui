import {expect} from '@playwright/test';
import {TUI_INPUT_CHIP_LOCATORS} from '@taiga-ui/testing/locators';

import {withDataList} from '../mixins';
import {TuiBaseEO} from './base.eo';

/**
 * Element Object for a TuiInputChip component.
 *
 * Exposes the input, rendered chips, clear button and dropdown, plus a helper to
 * add a chip by typing a value and pressing Enter.
 */
export class TuiInputChipEO extends withDataList(TuiBaseEO) {
    protected override readonly hostSelector = TUI_INPUT_CHIP_LOCATORS.HOST;

    /** Inner text input of the chip field. */
    public readonly input = this.host.first().locator(TUI_INPUT_CHIP_LOCATORS.INPUT);

    /** Rendered chips of the field. */
    public readonly chips = this.host.locator(TUI_INPUT_CHIP_LOCATORS.CHIPS);

    /** Clear button shown when the field has chips. */
    public readonly cleaner = this.host.getByRole('button', {name: 'Clear'}).first();

    /**
     * Adds a chip by focusing the input, typing the value and pressing Enter.
     *
     * Waits for the newly added chip to become visible.
     *
     * @param value Text of the chip to add.
     */
    public async addChip(value: string): Promise<void> {
        const initialCount = await this.chips.count();

        await this.input.focus();
        await this.input.fill(value);
        await this.input.press('Enter');
        await this.host.page().waitForTimeout(500);
        await expect.poll(async () => this.chips.count()).toBeGreaterThan(initialCount);
    }
}
