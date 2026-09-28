import {Locator} from '@playwright/test';
import {TUI_INPUT_CARD_GROUP_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

export class TuiInputCardGroupEO extends TuiBaseEO {
    public readonly numberTextfield = this.host.locator(
        TUI_INPUT_CARD_GROUP_LOCATORS.NUMBER_TEXTFIELD,
    );

    public readonly cleanerIcon = this.host.locator(
        TUI_INPUT_CARD_GROUP_LOCATORS.CLEANER,
    );

    public readonly expiryTextfield = this.host.locator(
        TUI_INPUT_CARD_GROUP_LOCATORS.EXPIRY_TEXTFIELD,
    );

    public readonly cvcTextfield = this.host.locator(
        TUI_INPUT_CARD_GROUP_LOCATORS.CVC_TEXTFIELD,
    );

    public get host(): Locator {
        return this.page.locator(TUI_INPUT_CARD_GROUP_LOCATORS.HOST);
    }
}
