import {BaseElementObject} from './base.eo';
import {withClickable} from '../mixins';
import {TUI_COUNTER_LOCATORS} from '@taiga-ui/testing/locators';

/**
 * Element Object for the TuiCounter component.
 *
 * Encapsulates interaction with the counter: incrementing, decrementing,
 * retrieving the current value, and checking state (e.g. min/max limits).
 *
 * The component consists of two buttons ("–" and "+") and a value display area.
 * Supports visual properties like size and appearance.
 *
 * @example
 * const quantityCounter = new TuiCounterEO(page, 'tui-counter[automation-id="quantity"]');
 * await quantityCounter.increment();
 * expect(await quantityCounter.getValue()).toBe('6');
 */
export class CounterElementObject extends withClickable(BaseElementObject) {
    /**
     * Returns the currently displayed counter value as a string.
     *
     * This is the text content shown in the middle of the counter.
     *
     * @returns The displayed value (e.g. "5", "10") or empty string if not found
     *
     * @example
     * const value = await counter.getValue();
     * console.log(value); // "7"
     */
    async getValue(): Promise<string> {
        const text = await this.host
            .locator(TUI_COUNTER_LOCATORS.VALUE_SELECTOR)
            .textContent();
        return text?.trim() || '';
    }

    /**
     * Returns the numeric value of the counter.
     *
     * Parses the displayed text into a number. Returns 0 if parsing fails.
     *
     * @returns The parsed numeric value
     *
     * @example
     * const num = await counter.getNumericValue();
     * console.log(num); // 7
     */
    async getNumericValue(): Promise<number> {
        const text = await this.getValue();
        const num = parseFloat(text?.trim() || '0');
        return isNaN(num) ? 0 : num;
    }

    /**
     * Increments the counter by 1 (clicks the "+" button).
     *
     * Throws an error if the button is not visible or is disabled
     * (e.g. when the `max` limit is reached).
     *
     * @example
     * await counter.increment();
     */
    async increment(): Promise<void> {
        const button = this.host.locator(TUI_COUNTER_LOCATORS.INCREASE_BUTTON);
        await button.waitFor({state: 'visible'});
        await button.click();
    }

    /**
     * Decrements the counter by 1 (clicks the "–" button).
     *
     * Throws an error if the button is not visible or is disabled
     * (e.g. when the `min` limit is reached).
     *
     * @example
     * await counter.decrement();
     */
    async decrement(): Promise<void> {
        const button = this.host.locator(TUI_COUNTER_LOCATORS.DECREASE_BUTTON);
        await button.waitFor({state: 'visible'});
        await button.click();
    }

    /**
     * Checks whether the increment button is currently enabled.
     *
     * Useful for verifying if the counter can be increased (e.g. max not reached).
     *
     * @returns `true` if the "+" button is enabled, `false` otherwise
     *
     * @example
     * if (await counter.canIncrement()) {
     *   await counter.increment();
     * }
     */
    async canIncrement(): Promise<boolean> {
        const button = this.host.locator(TUI_COUNTER_LOCATORS.INCREASE_BUTTON);
        return !(await button.isDisabled());
    }

    /**
     * Checks whether the decrement button is currently enabled.
     *
     * Useful for verifying if the counter can be decreased (e.g. min not reached).
     *
     * @returns `true` if the "–" button is enabled, `false` otherwise
     *
     * @example
     * if (await counter.canDecrement()) {
     *   await counter.decrement();
     * }
     */
    async canDecrement(): Promise<boolean> {
        const button = this.host.locator(TUI_COUNTER_LOCATORS.DECREASE_BUTTON);
        return !(await button.isDisabled());
    }

    /**
     * Returns the size of the counter.
     *
     * Reflects the `data-size` attribute: 'l' (large), 'm' (medium), 's' (small).
     *
     * @returns One of 'l', 'm', 's', or empty string if not set
     *
     * @example
     * expect(await counter.getSize()).toBe('m');
     */
    async getSize(): Promise<'l' | 'm' | 's' | ''> {
        return (await this.host.getAttribute('data-size')) as 'l' | 'm' | 's' | '';
    }

    /**
     * Returns the visual appearance of the counter.
     *
     * Reflects the `data-appearance` attribute (e.g. 'primary', 'flat').
     *
     * @returns Appearance value or `null` if not set
     *
     * @example
     * expect(await counter.getAppearance()).toBe('primary');
     */
    async getAppearance(): Promise<string | null> {
        return this.host.getAttribute('data-appearance');
    }
}

export const TuiCounterEO = CounterElementObject;
