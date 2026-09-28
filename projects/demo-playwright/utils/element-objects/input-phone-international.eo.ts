import {Locator} from '@playwright/test';
import {TUI_INPUT_PHONE_INTERNATIONAL_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiTextfieldWithDataListEO} from './textfield-with-data-list.eo';

export class TuiInputPhoneInternationalEO extends TuiTextfieldWithDataListEO {
    public select = this.host.locator(TUI_INPUT_PHONE_INTERNATIONAL_LOCATORS.SELECT);

    public get host(): Locator {
        return this.page.locator(TUI_INPUT_PHONE_INTERNATIONAL_LOCATORS.HOST);
    }
}
