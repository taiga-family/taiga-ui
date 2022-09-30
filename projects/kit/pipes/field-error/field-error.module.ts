import {NgModule} from '@angular/core';

import {TuiFieldErrorContentPipe} from './field-error-content-pipe';
import {TuiFieldErrorPipe} from './field-error-pipe';

@NgModule({
    declarations: [TuiFieldErrorPipe, TuiFieldErrorContentPipe],
    exports: [TuiFieldErrorPipe, TuiFieldErrorContentPipe],
})
export class TuiFieldErrorPipeModule {}
