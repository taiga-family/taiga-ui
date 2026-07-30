import {expect, Locator} from '@playwright/test';
import {withClickable, withFocusable} from '../mixins';
import {TuiBaseEO} from './base.eo';
import {TUI_INPUT_RANGE_LOCATORS, TUI_RANGE_LOCATORS} from '@taiga-ui/testing/locators';
import {TuiRangeEO} from './range.eo';

/**
 * Element Object for the TuiInputRange component.
 *
 * Encapsulates interaction with a dual input range control: setting values,
 * retrieving the current range, and managing focus.
 *
 * Delegates slider interaction to `TuiInputRangeEO`.
 *
 * Supports:
 * - Setting values as a tuple [start, end]
 * - Reading the current numeric range
 * - Accessing min/max limits
 * - Checking presence of the interactive slider
 *
 * @example
 * const priceRange = new TuiInputRangeEO(page, 'tui-input-range[automation-id="price"]');
 * await priceRange.setValue([100, 500]);
 * expect(await priceRange.getValue()).toEqual([100, 500]);
 */
export class TuiInputRangeEO extends withFocusable(withClickable(TuiBaseEO)) {
    private readonly rangeEO = new TuiRangeEO(this.page, TUI_RANGE_LOCATORS.HOST);

    /**
     * Sets the range values.
     *
     * @param values [start, end]
     */
    async setValue(values: [number, number]): Promise<void> {
        const [start, end] = values;
        await this.focusStart();
        await this.setInputValue(
            this.host.locator(TUI_INPUT_RANGE_LOCATORS.INPUT_START),
            start,
        );
        await this.focusEnd();
        await this.setInputValue(
            this.host.locator(TUI_INPUT_RANGE_LOCATORS.INPUT_END),
            end,
        );
    }

    /**
     * Returns the current range value as an array [start, end].
     */
    async getValue(): Promise<[number, number]> {
        const start = await this.getInputValue(
            this.host.locator(TUI_INPUT_RANGE_LOCATORS.INPUT_START),
        );
        const end = await this.getInputValue(
            this.host.locator(TUI_INPUT_RANGE_LOCATORS.INPUT_END),
        );

        return [
            isNaN(Number(start)) ? 0 : Number(start),
            isNaN(Number(end)) ? 0 : Number(end),
        ];
    }

    /**
     * Returns the minimum allowed value for the range.
     */
    async getMin(): Promise<number> {
        return parseInt((await this.host.getAttribute('min')) || '0', 10);
    }

    /**
     * Returns the maximum allowed value for the range.
     */
    async getMax(): Promise<number> {
        return parseInt((await this.host.getAttribute('max')) || '100', 10);
    }

    /**
     * Checks if the interactive slider (`tui-range`) is rendered and visible.
     */
    async hasSlider(): Promise<boolean> {
        return this.rangeEO.host.isVisible();
    }

    /**
     * Focuses the start (left) input field.
     */
    private async focusStart(): Promise<void> {
        await this.rangeEO.focusStart();
    }

    /**
     * Focuses the end (right) input field.
     */
    private async focusEnd(): Promise<void> {
        await this.rangeEO.focusEnd();
    }

    /**
     * Sets a numeric value in the specified input field.
     */
    private async setInputValue(locator: Locator, value: number): Promise<void> {
        await expect(locator).toBeVisible();
        await locator.fill(value.toString());
    }

    /**
     * Gets the current input value from the specified field.
     */
    private async getInputValue(locator: Locator): Promise<string> {
        return locator.inputValue();
    }
}
