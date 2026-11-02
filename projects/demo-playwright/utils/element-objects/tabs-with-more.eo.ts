import {TUI_TABS_WITH_MORE_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiTabsEO} from './tabs.eo';
import {withMore} from '../mixins';

/**
 * Element Object for a TuiTabsWithMore component.
 *
 * Composes the tabs behavior with the "more" dropdown.
 */
export class TuiTabsWithMoreEO extends withMore(TuiTabsEO) {
    protected override readonly hostSelector = TUI_TABS_WITH_MORE_LOCATORS.HOST;
}
