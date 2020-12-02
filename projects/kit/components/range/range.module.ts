import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiActiveZoneModule,
    TuiFocusableModule,
    TuiFocusVisibleModule,
    TuiRepeatTimesModule,
} from '@taiga-ui/cdk';
import {TuiFormatNumberPipeModule, TuiPluralizePipeModule} from '@taiga-ui/core';
import {TuiRangeComponent} from './range.component';

@NgModule({
    imports: [
        CommonModule,
        TuiRepeatTimesModule,
        TuiFocusableModule,
        TuiActiveZoneModule,
        TuiFocusVisibleModule,
        TuiPluralizePipeModule,
        TuiFormatNumberPipeModule,
    ],
    declarations: [TuiRangeComponent],
    exports: [TuiRangeComponent],
})
export class TuiRangeModule {}
