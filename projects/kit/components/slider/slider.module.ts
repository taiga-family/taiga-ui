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
import {TuiSliderReadonlyDirective} from './slider-readonly.directive';

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
        TuiSliderReadonlyDirective,
        TuiSliderTickLabelPipe,
        TuiSliderOldComponent,
    ],
    exports: [
        TuiSliderComponent,
        TuiSliderKeyStepsDirective,
        TuiSliderReadonlyDirective,
        TuiSliderTickLabelPipe,
        TuiSliderOldComponent,
    ],
})
export class TuiSliderModule {}
