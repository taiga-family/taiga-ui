import {NgModule} from '@angular/core';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiCalendarComponent, TuiScrollbarComponent} from '@taiga-ui/core';

import {TuiPrimitiveCalendarRangeComponent} from './primitive-calendar-range.component';

/**
 * @internal
 */
@NgModule({
    imports: [TuiMapperPipe, TuiScrollbarComponent, TuiCalendarComponent],
    declarations: [TuiPrimitiveCalendarRangeComponent],
    exports: [TuiPrimitiveCalendarRangeComponent],
})
export class TuiPrimitiveCalendarRangeModule {}
