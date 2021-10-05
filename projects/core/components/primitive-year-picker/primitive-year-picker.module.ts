import {NgModule} from '@angular/core';
import {
    TuiHoveredModule,
    TuiLetModule,
    TuiPressedModule,
    TuiRepeatTimesModule,
} from '@taiga-ui/cdk';
import {TuiScrollIntoViewModule} from '@taiga-ui/core/directives/scroll-into-view';

import {TuiPrimitiveYearPickerComponent} from './primitive-year-picker.component';

@NgModule({
    imports: [
        TuiHoveredModule,
        TuiPressedModule,
        TuiRepeatTimesModule,
        TuiLetModule,
        TuiScrollIntoViewModule,
    ],
    declarations: [TuiPrimitiveYearPickerComponent],
    exports: [TuiPrimitiveYearPickerComponent],
})
export class TuiPrimitiveYearPickerModule {}
