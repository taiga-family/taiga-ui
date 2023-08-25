import {Locator} from '@playwright/test';

export class TuiInputSliderPo {
    readonly textfield = this.host.getByRole(`textbox`);
    readonly slider = this.host.getByRole(`slider`);

    constructor(private readonly host: Locator) {}
}
