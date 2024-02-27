import {Locator} from '@playwright/test';

import {TuiRangePO} from './range.po';

export class TuiInputRangePO {
    protected readonly leftTextfield = this.host.locator(
        '[automation-id=tui-input-range__left-input] input',
    );

    protected readonly rightTextfield = this.host.locator(
        '[automation-id=tui-input-range__right-input] input',
    );

    protected readonly range = new TuiRangePO(this.host.locator('tui-range'));

    constructor(private readonly host: Locator) {}
}
