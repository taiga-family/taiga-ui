import {Locator} from '@playwright/test';

export class TuiCalendarRangePO {
    constructor(private readonly host: Locator) {}

    async clickRightCalendar(): Promise<void> {
        return this.host
            .locator('[automation-id="tui-calendar__calendar"]')
            .last()
            .click();
    }
}
