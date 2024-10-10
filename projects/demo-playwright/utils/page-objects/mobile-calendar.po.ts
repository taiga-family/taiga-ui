import {TuiCalendarSheetPO} from '@demo-playwright/utils';
import type {Locator} from '@playwright/test';

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
