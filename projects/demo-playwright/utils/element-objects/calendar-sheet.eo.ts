import {expect, Locator} from '@playwright/test';
import {TUI_CALENDAR_SHEET_LOCATORS} from '@taiga-ui/testing/locators';
import {TuiBaseEO} from './base.eo';

export class TuiCalendarSheetEO extends TuiBaseEO {
    public get host(): Locator {
        return this.page.locator(TUI_CALENDAR_SHEET_LOCATORS.HOST);
    }

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
                TUI_CALENDAR_SHEET_LOCATORS.CELL,
                TUI_CALENDAR_SHEET_LOCATORS.CELL_MOBILE,
            ].join(', '),
        );
    }
}
