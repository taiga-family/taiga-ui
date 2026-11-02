import {TUI_INPUT_SLIDER_LOCATORS} from '@taiga-ui/testing/locators';

import {TuiBaseEO} from './base.eo';

/**
 * Element Object for a TuiInputSlider component.
 *
 * Exposes the inner input and the slider element.
 */
export class TuiInputSliderEO extends TuiBaseEO {
    protected override readonly hostSelector = TUI_INPUT_SLIDER_LOCATORS.HOST;

    /** Inner text input of the slider field. */
    public readonly input = this.host.locator(TUI_INPUT_SLIDER_LOCATORS.INPUT);

    /** Slider element of the field. */
    public readonly slider = this.host.getByRole('slider');
}
