import {expect, Locator, Page} from '@playwright/test';
import {BaseElementObject} from './base.eo';
import {TUI_DROPDOWN_LOCATORS} from '@taiga-ui/testing/locators';

/**
 * ElementObject for the content rendered inside TuiDropdown.
 *
 * Encapsulates interaction with dynamic dropdown content (e.g. list of options,
 * custom menu items, etc.) that appears in a portal when a trigger (like a button
 * or input with `tuiDropdown`) is clicked.
 *
 * This EO:
 * - Waits for the dropdown to be visible
 * - Allows interaction with nested elements (buttons, links, etc.)
 * - Provides methods to close or click away
 * - Does not depend on the trigger element
 *
 * The dropdown content is rendered in a portal (`<tui-dropdown>`), so it's not
 * part of the original DOM structure.
 *
 * @example
 * // Trigger the dropdown
 * await page.locator('button').click();
 *
 * // Interact with dropdown content
 * const dropdown = new DropdownContentEO(page);
 * await dropdown.waitForOpen();
 * await dropdown.clickItem('Settings');
 * await dropdown.waitForClose();
 */
class TuiDropdownElementObject extends BaseElementObject {
    constructor(page: Page, orderNumber: number = 0) {
        super(page, TUI_DROPDOWN_LOCATORS.DROPDOWN, orderNumber);
    }

    /**
     * Returns the content wrapper inside the dropdown (with scrollbar)
     */
    get content(): Locator {
        return this.host.locator(TUI_DROPDOWN_LOCATORS.SCROLLBAR);
    }

    /**
     * Waits for the dropdown to be visible
     */
    async waitForOpen(): Promise<void> {
        await expect(this.host).toBeVisible();
    }

    /**
     * Waits for the dropdown to be hidden
     */
    async waitForClose(): Promise<void> {
        await expect(this.host).toBeHidden();
    }

    /**
     * Clicks an item inside the dropdown by exact text match
     *
     * @param text Text of the item (button, link, etc.)
     */
    async clickItem(text: string): Promise<void> {
        const item = this.content.getByText(text, {exact: true});
        await expect(item).toBeVisible();
        await item.click();
        await this.waitForClose(); // Most actions close the dropdown
    }

    /**
     * Clicks an item inside the dropdown by index
     *
     * @param index Option index (0 = first, -1 = last)
     */
    async clickItemByIndex(index: number = 0): Promise<void> {
        const item = this.content.locator(TUI_DROPDOWN_LOCATORS.OPTION).nth(index);
        await expect(item).toBeVisible();
        await item.click();
        await this.waitForClose();
    }

    /**
     * Clicks an item by selector
     *
     * @param selector CSS or role selector
     */
    async clickItemBySelector(selector: string): Promise<void> {
        const item = this.content.locator(selector);
        await expect(item).toBeVisible();
        await item.click();
        await this.waitForClose();
    }

    /**
     * Returns all text items in the dropdown
     */
    async getItems(): Promise<string[]> {
        await this.waitForOpen();
        return this.content.locator(TUI_DROPDOWN_LOCATORS.OPTION).allInnerTexts();
    }

    /**
     * Closes the dropdown by clicking outside
     */
    async clickOutside(): Promise<void> {
        await this.waitForOpen();
        await this.page.mouse.click(0, 0);
        await this.waitForClose();
    }

    /**
     * Forces close via escape key
     */
    async pressEscape(): Promise<void> {
        await this.waitForOpen();
        await this.page.keyboard.press('Escape');
        await this.waitForClose();
    }
}

export const TuiDropdownEO = TuiDropdownElementObject;
