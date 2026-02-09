import {TuiLabel} from '@taiga-ui/core/components/label';
import {
    TuiSliderComponent,
    TuiSliderKeySteps,
    TuiSliderKeyStepsBase,
} from '@taiga-ui/core/components/slider';
import {
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownContent} from '@taiga-ui/core/portals/dropdown';

import {TuiInputSliderDirective} from './input-slider.directive';

export const TuiInputSlider = [
    TuiSliderComponent,
    TuiSliderKeyStepsBase,
    TuiSliderKeySteps,
    TuiInputSliderDirective,
    TuiLabel,
    TuiTextfieldComponent,
    TuiTextfieldOptionsDirective,
    TuiDropdownContent,
] as const;
