import {type Locator} from '@playwright/test';
import {TUI_RANGE_LOCATORS} from '@taiga-ui/testing/locators';

export class TuiRangePO {
    public readonly left = this.host.locator(TUI_RANGE_LOCATORS.THUMB_START);
    public readonly right = this.host.locator(TUI_RANGE_LOCATORS.THUMB_END);

    constructor(public readonly host: Locator) {}
}
