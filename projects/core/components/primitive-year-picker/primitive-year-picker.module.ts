import {NgModule} from '@angular/core';
import {
    TuiHoveredDirective,
    TuiLetDirective,
    TuiRepeatTimesDirective,
} from '@taiga-ui/cdk';
import {TuiScrollIntoViewModule} from '@taiga-ui/core/directives/scroll-into-view';

import {TuiPrimitiveYearPickerComponent} from './primitive-year-picker.component';

@NgModule({
    imports: [
        TuiHoveredDirective,
        TuiRepeatTimesDirective,
        TuiLetDirective,
        TuiScrollIntoViewModule,
    ],
    declarations: [TuiPrimitiveYearPickerComponent],
    exports: [TuiPrimitiveYearPickerComponent],
})
export class TuiPrimitiveYearPickerModule {}
