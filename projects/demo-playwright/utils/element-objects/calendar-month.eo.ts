import {type Locator} from '@playwright/test';
import {TUI_CALENDAR_MONTH_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

export class TuiCalendarMonthEO extends TuiBaseEO {
    public readonly month = this.host.locator(TUI_CALENDAR_MONTH_LOCATORS.MONTH);

    public get host(): Locator {
        return this.page.locator(TUI_CALENDAR_MONTH_LOCATORS.HOST);
    }
}
