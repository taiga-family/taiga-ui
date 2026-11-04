import {type Locator} from '@playwright/test';
import {
    TUI_DATA_LIST_LOCATORS,
    TUI_DROPDOWN_LOCATORS,
    TUI_DROPDOWN_MOBILE_LOCATORS,
    TUI_SHEET_DIALOG_LOCATORS,
} from '@taiga-ui/testing/locators';

import {type TuiBaseEO} from '../element-objects/base.eo';
import {type TuiMixinConstructor} from '../types';

interface DataList {
    readonly dropdown: Locator;
    readonly options: Locator;
    selectOptions(indexes: number[]): Promise<void>;
    closeDropdown(): Promise<void>;
    getOptionByText(text: RegExp | string): Promise<Locator>;
}

type WithDataList<T> = T & (new (...args: any[]) => DataList);

/**
 * A mixin that adds data-list dropdown behavior to a textfield-based Element Object.
 *
 * Provides:
 * - A `dropdown` locator for the rendered dropdown container
 * - An `options` getter for the rendered dropdown options
 * - `getOptionByText()` to resolve an option by its text
 * - `selectOptions()` to select options by index
 * - `closeDropdown()` to close the dropdown via Escape
 *
 * Suitable for components that open a data-list dropdown from a textfield:
 * - Select
 * - ComboBox
 * - InputTime
 * - InputPhoneInternational
 *
 * @example
 * class ComboBoxEO extends withDataList(TuiTextfieldEO) {
 *   // Now has .dropdown, .options, .getOptionByText(), .selectOptions(), .closeDropdown()
 * }
 */
export function withDataList<T extends TuiMixinConstructor<TuiBaseEO>>(
    Base: T,
): WithDataList<T> {
    return class extends Base {
        /** Dropdown container rendered on page level (desktop, mobile or sheet). */
        public readonly dropdown = this.host
            .page()
            .locator(
                `${TUI_DROPDOWN_LOCATORS.HOST},${TUI_DROPDOWN_MOBILE_LOCATORS.HOST},${TUI_SHEET_DIALOG_LOCATORS.HOST}`,
            );

        /**
         * Rendered dropdown options.
         *
         * Use with auto-waiting assertions such as `toHaveCount`, or call `.all()`
         * to obtain a snapshot array.
         */
        public get options(): Locator {
            return this.dropdown.locator(TUI_DATA_LIST_LOCATORS.OPTION);
        }

        /**
         * Selects the options at the given indexes by clicking them in order.
         *
         * @param indexes Zero-based indexes of the options to select.
         */
        public async selectOptions(indexes: number[]): Promise<void> {
            for (const optionIndex of indexes) {
                await this.dropdown
                    .locator(TUI_DATA_LIST_LOCATORS.OPTION)
                    .nth(optionIndex)
                    .click();
            }
        }

        /**
         * Closes the dropdown by pressing Escape and waits until it is detached.
         */
        public async closeDropdown(): Promise<void> {
            await this.host.press('Escape');

            await this.dropdown.waitFor({state: 'detached'});
        }

        /**
         * Returns the locator of the dropdown option matching the given text.
         *
         * Waits for the dropdown to be attached before resolving the option.
         *
         * @param text Text or regular expression to match against the option.
         */
        public async getOptionByText(text: RegExp | string): Promise<Locator> {
            await this.dropdown.waitFor({state: 'attached'});

            return this.dropdown.locator(TUI_DATA_LIST_LOCATORS.OPTION, {hasText: text});
        }
    };
}
