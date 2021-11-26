import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiActiveZoneModule,
    TuiFocusableModule,
    TuiFocusVisibleModule,
    TuiRepeatTimesModule,
} from '@taiga-ui/cdk';
import {TuiFormatNumberPipeModule} from '@taiga-ui/core';

import {TuiRangeComponent} from './range.component';

@NgModule({
    imports: [
        CommonModule,
        TuiRepeatTimesModule,
        TuiFocusableModule,
        TuiActiveZoneModule,
        TuiFocusVisibleModule,
        TuiFormatNumberPipeModule,
    ],
    declarations: [TuiRangeComponent],
    exports: [TuiRangeComponent],
})
export class TuiRangeModule {}
