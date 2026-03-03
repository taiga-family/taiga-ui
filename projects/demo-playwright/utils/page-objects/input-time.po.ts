import {expect, type Locator} from '@playwright/test';

import {TuiTextfieldWithDataListPO} from './textfield-with-data-list.po';

export class TuiInputTimePO extends TuiTextfieldWithDataListPO {
    public readonly nativePicker = this.host.locator('input[type="time"]');

    public async clickOnIcon(
        options: Parameters<Locator['click']>[0] = {},
    ): Promise<void> {
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
            ...options,
            position: {x: box.width - padding - iconWidth, y: box.height / 2},
        });
    }
}
