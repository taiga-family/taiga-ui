import type {Locator} from '@playwright/test';
import {TUI_TEXTFIELD_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';
import {withClickable} from '../mixins';

/**
 * Element Object for a TuiTextfield component.
 *
 * Exposes the inner `input` and `cleaner` locators and a helper to click on
 * the trailing icon (e.g. a calendar or arrow icon).
 */
export class TuiTextfieldEO extends withClickable(TuiBaseEO) {
    protected override readonly hostSelector: string = TUI_TEXTFIELD_LOCATORS.HOST;

    /** Inner text input of the textfield. */
    public readonly input = this.host.locator(TUI_TEXTFIELD_LOCATORS.INPUT);

    /** Clear button shown when the field has a value. */
    public readonly cleaner = this.host.locator(TUI_TEXTFIELD_LOCATORS.CLEANER);
    public readonly filler = this.host.locator(TUI_TEXTFIELD_LOCATORS.FILLER);

    /**
     * Clicks the trailing icon of the textfield.
     *
     * The icon position is derived from the host bounding box and the computed
     * `padding-right` / `::after` width, so the click lands on the icon.
     *
     * @param options Playwright click options forwarded to the click.
     * @throws If the icon position cannot be determined.
     */
    public async clickOnIcon(
        options: Parameters<Locator['click']>[0] = {},
    ): Promise<void> {
        const box = await this.host.boundingBox();

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

        if (!box || Number.isNaN(padding) || Number.isNaN(iconWidth)) {
            throw new Error('Unable to determine the icon position');
        }

        await this.click({
            ...options,
            position: {x: box.width - padding - iconWidth, y: box.height / 2},
        });
    }
}
