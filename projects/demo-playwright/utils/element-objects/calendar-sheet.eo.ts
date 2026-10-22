import {expect, type Locator} from '@playwright/test';

export class TuiCalendarSheetEO {
    constructor(private readonly host: Locator) {}

    public getCalendarDay(day: number): Locator {
        return this.cells
            .filter({hasText: new RegExp(String.raw`^\s*${day}\s*$`)})
            .first();
    }

    public async clickOnDay(day: number): Promise<void> {
        const cell = this.getCalendarDay(day);

        await expect(cell).toBeVisible();

        // No `force`: it skips the stability wait, and the sheet re-renders
        // after a day is picked, so a second click could land on a moving cell
        // and get lost.
        await cell.click();
    }

    private get cells(): Locator {
        return this.host.locator(
            [
                '[automation-id="tui-calendar-sheet__cell"]',
                '[automation-id="tui-primitive-calendar-mobile__cell"]',
            ].join(', '),
        );
    }
}
