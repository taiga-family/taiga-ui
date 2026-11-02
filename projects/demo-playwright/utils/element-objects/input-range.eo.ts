import {TUI_INPUT_RANGE_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';
import {TuiRangeEO} from './range.eo';

/**
 * Element Object for a TuiInputRange component.
 *
 * Exposes the start/end textfields and the underlying range slider.
 */
export class TuiInputRangeEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_INPUT_RANGE_LOCATORS.HOST;

    /** Textfield for the start value. */
    public readonly textfieldStart = this.host.locator(
        TUI_INPUT_RANGE_LOCATORS.INPUT_START,
    );

    /** Textfield for the end value. */
    public readonly textfieldEnd = this.host.locator(TUI_INPUT_RANGE_LOCATORS.INPUT_END);

    /** Range slider Element Object scoped to the field. */
    public readonly range = new TuiRangeEO(this.page, this.host);
}
