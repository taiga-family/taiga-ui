import {TUI_TABS_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

/**
 * Element Object for a TuiTabs component.
 */
export class TuiTabsEO extends TuiBaseEO {
    protected override readonly hostSelector: string = TUI_TABS_LOCATORS.HOST;
}
