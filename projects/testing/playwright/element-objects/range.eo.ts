import {expect} from '@playwright/test';
import {TuiBaseEO} from './base.eo';
import {TUI_RANGE_LOCATORS} from '@taiga-ui/testing/locators';
import {withFocusable} from '../mixins';

/**
 * ElementObject for the TuiRange component.
 *
 * Encapsulates interaction with the visual dual slider.
 *
 * Supports:
 * - Getting/setting values via slider thumbs
 * - Keyboard navigation
 * - Focus management
 * - Reading min/max/step
 *
 * The component consists of two `<input type="range">` elements styled as thumbs.
 *
 * @example
 * const range = new TuiRangeEO(page, 'tui-range');
 * await range.setValue([20, 80]);
 * expect(await range.getValue()).toEqual([20, 80]);
 *
 * @example
 * await range.focusStart();
 * await range.pressArrowRight();
 * await range.pressArrowRight();
 */
export class TuiRangeEO extends withFocusable(TuiBaseEO) {
    private readonly RANGE_START = TUI_RANGE_LOCATORS.RANGE_START;
    private readonly RANGE_END = TUI_RANGE_LOCATORS.RANGE_END;

    /**
     * Returns the current value of the range as [start, end].
     */
    async getValue(): Promise<[number, number]> {
        const startValue = await this.getStartValue();
        const endValue = await this.getEndValue();

        return [startValue, endValue];
    }

    /**
     * Returns the current value of the range start.
     */
    async getStartValue(): Promise<number> {
        const startValue = await this.host.locator(this.RANGE_START).inputValue();

        return parseFloat(startValue);
    }

    /**
     * Returns the current value of the range end.
     */
    async getEndValue(): Promise<number> {
        const endValue = await this.host.locator(this.RANGE_END).inputValue();

        return parseFloat(endValue);
    }

    /**
     * Sets the range values by filling the underlying range inputs.
     *
     * @param values [start, end] — values within min/max
     *
     * @example
     * await range.setValue([10, 90]);
     */
    async setValue(values: [number, number]): Promise<void> {
        const [start, end] = values;
        const startThumb = this.host.locator(this.RANGE_START);
        const endThumb = this.host.locator(this.RANGE_END);

        await expect(startThumb).toBeVisible();
        await expect(endThumb).toBeVisible();

        await startThumb.fill(start.toString());
        await endThumb.fill(end.toString());
    }

    /**
     * Focuses the start (left) thumb.
     */
    async focusStart(): Promise<void> {
        await this.focus(this.host.locator(this.RANGE_START));
    }

    /**
     * Focuses the end (right) thumb.
     */
    async focusEnd(): Promise<void> {
        await this.focus(this.host.locator(this.RANGE_END));
    }

    /**
     * Increases value of the focused thumb through pressing arrowRight.
     */
    async stepUp(): Promise<void> {
        await this.page.keyboard.press('ArrowUp');
    }

    /**
     * Decreases value of the focused thumb through pressing arrowLeft.
     */
    async stepDown(): Promise<void> {
        await this.page.keyboard.press('ArrowDown');
    }

    /**
     * Increases value of the focused thumb through pressing arrowRight.
     */
    async stepRight(): Promise<void> {
        await this.page.keyboard.press('ArrowRight');
    }

    /**
     * Decreases value of the focused thumb through pressing arrowLeft.
     */
    async stepLeft(): Promise<void> {
        await this.page.keyboard.press('ArrowLeft');
    }

    /**
     * Returns the minimum value of the range.
     */
    async getMin(): Promise<number> {
        return parseInt(
            (await this.host.locator(this.RANGE_START).getAttribute('min')) || '0',
            10,
        );
    }

    /**
     * Returns the maximum value of the range.
     */
    async getMax(): Promise<number> {
        return parseInt(
            (await this.host.locator(this.RANGE_END).getAttribute('max')) || '100',
            10,
        );
    }

    /**
     * Returns the step size.
     */
    async getStep(): Promise<number> {
        return parseFloat(
            (await this.host.locator(this.RANGE_START).getAttribute('step')) || '1',
        );
    }
}
