import {type Locator} from '@playwright/test';
import {
    TUI_DROPDOWN_LOCATORS,
    TUI_TABS_WITH_MORE_LOCATORS,
} from '@taiga-ui/testing/locators';

import {withDataList} from '../mixins';
import {TuiTabsEO} from './tabs.eo';

/**
 * Element Object for a TuiTabsWithMore component.
 *
 * Composes the tabs behavior with the "more" dropdown.
 */
export class TuiTabsWithMoreEO extends withDataList(TuiTabsEO) {
    protected override readonly hostSelector = TUI_TABS_WITH_MORE_LOCATORS.HOST;

    public readonly moreDropdown = this.host.page().locator(TUI_DROPDOWN_LOCATORS.HOST);

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
            ? this.moreDropdown.locator('button[tuiTab]').locator(`nth=${indexOrText}`)
            : this.moreDropdown.locator('button[tuiTab]').filter({hasText: indexOrText});
    }

    public async removeTab(indexOrText: number | string): Promise<void> {
        await this.getMoreOption(indexOrText).locator('tui-icon').click();
    }
}
