import {TuiBaseEO} from './base.eo';
import {TUI_INPUT_MONTH_RANGE_LOCATORS} from '@taiga-ui/testing/locators';

/**
 * Element Object for a TuiInputMonthRange component.
 *
 * Exposes the inner text input of the month range field.
 */
export class TuiInputMonthRangeEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_INPUT_MONTH_RANGE_LOCATORS.HOST;

    /** Inner text input of the month range field. */
    public readonly input = this.host.locator(TUI_INPUT_MONTH_RANGE_LOCATORS.INPUT);
}
