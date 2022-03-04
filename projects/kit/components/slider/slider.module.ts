import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiActiveZoneModule,
    TuiFocusableModule,
    TuiFocusVisibleModule,
    TuiRepeatTimesModule,
} from '@taiga-ui/cdk';
import {TuiFormatNumberPipeModule} from '@taiga-ui/core';

import {TuiSliderComponent} from './slider.component';
import {
    TuiSliderKeyStepsDirective,
    TuiSliderTickLabelPipe,
} from './slider-key-steps.directive';
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
        TuiSliderKeyStepsDirective,
        TuiSliderTickLabelPipe,
        TuiSliderOldComponent,
    ],
    exports: [
        TuiSliderComponent,
        TuiSliderKeyStepsDirective,
        TuiSliderTickLabelPipe,
        TuiSliderOldComponent,
    ],
})
export class TuiSliderModule {}
