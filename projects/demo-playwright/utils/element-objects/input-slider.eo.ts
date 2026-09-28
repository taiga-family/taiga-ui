import {Locator} from '@playwright/test';

import {TuiBaseEO} from './base.eo';
import {TUI_INPUT_SLIDER_LOCATORS} from '@taiga-ui/testing/locators';

export class TuiInputSliderEO extends TuiBaseEO {
    public readonly textfield = this.host.getByRole('textbox');
    public readonly slider = this.host.getByRole('slider');

    public get host(): Locator {
        return this.page.locator(TUI_INPUT_SLIDER_LOCATORS.HOST);
    }
}
