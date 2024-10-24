import type {Locator} from '@playwright/test';

export class TuiCalendarSheetPO {
    constructor(private readonly host: Locator) {}

    async getDays(): Promise<Locator[]> {
        return this.host
            .locator(
                '[automation-id="tui-primitive-calendar__cell"], [automation-id="tui-primitive-calendar-mobile__cell"]',
            )
            .all();
    }

    async clickOnDay(day: number): Promise<void> {
        const cells = await this.getDays();

        for (const cell of cells) {
            if ((await cell.textContent())?.trim() === day.toString()) {
                await cell.click();

                break;
            }
        }
    }
}
