import {type Locator} from '@playwright/test';
import {TUI_DROPDOWN_MOBILE_LOCATORS} from '@taiga-ui/testing/locators';

export class TuiMobileDropdownPO {
    public overlay = this.host.locator(TUI_DROPDOWN_MOBILE_LOCATORS.OVERLAY);

    constructor(private readonly host: Locator) {}
}
