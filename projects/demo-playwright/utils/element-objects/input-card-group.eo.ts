import {TUI_INPUT_CARD_GROUP_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

/**
 * Element Object for a TuiInputCardGroup component.
 *
 * Exposes the number, expiry and CVC textfields and the clear icon.
 */
export class TuiInputCardGroupEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_INPUT_CARD_GROUP_LOCATORS.HOST;

    /** Card number textfield. */
    public readonly numberTextfield = this.host.locator(
        TUI_INPUT_CARD_GROUP_LOCATORS.NUMBER_TEXTFIELD,
    );

    /** Clear icon of the card group. */
    public readonly cleanerIcon = this.host.locator(
        TUI_INPUT_CARD_GROUP_LOCATORS.CLEANER,
    );

    /** Expiry date textfield. */
    public readonly expiryTextfield = this.host.locator(
        TUI_INPUT_CARD_GROUP_LOCATORS.EXPIRY_TEXTFIELD,
    );

    /** CVC textfield. */
    public readonly cvcTextfield = this.host.locator(
        TUI_INPUT_CARD_GROUP_LOCATORS.CVC_TEXTFIELD,
    );
}
