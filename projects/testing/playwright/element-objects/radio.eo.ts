import {TuiBaseEO} from './base.eo';
import {withClickable} from '../mixins';

/**
 * Element Object for the TuiRadio component.
 *
 * A wrapper around `<input type="radio" tuiRadio>` that encapsulates interaction
 * with a radio button: selection and state validation.
 *
 * Supports standard radio group behavior — selecting one option automatically
 * deselects others in the same group (controlled by `name` attribute).
 *
 * @example
 * const radio = new TuiRadioEO(page, '#user-type-radio[value="legal"]');
 * await radio.select();
 * await expect(radio.host).toBeChecked();
 */
export class RadioElementObject extends withClickable(TuiBaseEO) {
    /**
     * Selects the radio button if it is not already checked.
     *
     * Throws an error if the element is not visible or disabled.
     *
     * @example
     * await radio.select();
     */
    async select(): Promise<void> {
        await this.host.check();
    }

    /**
     * Returns the text of the associated label, if present.
     *
     * Searches for a `<label>` element that contains this radio button (via DOM nesting or `for` attribute).
     *
     * @returns The label text, or `null` if no label is found
     *
     * @example
     * const text = await radio.getLabel();
     * console.log(text); // e.g. "Legal Entity"
     */
    async getLabel(): Promise<string | null> {
        const label = this.page.locator('label', {has: this.host});
        const text = await label.textContent();

        return text?.trim() || null;
    }
}

export const TuiRadioEO = RadioElementObject;
