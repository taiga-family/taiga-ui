import type {Locator} from '@playwright/test';
import {MixinConstructor} from '../types';
import {TuiBaseElementObject} from '../element-objects/base.eo';

/**
 * A mixin that adds focus management capabilities to an ElementObject.
 *
 * Provides methods to:
 * - Focus the host element or a custom locator
 * - Blur the host or a specified element
 *
 * Useful for components that require focus to activate behavior (e.g., inputs, dropdowns, custom controls).
 * Works reliably with Shadow DOM and dynamically rendered elements.
 *
 * @example
 * class InputElementObject extends withFocusable(BaseElementObject) {
 *   async type(text: string) {
 *     await this.focus(); // focuses the host
 *     await this.host.fill(text);
 *   }
 * }
 *
 * @example
 * class SelectElementObject extends withFocusable(BaseElementObject) {
 *   async openDropdown() {
 *     const trigger = this.host.locator('.tui-select__trigger');
 *     await this.focus(trigger); // focuses a nested element
 *     await trigger.click();
 *   }
 * }
 */
export function withFocusable<T extends MixinConstructor<TuiBaseElementObject>>(Base: T) {
    return class extends Base {
        /**
         * Focuses the specified element.
         *
         * @param locator Optional locator. If not provided, focuses the host element.
         *
         * @example
         * await this.focus(); // focuses host
         * await this.focus(inputField); // focuses a specific input
         */
        async focus(locator?: Locator): Promise<void> {
            const target = locator || this.host;
            await target.focus();
        }

        /**
         * Removes focus from the specified element.
         *
         * @param locator Optional locator. If not provided, blurs the host element.
         *
         * @example
         * await this.blur(); // blurs host
         * await this.blur(searchInput); // blurs a specific field
         */
        async blur(locator?: Locator): Promise<void> {
            const target = locator || this.host;
            await target.blur();
        }
    };
}
