import {type Locator} from '@playwright/test';

import {TuiRangePO} from './range.po';

export class TuiInputRangePO {
    public readonly textfieldStart = this.host.locator(
        'tui-textfield [tuiInput]:first-of-type',
    );

    public readonly textfieldEnd = this.host.locator(
        'tui-textfield [tuiInput]:last-of-type',
    );

    public readonly range = new TuiRangePO(this.host.locator('tui-range'));

    constructor(private readonly host: Locator) {}
}
