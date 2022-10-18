import {NgModule} from '@angular/core';

import {TuiToYearPipe} from './to-year.pipe';

@NgModule({
    declarations: [TuiToYearPipe],
    exports: [TuiToYearPipe],
})
export class TuiToYearPipeModule {}
