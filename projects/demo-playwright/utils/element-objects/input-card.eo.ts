import {Locator} from '@playwright/test';
import {TUI_INPUT_CARD_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

export class TuiInputCardEO extends TuiBaseEO {
    public readonly expiryTextfield = this.page.locator('input[tuiInputExpire]').first();

    public get host(): Locator {
        return this.page.locator(TUI_INPUT_CARD_LOCATORS.HOST);
    }
}
