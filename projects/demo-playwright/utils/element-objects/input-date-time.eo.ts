import {type Locator} from '@playwright/test';
import {TUI_TEXTFIELD_LOCATORS} from '@taiga-ui/testing/locators';
import {
	TUI_CALENDAR_LOCATORS,
    TUI_CALENDAR_SHEET_LOCATORS,
    TUI_INPUT_DATE_TIME_LOCATORS,
} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

export class TuiInputDateTimeEO extends TuiBaseEO {
    public readonly textfield = this.host.getByRole('combobox');
    public readonly filler = this.host.locator(TUI_TEXTFIELD_LOCATORS.FILLER);
    public readonly calendar = this.host.page().locator(TUI_CALENDAR_LOCATORS.HOST);
    public readonly nativePicker = this.host.locator(
        TUI_INPUT_DATE_TIME_LOCATORS.NATIVE_PICKER,
    );

    public get host(): Locator {
        return this.page.locator(TUI_INPUT_DATE_TIME_LOCATORS.HOST);
    }

    public async selectDayViaCalendar(day: number): Promise<void> {
        return this.calendar
            .locator(TUI_CALENDAR_SHEET_LOCATORS.CELL)
            .filter({hasText: `${day}`})
            .click();
    }
}
