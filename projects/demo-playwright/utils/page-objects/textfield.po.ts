import {expect, type Locator} from '@playwright/test';
import {TUI_TEXTFIELD_LOCATORS} from '@taiga-ui/testing/locators';

export class TuiTextfieldPO {
    public readonly textfield = this.host.locator(TUI_TEXTFIELD_LOCATORS.INPUT);
    public readonly cleaner = this.host.locator(TUI_TEXTFIELD_LOCATORS.CLEANER);

    constructor(public readonly host: Locator) {}

    public async clickOnIcon(
        options: Parameters<Locator['click']>[0] = {},
    ): Promise<void> {
        const box = (await this.host.boundingBox())!;

        const padding = await this.host
            .evaluate((el) =>
                globalThis.getComputedStyle(el).getPropertyValue('padding-right'),
            )
            .then(Number.parseInt);

        const iconWidth = await this.host
            .evaluate((el) =>
                globalThis.getComputedStyle(el, '::after').getPropertyValue('width'),
            )
            .then(Number.parseInt);

        expect(box).not.toBeFalsy();
        expect(padding).not.toBeFalsy();
        expect(iconWidth).not.toBeFalsy();

        await this.host.click({
            ...options,
            position: {x: box.width - padding - iconWidth, y: box.height / 2},
        });
    }
}
