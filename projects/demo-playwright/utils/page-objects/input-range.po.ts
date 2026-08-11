import {type Locator} from '@playwright/test';
import {TUI_INPUT_RANGE_LOCATORS, TUI_RANGE_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiRangePO} from './range.po';

export class TuiInputRangePO {
    public readonly textfieldStart = this.host.locator(
        TUI_INPUT_RANGE_LOCATORS.TEXTFIELD_START,
    );

    public readonly textfieldEnd = this.host.locator(
        TUI_INPUT_RANGE_LOCATORS.TEXTFIELD_END,
    );

    public readonly range = new TuiRangePO(this.host.locator(TUI_RANGE_LOCATORS.HOST));

    constructor(private readonly host: Locator) {}
}
