import {TuiSlider} from '@taiga-ui/kit/components/slider';

import {TuiInputSliderDirective} from './input-slider.directive';

export const TuiInputSlider = [...TuiSlider, TuiInputSliderDirective] as const;
