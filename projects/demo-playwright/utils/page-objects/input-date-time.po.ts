import {type Locator} from '@playwright/test';

export class TuiInputDateTimePO {
    public readonly textfield: Locator = this.host.getByRole('textbox');
    public readonly calendar: Locator = this.host.page().locator('tui-calendar');

    constructor(public readonly host: Locator) {}

    public async selectDayViaCalendar(day: number): Promise<void> {
        return this.calendar
            .locator('[automation-id="tui-primitive-calendar__cell"]')
            .filter({hasText: `${day}`})
            .click();
    }
}
