import {type Locator} from '@playwright/test';

import {type TuiBaseEO} from '../element-objects/base.eo';
import {type BlurOptions, type FocusOptions, type TuiMixinConstructor} from '../types';

interface Focusable {
    focus(options?: FocusOptions): Promise<void>;
    blur(options?: BlurOptions): Promise<void>;
}

type WithFocusable<T> = T & (new (...args: any[]) => Focusable);

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
 * class TuiInputEO extends withFocusable(TuiBaseEO) {
 *   async type(text: string) {
 *     await this.focus(); // focuses the host
 *     await this.host.fill(text);
 *   }
 * }
 *
 * @example
 * class TuiSelectEO extends withFocusable(TuiBaseEO) {
 *   async openDropdown() {
 *     const trigger = this.host.locator('.tui-select__trigger');
 *     await this.focus(trigger); // focuses a nested element
 *     await trigger.click();
 *   }
 * }
 */
export function withFocusable<T extends TuiMixinConstructor<TuiBaseEO>>(
    Base: T,
): WithFocusable<T> {
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
        public async focus(locator?: Locator, options?: FocusOptions): Promise<void> {
            const target = locator || this.host;

            await target.waitFor({state: 'visible'});
            await target.focus(options);
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
        public async blur(locator?: Locator, options?: BlurOptions): Promise<void> {
            const target = locator || this.host;

            await target.waitFor({state: 'visible'});
            await target.blur(options);
        }
    };
}
