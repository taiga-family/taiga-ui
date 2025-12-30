import {type Locator} from '@playwright/test';

export class TuiInputPhonePO {
    public readonly textfield = this.host.getByRole('textbox');
    public readonly cleaner = this.host.getByRole('button', {name: 'Clear'});

    constructor(private readonly host: Locator) {}
}
