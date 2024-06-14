import {AsyncPipe, NgIf} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiSliderKeySteps} from './helpers/slider-key-steps.directive';
import {TuiSliderReadonly} from './helpers/slider-readonly.directive';
import {TuiSliderThumbLabel} from './helpers/slider-thumb-label.component';
import {TuiSliderComponent} from './slider.component';

@NgModule({
    imports: [NgIf, AsyncPipe],
    declarations: [
        TuiSliderComponent,
        TuiSliderThumbLabel,
        TuiSliderKeySteps,
        TuiSliderReadonly,
    ],
    exports: [
        TuiSliderComponent,
        TuiSliderThumbLabel,
        TuiSliderKeySteps,
        TuiSliderReadonly,
    ],
})
export class TuiSlider {}
