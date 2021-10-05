import {NgModule} from '@angular/core';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiCalendarModule, TuiScrollbarModule} from '@taiga-ui/core';
import {TuiPrimitiveCalendarRangeComponent} from './primitive-calendar-range.component';

/**
 * @internal
 */
@NgModule({
    imports: [TuiMapperPipeModule, TuiScrollbarModule, TuiCalendarModule],
    declarations: [TuiPrimitiveCalendarRangeComponent],
    exports: [TuiPrimitiveCalendarRangeComponent],
})
export class TuiPrimitiveCalendarRangeModule {}
