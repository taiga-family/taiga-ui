import {Locator} from '@playwright/test';

export class TuiInputSliderPO {
    protected readonly textfield = this.host.getByRole('textbox');
    protected readonly slider = this.host.getByRole('slider');

    constructor(private readonly host: Locator) {}
}
