import {NgModule} from '@angular/core';

import {TuiOrderWeekDaysPipe} from './order-week-days.pipe';

/**
 * @internal
 */
@NgModule({
    declarations: [TuiOrderWeekDaysPipe],
    exports: [TuiOrderWeekDaysPipe],
})
export class TuiOrderWeekDaysPipeModule {}
