import {expect, Locator} from '@playwright/test';

export class TuiInputDateRangePO {
    readonly textfield: Locator = this.host.getByRole(`textbox`);
    readonly calendarRange: Locator = this.host.page().locator(`tui-calendar-range`);
    readonly items = this.calendarRange.locator(
        `[automation-id="tui-calendar-range__menu"]`,
    );

    constructor(private readonly host: Locator) {}

    async getItems(): Promise<Locator[]> {
        const dataList = this.calendarRange.locator(
            `[automation-id="tui-calendar-range__menu"]`,
        );

        await expect(dataList).toBeAttached();

        return dataList.locator(`[tuiOption]`).all();
    }

    async selectItem(index: number): Promise<void> {
        const items = await this.getItems();

        await items[index].click();
    }
}
