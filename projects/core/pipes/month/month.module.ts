import {NgModule} from '@angular/core';

import {TuiMonthPipe} from './month.pipe';

@NgModule({
    declarations: [TuiMonthPipe],
    exports: [TuiMonthPipe],
})
export class TuiMonthPipeModule {}
