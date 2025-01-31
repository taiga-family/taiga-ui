import {TuiInputNumber} from '@taiga-ui/kit/components/input-number';
import {TuiSlider} from '@taiga-ui/kit/components/slider';

import {TuiInputSliderDirective} from './input-slider.component';

export const TuiInputSlider = [
    ...TuiSlider,
    TuiInputNumber,
    TuiInputSliderDirective,
] as const;
