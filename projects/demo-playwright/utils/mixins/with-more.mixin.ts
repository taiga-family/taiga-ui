import type {Locator} from '@playwright/test';
import {
    TUI_DROPDOWN_LOCATORS,
    TUI_TABS_WITH_MORE_LOCATORS,
} from '@taiga-ui/testing/locators';

import {TuiMixinConstructor} from '../types';
import {TuiBaseEO} from '../element-objects/base.eo';

/**
 * A mixin that adds "more" dropdown behavior to a tabs-based Element Object.
 *
 * Provides:
 * - A `more` button locator that opens the overflow dropdown
 * - A `moreDropdown` locator for the rendered dropdown
 * - `getMoreOption()` to resolve a specific option by index or text
 *
 * Suitable for components that hide overflowing tabs behind a "more" button:
 * - TuiTabsWithMore
 *
 * @example
 * class TabsWithMoreEO extends withMore(TuiBaseEO) {
 *   // Now has .more, .moreDropdown, .getMoreOption()
 * }
 */
export function withMore<T extends TuiMixinConstructor<TuiBaseEO>>(Base: T) {
    return class extends Base {
        /** Button that opens the overflow dropdown. */
        public get more(): Locator {
            return this.host.locator(TUI_TABS_WITH_MORE_LOCATORS.MORE_BUTTON);
        }

        /** Dropdown container rendered on page level. */
        public readonly moreDropdown = this.host
            .page()
            .locator(TUI_DROPDOWN_LOCATORS.HOST);

        /**
         * Returns the locator of a tab option in the "more" dropdown.
         *
         * @param indexOrText Zero-based index or text of the option.
         */
        public getMoreOption(indexOrText: number | string): Locator {
            if (typeof indexOrText === 'number') {
                return this.moreDropdown
                    .locator('button[tuiTab]')
                    .locator(`nth=${indexOrText}`);
            }

            return this.moreDropdown.locator(`button[tuiTab]:has-text("${indexOrText}")`);
        }
    };
}
