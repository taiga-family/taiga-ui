import {expect, Locator} from '@playwright/test';
import {withClickable, withFocusable} from '../mixins';
import {TuiBaseEO} from './base.eo';
import {TUI_INPUT_RANGE_LOCATORS} from '@taiga-ui/testing/locators';

/**
 * Element Object for the TuiInputRange component.
 *
 * Encapsulates interaction with a dual input range control: setting values,
 * retrieving the current range, and managing focus.
 *
 * Supports:
 * - Setting values as a tuple [start, end]
 * - Reading the current numeric range
 * - Accessing min/max limits
 * - Checking presence of the interactive slider
 *
 * The component includes two input fields and an optional slider (`tui-range`).
 * Focus management uses test IDs to target specific thumbs.
 *
 * @example
 * const priceRange = new TuiInputRangeEO(page, 'tui-input-range[automation-id="price"]');
 * await priceRange.setValue([100, 500]);
 * expect(await priceRange.getValue()).toEqual([100, 500]);
 */
class InputRangeElementObject extends withFocusable(withClickable(TuiBaseEO)) {
    /**
     * Sets the range values.
     *
     * @param values A tuple of two numbers: [start, end]
     *
     * @example
     * await range.setValue([50, 150]);
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
     * Returns the current range value as a tuple [start, end].
     *
     * If a field is empty or invalid, returns 0 for that value.
     *
     * @returns [start: number, end: number]
     *
     * @example
     * const [min, max] = await range.getValue();
     * console.log(min, max); // 100, 500
     */
    async getValue(): Promise<[number, number]> {
        const start = await this.getInputValue('start');
        const end = await this.getInputValue('end');

        return [
            isNaN(Number(start)) ? 0 : Number(start),
            isNaN(Number(end)) ? 0 : Number(end),
        ];
    }

    /**
     * Returns the minimum allowed value for the range.
     *
     * Reads the `min` attribute from the host. Defaults to 0 if not set.
     *
     * @returns The min value
     */
    async getMin(): Promise<number> {
        return parseInt((await this.host.getAttribute('min')) || '0', 10);
    }

    /**
     * Returns the maximum allowed value for the range.
     *
     * Reads the `max` attribute from the host. Defaults to 100 if not set.
     *
     * @returns The max value
     */
    async getMax(): Promise<number> {
        return parseInt((await this.host.getAttribute('max')) || '100', 10);
    }

    /**
     * Checks if the interactive slider (`tui-range`) is rendered and visible.
     *
     * Useful for verifying whether the component is in interactive mode.
     *
     * @returns `true` if the slider is visible
     */
    async hasSlider(): Promise<boolean> {
        return this.host.locator(TUI_INPUT_RANGE_LOCATORS.HOST).isVisible();
    }

    /**
     * Focuses the start (left) input field.
     *
     * Uses `getByTestId('tui-range__left')` to locate the focus target.
     */
    private async focusStart(): Promise<void> {
        await this.focus(this.host.getByTestId(TUI_INPUT_RANGE_LOCATORS.RANGE_START));
    }

    /**
     * Focuses the end (right) input field.
     *
     * Uses `getByTestId('tui-range__right')` to locate the focus target.
     */
    private async focusEnd(): Promise<void> {
        await this.focus(this.host.getByTestId(TUI_INPUT_RANGE_LOCATORS.RANGE_END));
    }

    /**
     * Sets a numeric value in the specified input field.
     *
     * @param locator Locator of the input field
     * @param value Numeric value to set
     *
     * @throws Error if the input is not visible
     */
    private async setInputValue(locator: Locator, value: number): Promise<void> {
        await expect(locator).toBeVisible();
        await locator.fill(value.toString());
    }

    /**
     * Gets the current input value from the specified field.
     *
     * @param target 'start' | 'end' — which input to read
     * @returns The input value as a string
     */
    private async getInputValue(target: 'start' | 'end'): Promise<string> {
        const locator =
            target === 'start'
                ? this.host.locator(TUI_INPUT_RANGE_LOCATORS.INPUT_START)
                : this.host.locator(TUI_INPUT_RANGE_LOCATORS.INPUT_END);
        return locator.inputValue();
    }
}

export const TuiInputRangeEO = InputRangeElementObject;
