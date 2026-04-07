import {type Locator} from '@playwright/test';

export class TuiInputDateTimePO {
    public readonly textfield = this.host.getByRole('combobox');
    public readonly calendar = this.host.page().locator('tui-calendar');
    public readonly nativePicker = this.host.locator('input[type="datetime-local"]');

    constructor(public readonly host: Locator) {}

    public async selectDayViaCalendar(day: number): Promise<void> {
        return this.calendar
            .locator('[automation-id="tui-calendar-sheet__cell"]')
            .filter({hasText: `${day}`})
            .click();
    }
}
