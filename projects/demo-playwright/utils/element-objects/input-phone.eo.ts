import {Locator} from '@playwright/test';
import {TUI_INPUT_PHONE_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

export class TuiInputPhoneEO extends TuiBaseEO {
    public readonly textfield = this.host.getByRole('textbox');
    public readonly cleaner = this.host.getByRole('button', {name: 'Clear'});

    public get host(): Locator {
        return this.page.locator(TUI_INPUT_PHONE_LOCATORS.HOST);
    }
}
