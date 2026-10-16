import {type Locator} from '@playwright/test';

import {TuiCalendarSheetEO} from './calendar-sheet.eo';

export class TuiCalendarEO {
    public readonly itemButton = this.host
        .page()
        .locator('tui-dropdown tui-calendar ~ * button');

    constructor(private readonly host: Locator) {}

    public async getCalendarSheets(): Promise<
        [TuiCalendarSheetEO, ...TuiCalendarSheetEO[]]
    > {
        const locators = await this.host
            .page()
            .locator('tui-calendar-sheet, tui-mobile-calendar-sheet')
            .all();

        return locators.map((x) => new TuiCalendarSheetEO(x)) as [
            TuiCalendarSheetEO,
            ...TuiCalendarSheetEO[],
        ];
    }
}
