import type {Locator} from '@playwright/test';

import {TuiCalendarSheetPO} from './calendar-sheet.po';

export class TuiCalendarPO {
    public readonly itemButton: Locator = this.host
        .page()
        .locator('tui-dropdown tui-calendar ~ * button');

    constructor(private readonly host: Locator) {}

    public async getCalendarSheets(): Promise<
        [TuiCalendarSheetPO, ...TuiCalendarSheetPO[]]
    > {
        const locators = await this.host
            .page()
            .locator('tui-calendar-sheet, tui-mobile-calendar-sheet')
            .all();

        return locators.map((x) => new TuiCalendarSheetPO(x)) as [
            TuiCalendarSheetPO,
            ...TuiCalendarSheetPO[],
        ];
    }
}
