import {TuiBaseEO} from './base.eo';
import {withClickable} from '../mixins';

/**
 * Element Object for the TuiCheckbox component.
 *
 * A wrapper around `<input type="checkbox" tuiCheckbox>` that encapsulates interactions
 * with the checkbox: checking, unchecking, and state validation.
 *
 * Supports standard states:
 * - checked
 * - indeterminate
 * - disabled
 *
 * The component is typically used with a label, which may contain additional content.
 *
 * @example
 * const agreeCheckbox = new TuiCheckboxEO(page, '[automation-id="price"]');
 * await agreeCheckbox.setChecked(true);
 * await expect(agreeCheckbox.host).toBeChecked();
 */
export class TuiCheckboxEO extends withClickable(TuiBaseEO) {
    /**
     * Sets the checkbox to the specified state.
     *
     * Does nothing if the checkbox is already in the target state.
     *
     * @param checked `true` to check, `false` to uncheck
     *
     * @example
     * await checkbox.setChecked(true); // checks the checkbox
     * await checkbox.setChecked(false); // unchecks the checkbox
     */
    async setChecked(checked: boolean): Promise<void> {
        await this.host.setChecked(checked);
    }

    /**
     * Returns the text of the associated label, if present.
     *
     * Searches for a `<label>` element that contains this checkbox (via DOM nesting or `for` attribute).
     *
     * @returns The label text, or `null` if no label is found
     *
     * @example
     * const text = await checkbox.getLabel(); // e.g. "I agree to the terms and conditions"
     */
    async getLabel(): Promise<string | null> {
        const label = this.page.locator('label', {has: this.host});
        const text = await label.textContent();
        return text?.trim() || null;
    }
}
