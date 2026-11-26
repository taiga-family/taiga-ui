import {TUI_MULTI_SELECT_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiInputTagPO} from './input-tag.po';

export class TuiMultiSelectPO extends TuiInputTagPO {
    public readonly arrow = this.host.locator(TUI_MULTI_SELECT_LOCATORS.ARROW);
}
