import type {Locator} from '@playwright/test';

export class TuiCalendarPO {
    constructor(private readonly host: Locator) {}

    public async getDays(): Promise<Locator[]> {
        return this.host.locator('[automation-id="tui-calendar-sheet__cell"]').all();
    }

    public async clickOnCalendarDay(day: number): Promise<void> {
        const cells = await this.getDays();

        for (const cell of cells) {
            if ((await cell.textContent())?.trim() === day.toString()) {
                return cell.click();
            }
        }
    }
}
