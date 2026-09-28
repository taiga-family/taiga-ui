import {Locator} from '@playwright/test';
import {TUI_INPUT_RANGE_LOCATORS, TUI_RANGE_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';
import {TuiRangeEO} from './range.eo';

export class TuiInputRangeEO extends TuiBaseEO {
    public readonly textfieldStart = this.host.locator(
        TUI_INPUT_RANGE_LOCATORS.INPUT_START,
    );

    public readonly textfieldEnd = this.host.locator(TUI_INPUT_RANGE_LOCATORS.INPUT_END);
    public readonly range = new TuiRangeEO(this.host.locator(TUI_RANGE_LOCATORS.HOST));

    public get host(): Locator {
        return this.page.locator(TUI_INPUT_RANGE_LOCATORS.HOST);
    }
}
