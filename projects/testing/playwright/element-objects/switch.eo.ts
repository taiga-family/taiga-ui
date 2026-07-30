import {TuiBaseEO} from './base.eo';
import {withClickable} from '../mixins';

/**
 * Element Object for the TuiSwitch component.
 *
 * A wrapper around `<input type="checkbox" tuiSwitch>` that encapsulates interaction
 * with a toggle switch: turning it on/off and checking its state.
 *
 * Supports:
 * - Optional icons in on/off states
 * - Visual feedback for checked/unchecked states
 *
 * The component behaves like a checkbox but with a modern toggle appearance.
 * Use `setChecked()` to control its state programmatically.
 *
 * @example
 * const toggle = new TuiSwitchEO(page, '[tuiSwitch][automation-id="test-switch"]');
 * await toggle.setChecked(true);
 * await expect(toggle.host).toBeChecked();
 */
export class TuiSwitchEO extends withClickable(TuiBaseEO) {
    /**
     * Sets the switch to the specified state.
     *
     * Does nothing if the switch is already in the target state.
     *
     * @param checked `true` to turn on, `false` to turn off
     *
     * @example
     * await toggle.setChecked(true);  // turn on
     * await toggle.setChecked(false); // turn off
     */
    async setChecked(checked: boolean): Promise<void> {
        await this.host.setChecked(checked);
    }
}
