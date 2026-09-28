import {Locator} from '@playwright/test';

import {TuiBaseEO} from './base.eo';
import {TUI_INPUT_MONTH_RANGE_LOCATORS} from '@taiga-ui/testing/locators';

export class TuiInputMonthRangeEO extends TuiBaseEO {
    public readonly textfield = this.host.getByRole('combobox');

    public get host(): Locator {
        return this.page.locator(TUI_INPUT_MONTH_RANGE_LOCATORS.HOST);
    }
}
