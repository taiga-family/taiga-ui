import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiActiveZoneModule,
    TuiFocusableModule,
    TuiFocusVisibleModule,
    TuiRepeatTimesModule,
} from '@taiga-ui/cdk';
import {TuiFormatNumberPipeModule} from '@taiga-ui/core';

import {
    TuiSliderKeyStepsDirective,
    TuiSliderTickLabelPipe,
} from './helpers/slider-key-steps.directive';
import {TuiSliderReadonlyDirective} from './helpers/slider-readonly.directive';
import {TuiSliderThumbLabelComponent} from './helpers/slider-thumb-label/slider-thumb-label.component';
import {TuiSliderComponent} from './slider.component';
import {TuiSliderOldComponent} from './slider-old.component';

@NgModule({
    imports: [
        CommonModule,
        TuiRepeatTimesModule,
        TuiFocusableModule,
        TuiFocusVisibleModule,
        TuiActiveZoneModule,
        TuiFormatNumberPipeModule,
    ],
    declarations: [
        TuiSliderComponent,
        TuiSliderThumbLabelComponent,
        TuiSliderKeyStepsDirective,
        TuiSliderReadonlyDirective,
        TuiSliderTickLabelPipe,
        TuiSliderOldComponent,
    ],
    exports: [
        TuiSliderComponent,
        TuiSliderThumbLabelComponent,
        TuiSliderKeyStepsDirective,
        TuiSliderReadonlyDirective,
        TuiSliderTickLabelPipe,
        TuiSliderOldComponent,
    ],
})
export class TuiSliderModule {}
