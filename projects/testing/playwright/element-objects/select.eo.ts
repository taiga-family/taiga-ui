import {TuiBaseEO} from './base.eo';
import {withClickable} from '../mixins';
import {TuiDropdownEO} from './dropdown.eo';

/**
 * Element Object for the TuiSelect component in input directive mode (`input[tuiSelect]`).
 *
 * Encapsulates interaction with the select: opening the dropdown, selecting options by text or index,
 * retrieving the current value, and listing available options.
 *
 * The component opens a `tui-dropdown` with interactive options. Selection updates the input value.
 *
 * @example
 * const citySelect = new TuiSelectEO(page, 'input[tuiSelect][placeholder="City"]');
 * await citySelect.selectByText('Moscow');
 * await expect(citySelect.host).toHaveValue('Moscow');
 */
export class SelectElementObject extends withClickable(TuiBaseEO) {
    readonly dropdown = new TuiDropdownEO(this.page);
    /**
     * Returns the current value of the select (the `input.value`).
     *
     * @returns The displayed or selected value as a string
     *
     * @example
     * const value = await select.getValue(); // "Moscow"
     */
    async getValue(): Promise<string> {
        return this.host.inputValue();
    }

    /**
     * Opens the dropdown menu.
     *
     * Does nothing if the dropdown is already visible.
     *
     * @example
     * await select.open();
     */
    async open(): Promise<void> {
        if (!(await this.dropdown.host.isVisible())) {
            await this.click();
            await this.dropdown.host.waitFor({state: 'visible'});
        }
    }

    /**
     * Selects an option by exact text match.
     *
     * The text must match completely and is case-sensitive.
     *
     * @param text The exact text of the option
     *
     * @example
     * await select.selectByText('Saint Petersburg');
     */
    async selectByText(text: string): Promise<void> {
        await this.open();
        await this.dropdown.clickItem(text);
    }

    /**
     * Selects an option by its index.
     *
     * Prefer `selectByText()` for better readability and stability.
     *
     * @param index Option index (0 = first, -1 = last)
     *
     * @example
     * await select.selectByIndex(0);  // first option
     * await select.selectByIndex(-1); // last option
     */
    async selectByIndex(index: number): Promise<void> {
        await this.open();
        await this.dropdown.clickItemByIndex(index);
    }

    /**
     * Returns a list of all available option texts.
     *
     * Opens the dropdown to ensure options are rendered.
     *
     * @returns Array of option labels
     *
     * @example
     * const options = await select.getOptions();
     * expect(options).toContain('Moscow');
     */
    async getOptions(): Promise<string[]> {
        await this.open();
        const texts = await this.dropdown.getItems();

        return texts.map((t) => t.trim()).filter((t) => t);
    }

    /**
     * Returns the text of the option at the given index.
     *
     * @param index Index of the option (0 = first, -1 = last). Default: 0
     * @returns The text content of the option
     *
     * @example
     * const firstOption = await select.getOptionByIndex(0); // "Moscow"
     */
    async getOptionByIndex(index: number = 0): Promise<string | undefined> {
        await this.open();
        const options = await this.dropdown.getItems();

        return options[index];
    }
}

export const TuiSelectEO = SelectElementObject;
