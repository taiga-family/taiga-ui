import {expect, type Locator} from '@playwright/test';

export class TuiCalendarSheetPO {
    constructor(private readonly host: Locator) {}

    public getCalendarDay(day: number): Locator {
        return this.cells
            .filter({hasText: new RegExp(String.raw`^\s*${day}\s*$`)})
            .first();
    }

    public async clickOnDay(day: number): Promise<void> {
        const cell = this.getCalendarDay(day);

        await expect(cell).toBeVisible();
        await cell.click({force: true});
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
