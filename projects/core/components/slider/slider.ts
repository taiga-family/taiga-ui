import {
    TuiSliderKeySteps,
    TuiSliderKeyStepsBase,
} from './helpers/slider-key-steps.directive';
import {TuiSliderReadonly} from './helpers/slider-readonly.directive';
import {TuiSliderThumbLabel} from './helpers/slider-thumb-label.component';
import {TuiSliderComponent} from './slider.component';

export const TuiSlider = [
    TuiSliderComponent,
    TuiSliderThumbLabel,
    TuiSliderKeyStepsBase,
    TuiSliderKeySteps,
    TuiSliderReadonly,
] as const;
