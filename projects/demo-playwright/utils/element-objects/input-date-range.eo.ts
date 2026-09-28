import {expect, type Locator} from '@playwright/test';
import {TuiBaseEO} from './base.eo';
import {TUI_INPUT_DATE_RANGE_LOCATORS} from '@taiga-ui/testing/locators';

export class TuiInputDateRangeEO extends TuiBaseEO {
    public readonly textfield = this.host.getByRole('combobox');

    public readonly calendar = this.host
        .page()
        .locator('tui-calendar-range, tui-mobile-calendar');

    public readonly items = this.calendar.locator(
        '[automation-id="tui-calendar-range__menu"]',
    );

    public readonly template = this.host.locator('.t-template');

    public get host(): Locator {
        return this.page.locator(TUI_INPUT_DATE_RANGE_LOCATORS.HOST);
    }

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
