import {TuiBaseElementObject} from '../element-objects/base.eo';
import {MixinConstructor} from '../types';

/**
 * A mixin that adds basic click behavior to an ElementObject.
 *
 * Provides:
 * - A `click()` method to interact with the host element
 *
 * Suitable for components that respond to user clicks:
 * - Buttons
 * - Checkboxes
 * - Radio buttons
 * - Icons
 * - Toggle switches
 * - Any interactive element
 *
 * Can be inherited and extended or overridden in specific ElementObjects when custom click behavior is needed.
 *
 * @example
 * class ButtonEO extends withClickable(BaseElementObject) {
 *   // Now has .click()
 * }
 *
 * // Usage in tests
 * await button.click();
 * await expect(someState).toBeVisible();
 *
 * @example
 * class CheckboxElementObject extends withClickable(BaseElementObject) {
 *   async check() {
 *     if (!(await this.isChecked())) {
 *       await this.click();
 *     }
 *   }
 *
 *   async uncheck() {
 *     if (await this.isChecked()) {
 *       await this.click();
 *     }
 *   }
 * }
 */
export function withClickable<T extends MixinConstructor<TuiBaseElementObject>>(Base: T) {
    return class extends Base {
        /**
         * Clicks the host element.
         *
         * Uses Playwright's built-in `.click()` which automatically:
         * - Scrolls the element into view
         * - Waits for visibility and actionability (not disabled, stable, etc.)
         *
         * For clicking nested elements (e.g. an icon inside a button),
         * create a dedicated method in the specific Element Object instead.
         *
         * @example
         * await this.click(); // clicks the host
         */
        async click(): Promise<void> {
            await this.host.click();
        }
    };
}
