import {TUI_SLIDER_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

/**
 * Element Object for a TuiSlider component.
 *
 * Provides helpers to read the current value and fill percentage and to set the
 * value programmatically.
 */
export class TuiSliderEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_SLIDER_LOCATORS.HOST;

    /**
     * Returns the current numeric value of the slider.
     */
    public async getValue(): Promise<number> {
        return this.host.inputValue().then(Number);
    }

    /**
     * Returns the current fill percentage of the slider track (0-100).
     */
    public async getFilledPercentage(): Promise<number> {
        return this.host.evaluate((el) =>
            Math.round(
                Number.parseFloat(
                    globalThis
                        .getComputedStyle(el)
                        .getPropertyValue('--tui-slider-fill-ratio'),
                ) * 100,
            ),
        );
    }

    /**
     * Sets the slider value programmatically by dispatching an `input` event.
     *
     * @param value Numeric value to set.
     */
    public async setValue(value: number): Promise<void> {
        await this.host.evaluate((el: HTMLInputElement, newValue: number) => {
            el.value = `${newValue}`;
            el.dispatchEvent(new Event('input'));
        }, value);
    }
}
