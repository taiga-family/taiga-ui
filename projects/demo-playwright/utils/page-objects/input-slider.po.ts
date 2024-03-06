import type {Locator} from '@playwright/test';

export class TuiInputSliderPO {
    public readonly textfield = this.host.getByRole('textbox');
    public readonly slider = this.host.getByRole('slider');

    constructor(private readonly host: Locator) {}
}
