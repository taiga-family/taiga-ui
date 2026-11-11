import {TUI_RANGE_LOCATORS} from '@taiga-ui/testing/locators';

import {withClickable} from '../mixins';
import {TuiBaseEO} from './base.eo';

/**
 * Element Object for a TuiRange component.
 *
 * Exposes the start and end thumb locators and is clickable.
 */
export class TuiRangeEO extends withClickable(TuiBaseEO) {
    protected override readonly hostSelector = TUI_RANGE_LOCATORS.HOST;

    /** Start thumb of the range slider. */
    public readonly start = this.host.locator(TUI_RANGE_LOCATORS.THUMB_START);

    /** End thumb of the range slider. */
    public readonly end = this.host.locator(TUI_RANGE_LOCATORS.THUMB_END);
}
