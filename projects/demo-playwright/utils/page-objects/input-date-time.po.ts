import {Locator} from '@playwright/test';

export class TuiInputDateTimePO {
    readonly textfield: Locator = this.host.getByRole('textbox');
    readonly calendar: Locator = this.host.page().locator('tui-calendar');

    constructor(private readonly host: Locator) {}

    async selectDayViaCalendar(day: number): Promise<void> {
        return this.calendar
            .locator('[automation-id="tui-primitive-calendar__cell"]')
            .filter({hasText: `${day}`})
            .click();
    }
}
