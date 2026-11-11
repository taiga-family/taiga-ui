import {TUI_INPUT_CARD_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

/**
 * Element Object for a TuiInputCard component.
 *
 * Exposes the expiry textfield rendered on page level.
 */
export class TuiInputCardEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_INPUT_CARD_LOCATORS.HOST;

    /** Expiry date textfield of the card field. */
    public readonly expiryTextfield = this.page.locator('input[tuiInputExpire]').first();
}
