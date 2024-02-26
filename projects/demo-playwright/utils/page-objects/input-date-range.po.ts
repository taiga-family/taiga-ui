import {expect, Locator} from '@playwright/test';

export class TuiInputDateRangePO {
    protected readonly textfield: Locator = this.host.getByRole('textbox');
    protected readonly calendarRange: Locator = this.host
        .page()
        .locator('tui-calendar-range');

    protected readonly items = this.calendarRange.locator(
        '[automation-id="tui-calendar-range__menu"]',
    );

    constructor(private readonly host: Locator) {}

    protected async getItems(): Promise<Locator[]> {
        const dataList = this.calendarRange.locator(
            '[automation-id="tui-calendar-range__menu"]',
        );

        await expect(dataList).toBeAttached();

        return dataList.locator('[tuiOption]').all();
    }

    protected async selectItem(index: number): Promise<void> {
        const items = await this.getItems();

        await items[index].click();
    }
}
