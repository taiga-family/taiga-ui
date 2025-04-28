import type {Locator} from '@playwright/test';
import {expect} from '@playwright/test';

export class TuiInputMonthPO {
    public readonly cleaner = this.host.locator('.t-clear');
    public readonly textfield: Locator = this.host.locator('[tuiInputMonth]');
    public readonly calendar: Locator = this.host.page().locator('tui-calendar-month');
    public readonly nativePicker = this.host.locator('input[type="month"]');

    constructor(public readonly host: Locator) {}

    public async clickOnIcon(): Promise<void> {
        const box = (await this.host.boundingBox())!;
        const padding = await this.host
            .evaluate((el) =>
                globalThis.getComputedStyle(el).getPropertyValue('padding-right'),
            )
            .then(parseInt);
        const iconWidth = await this.host
            .evaluate((el) =>
                globalThis.getComputedStyle(el, '::after').getPropertyValue('width'),
            )
            .then(parseInt);

        expect(box).not.toBeFalsy();
        expect(padding).not.toBeFalsy();
        expect(iconWidth).not.toBeFalsy();

        await this.host.click({
            position: {x: box.width - padding - iconWidth, y: box.height / 2},
        });
    }
}
