import {Locator} from '@playwright/test';

export class TuiCalendarPO {
    constructor(private readonly host: Locator) {}

    protected async getDays(): Promise<Locator[]> {
        return this.host.locator('[automation-id="tui-primitive-calendar__cell"]').all();
    }

    protected async clickOnCalendarDay(day: number): Promise<void> {
        const cells = await this.getDays();

        for (const cell of cells) {
            if ((await cell.textContent())?.trim() === day.toString()) {
                return cell.click();
            }
        }
    }
}
