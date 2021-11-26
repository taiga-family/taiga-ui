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

@NgModule({
    imports: [
        CommonModule,
        TuiRepeatTimesModule,
        TuiFocusableModule,
        TuiFocusVisibleModule,
        TuiActiveZoneModule,
        TuiFormatNumberPipeModule,
    ],
    declarations: [TuiSliderComponent],
    exports: [TuiSliderComponent],
})
export class TuiSliderModule {}
