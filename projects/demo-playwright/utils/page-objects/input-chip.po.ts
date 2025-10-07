import {type Locator} from '@playwright/test';

export class TuiInputChipPO {
    public readonly input: Locator;

    constructor(host: Locator) {
        this.input = host.locator('tui-textfield').first().locator('input[tuiInputChip]');
    }

    public async addChip(value: string): Promise<void> {
        await this.input.focus();
        await this.input.fill(value);
        await this.input.press('Enter');
    }
}
