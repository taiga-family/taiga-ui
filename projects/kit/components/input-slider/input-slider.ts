import {TuiTextfield} from '@taiga-ui/core/components/textfield';
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
    TuiTextfield,
] as const;
