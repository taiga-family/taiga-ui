import {type Locator} from '@playwright/test';

import {TuiRangePO} from './range.po';

export class TuiInputRangePO {
    public readonly textfieldStart = this.host.locator(
        '[automation-id=tui-input-range__left-input] input, tui-textfield input:first-of-type',
    );

    public readonly textfieldEnd = this.host.locator(
        '[automation-id=tui-input-range__right-input] input, tui-textfield input:last-of-type',
    );

    public readonly range = new TuiRangePO(this.host.locator('tui-range'));

    constructor(private readonly host: Locator) {}
}
