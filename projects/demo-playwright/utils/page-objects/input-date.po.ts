import {Locator} from '@playwright/test';

import {TuiCalendarPO} from './calendar.po';

export class TuiInputDatePO {
    readonly textfield: Locator = this.host.locator(
        '[automation-id="tui-primitive-textfield__native-input"]',
    );

    constructor(private readonly host: Locator) {}

    async clickItemButton(): Promise<void> {
        const itemButton = this.host
            .page()
            .locator('[automation-id="tui-input-date__button"]');

        await itemButton.click();
    }

    async clickOnCalendarDay(day: number): Promise<void> {
        const calendar = new TuiCalendarPO(this.host.page().locator('tui-calendar'));

        await calendar.clickOnCalendarDay(day);
    }
}
