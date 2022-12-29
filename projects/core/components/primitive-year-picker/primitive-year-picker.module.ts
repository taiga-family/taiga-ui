import {NgModule} from '@angular/core';
import {
    TuiHoveredModule,
    TuiLetModule,
    TuiPressedModule,
    TuiRepeatTimesModule,
} from '@taiga-ui/cdk';
import {TuiScrollIntoViewModule} from '@taiga-ui/core/directives/scroll-into-view';

import {TuiGetItemRangePipe} from './pipes/get-item-range/get-item-range.pipe';
import {TuiGetItemStatePipe} from './pipes/get-item-state/get-item-state.pipe';
import {TuiItemIsIntervalPipe} from './pipes/item-is-interval/item-is-interval.pipe';
import {TuiItemIsTodayPipe} from './pipes/item-is-today/item-is-today.pipe';
import {TuiPrimitiveYearPickerComponent} from './primitive-year-picker.component';

@NgModule({
    imports: [
        TuiHoveredModule,
        TuiPressedModule,
        TuiRepeatTimesModule,
        TuiLetModule,
        TuiScrollIntoViewModule,
    ],
    declarations: [
        TuiPrimitiveYearPickerComponent,
        TuiItemIsTodayPipe,
        TuiItemIsIntervalPipe,
        TuiGetItemRangePipe,
        TuiGetItemStatePipe,
    ],
    exports: [TuiPrimitiveYearPickerComponent],
})
export class TuiPrimitiveYearPickerModule {}
