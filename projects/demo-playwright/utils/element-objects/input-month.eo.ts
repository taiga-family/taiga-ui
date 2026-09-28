import {Locator} from '@playwright/test';
import {TUI_INPUT_MONTH_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiCalendarMonthEO} from './calendar-month.eo';
import {TuiTextfieldEO} from './textfield.eo';

export class TuiInputMonthEO extends TuiTextfieldEO {
    public readonly calendar = new TuiCalendarMonthEO(this.host);
    public readonly nativePicker = this.host.locator(
        TUI_INPUT_MONTH_LOCATORS.NATIVE_PICKER,
    );

    public get host(): Locator {
        return this.page.locator(TUI_INPUT_MONTH_LOCATORS.HOST);
    }
}
