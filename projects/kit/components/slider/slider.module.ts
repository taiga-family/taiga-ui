import {NgModule} from '@angular/core';

import {TuiSliderKeyStepsDirective} from './helpers/slider-key-steps.directive';
import {TuiSliderReadonlyDirective} from './helpers/slider-readonly.directive';
import {TuiSliderThumbLabelComponent} from './helpers/slider-thumb-label/slider-thumb-label.component';
import {TuiSliderComponent} from './slider.component';

@NgModule({
    imports: [
        TuiSliderComponent,
        TuiSliderThumbLabelComponent,
        TuiSliderKeyStepsDirective,
        TuiSliderReadonlyDirective,
    ],
    exports: [
        TuiSliderComponent,
        TuiSliderThumbLabelComponent,
        TuiSliderKeyStepsDirective,
        TuiSliderReadonlyDirective,
    ],
})
export class TuiSlider {}
