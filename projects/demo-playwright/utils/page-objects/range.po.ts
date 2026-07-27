import {type Locator} from '@playwright/test';
import {TUI_INPUT_RANGE_LOCATORS} from '@taiga-ui/testing/locators';

export class TuiRangePO {
    public readonly start = this.host.locator(TUI_INPUT_RANGE_LOCATORS.RANGE_START);
    public readonly end = this.host.locator(TUI_INPUT_RANGE_LOCATORS.RANGE_END);

    constructor(public readonly host: Locator) {}
}
