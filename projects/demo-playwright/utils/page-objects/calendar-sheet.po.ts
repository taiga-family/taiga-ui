import type {Locator} from '@playwright/test';

export class TuiCalendarSheetPO {
    constructor(private readonly host: Locator) {}

    public async getDays(): Promise<Locator[]> {
        return this.host
            .locator(
                '[automation-id="tui-calendar-sheet__cell"], [automation-id="tui-primitive-calendar-mobile__cell"]',
            )
            .all();
    }

    public async getCalendarDay(day: number): Promise<Locator | null> {
        const cells = await this.getDays();

        for (const cell of cells) {
            if ((await cell.textContent())?.trim() === day.toString()) {
                return cell;
            }
        }

        return null;
    }

    public async clickOnDay(day: number): Promise<void> {
        const element = await this.getCalendarDay(day);

        return element!.click();
    }
}
