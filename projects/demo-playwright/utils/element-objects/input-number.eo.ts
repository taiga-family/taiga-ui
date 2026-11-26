import {TUI_INPUT_NUMBER_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

/**
 * Element Object for a TuiInputNumber component.
 *
 * Exposes the inner input and the step up/down buttons.
 */
export class TuiInputNumberEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_INPUT_NUMBER_LOCATORS.HOST;

    /** Inner text input of the number field. */
    public readonly input = this.host.locator(TUI_INPUT_NUMBER_LOCATORS.INPUT);

    /** Button that increments the value. */
    public readonly stepUp = this.host.locator('button', {hasText: '+'});

    /** Button that decrements the value. */
    public readonly stepDown = this.host.locator('button', {hasText: '-'});
}
