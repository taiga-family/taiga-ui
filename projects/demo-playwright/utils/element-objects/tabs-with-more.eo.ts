import {TUI_TABS_WITH_MORE_LOCATORS} from '@taiga-ui/testing/locators';

import {withMore} from '../mixins';
import {TuiTabsEO} from './tabs.eo';

/**
 * Element Object for a TuiTabsWithMore component.
 *
 * Composes the tabs behavior with the "more" dropdown.
 */
export class TuiTabsWithMoreEO extends withMore(TuiTabsEO) {
    protected override readonly hostSelector = TUI_TABS_WITH_MORE_LOCATORS.HOST;
}
