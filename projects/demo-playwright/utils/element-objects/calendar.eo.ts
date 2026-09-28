import {Locator} from '@playwright/test';
import {
    TUI_CALENDAR_LOCATORS,
    TUI_CALENDAR_SHEET_LOCATORS,
} from '@taiga-ui/testing/locators';

import {TuiCalendarSheetEO} from './calendar-sheet.eo';
import {TuiBaseEO} from './base.eo';

export class TuiCalendarEO extends TuiBaseEO {
    public readonly itemButton = this.host
        .page()
        .locator('tui-dropdown tui-calendar ~ * button');

    public get host(): Locator {
        return this.page.locator(TUI_CALENDAR_LOCATORS.HOST);
    }

    public async getCalendarSheets(): Promise<
        [TuiCalendarSheetEO, ...TuiCalendarSheetEO[]]
    > {
        const locators = await this.host
            .page()
            .locator(TUI_CALENDAR_SHEET_LOCATORS.HOST)
            .all();

        return locators.map((x) => new TuiCalendarSheetEO(x)) as [
            TuiCalendarSheetEO,
            ...TuiCalendarSheetEO[],
        ];
    }
}
