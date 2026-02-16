import {expect, type Locator} from '@playwright/test';

export class TuiInputChipPO {
    public readonly input: Locator;
    public readonly chips = this.host.locator('.t-items tui-textfield-item');
    public readonly cleaner = this.host.getByRole('button', {name: 'Clear'}).first();
    public readonly dropdown = this.host
        .page()
        .locator('tui-dropdown,tui-dropdown-mobile,tui-sheet-dialog');

    constructor(public readonly host: Locator) {
        this.input = host.locator('tui-textfield').first().locator('input[tuiInputChip]');
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
