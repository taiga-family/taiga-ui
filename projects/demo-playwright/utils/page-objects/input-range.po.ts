import {type Locator} from '@playwright/test';

import {TuiRangePO} from './range.po';

export class TuiInputRangePO {
    public readonly leftTextfield = this.host.locator(
        '[automation-id=tui-input-range__left-input] input',
    );

    public readonly rightTextfield = this.host.locator(
        '[automation-id=tui-input-range__right-input] input',
    );

    public readonly range = new TuiRangePO(this.host.locator('tui-range'));

    constructor(private readonly host: Locator) {}
}
