import type {Locator} from '@playwright/test';
import {expect} from '@playwright/test';

export class TuiInputDateRangePO {
    public readonly textfield: Locator = this.host.getByRole('textbox');
    public readonly calendarRange: Locator = this.host
        .page()
        .locator('tui-calendar-range');

    public readonly items = this.calendarRange.locator(
        '[automation-id="tui-calendar-range__menu"]',
    );

    constructor(private readonly host: Locator) {}

    public async getItems(): Promise<Locator[]> {
        const dataList = this.calendarRange.locator(
            '[automation-id="tui-calendar-range__menu"]',
        );

        await expect(dataList).toBeAttached();

        return dataList.locator('[tuiOption]').all();
    }

    public async selectItem(index: number): Promise<void> {
        const items = await this.getItems();

        await items[index].click();
    }

    public async itemHasCheckmark(index: number): Promise<boolean> {
        const items = await this.getItems();

        const itemCheckmark = await items[index]
            .locator('[automation-id="tui-calendar-range__checkmark"]')
            .count();

        return !!itemCheckmark;
    }
}
