import {
    TuiSliderComponent,
    TuiSliderKeySteps,
    TuiSliderKeyStepsBase,
} from '@taiga-ui/kit/components/slider';

import {TuiInputSliderDirective} from './input-slider.directive';

export const TuiInputSlider = [
    TuiSliderComponent,
    TuiSliderKeyStepsBase,
    TuiSliderKeySteps,
    TuiInputSliderDirective,
] as const;
