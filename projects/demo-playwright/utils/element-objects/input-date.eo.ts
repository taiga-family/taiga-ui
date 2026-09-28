import {Locator} from '@playwright/test';
import {TUI_INPUT_DATE_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';
import {TuiCalendarEO} from './calendar.eo';

export class TuiInputDateEO extends TuiBaseEO {
    public readonly textfield = this.host.getByRole('combobox');
    public readonly calendar = new TuiCalendarEO(this.host);
    public readonly nativePicker = this.host.locator(
        TUI_INPUT_DATE_LOCATORS.NATIVE_PICKER,
    );

    public get host(): Locator {
        return this.page.locator(TUI_INPUT_DATE_LOCATORS.HOST);
    }
}
