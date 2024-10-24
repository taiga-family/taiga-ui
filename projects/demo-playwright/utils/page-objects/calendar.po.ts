import {Locator} from '@playwright/test';

import {TuiCalendarSheetPO} from './calendar-sheet.po';

export class TuiCalendarPO {
    readonly itemButton: Locator = this.host
        .page()
        .locator('tui-dropdown tui-calendar ~ * button');

    constructor(private readonly host: Locator) {}

    async getCalendarSheets(): Promise<TuiCalendarSheetPO[]> {
        const locators = await this.host
            .page()
            .locator('tui-primitive-calendar, tui-primitive-calendar-mobile')
            .all();

        return locators.map(x => new TuiCalendarSheetPO(x));
    }
}
