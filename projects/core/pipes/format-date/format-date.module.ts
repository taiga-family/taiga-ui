import {NgModule} from '@angular/core';

import {TuiFormatDatePipe} from './format-date.pipe';

@NgModule({
    declarations: [TuiFormatDatePipe],
    exports: [TuiFormatDatePipe],
})
export class TuiFormatDatePipeModule {}
