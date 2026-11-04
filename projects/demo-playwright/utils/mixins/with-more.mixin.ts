import {type Locator} from '@playwright/test';
import {
    TUI_DROPDOWN_LOCATORS,
    TUI_TABS_WITH_MORE_LOCATORS,
} from '@taiga-ui/testing/locators';

import {type TuiBaseEO} from '../element-objects/base.eo';
import {type TuiMixinConstructor} from '../types';

interface More {
    readonly more: Locator;
    readonly moreDropdown: Locator;
    getMoreOption(indexOrText: number | string): Locator;
}

type WithMore<T> = T & (new (...args: any[]) => More);

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
export function withMore<T extends TuiMixinConstructor<TuiBaseEO>>(Base: T): WithMore<T> {
    return class extends Base {
        /** Dropdown container rendered on page level. */
        public readonly moreDropdown = this.host
            .page()
            .locator(TUI_DROPDOWN_LOCATORS.HOST);

        /** Button that opens the overflow dropdown. */
        public get more(): Locator {
            return this.host.locator(TUI_TABS_WITH_MORE_LOCATORS.MORE_BUTTON);
        }

        /**
         * Returns the locator of a tab option in the "more" dropdown.
         *
         * @param indexOrText Zero-based index or text of the option.
         */
        public getMoreOption(indexOrText: number | string): Locator {
            return typeof indexOrText === 'number'
                ? this.moreDropdown
                      .locator('button[tuiTab]')
                      .locator(`nth=${indexOrText}`)
                : this.moreDropdown
                      .locator('button[tuiTab]')
                      .filter({hasText: indexOrText});
        }
    };
}
