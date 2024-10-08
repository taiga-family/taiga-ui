import type {Locator} from '@playwright/test';
import {expect} from '@playwright/test';

export class TuiInputDateRangePO {
    public readonly textfield: Locator = this.host.getByRole('textbox');
    public readonly textfieldIcon: Locator = this.host.getByTestId(
        'tui-input-date-range__icon',
    );

    public readonly calendar: Locator = this.host
        .page()
        .locator('tui-calendar-range, tui-mobile-calendar');

    public readonly items = this.calendar.locator(
        '[automation-id="tui-calendar-range__menu"]',
    );

    constructor(private readonly host: Locator) {}

    public async getItems(): Promise<Locator[]> {
        const dataList = this.calendar.locator(
            '[automation-id="tui-calendar-range__menu"]',
        );

        await expect(dataList).toBeAttached();

        return dataList.locator('[tuiOption]').all();
    }

    public async selectItem(index: number): Promise<void> {
        const items = await this.getItems();

        await items[index]?.click();
    }

    public async itemHasCheckmark(index: number): Promise<boolean> {
        const items = await this.getItems();

        const itemCheckmark = await items[index]
            ?.locator('[automation-id="tui-calendar-range__checkmark"]')
            .count();

        return !!itemCheckmark;
    }
}
