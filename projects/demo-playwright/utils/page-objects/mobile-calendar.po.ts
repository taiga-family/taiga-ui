import {type Locator} from '@playwright/test';

import {TuiCalendarSheetPO} from './calendar-sheet.po';

export class TuiMobileCalendarPO {
    public cancelButton = this.host.getByTestId('tui-mobile-calendar__cancel');
    public confirmButton = this.host.getByTestId('tui-mobile-calendar__confirm');

    constructor(private readonly host: Locator) {}

    public async getCalendarSheets(): Promise<TuiCalendarSheetPO[]> {
        const locators = await this.host
            .page()
            .locator('tui-calendar-sheet, tui-mobile-calendar-sheet')
            .all();

        return locators.map((x) => new TuiCalendarSheetPO(x));
    }
}
