import {Locator} from '@playwright/test';

export class TuiInputDateTimePO {
    protected readonly textfield: Locator = this.host.getByRole('textbox');
    protected readonly calendar: Locator = this.host.page().locator('tui-calendar');

    constructor(private readonly host: Locator) {}

    protected async selectDayViaCalendar(day: number): Promise<void> {
        return this.calendar
            .locator('[automation-id="tui-primitive-calendar__cell"]')
            .filter({hasText: `${day}`})
            .click();
    }
}
