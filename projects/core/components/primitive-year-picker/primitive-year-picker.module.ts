import {NgModule} from '@angular/core';
import {
    TuiHoveredDirective,
    TuiLetDirective,
    TuiRepeatTimesDirective,
} from '@taiga-ui/cdk';
import {TuiScrollIntoViewDirective} from '@taiga-ui/core/components/scrollbar';

import {TuiPrimitiveYearPickerComponent} from './primitive-year-picker.component';

@NgModule({
    imports: [
        TuiHoveredDirective,
        TuiRepeatTimesDirective,
        TuiLetDirective,
        TuiScrollIntoViewDirective,
    ],
    declarations: [TuiPrimitiveYearPickerComponent],
    exports: [TuiPrimitiveYearPickerComponent],
})
export class TuiPrimitiveYearPickerModule {}
